
var rootElement = document.getElementById('root');

function tick() {
  var time = new Date().toLocaleTimeString();
  var element = React.createElement(
    "div",
    null,
    React.createElement("input", { value: time })
  );
  ReactDOM.render(element, rootElement);
}

tick();

//vanillajs

var element2 = document.getElementById("root2");

function tick2() {
  var time2 = new Date().toLocaleTimeString();
  element2.value = time2;
  setInterval(tick2, 1000);
}

setInterval(tick, 1000);

setInterval(tick2, 1000);