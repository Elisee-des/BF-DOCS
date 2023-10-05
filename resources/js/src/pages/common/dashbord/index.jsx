import React from "react";
import { useParams } from "react-router-dom";

function index() {
    const { idUniversite } = useParams();
    console.log("idUniversite->", idUniversite);
    return <>Dashboard</>;
}

export default index;
