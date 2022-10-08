
async function main() {
    var env = process.env.NODE_ENV || 'development';
    var config = require('./config')[env];

    let mongoClient = require("mongodb").MongoClient;

    const uri = `mongodb+srv://${config.database.username}:${config.database.password}@${config.database.db}}/${config.database.dafault}`


    // this is said to be important, but can make it work, maybe let use at the begginig and delete new
    // const mongoClient = new MongoClient(uri, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // });
    mongoClient.connect(uri);



    const run = () => {
        try {
            mongoClient.connect()
            const tests = client.db(config.database.db).collection("tests")
            const cursor = tests.find({ firstName: "UserName" }).limit(1)
            cursor.forEach(console.dir)
        } finally {
            client.close()
        }
    }




    module.exports.run = run
