
const BASE_URL = `http://localhost:8080/api/customer`;

module.exports = {

    // constructor(authToken) {
    //   this.authToken = authToken;
    // }
  
    // headers = {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // };


  
    // async getAll() {
    //   return await fetch(this.BASE_URL, {
    //     method: 'GET',
    //     headers: this.createHeaders()
    //   });
    // }
  
    async getById(id) {
      return await fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
    },
  
    // async delete(id) {
    //   return await fetch(`${this.BASE_URL}/${id}`, {
    //     method: 'DELETE',
    //     headers: this.createHeaders()
    //   });
    // }
  
    // async update(item) {
    //   return await fetch(`${this.BASE_URL}/${item.id}`, {
    //     method:'PUT',
    //     headers: this.createHeaders(),
    //     body: JSON.stringify(item),
    //   });
    // }
  
    async create(item) {
      return await fetch(BASE_URL, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Credentials': "true"
        },
        body: JSON.stringify(item),
      });
    }
}


  