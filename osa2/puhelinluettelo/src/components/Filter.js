import React from 'react';

const Filter = ({ filter, filterChange }) => {
    return (
        <div>
            filter shown with:
            <input
                name="filter"
                type="text"
                value={filter}
                onChange={filterChange} />
        </div>
    );
};

export default Filter;