import './rscamino.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterForm from './pages/registro/register-form';
import Login from './pages/login/login-form';
import ResetPassword from './pages/passwords/resetPassword';
import ValidateUser from './pages/validateUsuario/validate';

function rscamino() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={'/login'}>
                        <Login />
                    </Route>
                    <Route path={'/register'}>
                        <RegisterForm />
                    </Route>
                    <Route path={'/resetpassword'}>
                        <ResetPassword />
                    </Route>
                </Switch>
                <Route path={'/usuarios/validate/'}>
                    <ValidateUser />
                </Route>
            </div>
        </Router>
    );
}

export default rscamino;
