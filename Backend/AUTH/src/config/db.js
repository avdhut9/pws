const mongoose= require("mongoose")
const connect = async()=>{
    return mongoose.connect("mongodb+srv://NAYAN:NAYAN@cluster0.u60zxbv.mongodb.net/Project?retryWrites=true&w=majority")
}
module.exports = connect