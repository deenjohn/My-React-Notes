var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDo = function ToDo(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      React.createElement(
        'label',
        null,
        props.id
      )
    ),
    React.createElement(
      'td',
      null,
      React.createElement('input', null)
    ),
    React.createElement(
      'td',
      null,
      React.createElement(
        'label',
        null,
        props.createdAt.toTimeString()
      )
    )
  );
};

var ToDoList = function (_React$Component) {
  _inherits(ToDoList, _React$Component);

  function ToDoList() {
    _classCallCheck(this, ToDoList);

    var _this = _possibleConstructorReturn(this, (ToDoList.__proto__ || Object.getPrototypeOf(ToDoList)).call(this));

    var date = new Date();
    var todoCounter = 1;
    _this.state = {
      todoCounter: todoCounter,
      list: [{
        id: todoCounter,
        createdAt: date
      }]
    };
    return _this;
  }

  _createClass(ToDoList, [{
    key: 'sortByEarliest',
    value: function sortByEarliest() {
      var sortedList = this.state.list.sort(function (a, b) {
        return a.createdAt - b.createdAt;
      });
      this.setState({
        list: [].concat(_toConsumableArray(sortedList))
      });
    }
  }, {
    key: 'sortByLatest',
    value: function sortByLatest() {
      var sortedList = this.state.list.sort(function (a, b) {
        return b.createdAt - a.createdAt;
      });
      this.setState({
        list: [].concat(_toConsumableArray(sortedList))
      });
    }
  }, {
    key: 'addToEnd',
    value: function addToEnd() {
      var date = new Date();
      var nextId = this.state.todoCounter + 1;
      var newList = [].concat(_toConsumableArray(this.state.list), [{ id: nextId, createdAt: date }]);
      this.setState({
        list: newList,
        todoCounter: nextId
      });
    }
  }, {
    key: 'addToStart',
    value: function addToStart() {
      var date = new Date();
      var nextId = this.state.todoCounter + 1;
      var newList = [{ id: nextId, createdAt: date }].concat(_toConsumableArray(this.state.list));
      this.setState({
        list: newList,
        todoCounter: nextId
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'code',
          null,
          'key=index'
        ),
        React.createElement('br', null),
        React.createElement(
          'button',
          {
            onClick: this.addToStart.bind(this) },
          'Add New to Start'
        ),
        React.createElement(
          'button',
          {
            onClick: this.addToEnd.bind(this) },
          'Add New to End'
        ),
        React.createElement(
          'button',
          {
            onClick: this.sortByEarliest.bind(this) },
          'Sort by Earliest'
        ),
        React.createElement(
          'button',
          {
            onClick: this.sortByLatest.bind(this) },
          'Sort by Latest'
        ),
        React.createElement(
          'table',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'ID'
            ),
            React.createElement('th', null),
            React.createElement(
              'th',
              null,
              'created at'
            )
          ),
          this.state.list.map(function (todo, index) {
            return React.createElement(ToDo, _extends({
              key: index
            }, todo));
          })
        )
      );
    }
  }]);

  return ToDoList;
}(React.Component);

ReactDOM.render(React.createElement(ToDoList, null), document.getElementById('root'));