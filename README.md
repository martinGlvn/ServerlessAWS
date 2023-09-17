# ServerlessAWS

![Texto alternativo](./img/architecture.png)

| _Services aws_ -----------> | _Use_                            | _API_                                  |
| --------------------------- | -------------------------------- | -------------------------------------- |
| Api Gateway                 | API development                  | https://aws.amazon.com/es/api-gateway/ |
| Lambda                      | serverless computing             | https://aws.amazon.com/es/lambda/      |
| DynamoDB                    | DataBase                         | https://aws.amazon.com/es/dynamodb/    |
| Cognito                     | authentication and authorization | https://aws.amazon.com/es/cognito/     |
| NodeJS                      | Backend                          | https://nodejs.org/es                  |

---

1. npm install -g serverless
2. serverless create --template aws-nodejs --path my-sls-project
3. npm install -g serverless
4. serverless config credentials
5. npm i aws-sdk
6. serverless plugin install -n serverless-iam-roles-per-funcion
