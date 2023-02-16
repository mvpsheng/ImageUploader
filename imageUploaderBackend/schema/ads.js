exports = module.exports = function(app, mongoose) {
    var addsSchema = new mongoose.Schema({
      imageTitle     : { type: String, default: '' },    
      img            : { type: String, default: '' }

   });
   app.db.model('Adds', addsSchema);
 };