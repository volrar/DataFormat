import fetch from 'node-fetch';
const apiURL = 'https://swapi.dev/api/people' //Defines a process named apiURL
fetch(apiURL) //fetches data
    .then(res => res.json()) //transaltes data to json file and puts it in res variable
    .then(json => {
        console.log(json);//prints json file found to terminal
        console.log('All data was recieved successfully');//prints message showing data was recieved to terminal
     });
console.log(`Getting data`); //prints to show were getting data (will print before success log)