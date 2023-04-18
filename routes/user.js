const router = require("express").Router();

const express = require("express");

const UserController = require('../controller/user.controller')

router.post('/login', UserController.loginUser)

module.exports = router