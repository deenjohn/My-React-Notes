var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var availableOptions = ['apple', 'peach', 'banana', 'orange', 'guava'];

var MyFancyForm = function (_React$Component) {
  _inherits(MyFancyForm, _React$Component);

  function MyFancyForm() {
    var _ref;

    _classCallCheck(this, MyFancyForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MyFancyForm.__proto__ || Object.getPrototypeOf(MyFancyForm)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      multiline: '', commaSeperated: '', multiSelect: []
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCommaSeperatedChange = _this.handleCommaSeperatedChange.bind(_this);
    _this.handleMultiLineChange = _this.handleMultiLineChange.bind(_this);
    _this.handleMultiSelectChange = _this.handleMultiSelectChange.bind(_this);
    return _this;
  }

  _createClass(MyFancyForm, [{
    key: 'handleCommaSeperatedChange',
    value: function handleCommaSeperatedChange(e) {
      var value = e.target.value;

      var allVals = value.split(',').map(function (v) {
        return v.trim();
      }).filter(Boolean);
      this.setState({ commaSeperated: value,
        multiline: allVals.join('\n'),
        multiSelect: allVals.filter(function (v) {
          return availableOptions.includes(v);
        })
      });
    }
  }, {
    key: 'handleMultiLineChange',
    value: function handleMultiLineChange(e) {
      var value = e.target.value;

      var allVals = value.split(',').map(function (v) {
        return v.trim();
      }).filter(Boolean);
      this.setState({ multiline: value,
        commaSeperated: allVals.join(','),
        multiSelect: allVals.filter(function (v) {
          return availableOptions.includes(v);
        }) });
    }
  }, {
    key: 'handleMultiSelectChange',
    value: function handleMultiSelectChange(e) {
      console.log({ target: e.target });
      var allVals = Array.from(e.target.selectedOptions).map(function (o) {
        return o.value;
      });
      this.setState({ multiline: allVals.join('\n'),
        commaSeperated: allVals.join(','),
        multiSelect: allVals });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var error = this.state.error;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          multiline = _state.multiline,
          commaSeperated = _state.commaSeperated,
          multiSelect = _state.multiSelect;


      return React.createElement(
        'form',
        { className: 'form' },
        React.createElement(
          'div',
          null,
          React.createElement(
            'label',
            { htmlFor: 'comma' },
            'Comma Seperated values : '
          ),
          React.createElement('br', null),
          React.createElement('input', { type: 'text', value: commaSeperated, onChange: this.handleCommaSeperatedChange
          }),
          React.createElement('br', null),
          React.createElement(
            'label',
            { htmlFor: 'multiLine' },
            'MultiLine values :'
          ),
          React.createElement('br', null),
          React.createElement('textarea', {
            value: multiline,
            rows: availableOptions.length,
            onChange: this.handleMultiLineChange
          }),
          React.createElement('br', null),
          React.createElement(
            'label',
            { htmlFor: 'multiSelect' },
            'MultiSelect values :'
          ),
          React.createElement('br', null),
          React.createElement(
            'select',
            {
              multiple: true, value: multiSelect,
              size: availableOptions.length,
              onChange: this.handleMultiSelectChange
            },
            availableOptions.map(function (optionValue) {
              return React.createElement(
                'option',
                { key: optionValue, value: optionValue },
                optionValue
              );
            })
          )
        )
      );
    }
  }]);

  return MyFancyForm;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.handleErrorMessage = _this2.handleErrorMessage.bind(_this2);
    return _this2;
  }

  _createClass(App, [{
    key: 'handleErrorMessage',
    value: function handleErrorMessage(value, name) {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(MyFancyForm, { getErrorMessage: this.handleErrorMessage });
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));