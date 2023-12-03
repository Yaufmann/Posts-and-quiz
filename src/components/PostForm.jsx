import React, {useState} from 'react';
import MyImput from "./UI/input/MyImput";
import MyButton from "./UI/button/MyButton";

const PostForm = React.memo(({create}) => {
    const [post, setPost] = useState({title: "", body: ""});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({title: "", body: ""})
    }

    return (
            <form>
                {/*Управляемый компонент*/}
                <MyImput
                    value={post.title}
                    onChange={e => setPost({...post,title: e.target.value})}
                    type="text"
                    placeholder="Название поста"/>
                <MyImput
                    value={post.body}
                    onChange={e => setPost({...post,body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
    );
});

export default PostForm;