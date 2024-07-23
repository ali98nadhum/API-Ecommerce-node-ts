import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-inventory");

  app.listen(config.port, () => {
    console.log(`server run on port ${config.port}`);
  });
}

main()
  .then(() =>
    console.log(`Conecct on Db`)
  )
  .catch((error) => console.log(error));
