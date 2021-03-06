'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isRetina = require('is-retina');

var _isRetina2 = _interopRequireDefault(_isRetina);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IS_RETINA = (0, _isRetina2.default)();

var GravatarSource = function GravatarSource(props) {
    _classCallCheck(this, GravatarSource);

    _initialiseProps.call(this);

    this.props = props;
};

var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.props = null;

    this.isCompatible = function () {
        return !!_this.props.email || !!_this.props.md5Email;
    };

    this.get = function (setState) {
        var props = _this.props;

        var email = props.md5Email || (0, _md2.default)(props.email);
        var size = IS_RETINA ? props.size * 2 : props.size;
        var url = 'https://secure.gravatar.com/avatar/' + email + '?s=' + size + '&d=404';

        setState({ src: url });
    };
};

exports.default = GravatarSource;
module.exports = exports['default'];