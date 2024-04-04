const express= require("express");
const path= require("path")
const app=express();

app.set("view engine","pug")
app.set("views","./view")
app.use(express.static("views"))


app.get('/form',(req, res)=>{
    res.render("cv")
})
app.get("/submit_form",(req, res)=>{

    res.render("rdata", {
        name:req.query.person,
        contact:req.query.number,
        email:req.query.email,
        cnic:req.query.cnic,
        address:req.query.address,
        datebirth:req.query.dob,
        institution:req.query.instit1,
        matricmarks:req.query.marks1,
        percentage:req.query.percentage1,
        year:req.query.year1,
        board:req.query.baord1,
        institution:req.query.instit2,
        intermarks:req.query.marks2,
        percentage:req.query.percentage2,
        year:req.query.year2,
        board:req.query.board2,
        skills:req.query.skills,
    })

})
app.listen(8000,()=>{
    console.log("listenig...")
})
