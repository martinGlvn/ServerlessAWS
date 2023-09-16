const documentClient = require("../utils/database");
const response = require("../utils/response");

const TASK_TABLE_NAME = process.env.TASK_TABLE_NAME;
module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const params = {
      TableName: TASK_TABLE_NAME,
    };
    const notes = await documentClient.scan(params).promise();
    callback(null, response.send(200, notes));
  } catch (error) {
    console.error(JSON.stringify(error));
    callback(null, response.send(500, { err: error.message }));
  }
};
