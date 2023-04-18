const router = require("express").Router();

const express = require("express");

const transferModel = require('../model/transfer')

router.get('/get/all-transfer/:pageNo', transferModel.allTransfer)
router.get('/get/transfer-ref/:refNo', transferModel.transferRef)

module.exports = router