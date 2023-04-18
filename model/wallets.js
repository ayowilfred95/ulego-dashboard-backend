const axios = require('axios');


const Wallet = (req, res)=>{
    const pageNo = req.params.pageNo
    const url = `https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/wallets?page_number=${pageNo}`;
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

 const WalletAcct = (req, res)=>{
    const acctNo = req.params.acctNo
    const url = `https://devops-ulego-api.centralus.cloudapp.azure.com:447/api/administration/wallet/${acctNo}`;
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
 module.exports = {Wallet,WalletAcct};