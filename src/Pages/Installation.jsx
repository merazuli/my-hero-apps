import React, { useState } from 'react';
import { handleRemoveUnInstall, loadInstallApp } from '../Utility/localStorage';
import { MdOutlineFileDownload } from 'react-icons/md';
import { GiFlowerStar } from 'react-icons/gi';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const Installation = () => {
    const [installApps, setInstallApps] = useState(() => loadInstallApp());
    const [sortOrder, setSortOrder] = useState('');
    // console.log(installApps)

    if (!installApps.length) return <p className='text-3xl text-red-600 font-bold text-center my-78'> No Data Available Here </p>
    const sortItems = () => {
        if (sortOrder === "size-asc") {
            return [...installApps].sort((a, b) => a.size - b.size)

        }
        else if (sortOrder === "size-desc") {
            return [...installApps].sort((a, b) => b.size - a.size)
        }
        else {
            return installApps
        }
    }

    const handleUninstall = (id) => {
        handleRemoveUnInstall(id);
        setInstallApps(prev => prev.filter(p => p.id !== id));
        return Toastify({
            text: "App Uninstall Successfully!",
            duration: 2000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();

    }

    return (
        <div className=''>
            <div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                    <p className='pt-5'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between'>
                    <h1><span>({installApps.length})</span>App found</h1>
                    <label className='form-control w-full max-w-xs'>
                        <select value={sortOrder} className='select select-border' onChange={(e) => setSortOrder(e.target.value)} >
                            <option value="none">Sort By Size</option>
                            <option value="size-asc">Low-&gt;High</option>
                            <option value="size-desc">High-&gt;Low</option>

                        </select>
                    </label>

                </div>
            </div>
            <div>
                {

                    sortItems().map(app => <div key={app.id} className='flex justify-between bg-slate-100  items-center py-2 px-10 mt-10 shadow-md'>
                        <div className="card card-side  h-[100px] ">
                            <figure>
                                <img className='h-[80px] rounded-xl'
                                    src={app.image}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{app.title}</h2>
                                <div className='flex justify-around items-center gap-5 '>
                                    <div>
                                        <MdOutlineFileDownload className="text-xl text-green-600 mx-auto" />
                                        <h1 className="">{app.downloads}M</h1>
                                    </div>
                                    <div>
                                        <GiFlowerStar className="text-xl text-yellow-600 mx-auto" />
                                        <h1 className="">{app.ratingAvg}</h1>
                                    </div>
                                    <div className=''>
                                        <h1 className="font-semibold">{app.size}MB</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button onClick={() => handleUninstall(app.id)} className="btn bg-green-600 text-white">UnInstall</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Installation;











