import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
export default props => {
    const { removeFromDom } = props;
    const deleteNews = (newsId) => {
        axios.delete('http://localhost:8000/api/news/' + newsId)
            .then(res => {
                removeFromDom(newsId)
            })
    }
    return (
        <div>
            {props.news.map((news, idx) => {
                return <p key={idx}>
                    <Link to={"/news/" + news._id}>
                        {news.title}, {news.headline}
                    </Link>
                    |
                    <button onClick={(e) => { deleteNews(news._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}