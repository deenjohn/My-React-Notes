
var rootElement = document.getElementById('root');

var element = React.createElement('div', {
  className: 'container',
  children: 'Hello World'
});

console.log(element);
ReactDOM.render(element, rootElement);

//.......................................

var rootElement2 = document.getElementById('root2');

var element2 = document.createElement('div');
element2.textContent = 'Hello World2';
element2.className = 'container';
rootElement2.appendChild(element2);