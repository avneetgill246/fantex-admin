var express = require('express');
const {fetchSession,fetchClassicLeague} = require('fpl-api')
var router = express.Router();
const {FantexAdmin} = require('../admindb')
var reap=[]
 
router.get('/diff', function(req, res) {
    const league = req.query.id;
    fetchSession('username','password').then((respp)=>{
        
        fetchClassicLeague(respp,league).then(async(resp)=>{
            const cd=[...resp.new_entries.results,...resp.standings.results]
           
            const abarr=[]
            const cdarr= []
           const rea=await FantexAdmin.find({})
              
               reap=rea
              rea.forEach(elem=>{
          
                    cd.forEach(ele => {
                   
                    if(elem.id==ele.entry){
                     
                        
                        abarr.push(rea.indexOf(elem))
                        cdarr.push(cd.indexOf(ele))
                        
                    
                    }
                 })
                
                });
          
         
        
            abarr.forEach(ele=>{
                delete reap[ele];
            })
            cdarr.forEach(ele=>{
                delete cd[ele];
            })
            var filtered = [...cd,...reap].filter(function (el) {
                return el != null;
              });
          
            
            res.send(filtered)
            
        })
    })


})










module.exports = router;
