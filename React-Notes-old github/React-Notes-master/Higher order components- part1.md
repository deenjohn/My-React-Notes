

connect , provider are examples of HOC

```javascript

const { Component } = React;

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps} />;                          // merge props {...props} {...overrideProps}

const alwaysBob = overrideProps({ name: 'Bob' });  

 //const User2 = alwaysBob(User)  
// User is the BaseComponent
// <User2 name="Joe" />    
// name="Joe" , is the props and  
// { name: 'Bob' } is  the overrideProps in <BaseComponent {...props} {...overrideProps} />;

/*

var overrideProps = function overrideProps(_overrideProps) {
  return function (BaseComponent) {
    return function (props) {
      return React.createElement(BaseComponent, _extends({}, props, _overrideProps));
    };
  };
};

*/

const neverRender = (BaseComponent) =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return <BaseComponent {...this.props}         />;
    }
  };


console.log('never render ' ,neverRender);

/*

var neverRender = function neverRender(BaseComponent) {
  return function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    _class.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
      return false;
    };

    _class.prototype.render = function render() {
      return React.createElement(BaseComponent, this.props);
    };

    return _class;
  }(Component);
};


*/

const User = ({ name }) =>
  <div className="User">{ name }</div>;

const User2 = alwaysBob(User);
const User3 = neverRender(User);

const App = () =>
  <div>
    <User name="Tim" />
    <User2 name="Joe" />
    <User3 name="Steve" />
  </div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

```
