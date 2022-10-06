import express from 'express';
var router = express.Router();
// ..stuff below
export default router;

const app = express();

const ads = [
    { title: 'Hello, world (again)!' }
];


// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});

