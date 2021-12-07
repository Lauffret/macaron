const fs = require('fs');
const path = './lieux-de-tournage-a-paris.geojson';

module.exports = {
    getLieux(req, res){   
        fs.promises.readFile(path)
        .then(function(result){
            res.set('Content-Type', 'text/json');
			res.send(result);
        }).catch(function(error){
            res.set('Content-Type', 'text/html');
            res.send(error);
        })
    }
}