import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

//Login
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();

//Contacto
import Contacto from './modules/Contacto';

const editContacto = new Contacto('.form-edit-contacto');
const cadastroContacto = new Contacto('.form-cadastra-contacto');

editContacto.init();
cadastroContacto.init();


