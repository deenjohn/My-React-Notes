

```javascript


const Button = (props) => 
 <button onClick={props.update}>{props.children} - {props.count}</button>
  //props.children is 'Click'

const HOC = (Component) => class extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.update = this.update.bind(this);
    
  }
  update(){
    console.log('updating');
    this.setState({
      count: this.state.count + 1,
    });
  }
  render(){
    return <Component {...this.props}  {...this.state} update={this.update}></Component>
  }
}


class Label extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
               //this.props.children is 'Women'
    return (
      <p onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</p>
    )
  }
}



const HOCBtn = HOC(Button);
const HOCLabel = HOC(Label);
       
class App extends React.Component {
  render(){
    return (
      <div>
        <HOCBtn>click</HOCBtn>
        <HOCLabel>women</HOCLabel>   //props.children
      </div>
    )
  }        
}
        
ReactDOM.render(<App />, document.getElementById('root'));





```
