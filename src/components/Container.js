import React from "react";
import {Header} from "./Header";
import {OnProccess} from "./OnProccess";
import {Completed} from "./Completed";

export const Container = (props) => {

    return (
        <div className="container">
            <Header/>
            <OnProccess/>
            <Completed/>
        </div>
    )
}