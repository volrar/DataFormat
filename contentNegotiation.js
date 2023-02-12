import fetch from 'node-fetch';
var query ='https://swapi.dev/api/people/1';

    fetch(query, {
            method: 'GET' ,
            headers: {
                'Content-Type': 'application/xml', //asking for xml content type
                'accept': 'application/json', //saying I will only accpet the xml conent type
                'User-Agent': '*' //assigns a user agent (can ignore for now)
            },
        }).then(function(response){
            console.log(`Response = ${response}`); //json
            return response.text();
        }).then(function(xml){
            //convert to workable json
            console.group(`XML = ${xml}`); //json
        }).catch((error) => {
            console.error('Error: ', error);
        });