import "dotenv/config";

import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`O servidor está escutando em http://localhost:${PORT}`);
});
