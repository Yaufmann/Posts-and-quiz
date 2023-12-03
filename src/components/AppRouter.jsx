import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

import Posts from "../pages/Post";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {
    ABOUT_ROUTER,
    HOME_ROUTER,
    POST_ID_ROUTER,
    POSTS_ROUTER,
    QUIZ_ROUTER,
} from "../utils/constants";
import PageQuizViwe from "../pages/PageQuizViwe";
import About from "../pages/About";

const AppRouter = () => {
    const isAuth = true;

    return (
            <Routes>
                <Route path={HOME_ROUTER} element={<Home/>}/>
                <Route path={ABOUT_ROUTER} element={<About/>} />
                <Route path={POSTS_ROUTER} element={<Posts/>}/>
                <Route path={POST_ID_ROUTER} element={<PostIdPage/>}/>
                <Route path="*" element={<Error/>} />
                <Route path="/login" element={<Login/>}/>

                <Route path={QUIZ_ROUTER} element={<PageQuizViwe/>}/>
            </Routes>
    );
};

export default AppRouter;