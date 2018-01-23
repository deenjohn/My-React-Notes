

//https://www.reactenlightenment.com/react-state/8.4.html

var MyComponent = function MyComponent(props) {
	return React.createElement(
		"div",
		null,
		"Hello ",
		props.name
	);
};

MyComponent.defaultProps = { name: "John Doe" };
MyComponent.propTyes = { name: React.PropTypes.string };

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('root'));