import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import { LetMeIn } from './components/LetMeIn/LetMeIn';
import { JogsList } from './containers/JogsList/JogsList';
import { IsAuthenticated } from './helpers/IsAuthenticated';
import { Info } from './components/Info/Info';
import { ContactUs } from './components/ContactUs/ContactUs';

function App() {
    return (
        <>
            <Header/>
            <main className='main'>
                <Switch>
                    <Route exact path="/">
                        <LetMeIn/>
                    </Route>
                    <IsAuthenticated path='/jogs'>
                        <JogsList/>
                    </IsAuthenticated>
                    <IsAuthenticated path='/info'>
                        <Info/>
                    </IsAuthenticated>
                    <IsAuthenticated path='/contact-us'>
                        <ContactUs/>
                    </IsAuthenticated>
                </Switch>
            </main>
        </>

    );
}

export default App;
