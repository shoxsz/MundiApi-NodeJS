const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'sk_test_v7gb4lnTWjcVbVoA';

const chargesController = mundipagg.ChargesController;

const chargeId = 'ch_4PAVPy2tAuxxq1aX';
const request = new mundipagg.CreateCancelChargeRequest()
request.code = 'new_code';

chargesController.captureCharge(chargeId, request)
    .then(charge => {
        console.log(`Captured amount: ${charge.paidAmount}`);
        console.log(`Charge status: ${charge.status}`);
        console.log(`Last transaction status: ${charge.lastTransaction.status}`);
        console.log(`Charge is captured.`);
    })
    .catch(error => {
        console.log(`StatusCode: ${error.errorCode}`);
        if (error.errorResponse instanceof mundipagg.ErrorException) {
            console.log(error.errorResponse.message);
            console.log(error.errorResponse.errors);
        } else {
            throw error;
        }
    });