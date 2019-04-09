import React from "react";
import "./Dispositivos.scss";

const Dispositivos = () => {
    return (
        <section className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center mx-auto text-white py-4">
            <p className="col-12 text-uppercase small text-justify">
                Dispositivos<hr className="horizontalRule" />
            </p>
            <h4 className="mt-5 mx-2 text-justify">
                <p className="font-weight-normal">
                    O melhor catálogo. Em todas as telas.
                </p>
            </h4>

            <div className="mt-3 ">
                <img src="https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547" className="rounded-image img-fluid" alt="imagem" />
                <p className="text-justify mt-3">Assista na TV.</p>
                <div className="row">
                    <div className="col-6 text-justify">
                        <p><span className="text-dark-gray">&#10003;</span> Smart TVs</p>
                        <p><span className="text-dark-gray">&#10003;</span> Xbox One</p>
                </div>
                    <div className="col-6 text-justify">
                        <p><span className="text-dark-gray">&#10003;</span> Chromecast</p>
                </div>
                </div>
            </div>


            <div className="mt-3">
                <img src="https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547" className="rounded-image img-fluid" alt="imagem" />
                <p className="mt-3 text-justify">Ou onde quiser</p>
                <div className="row">
                    <div className="col-6 text-justify">
                        <p><span className="text-dark-gray">&#10003;</span> Android</p>
                        <p><span className="text-dark-gray">&#10003;</span> iOS</p>
                </div>
                    <div className="col-6 text-justify">
                        <p><span className="text-dark-gray">&#10003;</span> PC</p>
                </div>
                </div>
            </div>

        </section>
    );
};

export default Dispositivos;