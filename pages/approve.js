import React, { Component } from 'react';
import MainLayout from "../components/Layout";
import ApproveList from "../components/ApproveList";
import AuthHOC from "../services/HOCs/AuthHOC";

const ApprovePage = () => {
    return (
        <MainLayout>
            <ApproveList />
        </MainLayout>
    );
};

export default AuthHOC(ApprovePage);