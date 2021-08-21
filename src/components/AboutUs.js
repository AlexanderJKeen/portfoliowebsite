import React from "react";
import aurthor from "../profilepic.jpg";

const AboutUs = () => {
    return (
        <article className="container py-5">
            <section className="row">
                <section className="col-lg-6 col-xm-12">
                    <section className="photo-wrap mb-5">
                        <img className="profile-img" src={aurthor} alt="Company employees"/>
                    </section>
                </section>
                <section className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Us</h1>
                    <p>
                        Hi my name is Alexander and I create bespoke websites using reactJS Click the image to find out more.
                    </p>
                </section>
            </section>
        </article>
    )
}

export default AboutUs
