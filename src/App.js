import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import {LetMeIn} from "./components/LetMeIn/LetMeIn";
import {JogsList} from "./components/JogsList/JogsList";

function App() {
    return (
        <>
            <Header/>
            <main className='main'>
                <Switch>
                    <Route exact path="/">
                        <LetMeIn/>
                    </Route>
                    <Route path='/jogs'>
                        <JogsList/>
                    </Route>
                </Switch>
            </main>
        </>

    );
}

export default App;
