import React from 'react';
import  

const PrintDuree = ({ durees }) => {
    return (
        <div>
            <h1>Filtered Duree Data</h1>
            <div id="printableArea">
                {/* Your table and text inputs here */}
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
        </div>
    );
};

export default PrintDuree;
