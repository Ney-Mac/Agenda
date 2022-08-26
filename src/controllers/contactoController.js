const Contacto = require('../models/ContactoModel');

exports.index = (req, res) =>{
    res.render('contacto', {
        contacto: {}
    });
}

exports.register = async (req, res) =>{
    try{
        const contacto = new Contacto(req.body);
        await contacto.register();
        
        if(contacto.errors.length > 0){
            req.flash('errors', contacto.errors);
            req.session.save(() => res.redirect('/contacto/'));
            return;
        }

        req.flash('success', 'Contacto registrado com sucesso.');
        req.session.save(() => res.redirect(`/contacto/${contacto.contacto._id}`));
        
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.editIndex = async (req, res) => {
    try{
        if(!req.params.id) return res.render('404');

        const contacto = await Contacto.buscaPorId(req.params.id);
        if(!contacto) return res.render('404');
    
        res.render('contacto', { contacto });
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.edit = async (req, res) => {
    try{
        if(!req.params.id) return res.render('404');

        const contacto = new Contacto(req.body);
        await contacto.edit(req.params.id);

        if(contacto.errors.length > 0){
            req.flash('errors', contacto.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }

        req.flash('success', 'Contacto editado com sucesso.');
        req.session.save(() => res.redirect(`/contacto/${contacto.contacto._id}`));
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.delete = async (req, res) =>{
    try{
        if(!req.params.id) return res.render('404');

        const contacto = await Contacto.delete(req.params.id);
        if(!contacto) return res.render('404');
    
        req.flash('success', 'Contacto apagado com sucesso.');
        req.session.save(() => res.redirect('back'));
        return;
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}