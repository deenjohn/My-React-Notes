
ArticleList.js

import React from "react";
import PropTypes from "prop-types";

import Article from "./Article";

class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  }
}

export default ArticleList;



.................................................................................................
Article.js


function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}
   
export default storeProvider(extraProps)(Article);

/*
import Article from "./Article";
this line imports > storeProvider(extraProps)(Article);


in below line , we pass the props "article={article}" to functionional component storeProvider 

{Object.values(this.props.articles).map(article => (
          <Article key={article.id} article={article} />
        ))}
        
        

*/

..................................................................................


const storeProvider = (extraProps = () => ({})) => Component => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
      // this.props refers to > article={article} 
    };

    state = this.usedState();

    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.usedState());
      }
    };
    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }
    render() {
      console.log("this.usedState() ", {...this.usedState()});
      return (
        <Component
          {...this.props}
          {...this.usedState()}
          store={this.context.store}
        />
      );
    }
  };
};

export default storeProvider;
