import React, { useState } from "react";

const Students = () => {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
        e.preventDefault();

        if (file) {
        fileReader.onload = function (event) {
            const text = event.target.result;
            csvFileToArray(text);
        };

        fileReader.readAsText(file);
        }
    };

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows.map(i => {
        const values = i.split(",");
        const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
        return obj;
        });

        setArray(array);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
        fileReader.onload = function (event) {
            const text = event.target.result;
            csvFileToArray(text);
        };

        fileReader.readAsText(file);
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
        <div style={{ textAlign: "center" }}>
        <h1>REACTJS CSV IMPORT EXAMPLE </h1>
        <form>
            <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
            />

            <button
            onClick={(e) => {
                handleOnSubmit(e);
            }}
            >
            IMPORT CSV
            </button>
        </form>

        <br />

        <table>
            <thead>
            <tr key={"header"}>
                {headerKeys.map((key) => (
                <th style={{color: '#000'}}>{key}</th>
                ))}
            </tr>
            </thead>

            <tbody>
            {array.map((item) => (
                <tr class="col-xs-4 text-left" style={{color: '#000', marginLeft: '8px'}} key={item.id}>
                {Object.values(item).map((val) => (
                    <td>{val}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Students;
