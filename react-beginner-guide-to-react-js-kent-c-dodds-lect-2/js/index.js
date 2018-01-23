
// const element = React.createElement('div',{children : 'Hello World' ,className : 'container'})
//console.log(element)

// {} can put any javascript expression code inside curly braces 
var content = 'Hello World';
var element = React.createElement(
     'div',
     { className: 'container' },
     content
);
ReactDOM.render(element
//<div className='container'> Hello world</div>

, document.getElementById('root'));