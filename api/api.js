var express = require('express');
const {fetchSession,fetchClassicLeague} = require('fpl-api')
var router = express.Router();

const ab=[
    973083,   73327,  158791,  175967,  599445,
    163513, 1448275,   24529,  434101,  787615,
    211500,  611715,  259675, 1428450,  562991,
    791235,  515704,  900466,  450436,  919652,
    828294,  444575, 1527096,  327450,  251751,
    221470,   38714,  872759,  349336,  663588,
     90861, 1297561,  258889,  523438, 1232018,
    406105,  276301,  302627,  447339,   81080,
   1265439,  153187,  318364,  334037,  132913,
    224731,  284043,  789606,   
 ]

router.get('/diff', function(req, res) {
    const league = req.query.id;
    fetchSession('avneetsinghgill246@gmail.com','Sony@vivo66').then((respp)=>{
        
        fetchClassicLeague(respp,league).then((resp)=>{
            const cd=[...resp.new_entries.results,...resp.standings.results]
           
            const abarr=[]
            const cdarr= []
             ab.forEach(elem=>{
                cd.forEach(ele => {
               
                if(elem==ele.entry){
                 
                    
                    abarr.push(ab.indexOf(elem))
                    cdarr.push(cd.indexOf(ele))
                    
                
                }
             })
            
            });
      
            abarr.forEach(ele=>{
                delete ab[ele];
            })
            cdarr.forEach(ele=>{
                delete cd[ele];
            })
            var filtered = [...cd,...ab].filter(function (el) {
                return el != null;
              });
          
            
            res.send(filtered)
            
        })
    })


})










module.exports = router;