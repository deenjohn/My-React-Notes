var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// override props
var props = {
  children: 'Hello World',
  className: 'container'
};

var element =
// <div {...props} className='my-class' children ='new Hello World '/>
React.createElement(
  'div',
  _extends({}, props, { className: 'my-class' }),
  ' New World'
);
ReactDOM.render(element, document.getElementById('root'));