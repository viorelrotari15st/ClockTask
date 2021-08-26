export default class HokingRequest {
    API = 'https://crudcrud.com/api/c34fc95524a64f43a5f553c90f1e3fae/';
   
    async getConstrct(resource) {
        const res = await fetch(`${this.API}${resource}`);
        if (!res.ok) {
            throw new Error()
        }
        return await res.json()
    }

    async getData(){
        return await this.getConstrct("unicorns/")
    }

     
    
}