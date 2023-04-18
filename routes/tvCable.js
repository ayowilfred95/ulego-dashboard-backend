const router = require("express").Router();

const express = require("express");

const tvCableModel = require('../model/tvCable')

router.get('/get/tv-cable/:pageNo', tvCableModel.allTvCable)
router.get('/get/tv-cable-ref/:refNo', tvCableModel.tvCableRef) 

module.exports = router 