import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Page404 from './Page404';




function Routes(){
 
    return(
        <BrowserRouter>
            <Switch>
                <Route  exact path="/login" component={Login} />
                <Route  exact path="/register" component={Register} />
                <Route exact path="/" component={Home} />
                <Route  exact component={Page404} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes


