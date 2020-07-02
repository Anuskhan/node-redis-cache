const fetch = require('node-fetch');
const redisSetData = require("../../utils/redisSetData")


function getDetail(req, res) {
    console.log("hit", req.body.id);
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/products/life/detail/?plan_id=${req.body.id}`)
        .then(res => res.json())
        .then(json => {
            redisSetData("getlifedetail" + req.body.id, parseInt(60 * 60 * 24 * 1), json)
            res.status(200).send(json);
        });
}

module.exports = { getDetail };