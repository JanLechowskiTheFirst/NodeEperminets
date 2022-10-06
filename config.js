const env = process.env.test;

const dev_env = {
    app: {
        host: "localhost",
        port: 3000
    },
};

const test_env = {
    app: {
        host: "localhost",
        port: 3000
    },
};

const config = {
    dev_env,
    test_env
};

export default config;

module.exports = config[env];