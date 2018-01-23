var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//https://github.com/facebook/prop-types

var PropTypes = {
  string: function string(props, propName, componentName) {

    console.log(componentName);
    if (typeof props[propName] !== 'string') {
      return new Error("Hey, you should pass a string for   " + propName + " in  " + componentName + " but you passed a  " + _typeof(props[propName]) + " ");
    }
  }
};

function SayHello(props) {
  return React.createElement(
    "div",
    { className: "container" },
    "Hello ",
    props.firstName,
    "  ",
    props.lastName
  );
}

SayHello.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

ReactDOM.render(React.createElement(SayHello, { firstName: 1, lastName: "John" }), document.getElementById('root'));