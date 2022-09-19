import React, { useEffect, useState } from 'react';



const Uicomponent = () => {
    const [data, setData] = useState([])


    //send data to backend
    fetch("https://demo2211087.mockable.io/mock", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title: 'notary' })
    }).then(response => response.json())
        .then(datas => (datas))
    // console.log(data)

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                // store Data in State Data Variable
                setData(data)
            }).catch(err => {
                console.log(err, 'error')
            })
    }, [])

    return (
        <div>
            {data?.map(da => {
                return <p>{da.name}</p>
            })}
        </div>
    );
};

export default Uicomponent;