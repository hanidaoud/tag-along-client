import React from "react";

const Logs = (source, log_id, lname, fname, status, day, hour) => {
    //const lista = Array(100).fill(1)
    return (
        <div className="ml-20 mt-20 h-max py-12 px-12">
            <table className="w-tab shadow-2xl">
                <thead className="shadow-md text-taPlatinum">
                    <tr className="h-12">
                        <th className="px-8 w-1/5 border-r-0">Nom</th>
                        <th className="px-8 w-1/5 border-r-0">Prenom</th>
                        <th className="px-8 w-1/5 border-r-0">Status</th>
                        <th className="px-8 w-1/5 border-r-0">Date</th>
                        <th className="px-8 w-1/5">Heure</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {source.map(x => <Tab key={log_id} nom={lname} prenom={fname} etat={status} date={day} heure={hour} />)}

                </tbody>
            </table>
        </div>
    )
}

const Tab = ({nom, prenom, etat, date, heure}) => {
    return (
        <tr className={(etat == 1 ? 
            "taLog hover:bg-taGreen dark:hover:bg-taGreen group" : 
            "taLog hover:bg-taRed dark:hover:bg-taRed group")}>
            <td className="px-8 py-auto border-r-0">{nom}</td>
            <td className="px-8 py-auto border-r-0">{prenom}</td>
            <td className="px-8 py-auto border-r-0 text-sm group-hover:text-base">
                <div className={(etat == 1) ? "w-min px-2 py-0.5 rounded-3xl text-white bg-taGreen" : "w-min px-2 py-0.5 rounded-3xl text-white bg-taRed"}> 
                    {etat}
                </div>
            </td>
            <td className="px-8 py-auto border-r-0">{date}</td>
            <td className="px-8 py-auto ">{heure}</td>
        </tr>
    )
}

export default Tab;