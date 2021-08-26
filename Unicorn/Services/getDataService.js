
const delay = (ms) => new Pronmise((r) => { setTimeout(() => { r(); }, ms); });



const API = 'https://crudcrud.com/api/b6e02d240e66419da398fdc2cfe8409f/unicorns';



const getButtonFech = document.getElementById("getData")
const canchelFetch = document.getElementById("stopFech")

let controler = null;

getButtonFech.addEventListener("click", async () => {
  controler = new AbortController;
  try {
    showStatus("Request started...");
    const responce = await fetch(API, {
      signal: controler.signal
    });
    const data = await responce.json();
    showStatus(`Resul: ${JSON.stringify(data)}`);
    console.log(data)



  } catch (error) {
    showStatus(`Fech error: ${error.name}`)

  }
  controler = null

})
canchelFetch.addEventListener("click", () => {
  if (controler) {
    controler.abort();
  }
})

const showStatus = (message) => {
  document.getElementById("message").innerHTML = (`<h1>${message}</h1> `);
}