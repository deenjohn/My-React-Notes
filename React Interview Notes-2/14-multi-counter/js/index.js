var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountingParent = function (_React$Component) {
  _inherits(CountingParent, _React$Component);

  function CountingParent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CountingParent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountingParent.__proto__ || Object.getPrototypeOf(CountingParent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      actionCount: 0
    }, _this.handleReset = function (e) {
      // e.persist()
      console.log('Child says', e);
      // actionCount is incremented, and
      // the new count replaces the existing one
      _this.setState({
        actionCount: 0
      });
    }, _this.handleAction = function (e) {
      console.log('Child says', e.target.value);
      // actionCount is incremented, and
      // the new count replaces the existing one
      _this.setState({
        actionCount: _this.state.actionCount + 1
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CountingParent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Child, { onAction: this.handleAction }),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        ),
        React.createElement(
          'p',
          { style: { backgroundColor: 'blue', width: 300, marginTop: 5 } },
          'Clicked ',
          this.state.actionCount,
          ' times'
        )
      );
    }
  }]);

  return CountingParent;
}(React.Component);

function Child(_ref2) {
  var onAction = _ref2.onAction;

  return React.createElement(
    'button',
    { onClick: onAction },
    'Click Me!'
  );
}

var Page = function Page() {
  return React.createElement(
    'div',
    null,
    React.createElement(CountingParent, null),
    React.createElement(CountingParent, null),
    React.createElement(CountingParent, null)
  );
};

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));

//Note that every instance of a component has its own state. If you have two CountingParent components
//on the page, they’ll each have counters that will start at 0 and //increment independently