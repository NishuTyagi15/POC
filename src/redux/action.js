import axios from 'axios';

export const SAVE_TITLE = 'SAVE_TITLE'

const saveTitle = (response) => ({
    type: SAVE_TITLE,
    payload: response,
});

const titles = {
    "titles": [
     {
       "title": "What is Postman Tool?"
     },
     {
       "title": "Postman is an interactive and automatic tool for verifying the APIs of your project. Postman is a Google Chrome app for interacting with HTTP APIs. It presents you with a friendly GUI for constructing requests and reading responses. It works on the backend, and makes sure that each API is working as intended."
     },
     {
       "title": "What is TinyMce?"
     },
     {
       "title": "The world's most advanced rich text editor. The WYSIWYG editor that is flexible, customizable, and designed with the user in mind. TinyMCE can handle any challenge, from the most simple implementation through to the most complex use case."
     }	
     ]
 }

export const getElementList = () => (dispatch) => {
    axios.get("https://api.jsonbin.io/b/61a4aa6d0ddbee6f8b13d43f", {
        headers: {
            'secret-key': '$2b$10$dtcnxID7Zu2OVBucrjWnV.btmAPksAHOtHSnUqrunkCYhiGqvrwZW'
        }
    }).then(response => {
        console.log(response);
        dispatch(saveTitle(response.data))
    }).catch(error => {
        console.log(error)
        dispatch(saveTitle(titles))
    })
}