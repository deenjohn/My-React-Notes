
https://reactarmory.com/guides/lifecycle-simulators

2) componentDidMount

  We can use fetch api here 
  
  We can use 'ref' here also
  
```javascript

  componentDidMount(){
   
   this.fetchData();
    
    const canvasCtx = this.refs.appCanvas.getContext('2d');
    canvasCtx.fillStyle = "blue" ;
    canvasCtx.arc(75, 75, 50, 0, 2 * Math.PI ) ;
    canvasCtx.fill();
  }


```

3) componentWillUnmount


```javascript
componentWillUnmount() {
    clearInterval(this.pollInterval)
  }


```

4) componentWillReceiveProps

If our component recieve props which change state , then this method would be good place to do it.



```javascript



```


5) shouldComponentUpdate



6) componentWillUpdate








