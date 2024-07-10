import React, { useState } from 'react';
import './Table.css';

const Table = ({ data, addItem }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRead = (item) => {
        alert(`Read: ${JSON.stringify(item)}`);
    };

    const handleEdit = (item) => {
        alert(`Edit: ${JSON.stringify(item)}`);
    };

    const handleDelete = (item) => {
        alert(`Delete: ${JSON.stringify(item)}`);
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        addItem({ name, price: parseInt(price), category });
        setName('');
        setPrice('');
        setCategory('');
        setIsFormVisible(false);
    };

    const filteredData = data.filter(item =>
        Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="table-container">
            <div className="search-add-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={() => setIsFormVisible(!isFormVisible)}>
                    {isFormVisible ? 'Cancel' : 'Add Item'}
                </button>
            </div>
            {isFormVisible && (
                <form className="add-item-form" onSubmit={handleAddItem}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                    <button type="submit">Add</button>
                </form>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>
                                <button onClick={() => handleRead(item)}>Read</button>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
