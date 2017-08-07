import fetch from 'isomorphic-fetch';
import $ from 'jquery';

export default async function fetchRequest (url, method, data) {
    const fetchOptions = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'csrf-token': $('input[name="_csrf"]').val()
            },
            credentials: 'same-origin'
        };
    
    let options = {...fetchOptions, body:data};

    var result = await fetch(url, options);
    return result.json();
}