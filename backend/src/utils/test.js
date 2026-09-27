const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://krutsav38_db_user:1j12MPvm5Lr2WwZY@new-aps-cluster.dtg73ty.mongodb.net/?retryWrites=true&w=majority&appName=new-aps-cluster";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();