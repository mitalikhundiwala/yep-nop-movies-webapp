import React from 'react';
import './loading.page.scss';
import loaderImg from '../../images/loader.gif';

const LoadingPage = () => (
    <div className="page--loading d-flex justify-content-center align-items-center">
        <img alt="Loading ..." className="page--loading__loader" src={loaderImg} />
    </div>
);

export default LoadingPage;
