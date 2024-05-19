import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {
    client_OBSERVATION_CLASS_MAP,
    client_OBSERVATION_TEXT_MAP,
} from "@/constants";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, clients, queryParams = null ,success}) {
    queryParams = queryParams || {};

    const searchFieldChange = (assure, value) => {
        if (value) {
            queryParams[assure] = value;
        } else {
            delete queryParams[assure];
        }
        const searchParamsPresent = Object.keys(queryParams).length > 0;
        router.get(route("client.index", queryParams));
        setSearchPerformed(searchParamsPresent);
    };
    const onKeyPress = (assure, e) => {
        if (e.key !== "Enter") return;
        searchFieldChange(assure, e.target.value);
    };

    const deleteClient=(client)=>{
        if(!window.confirm("Are you sure you want to delete the client?"))
            {
                return;
            }
        router.delete(route('client.destroy',client.id))
        
    }

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Clients
                </h2>
                <Link href={route('client.create')}className="bg-emerald-500 py-1 px-3 text-white
                 rounded shadow transition-all hover:bg bg-emerald-600">
                Add New
                </Link>

                </div>
            }
        >
            <Head title="Clients" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                       <div
                       className="bg-green-500 py-2 px-4 text-white rounded mb-4"
                       >
                        {success}
                       </div>

                    )}

                    
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
                                            router.get(route("client.index"))
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
                                        <th className="px-3 py-2">Num Dossier</th>
                                        <th className="px-3 py-2">Assure</th>
                                        <th className="px-3 py-2">Prime</th>
                                        <th className="px-3 py-2">Avance</th>
                                        <th className="px-3 py-2 ">Rest</th>
                                        <th className="px-5 py-2 ">Created at</th>
                                        <th className="px-3 py-2">Duree</th>
                                        <th className="px-6 py-2">Ended at</th>
                                        <th className="px-3 py-2">
                                            Observation
                                        </th>
                                        <th className="px-3 py-2 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2">
                                            <TextInput
                                                className="full-width"
                                                placeholder="Client Name"
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
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2">
                                            <SelectInput
                                                className="full-width"
                                                onChange={(e) =>
                                                    searchFieldChange(
                                                        "Observation",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select Payment
                                                </option>
                                                <option value="ESP">ESP</option>
                                                <option value="ENC">ENC</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.data.map((client) => (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            key={client.id}
                                        >
                                            <td className="px-3 py-2">
                                                {client.id}
                                            </td>
                                            <td className="px-3 py-2">
                                                {client.num_dossier}
                                            </td>
                                            <td className="px-3 py-3">
                                                {client.assure}
                                            </td>
                                            <td className="px-3 py-2">
                                                {client.prime}
                                            </td>
                                            <td className="px-3 py-2">
                                                {client.avance}
                                            </td>
                                            <td className="px-3 py-2">
                                                {client.rest}
                                            </td>
                                            <td className="px-3 py-2">
                                                {client.cree_on}
                                            </td>

                                            <td className="px-3 py-2">
                                                {client.duree}
                                            </td>

                                            <td className="px-3 py-2">
                                                {client.ended_at}
                                            </td>
                                           

                                            <td className="px-3 py-2">
                                                <span
                                                    className={
                                                        "px-2 py-1 rounded text-white text-nowrap " +
                                                        client_OBSERVATION_CLASS_MAP[
                                                            client.Observation
                                                        ]
                                                    }
                                                >
                                                    {
                                                        client_OBSERVATION_TEXT_MAP[
                                                            client.Observation
                                                        ]
                                                    }
                                                </span>
                                            </td>

                                            <td className="px-3 py-2 text-nowrap">
                                                <Link
                                                    href={route(
                                                        "client.edit",
                                                        client.id
                                                    )}
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={(e)=>deleteClient(client)}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <Pagination links={clients.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}