
const API = 'https://crudcrud.com/api/22bf91c178c44368868e202144abbe65/unicorns'



const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let dataForm = new FormData(this);
    let toTaransform = {}
    dataForm.forEach((value, key) => toTaransform[key] = value);
    let dataParsed = JSON.stringify(toTaransform);
    
     
    fetch(API, {
        method: 'POST',
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: dataParsed
    }).then((respose) => {
        if (respose.status === 200) {
            
            return respose.json()
        }
        else {
            console.log(`Status: ${respose.status}`)
            return Promise.reject("server")
        }
    }).then((data) => {
        return dataRecived = JSON.parse(data);
    }).catch((err) => {
        if (err === "server") {
            return console.log(err)
        };
    })



})
