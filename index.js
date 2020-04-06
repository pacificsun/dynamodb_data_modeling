const uuidv4 = require('uuid/v4');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1.create an organization
// const orgId = uuidv4();
// var params = {
//   TableName: 'saas_hr',
//   Item: {
//     PK: `ORG#${orgId}`,
//     SK: `#METEDATA#${orgId}`,
//     name: 'Happy inc',
//     type: 'free-tier',
//   },
// };

// var documentClient = new AWS.DynamoDB.DocumentClient();

// documentClient.put(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

//2.update organization

// const abcIncOrgId = 'f78db97a-ad81-4dc6-a3cd-c8f7c47784c5';
// var params = {
//   TableName: 'saas_hr',
//   Key: { PK: `ORG#${abcIncOrgId}`, SK: `#METEDATA#${abcIncOrgId}` },
//   UpdateExpression: 'set #org_id = :org_id',
//   ExpressionAttributeNames: { '#org_id': 'org_id' },
//   ExpressionAttributeValues: {
//     ':org_id': abcIncOrgId,
//   },
// };

// dynamodb.update(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

//3.get a single organization
// var params = {
//   TableName: 'saas_hr',
//   Key: {
//     PK: 'ORG#568b7b96-58af-4058-84c1-646d55354796',
//     SK: '#METEDATA#568b7b96-58af-4058-84c1-646d55354796',
//   },
// };

// dynamodb.get(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });
//4.Find all projects of happy inc

var params = {
  TableName: 'saas_hr',
  KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
  ExpressionAttributeNames: { '#PK': 'PK', '#SK': 'SK' },
  ExpressionAttributeValues: {
    ':PK': 'ORG#568b7b96-58af-4058-84c1-646d55354796',
    ':SK': 'PRO#',
  },
};

dynamodb.query(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
