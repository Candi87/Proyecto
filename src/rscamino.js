import './rscamino.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterForm from './pages/registro/register-form';
import Login from './pages/login/login-form';
import ResetPassword from './pages/passwords/resetPassword';
import ValidateUser from './pages/validateUsuario/validate';
import ResetUsuarioPass from './pages/passwords/resetUsuarioPass';
import React from 'react';
import Home from './pages/principal/Home';

import MenuNotLogued from './pages/notloguedpage/notloguedpage';
import LoguedMenu from './pages/loguedpague/loguedpage';
import Search from './components/search/Search';
import Wall from './components/Wall/Wall';

// sessionStorage.setItem('token', data.data.token);

function Rscamino() {
    return (
        <ErrorBoundary>
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

                        <Route path={'/usuarios/validate/:registrationCode'}>
                            <ValidateUser />
                        </Route>
                        <Route path={'/usuarios/password'}>
                            <ResetUsuarioPass />
                        </Route>
                        <Route path={'/usuarios/notlogued'}>
                            <MenuNotLogued />
                        </Route>
                        <Route exact path={'/usuarios/:idUsuario/photos/:id'}>
                            <Wall />
                        </Route>
                        <Route path={'/usuarios/tendencias'}>
                            <LoguedMenu />
                        </Route>
                        <Route path={'/search/'}>
                            <Search />
                        </Route>

                        <Route exact path={'/'}>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default Rscamino;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // También puedes ejecutar codigo  cuando hay un error

        console.log('ERROR: ', error);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ha habido un error en la App</h1>;
        }

        return this.props.children;
    }
}
