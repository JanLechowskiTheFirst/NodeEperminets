var dbConfig = {
    development: {
        //url to be used in link generation
        // url: 'http://my.site.com',
        //mongodb connection settings
        database: {
            host: 'localhost',
            port: '8095',
            db: 'mongo',
            default: '/tests',
            username: 'dev',
            password: 'dev'
        },
    },
    production: {
        //url to be used in link generation
        url: 'http://my.site.com',
        //mongodb connection settings
        database: {
            host: 'localhost',
            port: '8095',
            db: 'mongo',
            default: '/tests',
            username: 'prod',
            password: 'prod'
        },
    }
};
module.exports.dbConfig = dbConfig;
