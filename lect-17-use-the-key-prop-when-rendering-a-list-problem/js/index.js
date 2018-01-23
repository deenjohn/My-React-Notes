var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var allItems = [{ id: 'a', value: 'apple' }, { id: 'o', value: 'orange' }, { id: 'p', value: 'peach' }, { id: 'g', value: 'guava' }, { id: 'b', value: 'banana' }];

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { items: [] };
    _this.addItem = _this.addItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'addItem',
    value: function addItem() {
      this.setState(function (_ref) {
        var items = _ref.items;

        return {
          items: [].concat(_toConsumableArray(items), [allItems.find(function (i) {
            return !items.includes(i);
          })])
        };
      });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(item) {
      this.setState(function (_ref2) {
        var items = _ref2.items;

        return {
          items: items.filter(function (i) {
            return i !== item;
          })
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.state.items;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            disabled: items.length >= allItems.length,
            onClick: this.addItem,
            className: 'add'
          },
          '+'
        ),
        items.map(function (i, index) {
          return React.createElement(
            'div',
            { className: 'item' },
            React.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.removeItem(i);
                },
                className: 'remove'
              },
              '-'
            ),
            i.value,
            React.createElement('input', null)
          );
        })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));