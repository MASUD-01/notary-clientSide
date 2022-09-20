import React from 'react';
const AllData = ({ singledata }) => {
    console.log(singledata)
    const { name, AmountRequested, Deadline, request } = singledata
    return (
        <tr>
            <td className='d-flex align-items-center'><img width='35px' src="https://i.pinimg.com/originals/f8/2d/05/f82d0594898b8193f3976475684220e4.jpg" className="rounded-circle d-flex"
                alt="Avatar" /> <p className='m-0 ps-2'>{name}</p> </td>
            <td>{AmountRequested}</td>
            <td>{Deadline}</td>
            <td>{request}</td>

        </tr>
    );
};

export default AllData;