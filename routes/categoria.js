const express = require('express');
const app = express();
const _ = require('underscore');
const Categoria = require('../models/categoria');

app.post('/categoria', (req, res)=>{
    let body = req.body;
    
    let categoria = new Categoria({
        nombre: body.nombre,
        usuario: body.usuario
    });

    categoria.save((err, catDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            catDB
        });
    });
});

app.put('/categoria/:id', (req, res) =>{
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'usuario']);
    
    Categoria.findByIdAndUpdate(id, body, {new: true, runValidators: true, context:'query'}, (err, catDB) =>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }else{
            return res.status(200).json({
                ok: true,
                catDB
            });
        }
    });
});

module.exports = app;