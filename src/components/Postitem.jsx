import React from 'react';
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import {POSTS_ROUTER} from "../utils/constants";

const Postitem = (props) => {
    const router = useNavigate()
    const handleClick = () => {
        router(POSTS_ROUTER +'/'+ `${props.post.id}`)
    }
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton style={{marginRight: '5px'}} onClick={handleClick}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default Postitem;