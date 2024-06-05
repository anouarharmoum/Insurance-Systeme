import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import "../../../css/fontAwesome/css/all.min.css";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import {client_OBSERVATION_CLASS_MAP,client_OBSERVATION_TEXT_MAP} from "@/constants";
import { Head, Link, router } from "@inertiajs/react";
import Footer from "@/Components/Footer";

function MyComponent() {
    return (
        <div>
            <BeakerIcon className="size-6 text-blue-500" />
            <p>...</p>
        </div>
    );
}

export default function Index({ auth, clients, queryParams = null, success }) {
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

    const deleteClient = (client) => {
        if (!window.confirm("Are you sure you want to delete the client?")) {
            return;
        }
        router.delete(route("client.destroy", client.id));
    };
    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("client.index", queryParams));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-customBlue leading-tight">
                        Clients
                    </h2>
                    <Link
                        href={route("client.create")}
                        className=" bg-customBlue py-1 px-3 text-white
                 rounded shadow transition-all hover:bg-customBlue"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Clients" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-green-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    {Object.keys(queryParams).length > 0 && (
                        <div className="-mt-6 mb-5 mr-2 text-right">
                            <Link href={route("client.index")}>
                                <i className="fa-sharp fa-solid fa-arrow-right-long fa-beat customBlue" />
                                <span className="ml-2">Back</span>
                            </Link>
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-100 uppercase bg-customGray  dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("id")
                                                }
                                                className="px-3 py-2"
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    ID
                                                    <div>
                                                        <ChevronUpIcon
                                                            className={
                                                                "w-4" +
                                                                (queryParams.sort_field ===
                                                                    "id" &&
                                                                queryParams.sort_direction ===
                                                                    "asc"
                                                                    ? "text-black"
                                                                    : "")
                                                            }
                                                        />
                                                        <ChevronDownIcon
                                                            className={
                                                                "w-4" +
                                                                (queryParams.sort_field ===
                                                                    "id" &&
                                                                queryParams.sort_direction ===
                                                                    "desc"
                                                                    ? "text-black"
                                                                    : "")
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("num_dossier")
                                                }
                                                className="px-3 py-2"
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Num Dossier
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("assure")
                                                }
                                                className="px-3 py-2"
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Assure
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("prime")
                                                }
                                                className="px-3 py-2"
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Prime
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("avance")
                                                }
                                                className="px-3 py-2"
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Avance
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("rest")
                                                }
                                                className="px-3 py-2 "
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Rest
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("cree_on")
                                                }
                                                className="px-5 py-2 "
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Created at
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("duree")
                                                }
                                                className="px-3 py-2"
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Duree
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th
                                                onClick={(e) =>
                                                    sortChanged("ended_at")
                                                }
                                                className="px-6 py-2"
                                            >
                                                <div className="flex items-center justify-between gap-1 cursor-pointer">
                                                    Ended at
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="px-3 py-2">
                                                Observation
                                            </th>
                                            <th className="px-3 py-2 text-right">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-customGray2 dark:bg-customGray2 dark:text-gray-400 border-b-2 border-gray-500">
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
                                                    <option value="ESP">
                                                        ESP
                                                    </option>
                                                    <option value="ENC">
                                                        ENC
                                                    </option>
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
                                                            "inline-block px-1 py-1 rounded text-white text-nowrap text-center w-20 " +
                                                            client_OBSERVATION_CLASS_MAP[
                                                                client
                                                                    .Observation
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            client_OBSERVATION_TEXT_MAP[
                                                                client
                                                                    .Observation
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
                                                        onClick={(e) =>
                                                            deleteClient(client)
                                                        }
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
            <Footer />
        </Authenticated>
    );
}
