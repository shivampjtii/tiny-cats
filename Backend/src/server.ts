import app from "./app.ts";
import config from "./config/config.ts";

const PORT = config.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});