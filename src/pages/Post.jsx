import React, {useContext, useEffect, useMemo} from "react";
import {useState} from "react";
import  '../styles/App.css'
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";




const Posts = () => {

    const [posts, setPosts] = useState([])
    const [filter,setFilter] = useState({sort: '', query: ''})
    const [modal,setModal] = useState(false);
    const [inputSearch,setInputSearch] = useState(true);

    const [totalPages,setTotalPages] = useState(0);
    const [limit,setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading,postError] = useFetching(async ()=> {
        const response = await PostService.getAll(limit,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    })


    useEffect(()=>{
        fetchPosts()
    },[page])

    function getSortedPosts() {
        if (filter.sort) {
            return  [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }
    const sortedPosts = getSortedPosts()

    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    },[sortedPosts,filter.query])

    const createPost = (newPost) => {
        setPosts([...posts,newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    const clearAll = () => {
            setPosts([])
    }
    return (
        <div className="App">
            <MyButton style={{marginRight: '30px'}} onClick={fetchPosts}>GET POSTS</MyButton>
            <MyButton style={{marginTop: '30px'}} onClick={()=>setModal(true)}>
                Создать пост
            </MyButton>
            <MyButton style={{marginLeft: '30px'}} onClick={clearAll} >Очистить посты</MyButton>
            <MyModal modal={modal} setModal={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                filter={filter}
                setFilter={setFilter}
            />
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center',marginTop: '50px'}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
            }

        </div>
    );
}

export default Posts;
