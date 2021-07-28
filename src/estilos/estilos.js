import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkLogin = styled.div`
    text-align: center;
`;

const P = styled.p`
    text-decoration: none;
    color: blue;
    display: inline-block;
    text-align: center;

    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

const Form = styled.form`
    width: 350px;
    background-color: black;

    padding: 30px;
    margin: auto;
    margin-top: 70px;
    margin-bottom: 40px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    opacity: 0.8;
`;
const Button = styled.button`
    text-decoration: none;
    margin: auto;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    background-color: black;
    border-radius: 6px;
    border: 2px solid white;
    width: 100%;
    text-align: center;
    &:hover {
        color: black;
        background-color: whitesmoke;
    }
`;

const Input = styled.input`
    width: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;

    &:focus {
    }
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Error = styled.p`
    font-size: 10px;
    margin-bottom: 0;
    color: #e62e1b;
    position: relative;
    bottom: 14px;
    opacity: 0;
`;

const IconValidate = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 28px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;
`;
const MensajeError = styled.div`
    height: 45px;
    line-height: 20px;
`;

const FormResetPassword = styled.form`
    width: 350px;
    background-color: white;
    padding: 30px;
    margin: auto;
    margin-top: 200px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    opacity: 0.8;
`;
const ErrorForm = styled.p`
    background-color: #e62e1b;
    color: white;
    font-size: 11px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 4px;
    padding-right: 2px;
    border-radius: 3px;
    margin-top: 10px;
    b {
        margin-left: 2px;
    }
`;
const P1 = styled.p`
    text-decoration: none;
    color: blue;
    display: inline-block;
    font-size: 11px;
    margin-left: 22px;

    &:hover {
        text-decoration: underline;
    }
`;
const FormLogin = styled.form`
    width: 400px;
    background-color: black;
    padding: 30px;
    margin: auto;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    opacity: 0.8;
`;

const Label = styled.label`
    font-size: 13px;
    text-align: center;
`;
const PMenu = styled.p`
    font-size: 16px;
`;
const PTerminos = styled.p`
    font-size: 14px;
    text-align: left;
`;

export {
    LinkLogin,
    P,
    Input,
    Button,
    Form,
    GrupoInput,
    IconValidate,
    Error,
    MensajeError,
    FormResetPassword,
    ErrorForm,
    P1,
    FormLogin,
    Label,
    PMenu,
    PTerminos,
};
