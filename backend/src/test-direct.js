const mongoose = require("mongoose");

const uri =
  "mongodb://krutsav38_db_user:2D4oOJkN212LWPLW@ac-wvxhwhn-shard-00-00.dtg73ty.mongodb.net:27017,ac-wvxhwhn-shard-00-01.dtg73ty.mongodb.net:27017,ac-wvxhwhn-shard-00-02.dtg73ty.mongodb.net:27017/newaps?ssl=true&replicaSet=atlas-xxxxxxxx-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });