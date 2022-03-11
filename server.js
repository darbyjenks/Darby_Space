const express = require ('express');
const mongodb = require('mongodb').MongoClient;
const app = express();
const port = 3001;

// mongoose.connect('mongodb://localhost:27017/socialMediaDB', {
//     // useNewUrlParcer: true,
//     useUnifiedTopology: true
// })
const connectionStringURI = `mongodb://localhost:27017/socialMediaDB`
mongodb.connect(
    connectionStringURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      db = client.db();
      // Drops any documents, if they exist
      db.collection('socialMedia').deleteMany({});
      // Adds data to database
    //   db.collection('socialMedia').insertMany(data, (err, res) => {
    //     if (err) {
    //       return console.log(err);
    //     }
    //     console.log(res.ops);
    //   });
  
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
    }
  );
app.listen(port, () => {
    console.log(`Port listening.. ${port}`);
    // mongoose.connection.once("open", () => console.log('Mongoose connected'))
})

