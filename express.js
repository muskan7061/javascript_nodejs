import express from "express"
const app = express()
const PORT = 4000   


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/home", (req, res) =>{
    res.send("home page ")
})
app.get("/product", (req, res) =>{
    res.send("product page")
    
})
app.get("/customre", (req, res) =>{
    // const {name, password} = req.body
    res.send("customer page ")
     console.log(response);
     res.end(JSON.stringify(response));
})

app.listen(PORT, () =>{
    console.log("App is listing on ", PORT);
    
})