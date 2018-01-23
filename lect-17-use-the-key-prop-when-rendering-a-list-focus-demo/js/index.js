var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FocusDemo = function (_React$Component) {
  _inherits(FocusDemo, _React$Component);

  function FocusDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FocusDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FocusDemo.__proto__ || Object.getPrototypeOf(FocusDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: [{ id: 'a', value: 'apple' }, { id: 'o', value: 'orange' }, { id: 'g', value: 'grape' }, { id: 'p', value: 'pear' }]
    }, _this.randomizeItems = function () {
      _this.setState(function (_ref2) {
        var items = _ref2.items;
        return {
          items: shuffle(items)
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FocusDemo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setInterval(this.randomizeItems, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Without Key'
          ),
          this.state.items.map(function (item) {
            return React.createElement('input', { value: item.value });
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'With Key as Index'
          ),
          this.state.items.map(function (item, index) {
            return React.createElement('input', {
              key: index,
              value: item.value
            });
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'With Key'
          ),
          this.state.items.map(function (item) {
            return React.createElement('input', {
              key: item.id,
              value: item.value
            });
          })
        )
      );
    }
  }]);

  return FocusDemo;
}(React.Component);

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
ReactDOM.render(React.createElement(FocusDemo, null), document.getElementById('root'));