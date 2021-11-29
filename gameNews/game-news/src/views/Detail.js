import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';

export default props => {
    console.log("detail component, props.id is this-->", props.id)
    const [news, setNews] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/news/" + id)
            .then(res => {
                console.log(res)
                setNews(res.data)
            })
    }, [news])
    return (
        <div>
            {props.news.map((news, idx) => {
                return <p key={idx}>
                    Title: {news.title}
                    Headline: {news.headline}
                    Body: {news.body}
                    ---
                    <button style={{ backgroundColor: '#ee78ff', color: "black" }}>
                        <Link to={"/news/" + news._id + "/edit"}>
                            Edit
                        </Link>
                    </button>
                </p>
            })}
        </div >
    )
}