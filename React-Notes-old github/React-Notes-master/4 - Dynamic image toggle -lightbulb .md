https://www.w3schools.com/js/tryit.asp?filename=tryjs_lightbulb
https://stackoverflow.com/questions/21668025/react-jsx-access-props-in-quotes

https://codepen.io/deen_john/pen/yzmKOg?editors=0010

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    //initial state
    this.state = { 
      isToggleOn: true ,
      src : "pic_bulboff.gif"
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
   changeImage(src) {
    
    var src = src ;
    if (src.match("bulbon")) {
        src = "pic_bulboff.gif";
    } else {
        src = "pic_bulbon.gif ";
    }
     return src ;
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn ,
      src : this.changeImage(prevState.src)
    }));
    
  }

  render() {
    console.log('render')
      console.log(this.state.src);
    return (
       <div>  
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button> <br /> <br />
        <img id="myImage"  alt="Smiley face"  src={`https://www.w3schools.com/js/${this.state.src}`} width="100" height="180" />
      </div>
    );
  }
}

ReactDOM.render(
    <div>
    <Toggle />
    
    </div>
  ,
  document.getElementById('root')
);

```
