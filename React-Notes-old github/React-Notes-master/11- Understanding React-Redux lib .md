```javascript

var mapStateToLinkProps = function mapStateToLinkProps(state, ownProps) {
   console.log('mapStateToLinkProps ',ownProps)  
  return {
        active: ownProps.filter === state.visibilityFilter
    };
};

var mapDispatchToLinkProps = function mapDispatchToLinkProps(dispatch, ownProps) {
  console.log('mapDispatchToLinkProps ',ownProps)  
  return {
        onClick: function onClick() {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};


const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);


<FilterLink
        filter='SHOW_ALL'
          >
        All //children
 </FilterLink>
 
 
 ## ownprops  is props - filter + children
 [object Object] {
  children: "Completed",
  filter: "SHOW_COMPLETED"
}
 
 /*

"ref "
[object Object] {
  active: true,
  children: "All",
  filter: "SHOW_ALL",
  onClick: function onClick() {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
}

*/

var Link = function Link(_ref) {
  console.log('ref ',_ref)
    var active = _ref.active,
        children = _ref.children,
        _onClick = _ref.onClick;

    if (active) {
        return React.createElement(
            "span",
            null,
            children
        );
    }

    return React.createElement(
        "a",
        { href: "#",
            onClick: function onClick(e) {
                e.preventDefault();
                _onClick();
            }
        },
        children
    );
};



```
 
 
        
        
