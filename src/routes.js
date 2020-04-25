import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { Home } from './Routes/Home'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/user" component={() => <h1>Teste</h1>} />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
)


export default Routes