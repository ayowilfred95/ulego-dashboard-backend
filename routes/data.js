const router = require("express").Router();

const express = require("express");

const dataModel = require('../model/data')

router.get('/get/data-bundles/:pageNo', dataModel.allData)
router.get('/get/data-bundle/:refNo', dataModel.dataRef) 

module.exports = router 