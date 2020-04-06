const uuidv4 = require('uuid/v4');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1.create a project
const abcIncOrgId = 'f78db97a-ad81-4dc6-a3cd-c8f7c47784c5';
const projectId = uuidv4();
const type = 'agile';
var params = {
  TableName: 'saas_hr',
  Item: {
    PK: `ORG#${abcIncOrgId}`,
    SK: `PRO#${type}#${projectId}`,
    name: 'Project B',
    project_id: projectId,
  },
};

var documentClient = new AWS.DynamoDB.DocumentClient();

documentClient.put(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
