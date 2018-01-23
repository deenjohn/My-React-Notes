
 //https://codepen.io/deen_john/pen/mqbmmX?editors=0011

class Header extends React.Component{ 
  constructor(props) {
    super(props);
    this.handleRefInputEvt= this.handleRefInputEvt.bind(this);
    this.handleFormSubmit  = this.handleFormSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
   
    handleFormSubmit(evt) {
      evt.preventDefault();
      var todo = this.inputRef.value;
      this.props.onNewTodoItem(todo);  //call the parent component's function
      this.inputRef.value = '';
  }
  
  handleClear(e){
    e.preventDefault();
    this.props.clear();            //call the parent component's function
  }

    handleRefInputEvt(inputRef) {
    this.inputRef = inputRef;
  }

    render() {
    return (
      <form className="form-group" onSubmit={this.handleFormSubmit}>
        <input type="text" className="form-control" placeholder="Add Todo Item" ref={this.handleRefInputEvt}/>
        <button type ="submit">Add</button>
        <button type ="reset" onClick ={this.handleClear}>Clear</button>
      </form>
    );
  }
}





function Footer(props){ 
  
   return (
     
      <ul>
          { props.todos.map(todo => 
             <li key={todo.id} 
                onClick={props.onClicked}
                style={{
                    textDecoration: todo.completed ?
                       'line-through' : 
                       'none'
                }}>
                {todo.text}
             </li>
          )}
     </ul>
   );
}


class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.todoNum = 0 
    this.state = {
      todos :[]

    }; // will contain all inputs in form of array of {text , id}
    this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
    this.handleAdd= this.handleAdd.bind(this);
    this.clear = this.clear.bind(this);
  }
  
  clear(){
    this.setState({
      todos :[]
    });
  }
  
  toggleTodoCompleted(evt){
    var text = evt.target.innerText ;
    var todos = this.state.todos; 
     todos.map(function(todo , index){
             if(todo.text === text){
               todo.completed = !todo.completed ;
             }         
        })
    
    this.forceUpdate();
  } 
  
  handleAdd(todo){
    this.todoNum = this.todoNum +1;
    var input = {text : todo , id : this.todoNum , completed :false}
    
    this.setState(function(prevState) {
        return prevState.todos.push(input) 
         

    })
  }  

  render() {  
    
    return (
      <div>
         <Header  clear = {this.clear} onNewTodoItem ={this.handleAdd} />
         <Footer  onClicked ={this.toggleTodoCompleted}  todos ={this.state.todos} />
     </div>
    ); 
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);
