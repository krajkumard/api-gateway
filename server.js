const express = require('express')
const {ROUTES} = require("./routes");
const {setupLogging} = require("./logging");
const {setupCreditCheck} = require("./creditcheck");
const {setupRateLimit} = require("./ratelimit");
const {setupProxies} = require("./proxy");


const app = express()
const port = 3000;

setupLogging(app);
setupRateLimit(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})