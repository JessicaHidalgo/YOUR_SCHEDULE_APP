const axios = require ('axios')

async function login (name){
      const response = await axios.post('http://localhost:9000/employees/login')
      console.log(response)
      return response

}

module.exports = { 
    login
}