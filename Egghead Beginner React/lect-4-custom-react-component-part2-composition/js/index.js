
var message = function message(props) {
  return React.createElement(
    'div',
    null,
    ' ',
    props.msg
  );
};
var Message = function Message(props) {
  return React.createElement(
    'div',
    null,
    ' ',
    props.children
  );
};
Message.displayName = "Capital-message";

// { <message /> }  // <message data-reactid=".0.0"></message>
// should capitalize Message

var element = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    Message,
    null,
    'outer message',
    React.createElement(
      Message,
      null,
      ' inner message '
    )
  ),
  message({ msg: 'Hello World' }),
  React.createElement(message, { msg: 'GoodBye World' })
);
ReactDOM.render(element, document.getElementById('root'));