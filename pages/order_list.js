import React, { Component } from 'react';
import MainLayout from "../components/Layout";
import OrderList from "../components/OrderList";
import AuthHOC from "../services/HOCs/AuthHOC";

const OrderListPage = () => {
    return (
        <MainLayout>
            <OrderList />
        </MainLayout>
    );
};

export default AuthHOC(OrderListPage);