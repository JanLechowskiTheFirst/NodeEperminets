var config = {
    development: {
        //url to be used in link generation
        url: 'http://my.site.com',
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production: {
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    }
};
module.exports = config;