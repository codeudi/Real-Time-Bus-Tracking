
const SERVER_URL = 'https://bus-server.azurewebsites.net';
//const SERVER_URL = 'http://localhost:10000';

//Bypass ngrok browser warning will work with localhost as well
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
    }
}

export {SERVER_URL, axiosConfig};