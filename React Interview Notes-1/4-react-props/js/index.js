
var reactNodeLi = React.createElement('div', {
	foo: 'bar',
	id: 'li1',
	//note use of JS class property representing class attribute below
	//i.e., className
	className: 'blue',
	'data-test': 'test',
	'aria-test': 'test',
	//note use of JS camel-cased CSS property below
	//i.e., backgroundColor
	style: { backgroundColor: 'red' }
}, 'Hello World');

//console.log(reactNodeLi.props.foo); //logs bar
ReactDOM.render(reactNodeLi, document.getElementById('root'));