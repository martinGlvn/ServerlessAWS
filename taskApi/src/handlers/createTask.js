const documentClient = require("../utils/database");
const TASK_TABLE_NAME = process.env.TASK_TABLE_NAME;

//
module.exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  try {
    const params = {
      TableName: TASK_TABLE_NAME,
      Item: {
        id: data.id,
        title: data.title,
        desc: data.desc,
      },
      ConditionExpression: "attribute_not_exists(id)",
    };
    await documentClient.put(params).promise();
    callback(null, response.send(201, data));
  } catch (error) {
    console.error(JSON.stringify(error));
    callback(null, response.send(500, { err: error.message }));
  }
  callback(null, {
    statusCode: 201,
    body: JSON.stringify({ msg: "Task C reate", data: data }),
  });
};
