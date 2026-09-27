const dns = require("dns");

console.log("Testing MongoDB Atlas DNS...\n");

dns.resolveSrv("_mongodb._tcp.new-aps-cluster.dtg73ty.mongodb.net", (err, records) => {
  if (err) {
    console.error("❌ DNS Error:");
    console.error(err);
  } else {
    console.log("✅ DNS Records:");
    console.log(records);
  }
});