const testController = (req,res)=>{
    res.status(200).send({
        message:"Welcome Welcome",
        success:true,
    });
}

module.exports = { testController };