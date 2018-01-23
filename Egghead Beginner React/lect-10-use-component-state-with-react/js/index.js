var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StopWatch = function (_React$Component) {
  _inherits(StopWatch, _React$Component);

  function StopWatch(props) {
    _classCallCheck(this, StopWatch);

    var _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

    _this.state = { lapse: 0, running: false };
    _this.handleRunClick = _this.handleRunClick.bind(_this);
    _this.handleClearClick = _this.handleClearClick.bind(_this);
    return _this;
  }

  _createClass(StopWatch, [{
    key: 'handleRunClick',
    value: function handleRunClick() {
      var _this2 = this;

      // clearInterval and setState
      // setInterval(setState) and setState

      this.setState(function (state) {

        if (state.running) {
          clearInterval(_this2.timer);
        } else {
          var startTime = Date.now() - _this2.state.lapse;
          console.log('startTime ', startTime);
          _this2.timer = setInterval(function () {
            _this2.setState({ lapse: Date.now() - startTime });
          });
        }

        return { running: !state.running //setstate
        };
      });
    }
  }, {
    key: 'handleClearClick',
    value: function handleClearClick() {
      clearInterval(this.timer);
      this.setState({ lapse: 0, running: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          lapse = _state.lapse,
          running = _state.running;

      console.log('lapse ', lapse);
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'label',
          {
            style: { fontSize: '5em', display: 'block' }
          },
          lapse,
          'ms'
        ),
        React.createElement(
          'button',
          { onClick: this.handleRunClick },
          running ? 'Stop' : 'Start'
        ),
        React.createElement(
          'button',
          { onClick: this.handleClearClick },
          'Clear'
        )
      );
    }
  }]);

  return StopWatch;
}(React.Component);

ReactDOM.render(React.createElement(StopWatch, null), document.getElementById('root'));