// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "237up6g2vbmmb1r31rnevt9if0",     // CognitoClientID
  "api_base_url": "https://5w4exdi737.execute-api.eu-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "kosimk-test-app.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d11gv9881ns0fr.amplifyapp.com"                                      // AmplifyURL
};

export default config;
