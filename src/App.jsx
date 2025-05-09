import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./Styless/App.css"

const App = () => {
    <MainLayout>
        <Outlet />
    </MainLayout>
}

export default App;