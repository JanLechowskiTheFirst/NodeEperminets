// var env = process.env.NODE_ENV || 'development'
// var envConfig = require('../config/database').dbConfig[env]

// const mongoFunction = (uri, db) => {
//   var dbo = db.db(envConfig.database.default);
//   var myobj = { firstName: "ABC" };
//   dbo.collection("tests").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// };
// maybe like this? require from app had problems, but maybe there is way to propagate properly - like router


// const mongoTest = () => {
//     const testSchema = new ({
//         username: { type: String },
//         tests: [
//             {
//                 _id: "1",
//                 firstname: { type: String },
//             }
//         ]
//     });

//     try {
//         mongoClient.connect()
//         // const tests = client.db(config.database.db).collection("tests")
//         const cursor = testSchema.find({ firstName: "UserName" })
//         if (cursor) {
//             cursor.forEach(console.dir)
//         }
//     } finally {
//         client.close()
//     }
// }

// module.exports = router
// module.exports.mongoFunction = mongoFunction
