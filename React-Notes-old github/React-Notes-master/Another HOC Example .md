

```javascript

import React, {Component} from 'react'
import styled from 'styled-components'

export default function loggify(Wrapped) {


  return class extends Component {

    render() {
      return (
        <LoggerContainer>
          <H2>
            {Wrapped.displayName} is now loggified:
          </H2>
          <Wrapped
            {...this.props}
          />
        </LoggerContainer>
      )
    }
  }
}

const LoggerContainer = styled.div`
  background-color: aliceblue;
  border: 2px grooved aquamarine;
  border-radius: 5px;
`

LoggerContainer.displayName = "LoggerContainer"

const H2 = styled.h2`
  color: blueviolet;
`

H2.displayName = "H2"




import React, { Component } from 'react'
import loggify from './loggify'

class App extends Component {

  render() {
    console.log(this.state)
    return (
      <div>
        Hello
      </div>
    )
  }
}

App = loggify(App)

export default App




```
