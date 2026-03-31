import axios from 'axios';

const urlBase = "https://parseapi.back4app.com/classes/Task"
const headers = {
    'X-Parse-Application-Id': 'FcAmJEjkiBmFIaPtAs4OgQSrKDJOLWyvFWZxcCjL',
    'X-Parse-REST-API-Key': 'QlrPZ0nnvkcfDuZulhxrXg6J1Z7AYhNTGf1Gs7HV'
}

export const getTasks = async () => {
    const { data } = await axios.get(urlBase, {
        headers,
    });

    return data;
};

export const addTask = async () => {
    const { data } = await axios.post(urlBase, newTask, {
        headers: headersJson,   
    });
    console.log("retorno ")
}