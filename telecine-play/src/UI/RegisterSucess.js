import React from 'react';
import './RegisterSuccess.scss';

const RegisterSuccess = () => {
    return (    
            <section className="col-lg-8 col-md-8 col-sm-8 col-xs-8 mx-auto text-center py-3 h-75 registerSection d-table">
            <div className="h-100 d-table-cell align-middle">
                <h2 className="">
                    Falta Pouco!
                </h2>
                <p className="small">
                    Em instantes você receberá seu login e senha através
                    do email cadastrado para aproveitar seus <span className="text-gray">
                        7 dias grátis
                    </span>
                </p>
            </div>
            </section>
    );
};

export default RegisterSuccess;