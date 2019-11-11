//PUERTO
process.env.PORT = process.env.PORT || 3000;

//Entorno (ENV)
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

//Connection to data base
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafeteria';
} else{
    urlDB = 'mongodb+srv://ADMIN:.x25,zax.@cluster0-luz0b.mongodb.net/cafeteria'
}

process.env.URLDB = urlDB;