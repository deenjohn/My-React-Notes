
function Avatar() {
  return React.createElement("img", {
    src: "https://www.gravatar.com/avatar/nothing",
    className: "avatar",
    alt: "avatar" });
}

function Message() {
  return React.createElement(
    "div",
    { className: "message" },
    "This is less than 140 characters."
  );
}

function NameWithHandle() {
  return React.createElement(
    "span",
    { className: "name-with-handle" },
    React.createElement(
      "span",
      { className: "name" },
      "Your Name"
    ),
    React.createElement(
      "span",
      { className: "handle" },
      "@yourhandle"
    )
  );
}

var Time = function Time() {
  return React.createElement(
    "span",
    { className: "time" },
    "3h ago"
  );
};

var ReplyButton = function ReplyButton() {
  return React.createElement("i", { className: "fa fa-reply reply-button" });
};

var RetweetButton = function RetweetButton() {
  return React.createElement("i", { className: "fa fa-retweet retweet-button" });
};

var LikeButton = function LikeButton() {
  return React.createElement("i", { className: "fa fa-heart like-button" });
};

var MoreOptionsButton = function MoreOptionsButton() {
  return React.createElement("i", { className: "fa fa-ellipsis-h more-options-button" });
};

function Tweet() {
  return React.createElement(
    "div",
    { className: "tweet" },
    React.createElement(Avatar, null),
    React.createElement(
      "div",
      { className: "content" },
      React.createElement(NameWithHandle, null),
      React.createElement(Time, null),
      React.createElement(Message, null),
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement(ReplyButton, null),
        React.createElement(RetweetButton, null),
        React.createElement(LikeButton, null),
        React.createElement(MoreOptionsButton, null)
      )
    )
  );
}

ReactDOM.render(React.createElement(Tweet, null), document.getElementById('root'));