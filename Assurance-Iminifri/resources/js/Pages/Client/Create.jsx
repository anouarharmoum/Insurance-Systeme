import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        num_dossier: "",
        assure: "",
        prime: "",
        avance: "",
        cree_on: "",
        duree: "",
        duration_unit: 'months', // Default unit is days
        observation: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("client.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Assure
                </h2>
            }
        >
            <Head title="Create Assure" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={onSubmit}
                                className="p-4 sm:p-4 bg-white dark:bg-gray-800 shadow-sm:rounded-lg"
                            >
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="client_num_dossier"
                                        value="Numero De Dossier"
                                    />
                                    <TextInput
                                        id="client_num_dossier"
                                        type="text"
                                        name="num_dossier"
                                        value={data.num_dossier}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "num_dossier",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.client_num_dossier}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="client_assure"
                                        value="Assure Name"
                                    />
                                    <TextInput
                                        id="client_assure"
                                        type="text"
                                        name="assure"
                                        value={data.assure}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("assure", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="client_prime"
                                        value="Prime"
                                    />
                                    <TextInput
                                        id="client_prime"
                                        type="text"
                                        name="prime"
                                        value={data.prime}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("prime", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.client_prime}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="client_avance"
                                        value="Avance"
                                    />
                                    <TextInput
                                        id="client_avance"
                                        type="text"
                                        name="avance"
                                        value={data.avance}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("avance", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.client_avance}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="client_cree_on"
                                        value="Created at"
                                    />
                                    <TextInput
                                        id="client_cree_on"
                                        type="date"
                                        name="cree_on"
                                        value={data.cree_on}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("cree_on", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.client_cree_on}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="client_duree"
                                        value="Duree"
                                    />
                                    <div className="flex mt-1">
                                        <TextInput
                                            id="client_duree"
                                            type="number"
                                            name="duree"
                                            value={data.duree}
                                            className="mr-2 block w-full"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    duree: e.target.value,
                                                })
                                            }
                                        />
                                        <select
                                            value={data.duration_unit}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    duration_unit:
                                                        e.target.value,
                                                })
                                            }
                                            className="block appearance-none w-full border-gray-300 border rounded py-2 px-3"
                                        >
                                            <option value="months">Months</option>
                                            <option value="days">
                                             Days
                                            </option>
                                        </select>
                                    </div>
                                    <InputError
                                        message={errors.client_duree}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="client_observation"
                                        value="Observation"
                                    />
                                    <SelectInput
                                        id="client_observation"
                                        name="observation"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "observation",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Please Select Observation
                                        </option>
                                        <option value="ENC">ENC</option>
                                        <option value="ESP">ESP</option>
                                    </SelectInput>
                                    <InputError
                                        message={errors.client_observation}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-8 text-right">
                                    <Link
                                        href={route("client.index")}
                                        className=" bg-gray-700 py-1 px-3 text-gray-100 rounded shadow transition-all
                                    hover:bg-gray-900 mr-2"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        href={"client.store"}
                                        className=" bg-blue-700 py-1 px-3 text-gray-100 rounded shadow transition-all
                                    hover:bg-blue-900 mr-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
