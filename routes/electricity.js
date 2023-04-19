const router = require("express").Router();

const express = require("express");

const electricityModel = require('../model/electricity')

router.get('/get/electricity/:pageNo', electricityModel.allElectricity)
router.get('/get/electricity-ref/:refNo', electricityModel.electricityRef) 

module.exports = router 