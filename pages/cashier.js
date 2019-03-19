import React, { Component } from 'react';
import MainLayout from "../components/Layout";
import CashierList from "../components/CashierList";

const CashierPage = () => {
    return (
        <MainLayout>
            <CashierList />
        </MainLayout>
    );
};

export default CashierPage;