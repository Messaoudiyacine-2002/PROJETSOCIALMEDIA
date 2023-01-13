const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
exports.connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/social_media1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((x) => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err,reason);
    });
};
