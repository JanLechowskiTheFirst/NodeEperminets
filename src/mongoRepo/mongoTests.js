
const mongoClient = require("mongodb").MongoClient 
// maybe like this? require from app had problems, but maybe there is way to propagate properly - like router


const mongoTest = () => {
    const testSchema = new Schema({
        username: { type: String },
        tests: [
            {
                _id: "1",
                firstname: { type: String },
            }
        ]
    });

    try {
        mongoClient.connect()
        // const tests = client.db(config.database.db).collection("tests")
        const cursor = testSchema.find({ firstName: "UserName" })
        if (cursor) {
            cursor.forEach(console.dir)
        }
    } finally {
        client.close()
    }
}

// module.exports = router
module.exports.mongoTest = mongoTest
