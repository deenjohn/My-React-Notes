
//https://www.reactenlightenment.com/react-nodes/4.2.html

var element = React.createElement(
  'div',
  { className: 'container' },
  '\'hello\''
);
var elementComposition = React.createElement("div", null, element, element);

ReactDOM.render(elementComposition, document.getElementById('root'));