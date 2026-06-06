import app from "./app.ts";
import config from "./config/config.ts";
import connecToDB from "./config/database.ts";

connecToDB();

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});