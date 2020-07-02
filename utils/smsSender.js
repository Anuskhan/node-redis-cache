var AWS = require('aws-sdk');

function smsSender(number,sms,callback){

    console.log(number)

    var params = {
        Message: sms,
        PhoneNumber:number,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': "OTP"
            }
        }
    };

    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    publishTextPromise.then(
        function (data) {
            callback(JSON.stringify({ MessageID: data.MessageId }),false)
        }).catch(
            function (err) {
                console.log(err)
                callback(JSON.stringify({ MessageID: err }),true)
            }
        );
};
 module.exports={smsSender};