const fetch = require('node-fetch');
const redisSetData = "../../util/redisSetData"

function getRisk(req, res) {
    console.log("hit");
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/profile/risk/?
                                        age=${req.user.age}
                                        &gender=${req.user.gender}
                                        &smoking=${req.user.smoking}
                                        &married=${req.user.married}
                                        &child=${req.user.child}
                                        &country=${req.user.country}
                                        &state=${req.user.state}
                                        &occ=${req.user.occ}
                                        &annual_income=${req.user.annual_income}
                                        &loans=${req.user.loans}
                                        &l_cover=${req.user.l_cover}
                                        &h_cover=${req.user.h_cover}
                                        &ci_cover=${req.user.ci_cover}
                                        &d_cover=${req.user.d_cover}
                                        &f_cover=${req.user.f_cover}`)
        .then(res => res.json())
        .then(json => {

            redisSetData(`getRisk${req.user.age}${req.user.gender}${req.user.smoking}${req.user.married}${req.user.child}${req.user.country}${req.user.state}${req.user.occ}${req.user.annual_income}${req.user.loans}${req.user.l_cover}${req.user.h_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}`, parseInt(60 * 60 * 24 * 1), json)

            res.status(200).send(json);
        }).catch(err => {
            res.status(400).send({
                message: "Somethig Went Wrong"
            });
        });
}

function getQuote(req, res) {
    console.log("hit");
    var url = "";
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/profile/quote/?
                                        age=${req.user.age}
                                        &gender=${req.user.gender}
                                        &smoking=${req.user.smoking}
                                        &married=${req.user.married}
                                        &child=${req.user.child}
                                        &country=${req.user.country}
                                        &state=${req.user.state}
                                        &occ=${req.user.occ}
                                        &annual_income=${req.user.annual_income}
                                        &loans=${req.user.loans}
                                        &l_cover=${req.user.l_cover}
                                        &h_cover=${req.user.h_cover}
                                        &ci_cover=${req.user.ci_cover}
                                        &d_cover=${req.user.d_cover}
                                        &f_cover=${req.user.f_cover}`)
        .then(res => res.json())
        .then(json => {
            res.status(200).send(json);
            redisSetData(`${req.user.age}${req.user.gender}${req.user.smoking}${req.user.married}${req.user.child}${req.user.country}${req.user.state}${req.user.occ}${req.user.annual_income}${req.user.loans}${req.user.l_cover}${req.user.h_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}`, parseInt(60 * 60 * 24 * 1), json)

        }).catch(err => {
            res.status(400).send({
                message: "Somethig Went Wrong"
            });
        });
}

module.exports = { getRisk, getQuote };