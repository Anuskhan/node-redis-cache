const fetch = require('node-fetch');
const redisSetData = require("../../utils/redisSetData")




function getOccupation(req, res) {
    console.log("hit")
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/occupation/list/`)
        .then(res => res.json())
        .then(json => {
            redisSetData("OcupationList", parseInt(60 * 60 * 24 * 30), json)
            res.status(200).send(json);

        }).catch(err => {
            res.status(400).send({
                message: "Somethig Went Wrong" + err
            })
        });
}


function getDetailOccupation(req, res) {
    console.log("hit")
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/occupation/detail/?base_id=${req.body.id}`)
        .then(res => res.json())
        .then(json => {
            res.status(200).send(json);
            redisSetData("getDetailOccupation" + req.body.id, parseInt(60 * 60 * 24 * 30), json)
        }).catch(err => {
            res.status(400).send({
                message: "Somethig Went Wrong"
            })
        });
}


function getSalaryDetailOccupation(req, res) {
    console.log("hit")
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/occupation/salary/?base_id=${req.body.id}`)
        .then(res => res.json())
        .then(json => {
            res.status(200).send(json);
            redisSetData("getSalaryDetailOccupation" + req.body.id, parseInt(60 * 60 * 24 * 30), json)
        }).catch(err => {
            res.status(400).send({
                message: "Somethig Went Wrong"
            })
        });
}

module.exports = { getOccupation, getDetailOccupation, getSalaryDetailOccupation };