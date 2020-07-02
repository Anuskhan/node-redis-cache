const fetch=require('node-fetch');

function getMetaData(req,res){
    console.log("hit");
    fetch(`${process.env.API_URL_EYVAL}/2020/quvare/v2/api/other/pin/?pin=${req.body.id}`)
    .then(res => res.json())
    .then(json => {
        res.status(200).send(json);
    }).catch(err=>{
        res.status(400).send({
            message:"Somethig Went Wrong"
        });
    });
}

module.exports={getMetaData}