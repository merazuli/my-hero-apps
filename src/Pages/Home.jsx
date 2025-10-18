import React from 'react';
import useApp from '../Hooks/useApp';
import AppCards from '../Components/AppCards';

const Home = () => {
    const { apps } = useApp();
    const trendingApps = apps.slice(0, 8);
    return (
        <div className='bg-[#D2D2D2]'>
            <div className='text-center '>
                <h1 className='text-3xl font-bold py-10'> We Build <br /><span className='text-purple-600'>Productive</span> Apps</h1>
                <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='space-x-[100px] pt-8'>
                    <button className='btn btn-outline'>Google Play</button>
                    <button className='btn btn-outline'>App Store</button>
                </div>
                <img className='mx-auto mt-10' src="https://i.ibb.co.com/Dgb0zs04/hero.png" alt="" />
                <div className='bg-purple-500 text-white font-bold'>
                    <h1 className='text-3xl py-5'>Trusted by Millions, Built for You</h1>
                    <div className='flex justify-around lg:px-50 py-10 gap-5'>
                        <div>
                            <p>Total Downloads</p>
                            <h1 className='text-4xl'>29.6M</h1>
                            <p>21% more than last month</p>
                        </div>
                        <div>
                            <p>Total Review</p>
                            <h1 className='text-4xl'>906</h1>
                            <p>40 % more than last month</p>
                        </div>
                        <div>
                            <p>Active Apps </p>
                            <h1 className='text-4xl'>132 +</h1>
                            <p>31 more will Launch</p>
                        </div>

                    </div>
                </div>
                {/* trending app  */}
                <div className='py-10 max-w-7xl mx-auto'>
                    <h1 className='text-3xl font-bold'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                    <div className='grid lg:grid-cols-4 gap-8 pt-10'>
                        {
                            trendingApps.map(app => <AppCards key={app.id} app={app}></AppCards>)
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;