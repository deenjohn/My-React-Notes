
```jsx


var user = {
  avatarUrl : "https://avatars3.githubusercontent.com/u/10252162?s=460&v=4" 
}

const element = (
  <div>
    <h1>Hello!</h1>
    <img src={user.avatarUrl}></img>;
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);


```
