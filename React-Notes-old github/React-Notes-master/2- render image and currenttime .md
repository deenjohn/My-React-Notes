
```jsx



function tick (){
      var date = ()=>{ 

        return new Date().toLocaleTimeString()
    }

    var user = {
      avatarUrl : "https://avatars3.githubusercontent.com/u/10252162?s=460&v=4" 
    }

    const element = (
      <div>
        <h1>Hello , Deen !</h1>
        <div>
          <img src={user.avatarUrl}></img> 
          <h1>Time : {date()}</h1>
        </div>

      </div>
    )
      ReactDOM.render(
      element,
      document.getElementById('root')
    );
}

setInterval(tick, 1000);


```
