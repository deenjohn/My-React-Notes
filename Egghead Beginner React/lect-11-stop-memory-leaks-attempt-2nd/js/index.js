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

  //will remove the memory leak


  _createClass(StopWatch, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('unmount');
      clearInterval(this.timer);
    }
  }, {
    key: 'handleRunClick',
    value: function handleRunClick() {
      var _this2 = this;

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

var StopwatchRender = function (_React$Component2) {
  _inherits(StopwatchRender, _React$Component2);

  function StopwatchRender(props) {
    _classCallCheck(this, StopwatchRender);

    var _this3 = _possibleConstructorReturn(this, (StopwatchRender.__proto__ || Object.getPrototypeOf(StopwatchRender)).call(this, props));

    _this3.state = { renderStopWatch: true };
    _this3.handleChildUnmount = _this3.handleChildUnmount.bind(_this3);
    _this3.handleChange = _this3.handleChange.bind(_this3);

    return _this3;
  }

  _createClass(StopwatchRender, [{
    key: 'handleChange',
    value: function handleChange() {
      this.setState(function (prevState) {
        return {
          renderStopWatch: !prevState.renderStopWatch
        };
      });
    }
  }, {
    key: 'handleChildUnmount',
    value: function handleChildUnmount() {
      console.log('handleChildUnmount');
      this.setState(function (prevState) {
        return {
          renderStopWatch: !prevState.renderStopWatch
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        { className: 'check' },
        React.createElement('input', { onChange: this.handleChange,
          type: 'checkbox', name: 'stopwatch-checker', value: 'stopwatch-checker' }),
        'Render Stopwatch',
        React.createElement('br', null),
        this.state.renderStopWatch ? React.createElement(StopWatch, { unmountMe: this.handleChildUnmount }) : null
      );
    }
  }]);

  return StopwatchRender;
}(React.Component);

ReactDOM.render(React.createElement(StopwatchRender, null), document.getElementById('root'));