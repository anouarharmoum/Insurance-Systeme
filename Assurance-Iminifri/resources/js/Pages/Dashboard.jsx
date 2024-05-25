import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import FilterDropdown from "@/Components/FilterDropdown";
import "../../css/fontAwesome/css/all.min.css"
import { useState } from 'react';

export default function Dashboard({ auth, totalClients, totalAvance, totalCompleted, totalENC, totalRespererInsurance, totalRest, totalPending, totalESP }) {
    const [filter, setFilter] = useState('today');

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
        // Add logic to fetch data based on the selected filter
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-customBlue leading-tight">Dashboard</h2>
                    <FilterDropdown onSelect={handleFilterSelect} />
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-users"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total Clients</h5>
                                    <p className="text-2xl font-bold">{totalClients}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-money-bill-wave"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total Avance</h5>
                                    <p className="text-2xl font-bold">${totalAvance}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total Completed</h5>
                                    <p className="text-2xl font-bold">{totalCompleted}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-receipt"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total ENC</h5>
                                    <p className="text-2xl font-bold">{totalENC}</p>
                                </div>
                            </div>
                        </div>

                        {/* Second row */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-users"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total Resperer Insurance</h5>
                                    <p className="text-2xl font-bold">{totalRespererInsurance}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-money-bill-wave"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total Rest</h5>
                                    <p className="text-2xl font-bold">${totalRest}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total Pending</h5>
                                    <p className="text-2xl font-bold">{totalPending}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-customBlue text-white">
                                    <i className="fa-solid fa-receipt"></i>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">Total ESP</h5>
                                    <p className="text-2xl font-bold">{totalESP}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
