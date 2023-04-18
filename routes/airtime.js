const router = require("express").Router();

const express = require("express");

const airtimeModel = require('../model/airtime')

router.get('/get/airtime/:pageNo', airtimeModel.allAirtime)
router.get('/get/airtime-ref/:refNo', airtimeModel.airtimeRef) 

module.exports = router 