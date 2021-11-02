import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Chat from "./components/Chat";
import Login from "./components/Login";
import Test from "./components/Test";
import NotFound from "./components/NotFound";
import './App.scss';
import UserProfile from "./components/UserProfile";
import {AuthContext} from "./context";
import {store} from './store'

function App() {


    const [currentUser, setCurrentUser] = useState(false);

    store.subscribe(() => {
        setCurrentUser(store.getState().currentUser);
    })


    return (

        <div className="App">
            <AuthContext.Provider value={{currentUser}}>
                <BrowserRouter>
                    <Switch>
                        {(currentUser)
                            ? <Route exact path="/" component={Chat}></Route>
                            : <Route exact path="/" component={Login}></Route>
                        }

                        <Route exact path="/test" component={Test}></Route>
                        <Route exact path="/profile" component={UserProfile}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </BrowserRouter>
            </AuthContext.Provider>

        </div>


    );
}

export default App;
