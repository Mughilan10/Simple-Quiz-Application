const express = require('express')
const { getAllUsers, createUser, getUser} = require('../controllers/users')
const router = new express.Router()

router.route('/').get(getAllUsers).post(createUser)

router.route('/:id').get(getUser)

module.exports = router

