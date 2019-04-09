import React from 'react';
import './Register.scss';

const Register = () => {
    return (
        <section className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center mx-auto py-3 h-100">
            <p className="text-justify small">
                Para começar a usar seus 7 dias grátis precisamos de alguns dados.
            </p>

            <form classname="form-group" action="#/RegisterSuccess/" method="PUT">
                <div className="form-group text-justify">
                    <label for="nome" className="form-label small">Nome</label>
                    <input className="form-input" type="text" name="nome" id="email" placeholder="Nome" required/>
                </div>

                <div className="form-group text-justify">
                    <label for="email" className="form-label small">email</label>
                    <input className="form-input" type="email" name="email" id="email" placeholder="EMAIL" />
                </div>

                <div className="form-group text-justify">
                    <label for="cpf" className="form-label small">cpf</label>
                    <input className="form-input" type="text" name="cpf" id="cpf" placeholder="CPF" />
                </div>


                <div className="form-group text-justify">
                    <label for="datanasc" className="form-label small">Data de nascimento</label>
                    <input className="form-input" type="text" name="datanasc" id="datanasc" placeholder="Data de Nascimento" />
                </div>


                <div className="form-group text-justify">
                    <label for="estado" className="form-label small">estado</label>
                    <input className="form-input" type="text" name="estado" id="estado" placeholder="Estado" />
                </div>


                <div className="form-group text-justify">
                    <label for="cidade" className="form-label small">cidade</label>
                    <input className="form-input" type="text" name="cidade" id="cidade" placeholder="Cidade" />
                </div>

                <button type="submit" className="btn btn-secondary btn-lg rounded-btn mt-3 text-center">Enviar meus dados &#8594;</button>
            </form>

        </section>
    );
};

export default Register;