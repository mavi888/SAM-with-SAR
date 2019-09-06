let response;

exports.lambdaHandler = async (event) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        return err;
    }

    return response
};
