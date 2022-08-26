/*
nome
sobrenome
email
telefone
*/

import validator from "validator";

export default class Cadastro{
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
            this.validate(e.target);
        });
    }

    cleanMessages(el){
        const nomeMessage = el.querySelector('.error-name');
        const emailMessage = el.querySelector('.error-email');
        const phoneMessage = el.querySelector('.error-phone');
        const emailPhoneMessage = document.querySelector('.error-email-phone');

        console.log(emailPhoneMessage);
        
        if(nomeMessage){
            nomeMessage.remove();
        }

        if(emailMessage){
            emailMessage.remove();
        }

        if(phoneMessage){
            phoneMessage.remove();
        }

        if(emailPhoneMessage){
            emailPhoneMessage.remove()
        }
        
    }

    validate(el){
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const phoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        console.log('novo run');

        if(nomeInput.value === ''){
            const message = '<p class="error-name" style="color: red;">"Nome" é um campo obrigatório</p>';
            nomeInput.insertAdjacentHTML('beforebegin', message);
            error = true;
        }

        if(emailInput.value === ''  && phoneInput.value === ''){
            const message = '<p class="error-email-phone" style="color: red;">Ao menos um contacto deve existir: email ou telefone.</p>';
            el.insertAdjacentHTML('beforebegin', message);
            error = true;
        }else{
            if(emailInput.value !== '' && !validator.isEmail(emailInput.value)){
                const message = '<p class="error-email" style="color: red;">email inválido</p>';
                emailInput.insertAdjacentHTML('beforebegin', message);
                error = true;
            }
    
            if(phoneInput.value !== '' && typeof(phoneInput.value) !== 'number'){
                const message = '<p class="error-phone" style="color: red;">Telefone inválido</p>';
                phoneInput.insertAdjacentHTML('beforebegin', message);
                error = true;
            }
        }
        
        if(!error) el.submit();
    }
}