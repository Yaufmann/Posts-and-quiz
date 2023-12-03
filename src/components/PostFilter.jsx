import React from 'react';
import MyImput from "./UI/input/MyImput";
import MySelect from "./UI/Select/MySelect";
import MyInputSeacrh from "./UI/input/MyInputSeacrh";

const PostFilter = ({filter,setFilter,inputSearch,setInputSearch}) => {
    console.log(filter.query)
    return (
        <div>
            <MyInputSeacrh
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                setFilter={setFilter}
                filter={filter}
                value={filter.query}
                onChange={e => setFilter({...filter,query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                customOnChange={selectedSort => setFilter({...filter,sort: selectedSort})}
                defaultValue="Сортировка по"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;