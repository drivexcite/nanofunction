module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let environmentVariables = '';

    for(key in process.env) {
        environmentVariables += `${key}=${process.env[key]};`;
    }

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {            
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name) + " from 1.3. " + environmentVariables
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};