import './rscamino.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterForm from './pages/registro/register-form';
import Login from './pages/login/login-form';
import ResetPassword from './pages/passwords/resetPassword';

function rscamino() {
    return (
        <Router>
            <header className="fondo">
                <div className="App">
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <RegisterForm />
                        </Route>
                        <Route path="/resetpassword">
                            <ResetPassword />
                        </Route>
                    </Switch>
                </div>
            </header>
        </Router>
    );
}

export default rscamino;
