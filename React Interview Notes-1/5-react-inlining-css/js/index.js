var inlineStyles = { backgroundColor: 'red', fontSize: 20 };

var reactNodeLi = React.createElement('div', { style: inlineStyles }, 'styled');

ReactDOM.render(reactNodeLi, document.getElementById('root'));