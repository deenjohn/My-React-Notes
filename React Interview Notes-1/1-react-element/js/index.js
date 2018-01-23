
var c = React.createElement('div', { value: "Volvo" }, "Hello");

/*
console.log(c) ;
  $$typeof: Symbol(react.element)
  key:null
  props:{value: "Volvo", children: "Hello"}
  ref:null
  type:"div"
  _owner: null

*/
//console.log(c);

var content = 'Hello World';
var element = React.createElement(
  "div",
  { className: "container" },
  content
);

ReactDOM.render(element, document.getElementById('root'));