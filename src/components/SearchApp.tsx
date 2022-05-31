import React from "react";
import { Routes } from "../Routes";
import { Header } from "./Header/Header";

export function SearchApp(): React.ReactElement {
    return <div>
        <Header />
        <Routes />
    </div>;
}
