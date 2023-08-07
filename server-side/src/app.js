const express = require('express');
const router = require('./router');
const { sequelize } = require('./config/database');

// Sync all models in the database
sequelize.sync();

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(router);

module.exports = app;
