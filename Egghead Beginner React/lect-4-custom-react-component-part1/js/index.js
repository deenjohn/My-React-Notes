
//https://github.com/eggheadio-projects/the-beginner-s-guide-to-reactjs/blob/master/03-create-custom-react-components/index.html

// message is not same as Message

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
    props.msg
  );
};

// { <message /> }  // <message data-reactid=".0.0"></message>
// should capitalize Message

// 3 Ways to create a React element

var element = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(Message, { msg: 'Capital message' }),
  message({ msg: 'Hello World' }),
  React.createElement(message, { msg: 'GoodBye World' })
);

ReactDOM.render(element, document.getElementById('root'));