const fetch = require('node-fetch');
const redis = require("../../utils/redisSetData")

function ulipList(req, res) {
    console.log("hit")
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/ulip/list`)
        .then(res => res.json())
        .then(json => {
            redis("UlipList", parseInt(60 * 60 * 24 * 30), json)

            res.status(200).send(json);
        });
}

function meta(req, res) {
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/ulip/meta/?fund_id=${req.body.id}`)
        .then(res => res.json())
        .then(json => {
            redis("meta" + req.body.id, parseInt(60 * 60 * 24 * 30), json)
            res.status(200).send(json);
        });
}


function nav(req, res) {
    console.log(req.body)
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/ulip/nav/?fund_id=${req.body.id}`)
        .then(res => res.json())
        .then(json => {
            redis("nav" + req.body.id, parseInt(60 * 60 * 24 * 1), json)
            res.status(200).send(json);
        });
}

module.exports = { ulipList, meta, nav };