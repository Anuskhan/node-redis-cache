const User = require('../../model/user');
const redisSetData = require("../../utils/redisSetData")


function getProfile(req, res) {
  //  console.log(req.user);
  const user = req.user;
  user.otp = undefined;
  user.isVarified = undefined;
  user.role = undefined;
  console.log(user)
  res.status(200).send(user)
}

function setProfile(req, res) {
  req.body.name = undefined;
  console.log(req.body);
  User.findOne({ phone_number: req.user.phone_number })
    .select({ token: 0 })
    .then((user) => {
      console.log(user)
      user.age = req.body.age;
      user.annual_income = req.body.annual_income;
      user.child = req.body.child;
      user.ci_cover = req.body.ci_cover;
      user.d_cover = req.body.d_cover;
      user.f_cover = req.body.f_cover;
      user.h_cover = req.body.h_cover;
      user.l_cover = req.body.l_cover;
      user.loans = req.body.loans;
      user.married = req.body.married;
      user.smoking = req.body.smoking;
      user.occ = req.body.occ;
      user.phone_number = req.body.phone_number;
      user.gender = req.body.gender;

      user.save((err, user) => {
        console.log(err, user)
        redisSetData("getProfile", 3600, user)
        res.status(200).send(user)
      })
    }).catch(err => {
      console.log(err);
    })
}

module.exports = { setProfile, getProfile };