module.exports.handler = (event, context, callback) => {
  const id = event.pathParameters.id;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: `Task ${id} Update` }),
  });
};
