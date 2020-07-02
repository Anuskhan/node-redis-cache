const redis = require("redis")

const REDIS_PORT = process.env.PORT || 6379

// const client = redis.createClient(REDIS_PORT)
const client = redis.createClient('redis://effpv.netlify.com:6379');
const setRedis = (key, time, data) => {

    client.setex(key, time, JSON.stringify(data))
    // console.log("set")
}


module.exports = setRedis