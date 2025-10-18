import React, { useState } from 'react';
import useApp from '../Hooks/useApp';
import AppCards from '../Components/AppCards';

const App = () => {
    const { apps, loading } = useApp();
    const [search, setSearch] = useState('');
    if (loading) return <p className='text-center py-10 text-5xl'>Loading...</p>;
    const convertToLowerCase = search.trim().toLocaleLowerCase();
    const searchedApps = convertToLowerCase ? apps.filter(app => app.title?.toLocaleLowerCase().includes(convertToLowerCase)) : apps;


    return (
        <div className='py-10 '>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='pt-5'>Explore All Apps on the Market developed by us. We code for Millions</p>

            </div>
            <div className='flex justify-between'>
                <h1><span className='font-bold'>({searchedApps.length})</span> App Found</h1>
                <label className="input">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
                </label>
            </div>
            {/* app  */}
            <div className='grid lg:grid-cols-4 gap-5 mt-5 lg:px-30 '>
                {
                    searchedApps.map(app => <AppCards key={app.id} app={app}></AppCards>)
                }

            </div>
        </div>
    );
};

export default App;