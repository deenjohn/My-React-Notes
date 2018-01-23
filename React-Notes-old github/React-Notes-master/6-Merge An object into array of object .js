

// https://codepen.io/deen_john/pen/qVWxLX?editors=0011



var state = [];
var todo1 = {
      id  : 0,
      text: 'Learn Redux',
      completed: false
    }

state = [...state , todo1] ;

var todo2 = {
      id  : 1,
      text: 'Learn React',
      completed: false
    }

console.log([...state , todo2])



...........................

var state = {input :[]};
var todo1 = {
      id  : 0,
      text: 'Learn Redux',
      completed: false
    }

state.input = [...state.input , todo1] ;

var todo2 = {
      id  : 1,
      text: 'Learn React',
      completed: false
    }

console.log([...state.input , todo2])
state.input = [...state.input , todo2] ;
console.log(state)



