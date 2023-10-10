import React from "react";
import DIsplayItem from "./DisplayItem";
import AppHeader from "./Layout/AppHeader";
import AppFooter from "./Layout/AppFooter";

const Home = () => {
    return (
        <>
            <AppHeader />
            <DIsplayItem />
            <AppFooter />
        </>
    )
}

export default Home;