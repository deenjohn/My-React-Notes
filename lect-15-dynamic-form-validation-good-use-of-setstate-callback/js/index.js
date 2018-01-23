var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameForm = function (_React$Component) {
  _inherits(NameForm, _React$Component);

  function NameForm() {
    var _ref;

    _classCallCheck(this, NameForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call.apply(_ref, [this].concat(args)));

    _this.initialState = {
      firstname: { error: 'firstname must be longer than 3 characters' },
      lastname: { error: 'lastname must be longer than 3 characters' },
      valid: false
    };
    _this.state = _extends({}, _this.initialState);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.validate = _this.validate.bind(_this);
    _this.touched = _this.touched.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  _createClass(NameForm, [{
    key: 'reset',
    value: function reset(e) {

      this.setState(_extends({}, this.initialState));
    }
  }, {
    key: 'touched',
    value: function touched() {
      //console.log('touched')
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          name = _e$target.name;


      var error = this.props.getErrorMessage(value, name);

      {
        error ? this.setState(_defineProperty({}, name, { error: error }), function () {
          this.validate();
        }) : this.setState(_defineProperty({}, name, { error: "" }), function () {
          this.validate();
        });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var error = this.state.error;
    }
  }, {
    key: 'validate',
    value: function validate() {
      var _state = this.state,
          firstname = _state.firstname,
          lastname = _state.lastname;

      if (firstname.error === "" && lastname.error === "") {
        console.log('set valid ');
        this.setState({ valid: true });
      } else {
        this.setState({ valid: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {

      console.log(this.state);

      var _state2 = this.state,
          firstname = _state2.firstname,
          lastname = _state2.lastname,
          valid = _state2.valid;

      var errorStyle = {
        color: 'black', fontSize: '1em',
        backgroundColor: 'red', width: '50%',
        marginTop: '20px', marginLeft: '5px', padding: '10px'
      };
      var btnstyle = {
        disabled: !!valid,
        className: valid ? 'enabled' : 'disabled'
      };

      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          { htmlFor: 'firstname' },
          'First Name '
        ),
        React.createElement('br', null),
        React.createElement('input', { onChange: this.handleChange,
          onBlur: this.touched,
          type: 'text', name: 'firstname' }),
        React.createElement('br', null),
        React.createElement(
          'label',
          { htmlFor: 'lastname' },
          ' Last Name '
        ),
        React.createElement('br', null),
        React.createElement('input', { onBlur: this.touched,
          onChange: this.handleChange,
          type: 'text', name: 'lastname' }),
        React.createElement('br', null),
        firstname.error ? React.createElement(
          'div',
          { style: errorStyle },
          firstname.error
        ) : null,
        lastname.error ? React.createElement(
          'div',
          { style: errorStyle },
          lastname.error
        ) : null,
        React.createElement('input', _extends({ type: 'submit', value: 'Submit' }, btnstyle)),
        React.createElement('input', { type: 'reset', value: 'Reset', onClick: this.reset })
      );
    }
  }]);

  return NameForm;
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
    value: function handleErrorMessage(value, name) {
      if (value.length < 4) {
        return name + ' must be longer than 3 characters';
      } else {
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(NameForm, { getErrorMessage: this.handleErrorMessage });
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));