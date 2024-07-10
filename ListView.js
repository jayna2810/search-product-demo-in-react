import React from 'react';

const ListView = ({ items }) => {
    return (
        <div>
            <h2>List View</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;
