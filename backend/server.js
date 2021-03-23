const express = require("express");
const path = require("path");
const multer = require("multer");
const mongoose  = require("mongoose");
const app = express();
const cors = require('cors');
const PORT = 5000;
const uploadModel = require('./models/upload.model');
const router = express.Router();

const ur = "mongodb+srv://shubu:shubu@cluster0.sa9wu.mongodb.net/as?retryWrites=true&w=majority";
const storage = multer.diskStorage({
   destination: "./public/",
   filename: function(req, file, cb){
      cb(null, Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("uploadImage");


const obj =(req,res) => {
  
   upload(req, res, () => {
      const name = req.body.name;
      console.log("Request file ---", req);
      
      const path = req.file.path;
      const filename = req.file.filename
      const newfile = new uploadModel({name, path, filename});
      newfile.save().then(()=>{
      res.send({response:'Uploaded'})
      })
   });
}
app.use(cors());
app.use(router);
var paths = require('path');
app.use(express.static(paths.join(__dirname, 'public')));
router.post("/upload", obj);

router.get("/",(req,res)=>{
   uploadModel.find()
    .then(image=>res.json(image))
    .catch(err=> res.status(400).json('Error:' + err));
});

mongoose.connect(ur,{
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true,
}).then(()=>{console.log("DB is connected")})

app.listen(PORT,()=>{
   console.log("\u{1F525}\u{1F680} app listen on port",PORT,"\u{1F525}\u{1F680}")
});