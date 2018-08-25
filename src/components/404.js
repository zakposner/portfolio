import React, { Component } from 'react';

const Page404 = props => {
    return (
        <div className="container text-center page-not-found">
            <h2 className="page-title">404<br/>This page was not meant for you.</h2>
            <img src="../../assets/img/404.png" alt=""/>
        </div>
    )
}

export default Page404;