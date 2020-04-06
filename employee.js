const uuidv4 = require('uuid/v4');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1.create employees
// const employeeId = uuidv4();
// const happyInc = '568b7b96-58af-4058-84c1-646d55354796';
// var params = {
//   TableName: 'saas_hr',
//   Item: {
//     PK: `ORG#${happyInc}`,
//     SK: `EMP#${employeeId}`,
//     name: 'Jane Snow',
//     type: 'jane@test.com',
//   },
// };

// dynamodb.put(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });
const happyInc = '568b7b96-58af-4058-84c1-646d55354796';
const monaj = '6fbfd0ef-0de5-4e42-9acb-791d72a96f33';
const john = '1238767c-b43c-4931-9e7b-b68744991385';
const jane = '9ff266a6-cb88-4ff1-9e0b-061b89a34746';
const projectX = '7c879e18-bc54-4ff0-afa2-3b008c072bd3';
const projectY = '82f284ec-42e3-4f43-8512-d8641ceb32ea';
const projectF1 = '95e3d12f-c283-4340-9a4b-d8519d7197f2';

// 2. Assign manoj to a project

// const employeeId = uuidv4();

// var params = {
//   TableName: 'saas_hr',
//   Item: {
//     PK: `ORG#${happyInc}#PRO#${projectY}`,
//     SK: `ORG#${happyInc}#EMP#${jane}`,
//     name: 'John',
//     project: 'Project X',
//     date_of_join: new Date().toUTCString(),
//   },
// };

// dynamodb.put(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 3. find employees assigned to projectX of happy Inc

// var params = {
//   TableName: 'saas_hr',
//   KeyConditionExpression: '#PK = :PK',
//   ExpressionAttributeNames: { '#PK': 'PK' },
//   ExpressionAttributeValues: {
//     ':PK': `ORG#${happyInc}#PRO#${projectX}`,
//   },
// };

// dynamodb.query(params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 4. find all projects an employee is part of - using an inverted index

var params = {
  TableName: 'saas_hr',
  IndexName: 'Project-Employee-Index',
  KeyConditionExpression: '#SK = :SK',
  ExpressionAttributeNames: { '#SK': 'SK' },
  ExpressionAttributeValues: {
    ':SK': `ORG#${happyInc}#EMP#${monaj}`,
  },
};

dynamodb.query(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
