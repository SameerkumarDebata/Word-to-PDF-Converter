const express = require('express')
const multer=require('multer')
const docxtoPdf = require('docx-pdf');
const path=require('path')
const cors=require('cors')
const app = express()
const port = 3000
app.use(cors())

//setting up file storage using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
   
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })


app.post('/convertFile', upload.single('file'), (req, res, next)=>{
    try{
          if(!req.file){
            return res.status(400).json({
                message:"No file uploaded",
            })
          }


          //defining outfile path
          let outputPath=path.join(__dirname,"files",`${req.file.originalname}.pdf`)

        docxtoPdf(req.file.path,outputPath,(err,result)=>{
            
  if(err){
    console.log(err);
    return res.status(500).json({
        message:"Error converting docx to pdf",
    })
  }
  //for download
  res.download(outputPath,()=>{
    console.log("file downloaded");
  })

 
});
         
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"internal server Error",
        });
    }

} 
)


app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
