import React, {Component} from 'react';
import {Link, Switch, Route} from "react-router-dom";

import Home from './Home'
import About from './About'

import styled from 'styled-components'

const WrapperDiv = styled.div `
    text-align: center;
    header {
        background-color: #282c34;
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }
`
class App extends Component {
    render() {
        return (
            <WrapperDiv>
                <header>
                    React Jobs Application
                </header>
                <div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                    </Switch>
                </div>
            </WrapperDiv>
        );
    }
}

export default App;
