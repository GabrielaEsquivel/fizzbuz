// [EXPRESS] object
const express = require('express');

// [EXPRESS] app
const app = express();
app.use(express.json()) // Indicamos que usaremos JSON

// [PORT] declared
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`FizzBuzz API listening on localhost:port ${port}`)
})
