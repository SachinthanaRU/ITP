const multer = require('multer');

const storage = multer.diskStorage({
    destination:function (req,file,callback){
        callback(null,'G:/Envirment authoroty project/circular/DB_Project/CU_DB/circular_database/Frontend/public/PDFFiles');
    },
    filename:function (req,file,callback){
        callback(null,Date.now() + file.originalname);
    }
})

const upload  = multer({
    storage:storage
})

module.exports = {upload}