import Footer from "@/Components/Footer";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { statu_STATUS_CLASS_MAP, statu_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, status, queryParams = null }) {
    queryParams = queryParams || {};
    const { data, links } = status;

    const searchFieldChange = (assure, value) => {
        if (value) {
            queryParams[assure] = value;
        } else {
            delete queryParams[assure];
        }
        const searchParamsPresent = Object.keys(queryParams).length > 0;
        router.get(route("status.index", queryParams));
        setSearchPerformed(searchParamsPresent);
    };
    const onKeyPress = (assure, e) => {
        if (e.key !== "Enter") return;
        searchFieldChange(assure, e.target.value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-customBlue leading-tight">
                        Status
                    </h2>
                </div>
            }
        >
            <Head title="status" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {Object.keys(queryParams).length > 0 && (
                        <div className="-mt-6 mb-5 mr-2 text-right">
                            <Link href={route("status.index")}>
                                <i className="fa-sharp fa-solid fa-arrow-right-long fa-beat customBlue" />
                                <span className="ml-2">Back</span>
                            </Link>
                        </div>
                    )}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-100  uppercase bg-customGray  dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-2">ID</th>
                                            <th className="px-3 py-2">
                                                Num Dossier
                                            </th>
                                            <th className="px-3 py-2">
                                                Assure
                                            </th>
                                            <th className="px-3 py-2">Prime</th>
                                            <th className="px-3 py-2">
                                                Avance
                                            </th>
                                            <th className="px-3 py-2 ">Rest</th>
                                            <th className="px-5 py-2 ">
                                                Status
                                            </th>
                                            <th className="px-5 py-2 ">
                                                Created at
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-customGray2 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-2"></th>
                                            <th className="px-3 py-2"></th>
                                            <th className="px-3 py-2">
                                                <TextInput
                                                    className="full-width"
                                                    placeholder="assuré Name"
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
                                            <th className="px-3 py-2">
                                                <SelectInput
                                                    className="full-width"
                                                    onChange={(e) =>
                                                        searchFieldChange(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="completed">
                                                        COMPLETED
                                                    </option>
                                                    <option value="pending">
                                                        PENDING
                                                    </option>
                                                </SelectInput>
                                            </th>
                                            <th className="px-3 py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {status.data.map((statu) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                key={statu.id}
                                            >
                                                <td className="px-3 py-2">
                                                    {statu.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {statu.client.num_dossier}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {statu.client.assure}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {statu.client.prime}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {statu.client.avance}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {statu.client.rest}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <span
                                                        className={
                                                            "inline-block px-1 py-1 rounded text-white text-nowrap text-center w-20 " +
                                                            statu_STATUS_CLASS_MAP[
                                                                statu.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            statu_STATUS_TEXT_MAP[
                                                                statu.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2">
                                                    {statu.client.cree_on}
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
            <Footer/>
        </Authenticated>
    );
}
