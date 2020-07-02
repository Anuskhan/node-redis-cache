const fetch = require('node-fetch');
const User = require("../../model/user");
const redisSetData = require("../../utils/redisSetData")

function Cover(req, res) {
    console.log(req.user);
    var url = `${process.env.API_URL_EYVAL}/2020/quvare/v2/api/profile/cover/?
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
                                                    &l_cover=${req.user.h_cover}
                                                    &h_cover=${req.user.h_cover}
                                                    &ci_cover=${req.user.ci_cover}
                                                    &d_cover=${req.user.d_cover}
                                                    &f_cover=${req.user.f_cover}`;

    console.log(url);
    console.log((url.replace(/(\r\n|\n|\r)/gm, "")).split(" ").join(""));
    url = (url.replace(/(\r\n|\n|\r)/gm, "")).split(" ").join("")

    fetch(url, {
        method: "GET",
    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            redisSetData(`cover${req.user.age}${req.user.gender}${req.user.smoking}${req.user.married}${req.user.child}${req.user.country}${req.user.state}${req.user.occ}${req.user.annual_income}${req.user.loans}${req.user.l_cover}${req.user.h_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}`, parseInt(60 * 60 * 24 * 1), json)
            res.status(200).send(json);
        }).catch(e => {
            console.log("->", e)
        });
}

module.exports = { Cover };