
const mongoTest = () => {
    const testSchema = new Schema({
        username: { type: String },
        tests: [
            {
                _id: false,
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
