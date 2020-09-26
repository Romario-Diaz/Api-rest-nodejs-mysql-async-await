'use strict'

const connection = require('../../config/connection')

async function getCars(req, res) {
    res.json({message: "recuperando carros"})
}


module.exports = {
    getCars,
}