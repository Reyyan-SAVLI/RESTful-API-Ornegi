var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listele',function(req,res){
    //res.send('listeleme cagrisi');
    fs.readFile('kullanici.json','utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
});

app.get('/ekle',function(req,res){
    //res.end('ekleme cagrisi');
    var yenikullanici = {
        "k3" :{
            "isim" : req.query.isim,
            "sifre": req.query.sifre
        }
    };
    fs.readFile('kullanici.json','utf8',function(err,data){
        data = JSON.parse(data);
        data["k3"] = yenikullanici["k3"]; 
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile('kullanici.json',JSON.stringify(data),function(err){
            console.log('hata oluştu.');
        });
    });
});

app.get('/sil',function(req,res){
    //res.end('silme cagrisi');
    fs.readFile('kullanici.json','utf8',function(err,data){
    data = JSON.parse(data);
    var id = "k" + req.query.id;
    delete data[id]; 
    console.log(data);
    res.end(JSON.stringify(data));
    fs.writeFile('kullanici.json',JSON.stringify(data),function(err){
        console.log('hata oluştu.');
    });
});
});
    

app.get('/sorgula',function(req,res){
   // res.end('sorgulama cagrisi');
   fs.readFile('kullanici.json','utf8',function(err,data){
    data = JSON.parse(data);
    var id = "k" + req.query.id;
    console.log(data[id]);
    res.end(JSON.stringify(data[id]));
    
});
});


var server = app.listen(8082, function(){
    console.log('sunucu calisiyor');
});
