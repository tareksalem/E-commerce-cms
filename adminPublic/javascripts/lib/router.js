
var query = {};
window.location.search.substring(1).split('&').forEach(function (pair) {
    pair = pair.split('=');
    if (pair[1] !== undefined) {
        var key = decodeURIComponent(pair[0]),
        val = decodeURIComponent(pair[1]),
        val = val ? val.replace(/\++/g, ' ').trim() : '';
        if (key.length === 0) {
            return;
        }
        if (query[key] === undefined) {
            query[key] = val;
        }
        else {
            if ("function" !== typeof query[key].push) {
                query[key] = [query[key]];
            }
            query[key].push(val);
        }
    }
});


class Router {
    // define some settings of class
    constructor() {
        this.request = {};
        this.request.location = window.location;
        this.response = {};
        this.response.render = function (status, path, parent, name, cb) {
            express.render(status, path, parent, name, cb);
        };
        this.response.renderComponent = function (cb, parent, style, scripts) {
            express.renderComponent(cb, parent, style, scripts);
        };
        this.response.filterContent = function (element, options, cb) {
            express.filterContent(element, options, cb);
        };
        this.response.redirect = function (url) {
            location.replace(url);
        };
        this.getRoutes = {};
        this.postRoutes = {};
        this.putRoutes = {};
        this.deleteRoutes = {};
        this.MainPathName = location.pathname;
        this.useRoutes = {};
    }
    getRoute(options) {
        var request = this.request;
        request.query = query;
        var response = this.response;
        options.method = "get";
        let MainPathName = this.MainPathName;
        let errorPage = this.errorPage;
        let url = options.url;
        let handler = options.handler;
        let title = options.title;
        let getRoutes = this.getRoutes;
            getRoutes[url] = options;
            document.addEventListener("click", (e) => {
                if (e.detail === 1) {
                    var routers = document.querySelectorAll("[router]");
                    let clickedRouter = Array.from(routers).find((router) => e.target === router);
                    if (clickedRouter) {
                        e.preventDefault();
                        var routerVal = clickedRouter.getAttribute("router");
                        // check if the pathname of it equals the current pathname
                        if (getRoutes[routerVal] !== undefined) {
                                if (routerVal.split("#")[0] === url.split("#")[0]) {
                                    let middlewares = getRoutes[routerVal].middlewares;
                                if (middlewares && middlewares.length > 0) {
                                    var nexted = 0;
                                    middlewares[0](request, response, next)
                                    function next() {
                                        nexted++;
                                        if (middlewares.length <= nexted) {
                                            history.pushState({
                                                url: routerVal,
                                                title: title,
                                                callback: getRoutes[routerVal].handler.toString()
                                                }, title, routerVal);
                                            return getRoutes[routerVal].handler(request, response);
                                        } else {
                                            return middlewares[nexted](request, response, next);
                                        }
                                    }
                                } else {
                                    history.pushState({
                                        url: routerVal,
                                        title: title,
                                        callback: getRoutes[routerVal].handler.toString()
                                        }, title, routerVal);
                                    getRoutes[routerVal].handler(request, response);
                                }
                            }
                        } else {
                            return errorPage();
                        }
                    }
                }
            })
            if (getRoutes[MainPathName] !== undefined) {
                if (MainPathName === url) {
                    let middlewares = getRoutes[MainPathName].middlewares;
                    if (middlewares && middlewares.length > 0) {
                        var nexted = 0;
                        function next() {
                            nexted++;
                            if (middlewares.length <= nexted) {
                                history.pushState({
                                    url: MainPathName,
                                    title: title,
                                    callback: handler.toString()
                                    }, title, MainPathName);
                                    return getRoutes[MainPathName].handler(request, response);
                            } else {
                                return middlewares[nexted](request, response, next);
                            }
                        }
                        middlewares[0](request, response, next)
                    } else {
                        history.pushState({
                            url: MainPathName,
                            title: title,
                            callback: handler.toString()
                            }, title, MainPathName);
                        return getRoutes[MainPathName].handler(request, response);
                    }
                }
            } else {
                return errorPage();
            }
    }
    popState() {
        var pathname = location.pathname;
        var getRoutes = this.getRoutes;
        var request = this.request;
        var response = this.response;
        window.addEventListener("popstate", function (event) {
            if (event.state !== null) {
                if (getRoutes[event.state.url] !== undefined) {
                    if (event.state.title) {
                        document.querySelector("title").innerHTML = event.state.title;
                    }
                    let middlewares = getRoutes[event.state.url].middlewares;
                    if (middlewares && middlewares.length > 0) {
                        var nexted = 0;
                        middlewares[0](request, response, next)
                        function next() {
                            nexted++;
                            if (middlewares.length <= nexted) {
                                return getRoutes[event.state.url].handler(request, response);
                            } else {
                                return middlewares[nexted](request, response, next);
                            }
                        }
                    } else {
                        return getRoutes[event.state.url].handler(request, response);
                    }
                }
            }
        });
    }
    postRoute(options) {
        let url = options.url;
        let postRoutes = this.postRoutes;
        postRoutes[url] = options;
        let request = this.request;
        let response = this.response;
        request.checks = {};
        let checks = request.checks;
        document.addEventListener("submit", function (e) {
            if (e.target.getAttribute("clientPosting") === "true") {
                e.preventDefault();
                var body = {};
                body.form = e.target;
                request.action = body.form.action;
                var inputs  = body.form.querySelectorAll("input");
                var textarea  = body.form.querySelectorAll("textarea");
                inputs.forEach(function (input, i) {
                    var name = input.getAttribute("name");
                    if (textarea.length > 0) {
                        var textareaName = textarea[i].getAttribute("name");
                    }
                    body[name] = input;
                    body[textareaName] = textarea[i];
                });
                // add validation to the form
                checks.checkEmpty = function (element, cb) {
                    elementVal = typeof element === "object" ? element.value : typeof element === "string" ? element : "";
                    if (elementVal === "") {
                        if (!cb) {
                            return true;
                        }
                        if (cb) {
                            var empty = true;
                            return cb(empty)
                        }
                    } else {
                        if (cb) {
                            var empty = false;
                            return cb(empty);
                        } else {
                            return false;
                        }
                    }
                }
                checks.checkEmail = function (element, cb) {
                    var elementVal = typeof element === "object" ? element.value : typeof element === "string" ? element : "";
                    var regEx = new RegExp("@", "gi");
                    if (elementVal !== "") {
                        if (cb) {
                            var test = regEx.test(elementVal);
                            return cb(test);
                        } else {
                            return regEx.test(elementVal);
                        }
                    }
                }
                // function to check if it is number
                checks.checkIsNumber = function (element, cb) {
                    var elementVal = typeof element === "object" ? element.value : typeof element === "string" ? element : "";
                    if (elementVal !== "") {
                        var testNumber = Number.isInteger(Number(elementVal));
                        if (cb) {
                            return cb(testNumber);
                        } else {
                            return testNumber;
                        }
                    }
                }

                // function to check if contains a number
                checks.checkContainsNumber = function (element, count, cb) {
                    var elementVal = typeof element === "object" ? element.value : typeof element === "string" ? element : "";
                    if (typeof count === "function" && !cb) {
                        cb = count;
                    }
                    count = typeof count === "number" ? count : 1;
                    var numArr = [];
                    if (elementVal !== "") {
                        Array.from(elementVal).forEach(function (letter) {
                            if (Number.isInteger(Number(letter))) {
                                numArr.push(letter);
                            }
                        });
                        if (numArr.length === count) {
                            let result = true;
                            if (cb) {
                                return cb(result);
                            } else {
                                return result;
                            }
                        } else {
                            let result = false;
                            if (cb) {
                                return cb(result);
                            } else {
                                return result;
                            }
                        }
                    }
                }
                var act = new RegExp(location.origin, "gi");
                act = act.exec(request.action);
                var action = request.action.replace(act, "");
                if (action === url) {
                    request.body = body;
                    request.action = action;
                    let middlewares = postRoutes[action].middlewares;
                    if (middlewares && middlewares.length > 0) {
                        var nexted = 0;
                        middlewares[0](request, response, next)
                        function next() {
                            nexted++;
                            if (middlewares.length <= nexted) {
                                return postRoutes[action].handler(request, response);
                            } else {
                                return middlewares[nexted](request, response, next);
                            }
                        }
                    } else {
                        return postRoutes[action].handler(request, response);
                    }
                }
            }
        });
    }
    redirect (url) {
        location.replace(url);
    }
    errorPage(cb) {
        if (this) {
            let useRoutes = this.useRoutes;
            let getRoutes = this.getRoutes;
            let MainPathName = location.pathname;
            var usedUrl = Object.keys(useRoutes).find((key) => MainPathName.indexOf(key) !== -1);
            var checker = setInterval(() => {
                if (document.readyState == "complete") {
                    clearTimeout(checker);
                    if (usedUrl) {
                        return true;
                    } else if(getRoutes[MainPathName] !== undefined) {
                        return true;
                    } else {
                        if (cb) {
                            return cb();
                        }
                    }
                }
            }, 10)
        }
    }
}
export {Router};