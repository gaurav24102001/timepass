var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
const {pool} =require("./dbconfig");
app.use(express.urlencoded({extended:false})); 
app.use(express.json());



app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users',(req,res)=>{
    pool.query("SELECT * FROM users", (error,results)=>{
        if (error) throw error;
        else
        {
        res.status(200).send(results.rows);
        }
    })
})





app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
