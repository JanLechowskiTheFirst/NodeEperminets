var dbConfig = {
    development: {
        //url to be used in link generation
        url: 'http://my.site.com',
        //mongodb connection settings
        database: {
            host: '127.0.0.1',
            port: '27017',
            db: 'mongo.com',
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
            host: '127.0.0.1',
            port: '27017',
            db: 'mongo.com',
            default: '/tests',
            username: 'prod',
            password: 'prod'
        },
    }
};
module.exports.dbConfig = dbConfig;
