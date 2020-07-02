const fetch = require('node-fetch');
const redisSetData = require("../../utils/redisSetData")

function getLife(req, res) {
    console.log("hit")
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/products/life/list/`)
        .then(res => res.json())
        .then(json => {
            redisSetData("getLife", parseInt(60 * 60 * 24 * 1), json)
            res.status(200).send(json);

        });
}

module.exports = { getLife };