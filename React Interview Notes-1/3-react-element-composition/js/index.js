
//Re-rendering to the same DOM element will only update the current child nodes if a change has been made or a new child node has been added.


//React node, which represents an actual HTML DOM node
var HTMLLi = React.createElement('li', { className: 'bar' }, 'foo');

//React node, which represents a custom HTML DOM node
var HTMLCustom = React.createElement('foo-bar', { className: 'bar' }, 'bar');

//Render the HTMLLI React node to <div id="app1"></div>
ReactDOM.render(HTMLLi, document.getElementById('root'));
ReactDOM.render(HTMLCustom, document.getElementById('root'));