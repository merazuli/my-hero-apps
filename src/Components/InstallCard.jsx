import React, { useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { GiFlowerStar } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import { handleRemoveUnInstall, loadInstallApp } from '../Utility/localStorage';


const InstallCard = ({ app }) => {
    const [installApps, setInstallApps] = useState(() => loadInstallApp());
    const { image, title, downloads, ratingAvg, reviews, id } = app;

    const handleUninstall = (id) => {
        handleRemoveUnInstall(id);
        setInstallApps(prev => prev.filter(p => p.id !== id));

    }

    return (
        <div className='flex justify-between bg-slate-100  items-center py-2 px-10 mt-10 shadow-md'>
            <div className="card card-side  h-[100px] ">
                <figure>
                    <img className='h-[80px] rounded-xl'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-around items-center gap-5 '>
                        <div>
                            <MdOutlineFileDownload className="text-xl text-green-600 mx-auto" />
                            <h1 className="">{downloads}M</h1>
                        </div>
                        <div>
                            <GiFlowerStar className="text-xl text-yellow-600 mx-auto" />
                            <h1 className="">{ratingAvg}</h1>
                        </div>
                        <div className=''>
                            <BiLike className="text-xl text-purple-600 mx-auto" />
                            <h1 className="">{reviews}K</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <button onClick={() => handleUninstall(id)} className="btn bg-green-600 text-white">UnInstall</button>
            </div>
        </div>
    );
};

export default InstallCard;