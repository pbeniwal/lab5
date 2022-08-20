//
// Configuration section
//
// Follow the instructions in the Lab guide to set
// the following constants to run the web application
// against your AWS account:
//
//      API_GATEWAY_ENDPOINT_URI
//      IOT_BROKER_ENDPOINT
//      COGNITO_IDENTITY_POOL_ID
//      AWS_REGION
//
(function () {
    'use strict';

    angular
        .module('app')

        .constant('COGNITO_IDENTITY_POOL_ID',   'REPLACE_WITH_COGNITO_IDENTITY_POOL_ID')
        .constant('COGNITO_USER_POOL',          'REPLACE_WITH_COGNITO_USER_POOL')
        .constant('COGNITO_USER_POOL_CLIENT_ID','REPLACE_WITH_COGNITO_USER_POOL_CLIENT_ID')
        .constant('COGNITO_APP_WEB_DOMAIN',     'REPLACE_WITH_S3_BUCKET_WWW')

        .constant('AWS_REGION',                 'REPLACE_WITH_LAB_REGION')
        .constant('APP_BANNER',                 'Cloud Air')

})();
