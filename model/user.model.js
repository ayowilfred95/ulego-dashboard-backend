const axios = require('axios');

var User = function (user){
    this.username = user.username;
    this.password = user.password;
}

User.LoginUser = (userReqData, res)=>{
    const apiUrl = 'https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/auth/sign-in';
    const username = userReqData.username;
    const password = userReqData.password;
    const token = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';
    
    axios.post(apiUrl, { username, password }, { headers: { "X-DeviceKey": token } })
      .then(response => {
          const role = response.data.result[0].roles;
          if(role.includes('admin')){
              res({
                  message: "Login successful",
                  data: response.data
          })
          }
      }) 
      .catch(error => {
        console.error('Login failed:', error);
      });
 }



// const url = `https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/wallets?page_number=${1}`;
// const token = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';


// // This code uses the axios.get() method to make a GET request to the specified URL with the Authorization, Content-Type, Accept, and token headers set as specified in the provided example. Once the response is received, it logs the response data to the console. If an error occurs during the request, it logs the error to the console.







 module.exports = User