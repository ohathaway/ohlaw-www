var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'owenhathaway',
applicationName: 'ohlaw-www',
appUid: 'D7WrSlcFPxDnlsLqqt',
tenantUid: 'pPLlb5bSpwZXyxk8xc',
deploymentUid: 'c73b8cc5-8313-4c81-950d-8691e2b4f4ea',
serviceName: 'ohlaw-www',
stageName: 'prod',
pluginVersion: '3.2.5'})
const handlerWrapperArgs = { functionName: 'ohlaw-www-prod-contact_us', timeout: 6}
try {
  const userHandler = require('./api/functions/contact_us/index.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
