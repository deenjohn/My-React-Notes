
function Welcome(props) {
  return React.createElement(
    "h1",
    null,
    "Hello, ",
    props.name,
    props.children
  );
}

var element1 = React.createElement(
  Welcome,
  { name: "Sara" },
  " \"he\""
);
console.log(element1);

ReactDOM.render(element1, document.getElementById('root'));