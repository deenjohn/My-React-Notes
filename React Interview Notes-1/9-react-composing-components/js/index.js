
/*
React.createElement(
  "div",
  null,
  React.createElement(Hello, null),
  " ",
  React.createElement(World, null),
  "!"
);

*/

function Hello() {
  return React.createElement(
    'span',
    null,
    'Hello'
  );
}

function World() {
  return React.createElement(
    'span',
    null,
    'World'
  );
}

function HelloWorld() {
  return React.createElement(
    'div',
    null,
    React.createElement(Hello, null),
    ' ',
    React.createElement(World, null),
    '!'
  );
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('root'));