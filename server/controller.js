module.exports = {

  get_pictures(req,res){
    const db = req.app.get('db');
    
         db.get_photos([])
         .then((items)=> { res.send(items);
        }).catch((err) => {console.log(err);});
  }
}