import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Index({ auth, durees, queryParams = null }) {
    queryParams = queryParams || {};
    const { data, links } = durees;
    const [start_date, setStartDate] = useState(queryParams.start_date || "");
    const [end_date, setEndDate] = useState(queryParams.end_date || "");

    const searchFieldChange = (assure, value) => {
        if (value) {
            queryParams[assure] = value;
        } else {
            delete queryParams[assure];
        }
        const searchParamsPresent = Object.keys(queryParams).length > 0;
        router.get(route("duree.index", queryParams));
        setSearchPerformed(searchParamsPresent);
    };
    const onKeyPress = (assure, e) => {
        if (e.key !== "Enter") return;
        searchFieldChange(assure, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQueryParams = { ...queryParams };
        if (start_date) {
            newQueryParams.start_date = start_date;
        } else {
            delete newQueryParams.start_date;
        }
        if (end_date) {
            newQueryParams.end_date = end_date;
        } else {
            delete newQueryParams.end_date;
        }
        router.get(route("duree.index", newQueryParams));
        setSearchPerformed(true);
    };
    // useEffect(() => {
    //     setStartDate(queryParams.start_date || '');
    //     setEndDate(queryParams.end_date || '');
    // }, [queryParams]);

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Durees
                    </h2>
                    <div className=" ">
                        <Link
                            className="bg-gray-500 py-1 px-3 text-white
                 rounded shadow transition-all hover:bg bg-gray-600 mx-3 "
                            onClick={() => window.print()}
                        >
                            Print
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Duree" />

            <div className="py-12">
                <div className="mb-6 flex justify-center items-center ">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="start_date">From:</label>
                        <input
                            type="date"
                            id="start_date"
                            className="mx-5"
                            value={start_date}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <label htmlFor="end_date">To:</label>
                        <input
                            type="date"
                            id="end_date"
                            className="mx-5"
                            value={end_date}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Filtre
                        </button>
                    </form>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {Object.keys(queryParams).length > 0 && (
                            <div className="mt-3 mr-2 text-right">
                                <a
                                    className="group relative inline-block focus:outline-none focus:ring"
                                    href="#"
                                >
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

                                    <span
                                        className="relative inline-block border-2 border-current px-8 py-2 text-sm font-bold uppercase tracking-widest"
                                        onClick={() =>
                                            router.get(route("duree.index"))
                                        }
                                    >
                                        Return
                                    </span>
                                </a>
                            </div>
                        )}
                        <div className="p-6 text-gray-900">
                        <div className="overflow-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">
                                            Num Dossier
                                        </th>
                                        <th className="px-3 py-2">Assure</th>
                                        <th className="px-3 py-2">Duree</th>
                                        <th className="px-3 py-2">
                                            Created at
                                        </th>
                                        <th className="px-3 py-2">Ended at</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2">
                                            <TextInput
                                                className="full-width"
                                                placeholder="Assuré Name"
                                                onBlur={(e) =>
                                                    searchFieldChange(
                                                        "assure",
                                                        e.target.value
                                                    )
                                                }
                                                onKeyPress={(e) =>
                                                    onKeyPress("assure", e)
                                                }
                                            />
                                        </th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {durees.data.map((duree) => (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            key={duree.id}
                                        >
                                            <td className="px-3 py-2">
                                                {duree.id}
                                            </td>
                                            <td className="px-3 py-2">
                                                {duree.client.num_dossier}
                                            </td>
                                            <td className="px-3 py-2">
                                                {duree.client.assure}
                                            </td>
                                            <td className="px-3 py-2">
                                                {duree.client.duree}
                                            </td>
                                            <td className="px-3 py-2">
                                                {duree.client.cree_on}
                                            </td>
                                            <td className="px-3 py-2">
                                                {duree.client.ended_at}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <Pagination links={links} />
                        </div>
                    </div>
                </div>
            </div>
            
        </Authenticated>
    );
}
