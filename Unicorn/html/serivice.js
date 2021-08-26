
class HokingRequest {
    API = 'https://crudcrud.com/api/0f43d7546fc3484cafbf2f860795be85/';

    async getConstrct(resource, method = {}) {
        const res = await fetch(`${this.API}${resource}`, method);
        if (!res.ok) {
            throw new Error()
        }
        return await res.json()
    }

    async getData() {
        return await this.getConstrct("unicorns/", {})
    }

    async deleteData(id) {
        return await this.getConstrct(`unicorns/${id}`, {method: "DELETE"})
    }
    async putData(id, dataForPut) {
        const putMethod = {
            method: 'PUT',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(dataForPut)
        }
        const res = await fetch(`${this.API}${id}`, putMethod);
        if (!res.ok) {
            throw new Error()
        }
        return await res.json()
    }



}
const delay = (time) => {
    return new Promise((rs) => {
        setTimeout(() => { rs() }, time);

    });
}
//import HokingRequest from "./logicService";

const unicorn = new HokingRequest();
const setData = document.getElementById('setData')


unicorn.getData().then((data) => {
    //let dataRecived = JSON.stringify(data)
    console.log(data)
    let html = "";
    data.forEach(async (element) => {
        const showDataHTML = (`
         <div class="card">
           <div class="card-body">
             <h5 class="card-title" id="getID" value=${element._id}>Unicorn</h5>
             <p class="card-text">Name : ${element.name} </p>
            <p class="card-text">Age : ${element.age} </p>
             <p class="card-text">Color : ${element.colour} </p>
            <button type="button" class="btn btn-primary btn-lg" onclick="deleteData("${element._id}")" id ="deleteCard">Delete</button>
            <button type="button" class="btn btn-secondary btn-lg" id ="updateCard">Update</button>
           </div>
        </div>
       
        
        `);
        html += showDataHTML;
    });

    return setData.innerHTML = `<div>${html}</div>`;

})
const getId = document.getElementById("getID")
//const deleteCard = document.getElementById("deleteCard")
function deleteData(gatId) {
    return unicorn.deleteData(gatId);
}
// const getId = document.getElementById("getID").value
// let dataForPut = {}
// unicorn.putData()


//  deleteCard.addEventListener('click', function(e){
//     const getId = document.getElementById("getID").value
//     let event = unicorn.deleteData(getId)
//     return event
// })


