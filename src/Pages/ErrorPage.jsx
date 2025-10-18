import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='w-[400px] mx-auto '>
                <img className=' mt-20' src="https://i.ibb.co.com/DD3ywm7Z/error-404.png" alt="" />
                <h1 className='text-2xl text-center'>Oops,Page Not Found</h1>
                <p className='text-center'>The page you are looking for is not available.</p>
                <Link to="/app" className='btn btn-primary ml-40 mb-5'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;