

function ValidIndicator() {
  var isValid = true;
  return React.createElement(
    'span',
    null,
    isValid && 'valid',
    !isValid && 'not valid'
  );
}

//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/
// font-awesome/4.7.0/css/font-awesome.min.css">
// true && 'valid' is 'valid'


ReactDOM.render(React.createElement(ValidIndicator, null), document.getElementById('root'));