const express= require("express");
const app = express();

app.get("/",(req, res)=>{
    res.json([
        {
            id: 1,
            name: "anil kasera",
            age: 29

        },
        {
            id: 2,
            name: "sam kasera",
            age: 25

        },
        {
            id: 3,
            name: "peter kasera",
            age: 35

        },
        {
            id: 4,
            name: "bluce",
            age: 40

        },
    ])
});
app.listen(5600,()=>{
    console.log("server is running on 5600");
})