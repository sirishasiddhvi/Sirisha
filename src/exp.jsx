import { useState, useEffect } from 'react';

 export function Tablex() {
    const [data, setData] = useState([
       "bjhbjb","nuhnj","bhhbjhb"
    ])
    const [edit, setEdit] = useState(null);

    function handleClick(index) {
        setEdit(index);
    }

    function handleChange(e, index) {
        let newData = [...data];
        newData[index] = e.target.value;
        setData(newData);
    }

    function handleBlur(e, index) {
        setEdit(null);
    }

    useEffect(() => {
        // persist data to database or other storage
    }, [data])

    return (
        <table>
            <tbody>
                {data.map((val, index) => (
                    <tr key={index}>
                        <td onClick={() => handleClick(index)}>
                            {edit === index ? (
                                <input
                                    type="text"
                                    value={val}
                                    onChange={e => handleChange(e, index)}
                                    onBlur={e => handleBlur(e, index)}
                                />
                            ) : (
                                    val
                                )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}