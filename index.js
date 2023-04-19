const express = require('express');

const app = express()

require('dotenv').config();

app.use(express.json())

const UserRoutes = require('./routes/user')
const WalletRoutes = require('./routes/Wallets')
const transferRoutes = require('./routes/transfer')
const dataRoutes = require('./routes/data')
const airtimeRoutes = require('./routes/airtime')
const tvCableRoutes = require('./routes/tvCable')
const electricityRoutes = require('./routes/electricity')

app.use('/api/auth', UserRoutes)
app.use('/api/wallets', WalletRoutes)
app.use('/api/transfers', transferRoutes)
app.use('/api/data', dataRoutes)
app.use('/api/airtime', airtimeRoutes)
app.use('/api/tv-cable', tvCableRoutes)
app.use('/api/electricity', electricityRoutes)

const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.json(
        {
            "welcome": `hello from ulego dashboard api  ${process.env.PORT}`,
            "login route": {
                "method": "POST",
                "URL":'https://ulego-dashboard-api.vercel.app/api/auth/login'
            },
            "to get Total-wallets":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/wallets/get/wallet/:pageNo'
            },
            "to get wallets by page Num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/wallets/get/wallet/:pageNo'
            },
            "to get wallets by acct num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/wallets/get/walletacct/:acctNo'
            },
            "to get all airtime by page num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/airtime/get/airtime/:pageNo'
            },
            "to get all airtime by ref num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/airtime/get/airtime-ref/:refNo'
            },
            "to get all data by page num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/data/get/data-bundles/:pageNo'
            },
            "to get all data by ref num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/data/get/data-bundle/:refNo'
            },
            "to get all electricity by page num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/electricity/get/electricity/:pageNo'
            },
            "to get all electricity by ref num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/electricity/get/electricity-ref/:refNo'
            },
            "to get all transfer by page num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/transfer/get/all-transfer/:pageNo'
            },
            "to get all transfer by ref num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/transfers/get/transfer-ref/:refNo'
            },
            "to get all tv cable by page num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/tv-cable/get/tv-cable/:pageNo'
            },
            "to get all tv cable by ref num":{
                "method": "GET",
                "URL":'https://ulego-dashboard-api.vercel.app/api/tv-cable/get/tv-cable-ref/:refNo'
            },
        })
})



app.listen(port, ()=>{
    console.log(`listening on: https://localhost:${port}`);
})