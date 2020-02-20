const getBtn = document.getElementById('getProfile');
const postBtn = document.getElementById('postProfile');
const firstName = document.getElementById("firstName").value
const lastName = document.getElementById("lastName").value


const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.onload = () => {
        if (xhr.status >= 400) {
            reject(xhr.response);
        } else {
        resolve (xhr.response);
        }
    };

    xhr.onerror = () => {
        reject( 'Something went wrong!' );
    }

    xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () => {
   sendHttpRequest('GET', 'http://localhost:3000/profiles').then(responseData => {
       console.log(responseData);
   });
};
getData();

const sendData = () => {

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    
    

    console.log(firstName, lastName)

    sendHttpRequest('POST', 'http://localhost:3000/profiles', { firstName, lastName }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
// document.getElementById('text1').innerText= firstName;