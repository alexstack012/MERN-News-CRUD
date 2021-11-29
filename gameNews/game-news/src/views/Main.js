import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsForm from '../components/NewsForm';
import NewsList from '../components/NewsList';
const Main = (props) => {
    const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/news')
            .then(res => {
                setNews(res.data);
                setLoaded(true);
            })
    }, [news]);

    const removeFromDom = newsId => {
        setNews(news.filter(news => news._id != newsId));
    }

    return (
        <div>
            <NewsForm />
            <hr />
            {loaded && <NewsList news={news} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;