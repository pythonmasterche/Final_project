let express = require('express');
let app = express();
let port = process.env.PORT || 8888
let user_router = require('./routers/main_router.js')

app.get("/", (req, res) => {
    res.send("<h1>Thanks a lot :)</h1>");
})

app.use("/user", user_router)

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});