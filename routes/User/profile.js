const express = require("express");
const app = express.Router();
const { getProfile, setProfile } = require("../../controller/Profile/profile");

app.get("/", getProfile);

app.post('/setProfile', setProfile);

module.exports = app;