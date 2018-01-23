var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Box(_ref) {
  var style = _ref.style,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['style', 'size']);

  var sizeClassName = size ? 'box--' + size : '';
  return React.createElement('div', _extends({ className: 'box ' + sizeClassName,
    style: _extends({ paddingLeft: 20 }, style)
  }, rest));
}

var element = React.createElement(
  'div',
  null,
  React.createElement(
    Box,
    {
      size: 'small',
      style: { paddingLeft: 10, backgroundColor: 'red' } },
    'Small Box'
  )
);

ReactDOM.render(element, document.getElementById('root'));