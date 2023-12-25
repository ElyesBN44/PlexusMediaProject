
const express = require('express');
const routerReservation = express.Router();
const { validationResult } = require('express-validator');
const { getUserReservation,getReservationById, addReservation, deleteReservation, updateReservation } = require('../controllers/reservation');

routerReservation.post('/', addReservation);

routerReservation.get('/:userId', getUserReservation);
routerReservation.delete('/:userId/:reservationId', deleteReservation);
routerReservation.patch('/:userId/:reservationId', updateReservation);
routerReservation.get('/:userId/:reservationId',getReservationById)
module.exports = routerReservation;