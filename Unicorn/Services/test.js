unicorn.getData().then((data)=>{
    //let dataRecived = JSON.stringify(data)
    console.log(data)
    let html = "";
     data.forEach(async (element) => {
         const showDataHTML = (`<li><div class="col-sm-6">
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
        </div>
         </li>
         `);
        html += showDataHTML;
     });
    
  return setData.innerHTML = `<ul>${html}</ul>`;
 
 })

 const putMethod = {
    method: 'PUT',
    headers: { "Content-Type": "application/json; charset=utf-8"},
    body: JSON.stringify
}