const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Categoria = require('./categoria');
const Usuario = require('./usuario');

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresa el nombre del producto']
    },
    precioUni: {
        type: Number,
        required: true
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: [true, 'Por favor ingresa la categoria']
    },
    disponible: {
        type: Boolean,
        default: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Por favor ingresa el usuario']
        }
});

productoSchema.plugin(uniqueValidator,{
    message: '(PATH) Debe ser unico y diferente'
});

module.exports = mongoose.model('Producto', productoSchema);