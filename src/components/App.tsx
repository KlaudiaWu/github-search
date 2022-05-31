import React from "react";
import { Routes } from "../Routes";
import { Header } from "./Header/Header";

export function App(): React.ReactElement {
    return <div>
        <Header />
        <Routes />
    </div>;
}
