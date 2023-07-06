import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.URI_MONGO, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
