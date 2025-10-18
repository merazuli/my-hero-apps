import React from 'react';
import { Link, useParams } from 'react-router';
import useApp from '../Hooks/useApp';
import { MdOutlineFileDownload } from "react-icons/md";
import { GiFlowerStar } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { updateList } from '../Utility/localStorage';

const AppDetails = () => {
    const { id } = useParams();
    const { apps } = useApp();
    const app = apps.find(p => String(p.id) === id);

    if (!app) return <p className="text-center text-xl mt-10">App not found...</p>;

    const { image, companyName, description, downloads, ratingAvg, title, size, reviews, ratings } = app;


    const chartData = ratings
        ?.map(r => ({ name: r.name, value: r.count }))
        ?.reverse();

    return (
        <div className="bg-slate-200 shadow-sm p-5 rounded-2xl mb-20">
            <div className="flex flex-col md:flex-row gap-5">
                <figure className="w-full md:w-1/3 flex justify-center items-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-[180px] h-[180px] rounded-xl object-cover"
                    />
                </figure>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p className="border-b border-slate-400 pb-2 mb-4">
                            Developed By: <span className="font-semibold">{companyName}</span>
                        </p>

                        <div className="grid grid-cols-3 gap-5 text-center">
                            <div>
                                <MdOutlineFileDownload className="text-3xl text-green-600 mx-auto" />
                                <h3>Download</h3>
                                <h1 className="text-2xl font-bold">{downloads}M</h1>
                            </div>
                            <div>
                                <GiFlowerStar className="text-3xl text-yellow-600 mx-auto" />
                                <h3>Average Rating</h3>
                                <h1 className="text-2xl font-bold">{ratingAvg}</h1>
                            </div>
                            <div>
                                <BiLike className="text-3xl text-purple-600 mx-auto" />
                                <h3>Total Reviews</h3>
                                <h1 className="text-2xl font-bold">{reviews}K</h1>
                            </div>
                        </div>


                    </div>

                    <div className="mt-6">
                        <Link to="/installation" onClick={() => updateList(app)} className="btn bg-green-600 px-10 text-white">
                            Install Now ({size} MB)
                        </Link>
                    </div>
                </div>
            </div>

            {/* Chart */}
            {chartData && chartData.length > 0 && (
                <div className="mt-10 w-full h-[300px] border-t-2 pt-5">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            layout="vertical"
                            data={ratings}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis type="number" />
                            <YAxis
                                dataKey="name"
                                type="category"
                                scale="band"
                                reversed={true}
                            />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" barSize={20} fill="#FF8811" />
                        </ComposedChart>
                    </ResponsiveContainer>

                </div>
            )}
            <div className='py-10'>
                <h1 className='font-bold text-xl mb-5 text-white'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
