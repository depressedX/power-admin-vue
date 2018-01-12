const SERVER_ADDRESS = ''
const API_ROOT_PATH = '/'

const baseURL = 'http://' + SERVER_ADDRESS + API_ROOT_PATH

export default {
  login: baseURL + 'account/login',
  logout:baseURL+'account/logout'
}

// curry参数模板替换
function match(s) {
  var reg = /\${[^}]+}/;

  function __match() {
    var args = [].slice.call(arguments);
    var __s = s;
    for (var arg in args) {
      __s = __s.replace(reg, args[arg]);
    }

    function _match() {
      var _s = __s;
      for (var arg in arguments) {
        _s = _s.replace(reg, arguments[arg]);
      }
      if (reg.test(_s)) {
        return __match.apply(null, args.concat([].slice.call(arguments)));
      } else {
        return _s;
      }
    }

    _match.valueOf = _match.toString = function () {
      return __s;
    }
    if (!reg.test(__s)) return __s;
    return _match;
  }

  return __match.apply(null, Array.prototype.slice.call(arguments, 1));
}
