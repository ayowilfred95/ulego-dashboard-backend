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

app.get('/', (req, res)=>{
    res.json(
        {
            "welcome": 'hello from ulego dashboard api',
            "login route": 'hello from api',
            "to get Total-wallets":" hello",
            "to get wallets by page Num":" hello",
            "to get all transactions by page":" hello",
            "to get Total-wallets":" hello",
            "to get all wallets":" hello",
            "to get Transfers by page Num":" hello",
            "to get all Transfers by ref Num":" hello",
            "to get all data bundle by page Num":" hello",
            "to get all data bundle by ref Num":" hello",
            "to get all data bundle by ref Num":" hello",
        })
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`listening on: https://localhost:${port}`);
})