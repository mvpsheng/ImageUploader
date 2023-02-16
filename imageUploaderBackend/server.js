var multer = require('multer')
var upload = multer({dest : 'uploads/'}).single('photo') 
//make sure you have access to write files
//make sure 'photo' matches up with the field entered at the front end e.g. formdata.append('photo', ...)

app.post('/imageupload',upload,function(req,res){
    //req.file will now be available as a json object, save to mongodb, re: filename, path etc
    res.send('rabbit')
})