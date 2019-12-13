const express = require('express');
const app = express();
const _ = require('underscore');
const Producto = require('../models/producto');
const {verificaToken} = require('../middlewares/autenticacion');

app.post('/producto', [verificaToken], (req, res)=>{
    let body = req.body;
    
    let producto = new Producto({
        nombre: body.nombre,
        precioUni: body.precioUni,
        categoria: body.categoria,
        usuario: body.usuario
    });

    producto.save((err, produDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            produDB
        });
    });
});


app.put('/producto/:id',/* [verificaToken],*/ (req, res) =>{
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'precioUni', 'categoria', 'disponible', 'usuario']);
    
    Producto.findByIdAndUpdate(id, body, {new: true, runValidators: true, context:'query'}, (err, usrDB) =>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }else{
            return res.status(200).json({
                ok: true,
                usrDB
            });
        }
    });
});


module.exports = app;