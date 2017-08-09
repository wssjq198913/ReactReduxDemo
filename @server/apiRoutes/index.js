import express from 'express';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
let router = express.Router();

router.post('/login', async function (req, res, next) {
    const fetchUrl = 'http://localhost:9898/api/values/Login';
    const data = {
        userName: 'johnny',
        password: 'johnny'
    }
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    try {
        var result = await fetch(fetchUrl, fetchOptions);
        var json = await result.json();
        if (result.status >= 200 && result.status < 300) {
            res.json(json);
        }
        else{
            throw json;
        }
    }
    catch (error) {
       error.status = 500;
       console.log(error);
       next(error);
    }
});

router.post('/loadQuestionnaire', async function (req, res, next) {
    const fetchUrl = 'http://localhost:9898/api/values/GetQuestionnaire/5';
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