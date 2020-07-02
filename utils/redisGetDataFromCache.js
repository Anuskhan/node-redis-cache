const redis = require("redis")

const REDIS_PORT = process.env.PORT || 6379

// const client = redis.createClient(REDIS_PORT)
const client = redis.createClient('redis://effpv.netlify.com:6379');


function Search(req, res, next) {
    // console.log("key", req)
    client.get(`${req.user.age}${req.user.gender}${req.user.smoking}${req.user.married}${req.user.child}${req.user.country}${req.user.state}${req.user.occ}${req.user.annual_income}${req.user.loans}${req.user.l_cover}${req.user.h_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}`, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
}




function OcupationList(req, res, next) {
    // console.log("key", req)
    client.get("OcupationList", (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}

function getLife(req, res, next) {
    // console.log("key", req)
    client.get("getLife", (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}


function UlipList(req, res, next) {
    // console.log("key", req)
    client.get("UlipList", (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
}
function getById(req, res, next) {
    const id = req.body.id
    client.get(id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}

function SearchQuote(req, res, next) {
    // console.log("key", req)
    client.get(`quote${req.user.l_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}${req.user.age}${req.user.gender}${req.user.smoker}`, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}


function getHealth(req, res, next) {
    // console.log("key", req)
    client.get("getHealth", (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}

function getHealthQuote(req, res, next) {
    // console.log("key", req)
    client.get(`getHealthQuote${req.user.h_cover}${req.user.age}${req.user.age}${req.user.smoking}`, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });



}



function getByIdnav(req, res, next) {
    const id = req.body.id
    client.get("nav" + id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}

// function getByIdnav(req, res, next) {
//     const id = req.body.id
//     client.get("nav" + id, (err, data) => {
//         if (err) throw err;
//         if (data !== null) {
//             res.send(JSON.parse(data));
//             // res.send(data);

//         } else {
//             next();
//         }
//     });
// }


function getByIdmeta(req, res, next) {
    const id = req.body.id
    client.get("meta" + id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}


function SearchCover(req, res, next) {
    console.log("key", req)


    client.get(`cover${req.user.age}${req.user.gender}${req.user.smoking}${req.user.married}${req.user.child}${req.user.country}${req.user.state}${req.user.occ}${req.user.annual_income}${req.user.loans}${req.user.l_cover}${req.user.h_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}`, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}
function getByIdLifedetail(req, res, next) {
    const id = req.body.id
    client.get("getlifedetail" + id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}

function getByIdGetDetailOccupation(req, res, next) {
    const id = req.body.id
    client.get("getDetailOccupation" + id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}
function getByIdGetSalaryDetailOccupation(req, res, next) {
    const id = req.body.id
    client.get("getSalaryDetailOccupation" + id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}


function SearchGetRisk(req, res, next) {
    console.log("key", req)


    client.get(`getRisk${req.user.age}${req.user.gender}${req.user.smoking}${req.user.married}${req.user.child}${req.user.country}${req.user.state}${req.user.occ}${req.user.annual_income}${req.user.loans}${req.user.l_cover}${req.user.h_cover}${req.user.ci_cover}${req.user.d_cover}${req.user.f_cover}`, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}

function getByIdGetHealthDetails(req, res, next) {
    const id = req.body.id
    client.get("getHealthDetails" + id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
            // res.send(data);

        } else {
            next();
        }
    });
}


module.exports = { OcupationList, UlipList, getById, Search, getLife, SearchQuote, getHealth, getHealthQuote, getByIdnav, getByIdmeta, SearchCover, getByIdLifedetail, getByIdGetDetailOccupation, getByIdGetSalaryDetailOccupation, SearchGetRisk, getByIdGetHealthDetails }