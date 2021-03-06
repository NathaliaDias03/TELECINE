import React from 'react';
import './HomeText.scss';

const HomeText = () => {
    return (    
            <section className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center mx-auto py-3">
                <h2 className="mx-2">
                    <p>
                        Filmes exclusivos dos maiores estúdios, é <span className="text-gray">só dar um play</span>
                    </p>
                </h2>
                <p className="font-weight-normal">Curta por 7 dias grátis, assine por R$37,90/mês e cancele quando quiser.</p>
            </section>
    );
};

export default HomeText;