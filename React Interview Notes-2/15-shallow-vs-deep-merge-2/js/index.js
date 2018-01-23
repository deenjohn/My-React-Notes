var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

var Parent = function (_React$Component) {
  _inherits(Parent, _React$Component);

  function Parent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Parent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Parent.__proto__ || Object.getPrototypeOf(Parent)).call.apply(_ref, [this].concat(args))), _this), _this.initialState = {}, _this.state = {
      someProperty: {
        someOtherProperty: {
          anotherProperty: {
            flag: false
          }

        }

      }

    }, _this.handleMerge = function () {
      /*
      works
      this.setState({
      someProperty: {
       ...this.state.someProperty,
       anotherProperty: {
         ...this.state.someProperty.anotherProperty,
         flag: true
       }    
      }
      })
      */
      _this.setState({
        someProperty: Object.assign(_this.state.someProperty, { flag: false })
      });
    }, _this.handleReset = function () {
      var i = _this.initialState;
      // console.log(JSON.stringify(i))
      _this.setState(JSON.parse(JSON.stringify(i)));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Parent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initialState = Object.assign({}, this.state);
    }

    //this.setState((prevState) => ({someProperty : {}} //not working

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handleMerge },
          'Merge'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        ),
        React.createElement(
          'p',
          { style: { backgroundColor: 'gold', width: 500, height: 200, marginTop: 5 } },
          JSON.stringify(this.state, null, '\t'),
          ' '
        )
      );
    }
  }]);

  return Parent;
}(React.Component);

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Parent, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));