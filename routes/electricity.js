const router = require("express").Router();

const express = require("express");

const electricityModel = require('../model/electricity')

router.get('/get/airtime/:pageNo', electricityModel.allElectricity)
router.get('/get/airtime-ref/:refNo', electricityModel.electricityRef) 

module.exports = router 