import React from "react";
import AppHeader from "../Layout/AppHeader";
import AppFooter from "../Layout/AppFooter";

const About = () => {
    return (
        <>
            <AppHeader />
            <div className="bg-white p-6 h-96">
                <h1 className="text-2xl font-semibold mb-4">About Us</h1>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                    nulla nunc. Donec interdum fermentum ligula, nec tincidunt justo
                    vestibulum ut.
                </p>
            </div>
            <div className="bg-white h-64"></div>
            <AppFooter />
        </>
    );
};

export default About;
