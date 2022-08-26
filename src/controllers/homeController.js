const Contacto = require('../models/ContactoModel');

exports.index = async (req, res) =>{
    const contactos = await Contacto.buscarContactos();
    res.render('index', { contactos });
}