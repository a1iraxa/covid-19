import React from "react";

const Loader = () => {

    return (
        <section className="loader">
            <div className="container">
                <div className="row">
                    <div className="col s6 offset-s6 m4 offset-m6">
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-origan">
                                <div className="circle-clipper left">
                                <div className="circle"></div>
                                </div><div className="gap-patch">
                                <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                <div className="circle"></div>
                                </div>
                            </div>

                            <div className="spinner-layer spinner-red">
                                <div className="circle-clipper left">
                                <div className="circle"></div>
                                </div><div className="gap-patch">
                                <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                <div className="circle"></div>
                                </div>
                            </div>

                            <div className="spinner-layer spinner-yellow">
                                <div className="circle-clipper left">
                                <div className="circle"></div>
                                </div><div className="gap-patch">
                                <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                <div className="circle"></div>
                                </div>
                            </div>

                            <div className="spinner-layer spinner-green">
                                <div className="circle-clipper left">
                                <div className="circle"></div>
                                </div><div className="gap-patch">
                                <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Loader;
