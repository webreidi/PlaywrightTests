import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/authorize?client_id=167846e2-2119-42fe-bb76-f1289857acdc&redirect_uri=https%3A%2F%2Fmission-control-api.azurewebsites.net%2Fmcaodp%2Fopenidconnectpostback&response_type=code%20id_token&scope=openid%20profile&response_mode=form_post&nonce=638006892009088898.NTI3ZmMwN2MtZGMyNy00NWMxLWFiYTktNzU5NTFkZjk3NzM5NzFjY2FlM2YtZGJiYi00ZTU1LWEzY2MtOGJhNzJkM2NiZTI2&state=CfDJ8Mefet1-omZPsn8jWmVP5L7np9oQnxENpQLIh13paOrg8zpXS_ZPYnolnwfsgLsRH4dsQO7D-rGO9Sd1lrZwLLrVpFFp4bZUNM2soOqDRicK3dYoU64-n7ag7100HBFX7oM1SqsWOVQ0u8NCgasaFKWH486Dk9sI6olljxovuyEuWLRAEqng-skNsz1Lh10FghgL5ewhGbRZzyOp0pHP9WqpwJCS0bWuALu7-UnMl8fIwkHGCRIKY6B6MuCQCQYCssDVl-SBOUIbkMldttjj3SXjKW-91cN9if_-e9WtXDKySON4UAKFIVVmFuv-5HyDfWKDSzn-LkEQAHBWJRQJohjYO4HiJI2SD3_lqEoeRXiF5DWFUEg5eeA4sEtLRcq-CYTSCGl9Lu7h3ppVg1Kix7-1lF2j1wAL8ZzhEesA3nVS&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0
  await page.goto('https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/authorize?client_id=167846e2-2119-42fe-bb76-f1289857acdc&redirect_uri=https%3A%2F%2Fmission-control-api.azurewebsites.net%2Fmcaodp%2Fopenidconnectpostback&response_type=code%20id_token&scope=openid%20profile&response_mode=form_post&nonce=638006892009088898.NTI3ZmMwN2MtZGMyNy00NWMxLWFiYTktNzU5NTFkZjk3NzM5NzFjY2FlM2YtZGJiYi00ZTU1LWEzY2MtOGJhNzJkM2NiZTI2&state=CfDJ8Mefet1-omZPsn8jWmVP5L7np9oQnxENpQLIh13paOrg8zpXS_ZPYnolnwfsgLsRH4dsQO7D-rGO9Sd1lrZwLLrVpFFp4bZUNM2soOqDRicK3dYoU64-n7ag7100HBFX7oM1SqsWOVQ0u8NCgasaFKWH486Dk9sI6olljxovuyEuWLRAEqng-skNsz1Lh10FghgL5ewhGbRZzyOp0pHP9WqpwJCS0bWuALu7-UnMl8fIwkHGCRIKY6B6MuCQCQYCssDVl-SBOUIbkMldttjj3SXjKW-91cN9if_-e9WtXDKySON4UAKFIVVmFuv-5HyDfWKDSzn-LkEQAHBWJRQJohjYO4HiJI2SD3_lqEoeRXiF5DWFUEg5eeA4sEtLRcq-CYTSCGl9Lu7h3ppVg1Kix7-1lF2j1wAL8ZzhEesA3nVS&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0');

  // Go to https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/authorize?client_id=167846e2-2119-42fe-bb76-f1289857acdc&redirect_uri=https%3A%2F%2Fmission-control-api.azurewebsites.net%2Fmcaodp%2Fopenidconnectpostback&response_type=code%20id_token&scope=openid%20profile&response_mode=form_post&nonce=638006892009088898.NTI3ZmMwN2MtZGMyNy00NWMxLWFiYTktNzU5NTFkZjk3NzM5NzFjY2FlM2YtZGJiYi00ZTU1LWEzY2MtOGJhNzJkM2NiZTI2&state=CfDJ8Mefet1-omZPsn8jWmVP5L7np9oQnxENpQLIh13paOrg8zpXS_ZPYnolnwfsgLsRH4dsQO7D-rGO9Sd1lrZwLLrVpFFp4bZUNM2soOqDRicK3dYoU64-n7ag7100HBFX7oM1SqsWOVQ0u8NCgasaFKWH486Dk9sI6olljxovuyEuWLRAEqng-skNsz1Lh10FghgL5ewhGbRZzyOp0pHP9WqpwJCS0bWuALu7-UnMl8fIwkHGCRIKY6B6MuCQCQYCssDVl-SBOUIbkMldttjj3SXjKW-91cN9if_-e9WtXDKySON4UAKFIVVmFuv-5HyDfWKDSzn-LkEQAHBWJRQJohjYO4HiJI2SD3_lqEoeRXiF5DWFUEg5eeA4sEtLRcq-CYTSCGl9Lu7h3ppVg1Kix7-1lF2j1wAL8ZzhEesA3nVS&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0&sso_reload=true
  await page.goto('https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/authorize?client_id=167846e2-2119-42fe-bb76-f1289857acdc&redirect_uri=https%3A%2F%2Fmission-control-api.azurewebsites.net%2Fmcaodp%2Fopenidconnectpostback&response_type=code%20id_token&scope=openid%20profile&response_mode=form_post&nonce=638006892009088898.NTI3ZmMwN2MtZGMyNy00NWMxLWFiYTktNzU5NTFkZjk3NzM5NzFjY2FlM2YtZGJiYi00ZTU1LWEzY2MtOGJhNzJkM2NiZTI2&state=CfDJ8Mefet1-omZPsn8jWmVP5L7np9oQnxENpQLIh13paOrg8zpXS_ZPYnolnwfsgLsRH4dsQO7D-rGO9Sd1lrZwLLrVpFFp4bZUNM2soOqDRicK3dYoU64-n7ag7100HBFX7oM1SqsWOVQ0u8NCgasaFKWH486Dk9sI6olljxovuyEuWLRAEqng-skNsz1Lh10FghgL5ewhGbRZzyOp0pHP9WqpwJCS0bWuALu7-UnMl8fIwkHGCRIKY6B6MuCQCQYCssDVl-SBOUIbkMldttjj3SXjKW-91cN9if_-e9WtXDKySON4UAKFIVVmFuv-5HyDfWKDSzn-LkEQAHBWJRQJohjYO4HiJI2SD3_lqEoeRXiF5DWFUEg5eeA4sEtLRcq-CYTSCGl9Lu7h3ppVg1Kix7-1lF2j1wAL8ZzhEesA3nVS&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0&sso_reload=true');

});