import React, { useEffect, useState } from 'react';
import AllData from './AllData';
import Table from 'react-bootstrap/Table';



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
        <div className='p-2 mt-4'>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount requested</th>
                        <th>Deadline</th>
                        <th>Reason for request</th>

                    </tr>
                </thead>
                <tbody>
                    {data?.map(singledata =>
                        <AllData singledata={singledata}></AllData>
                    )}
                </tbody>
            </Table>

        </div>
    );
};

export default Uicomponent;