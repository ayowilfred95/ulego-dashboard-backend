const axios = require('axios');


const allTransfer = (req, res)=>{
    const pageNo = req.params.pageNo
    const url = `https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/transactions/transfer?page_number=${pageNo}`;
    const Authorization = req.headers;
    const token = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';


    
   axios.get(url, {
  headers: {
    'X-DeviceKey': token,
    'Authorization': Authorization.authorization,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => {
  res.send(response.data);
})
.catch(error => {
  console.error(`this is the error: ${error}`); 
});
 }

 const transferRef = (req, res)=>{
  const refNo = req.params.refNo
  const url = `https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/transactions/transfer/${refNo}`;
  const Authorization = req.headers;
  const token = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';


  
 axios.get(url, {
headers: {
  'X-DeviceKey': token,
  'Authorization': Authorization.authorization,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
})
.then(response => {
res.send(response.data);
})
.catch(error => {
console.error(`this is the error: ${error}`); 
});
}

 module.exports = {allTransfer,transferRef}