import React, { Component } from 'react';
import MainLayout from "../components/Layout";
import CashierList from "../components/CashierList";
import AuthHOC from "../services/HOCs/AuthHOC";

const CashierPage = () => {
    return (
        <MainLayout>
            <CashierList />
        </MainLayout>
    );
};

export default AuthHOC(CashierPage);