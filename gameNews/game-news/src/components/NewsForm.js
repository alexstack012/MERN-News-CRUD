import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [headline, setHeadline] = useState("");
    const [body, setBody] = useState("")
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new news article
        axios.post('http://localhost:8000/api/news', {
            title,
            headline,
            body
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update title and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Headline</label><br />
                <input type="text" onChange={(e) => setHeadline(e.target.value)} value={headline} />
            </p>
            <p>
                <label>Body</label><br />
                <input type="text" onChange={(e) => setBody(e.target.value)} value={body} />
            </p>
            <input type="submit" />
        </form>
    )
}