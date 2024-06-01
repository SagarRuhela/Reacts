import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const { id } = useParams();
    return <div className="bg-slate-100 left-7 right-12 text-center">
        <h1 >User:{id}</h1>
    </div>
}