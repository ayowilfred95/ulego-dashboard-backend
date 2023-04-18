const router = require("express").Router();

const express = require("express");

const WalletModel = require('../model/wallets')

router.get('/get/wallet/:pageNo', WalletModel.Wallet)
router.get('/get/walletacct/:acctNo', WalletModel.WalletAcct)

module.exports = router