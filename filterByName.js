const uuidv4 = require('uuid/v4');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const monaj = '6fbfd0ef-0de5-4e42-9acb-791d72a96f33';
// GSI Query
var params = {
  TableName: 'saas_hr',
  IndexName: 'filter-by-name',
  KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
  ExpressionAttributeNames: { '#PK': 'PK', '#SK': 'Data' },
  ExpressionAttributeValues: {
    ':PK': 'ORG#568b7b96-58af-4058-84c1-646d55354796',
    ':SK': 'EMP#Manoj',
  },
};

dynamodb.query(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
