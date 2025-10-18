import React from 'react';
import { MdFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const AppCards = ({ app }) => {
    const { image, title, downloads, id, ratings } = app;
    return (
        <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out rounded-md">
            <Link to={`/appDetails/${id}`}>
                <figure>
                    <img className='w-full h-[150px] object-cover rounded'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions text-center  justify-between">
                        <button className="btn text-green-600 w-[50px]  h-[30px]"><span><MdFileDownload /></span>{downloads}</button>
                        <button className="btn text-yellow-600 w-[50px]  h-[30px]"><span><FaStar /></span>{ratings.length}</button>
                    </div>
                </div></Link>
        </div>
    );
};

export default AppCards;