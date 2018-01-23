var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function Button(props) {
  return React.createElement("button", _extends({ type: "button" }, props));
};

var DangerButton = function DangerButton(props) {
  return React.createElement(Button, _extends({ className: "btn btn-danger" }, props));
};

var PrimaryButton = function PrimaryButton(props) {
  return React.createElement(Button, _extends({ className: "btn btn-primary" }, props));
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement(
        "div",
        null,
        React.createElement(
          PrimaryButton,
          null,
          " Touch this"
        ),
        React.createElement(
          DangerButton,
          null,
          " Don't touch this"
        ),
        React.createElement(
          Button,
          { className: "btn btn-info" },
          " Touch this !!Maybe "
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));