import React from "react";
import Typed from "react-typed";
export const Header = () => {
    return (
        <article className="header-wrapper">
            <section className="main-info">
                <h1>Web development and websites promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Database Administration", "PowerBI Work", "IT Consultantcy"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </section>
            
        </article>
    )
}

export default Header;
