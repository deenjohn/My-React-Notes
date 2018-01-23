
//https://www.reactenlightenment.com/react-nodes/4.7.html

var mouseOverHandler = function mouseOverHandler(e) {
		console.log('you moused over ', e.target);
};
var clickhandler = function clickhandler() {
		console.log('you clicked');
};
var reactNode = React.createElement('div', { className: 'container', onClick: clickhandler, onMouseOver: mouseOverHandler }, 'click or mouse over');

ReactDOM.render(reactNode, document.getElementById('root'));