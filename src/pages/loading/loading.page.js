import React from 'react';
import './loading.page.scss';

const LoadingPage = () => (
    <div className="page--loading d-flex justify-content-center align-items-center">
        <img alt="Loading ..." className="page--loading__loader" src="/images/loader.gif" />
    </div>
);

export default LoadingPage;
