const SES = require('aws-sdk/clients/sesv2');


function send_ses_message(event) {
  //console.log(event.body);
  var ses = new SES();

  var submission_fields = event.body;

      /*
      Simple: {
        Body: {
          Html: {
            Data: '<h2>It worked</h2>'
          },
          Text: {
            Data: 'It worked'
          }
        },
        Subject: {
          Data: 'Test form submission'
        }
      },
      */
  var params = {
    Content: {
      Template: {
        TemplateArn: 'arn:aws:ses:us-west-2:109856252379:template/OhlawContactTemplate',
        TemplateData: submission_fields
      }
    },
    Destination: {
      ToAddresses: [
        'owen@ohlawcolorado.com'
      ]
    },
    FromEmailAddress: 'contact@ohlawcolorado.com'
  };

  return ses.sendEmail(params, function(err,data) {
    if(err) console.log(err, err.data);
    else    console.log(data);
  });

}


exports.handler = (event, context, callback) => {
  console.log('Received event: ', event);

  var message_result = send_ses_message(event);
  console.log("message_result: ", message_result);

  var response = {
    "isBase64Encoded": false,
    "headers": {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    "statusCode": 200,
    "body": "{\"result\": \"Success\"}"
  };

  callback(null, response);
};
