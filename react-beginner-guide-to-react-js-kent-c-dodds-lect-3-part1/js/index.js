
// {} can put any javascript expression code inside curly braces 

// const content = 'Hello World' ;
// const myClassName = 'container' ;
//const element = <div className={myClassName}>{(()=>content)()}</div>

var props = {
  children: 'Hello World',
  className: 'container'
};

var element = React.createElement('div', props);
ReactDOM.render(element, document.getElementById('root'));