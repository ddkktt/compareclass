module.exports  = (req,res, next) =>{
    const key = req.query.key;

    if(key == "123"){
        console.log("entro");
        next();
    }
    else{
        res.status(401).send("unathuarized")
    }
}