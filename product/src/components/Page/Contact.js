import React from "react";
import AppHeader from "../Layout/AppHeader";
import AppFooter from "../Layout/AppFooter";

const Contact = () => {
    return (
        <>
            <AppHeader />
            <div className="bg-white p-6 h-96">
                <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
                <p className="text-gray-700">
                    If you have any questions or need assistance, please feel free to
                    contact us.
                </p>
                <div className="mt-4">
                    <p className="text-gray-600">Email: contact@example.com</p>
                    <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div className="bg-white h-64"></div>
            <AppFooter />
        </>
    );
};

export default Contact;
