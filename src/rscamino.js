import './rscamino.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Header from './components/Header/Header';
// import RegisterForm from './pages/registro/register-form';
// import Login from './pages/login/login-form';
// import ResetPassword from './pages/passwords/resetPassword';
// import ValidateUser from './pages/validateUsuario/validate';
// import ResetUsuarioPass from './pages/passwords/resetUsuarioPass';
// import Home from './pages/principal/Home';

// import LoguedMenu from './pages/loguedpague/loguedpage';
// import Search from './components/search/Search';
// import Wall from './components/Wall/Wall';
// import Profile from './pages/profile/Profile';

// sessionStorage.setItem('token', data.data.token);

const Login = lazy(() => import('./pages/login/login-form'));
const RegisterForm = lazy(() => import('./pages/registro/register-form'));
const ResetPassword = lazy(() => import('./pages/passwords/resetPassword'));
const ValidateUser = lazy(() => import('./pages/validateUsuario/validate'));
const ResetUsuarioPass = lazy(() =>
    import('./pages/passwords/resetUsuarioPass')
);
const Home = lazy(() => import('./pages/principal/Home'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const LoguedMenu = lazy(() => import('./pages/loguedpague/loguedpage'));
const Search = lazy(() => import('./components/search/Search'));
const Wall = lazy(() => import('./components/Wall/Wall'));

function Rscamino() {
    return (
        <ErrorBoundary>
            <Router>
                <div className="App">
                    <Switch>
                        <Suspense fallback={<div>Cargando...</div>}>
                            <Route path={'/login'}>
                                <Login />
                            </Route>
                            <Route path={'/register'}>
                                <RegisterForm />
                            </Route>
                            <Route path={'/resetpassword'}>
                                <ResetPassword />
                            </Route>
                            <Route
                                path={'/usuarios/validate/:registrationCode'}
                            >
                                <ValidateUser />
                            </Route>
                            <Route path={'/usuarios/password'}>
                                <ResetUsuarioPass />
                            </Route>

                            <Route
                                exact
                                path={'/usuarios/:idUsuario/photos/:id'}
                            >
                                <Wall />
                            </Route>
                            <Route path={'/perfil'}>
                                <Profile />
                            </Route>
                            <Route exact path={'/tendencias'}>
                                <LoguedMenu />
                            </Route>
                            <Route path={'/search/'}>
                                <Search />
                            </Route>
                            <Route exact path={'/'}>
                                <Home />
                            </Route>
                        </Suspense>
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
