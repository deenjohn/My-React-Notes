var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = {
  string: function string(props, propName, componentName) {
    console.log(componentName);
    if (typeof props[propName] !== 'string') {
      return new Error("Hey, you should pass a string for   " + propName + " in  " + componentName + " but you passed a  " + _typeof(props[propName]) + " ");
    }
  }
};

function SayHello(props) {
  return React.createElement(
    "div",
    { className: "container" },
    "Hello ",
    props.firstName,
    "  ",
    props.lastName
  );
}

SayHello.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

var SayHelloAsClass = (_temp = _class = function (_React$Component) {
  _inherits(SayHelloAsClass, _React$Component);

  function SayHelloAsClass() {
    _classCallCheck(this, SayHelloAsClass);

    return _possibleConstructorReturn(this, (SayHelloAsClass.__proto__ || Object.getPrototypeOf(SayHelloAsClass)).apply(this, arguments));
  }

  _createClass(SayHelloAsClass, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      var _props = this.props,
          firstName = _props.firstName,
          lastName = _props.lastName;

      return React.createElement(
        "div",
        { className: "container" },
        " Hello ",
        firstName,
        " ",
        lastName
      );
    }
  }]);

  return SayHelloAsClass;
}(React.Component), _class.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}, _temp);


ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(SayHello, { firstName: 1, lastName: "John" }),
  React.createElement(SayHelloAsClass, { firstName: "Deen", lastName: "John" })
), document.getElementById('root'));