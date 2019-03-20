import React, { Component } from 'react';
import MainLayout from "../components/Layout";
import Home from "../components/Home";
import AuthHOC from "../services/HOCs/AuthHOC";

const index = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    );
};

export default AuthHOC(index);