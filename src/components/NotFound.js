import React from 'react';
import {Helmet} from 'react-helmet';

const NotFound = () => {
    return (
        
        <div className="notFound">
            <Helmet>
                <title>Not Found</title>
                <meta
                    name="description"
                    content="Page Not Found"
                />
            </Helmet>
            <div className="notFound__container">
                <h1 className="notFound__container__h1">404</h1>
                <p className="notFound__container__p">Oops! Request Page Not Found</p>
            </div>

        </div>
    )
}

export default NotFound
