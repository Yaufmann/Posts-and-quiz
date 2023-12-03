import React from 'react';
import MyImput from "../components/UI/input/MyImput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div className="loginPage">
            <h1>Страница для логина</h1>
            <form>
                <MyImput type="text" placeholder="Введите логин"/>
                <MyImput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;