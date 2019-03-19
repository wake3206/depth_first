import React, { Component } from 'react';
import MainLayout from "../components/Layout";
import OrderList from "../components/OrderList";

const OrderListPage = () => {
    return (
        <MainLayout>
            <OrderList />
        </MainLayout>
    );
};

export default OrderListPage;