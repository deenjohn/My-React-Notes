


// reducer
const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      break;
      case 'DECREMENT':
        return state - 1;
      break;
      default:
        return state;
    }
}; 


const createStore = (reducer) => {
  let state;
  let listeners = [];
  
  const getState = () => state; 
  
  // dispatch results in updating state by calling reducers 
  // then call all the listners 
  
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };
  
  dispatch({});
  
  return { getState, dispatch, subscribe };
};

const store = createStore(counter);
const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () =>{
  store.dispatch({type: 'INCREMENT'});
});
