const express = require('express');
const app = express();
const port = 3000;
app.use(express.static(__dirname));
app.get('/',function(req,res) {
    res.send('hello');
});
app.listen(port,() => {
    console.log(`listening ${port}`);
})