import React, { useState } from 'react';
import InstallCard from '../Components/InstallCard';
import { loadInstallApp } from '../Utility/localStorage';

const Installation = () => {
    const [installApps, setInstallApps] = useState(() => loadInstallApp());

    return (
        <div className='py-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='pt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <h1><span>({installApps.length})</span>App found</h1>
                <label className='form-control w-full max-w-xs'>
                    <select className='select select-border' value="" >
                        <option value="none">Sort By Size</option>
                        <option value="price-asc">Low-&gt;High</option>
                        <option value="price-desc">High-&gt;Low</option>

                    </select>
                </label>

            </div>
            {

                installApps.map(app => <InstallCard key={app.id} app={app}></InstallCard>)
            }
        </div>
    );
};

export default Installation;











