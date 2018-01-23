

```javascript

 <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>


```
