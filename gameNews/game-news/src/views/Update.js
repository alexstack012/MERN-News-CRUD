import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
export default props => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [headline, setHeadline] = useState('');
    const [body, setBody] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8000/api/news/' + id)
            .then(res => {
                setTitle(res.data.title);
                setHeadline(res.data.headline);
                setBody(res.data.body)
            })
    }, [])
    const updateNews = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/news/' + id, {
            title,
            headline,
            body
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update an Article</h1>
            <form onSubmit={updateNews}>
                <p>
                    <label>Title: </label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Headline:</label><br />
                    <input type="text"
                        name="headline"
                        value={headline}
                        onChange={(e) => { setHeadline(e.target.value) }} />
                </p>
                <p>
                    <label>Body:</label><br />
                    <input type="textarea"
                        name="body"
                        col="7"
                        rows="7"
                        value={body}
                        onChange={(e) => { setBody(e.target.value) }} />
                </p>
                <input type="submit" /><Link to={"/news"}> Home </Link>
            </form>
        </div>
    )
}