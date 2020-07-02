const fetch = require('node-fetch');
const redisSetData = require("../../utils/redisSetData")


function getHealth(req, res) {
    console.log("hit")
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/products/Health/list/`)
        .then(res => res.json())
        .then(json => {
            res.status(200).send(json);
            redisSetData("getHealth", parseInt(60 * 60 * 24 * 1), json)
        }).catch(err => {
            res.status(400).send({
                message: "Somethig Went Wrong"
            })
        });
}
function getHealthDetails(req, res) {

    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/products/Health/detail/?plan_id=${req.body.id}`)
        .then(res => res.json())
        .then(json => {
            res.status(200).send(json);
            redisSetData("getHealthDetails" + req.body.id, parseInt(60 * 60 * 24 * 1), json)
        }).catch(err => {
            res.status(400).send({
                message: "Somethig Went Wrong"
            });
        });
}
function getHealthQuote(req, res) {

    console.log(url);
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/products/Health/quote/?
                                        hsa=${req.user.h_cover}
                                        &age=${req.user.age}
                                        &gender=${req.user.gender}
                                        &smoker=${req.user.smoking == "Y" ? 1 : 0}`)
        .then(res => res.json())
        .then(json => {
            res.status(200).send(json);
            redisSetData(`getHealthQuote${req.user.h_cover}${req.user.age}${req.user.age}${req.user.smoking}`, parseInt(60 * 60 * 24 * 1), json)

        }).catch(err => {
            console.log(err);
            res.status(400).send({
                message: "Somethig Went Wrong"
            });
        });
}

module.exports = { getHealth, getHealthDetails, getHealthQuote };