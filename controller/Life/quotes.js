const fetch = require('node-fetch');
const redisSetData = require("../../utils/redisSetData")


function getQuotes(req, res) {
    console.log("hit")
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/products/life/quote/?lsa=
            ${req.user.l_cover}
            &csa=${req.user.ci_cover}
            &dsa=${req.user.d_cover}
            &fsa=${req.user.f_cover}
            &age=${req.user.age}
            &gender=${req.user.gender}
            &smoker=${req.user.smoker}`)
        .then(res => res.json())
        .then(json => {
            redisSetData(`quote${req.user.l_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}${req.user.age}${req.user.gender}${req.user.smoker}`, parseInt(60 * 60 * 24 * 1), json)

            res.status(200).send(json);
        });
}

module.exports = { getQuotes };