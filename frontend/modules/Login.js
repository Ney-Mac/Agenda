import validator from "validator";

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            e.preventDefault();
            this.cleanMessages(e.target);
            this.validate(e);
        });
    }
    cleanMessages(el){
        const emailMessage = el.querySelector('.error-email');
        const passwordMessage = el.querySelector('.error-password');

        if(emailMessage){
            emailMessage.remove();
        }
        if(passwordMessage){
            passwordMessage.remove();
        }
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="senha"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)){
            const message = '<p class="error-email" style="color: red;">email inválido</p>';
            emailInput.insertAdjacentHTML('beforebegin', message);
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            const message = '<p class="error-password" style="color: red;">Senha precisa ter entre 3 e 50 caracteres</p>';
            passwordInput.insertAdjacentHTML('beforebegin', message);
            error = true;
        }
        
        if(!error) el.submit();
    }
}