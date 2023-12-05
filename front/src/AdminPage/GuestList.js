import React, { useEffect, useState } from 'react';

const GuestList = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const response = await fetch('http://localhost:8080/guests/'); // Replace with your API endpoint
                const data = await response.json();
                setGuests(data);
            } catch (error) {
                console.error('Error fetching guests:', error);
            }
        };

        fetchGuests();
        console.log(guests);
    }, []);

    return (
        <div className="bg-gray-800 text-white px-4 py-12 sm:px-6 lg:px-8 rounded">
            <ul className="divide-y divide-gray-100 role=list ">
                {guests.map(({ id, firstName, lastName, email, phone, city, address }) => (
                    <li key={id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <p className="text-sm font-semibold leading-6">
                                {firstName} {lastName}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 ">{email}</p>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 ">{city}</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                {address}, {phone}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GuestList;
