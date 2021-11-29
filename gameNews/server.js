const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/news.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

// use npm run start within game-news dir --- this is localhost 3000
//this is the front end


// use nodemon server.js within the overall project folder(gameNews) --- this is localhost 8000
//this is the backend