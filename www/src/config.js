// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "55t4qdbkpj966b53vrc96e8n8q",     // CognitoClientID
  "api_base_url": "https://a5iy7avvtj.execute-api.eu-central-1.amazonaws.com/",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-test-refarch.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d17vqfe95ohly3.amplifyapp.com"                                      // AmplifyURL
};

export default config;
