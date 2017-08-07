import express from 'express';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express', csrfToken: req.csrfToken() });
});

router.post('/login', async function (req, res, next) {
    const fetchUrl = 'http://localhost:9898/api/values';
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    try {
        var result = await fetch(fetchUrl, fetchOptions);
        var json = await result.json();
        res.json(json);
    }
    catch (error) {
       error.status = 500;
       console.log(error);
       next(error);
    }
});

router.post('/loadQuestionnaire', async function (req, res, next) {
    const fetchUrl = 'http://localhost:9898/api/values/5';
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    try {
        var result = await fetch(fetchUrl, fetchOptions);
        var json = await result.json();
        res.json(json);
    }
    catch (error) {
       error.status = 500;
       console.log(error);
       next(error);
    }
});

export default router;