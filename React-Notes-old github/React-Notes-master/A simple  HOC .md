

```javascript

import React, { Component } from "react";

class App extends Component {
  render() {
    return <h1>Hello ! {this.props.name}</h1>;
  }
}

function myTestWrapper(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div style={{ backgroundColor: "blue" }}>
           <WrappedComponent {...this.props}/>
        </div>
      );
    }
  };
}
App = myTestWrapper(App);
export default App;


import { LoggerExample } from "./loggerExample";

ReactDOM.render(<App name="deen" />, document.getElementById("root"));

```
