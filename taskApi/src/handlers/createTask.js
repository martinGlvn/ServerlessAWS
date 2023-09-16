module.exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
  callback(null, {
    statusCode: 201,
    body: JSON.stringify({ msg: "Task C reate", data: data }),
  });
};
