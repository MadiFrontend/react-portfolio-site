import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
    <section id="experience">
        <h5>What Skils I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">intermediate</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4>JAVASCRIPT</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4>BOOTSTRAP</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4>TAILWIND</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                        <h4>REACT JS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
            </div>

            {/* END OF FRONTEND */}

            <div className="experience__backend">
            <h3>Backend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>NODE JS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>MONGO DB</h4>
                        <small className="text-light">intermediate</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                       <div>
                       <h4>PHP</h4>
                        <small className="text-light">Experienced</small>
                       </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>MY SQL</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>JAVA SPRING</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                            <h4> PYTHON</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
            
            </div>
        </div>
        </section>
    )
};

export default Experience;
