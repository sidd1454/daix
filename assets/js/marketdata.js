'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Aurora } = require('../config');
const sql = require('./sql');
const MarketData = require('../models/Marketdata');



// GET: fetch currency marketdata
router.get('/marketdata', async (req, res) => {
    const { sym } = req.query;
    await Aurora.query(sql.marketdata.select, [sym], (error, results, fields) => {
        error ? res.status(500).json({ err: error }) : false;
        const marketdataList = results.map((marketdata) => {
            const cleanMarketData = new MarketData(marketdata);
            return cleanMarketData;
        });
        res.status(200).json({ marketdata: marketdataList });
    });
});

router.get('/chartdata/:currency', async (req, res) => {
    const {currency} = req.params;
    // const interval = 'hour'
    const url = `https://api.nomics.com/v1/candles?key=3b9becebfee286194d6b78dce64f3459&interval=1d&currency=${currency}`
    const result = await fetch(url);
    const news = await result.json();
    res.status(200).json(news);
});
    
module.exports = router;