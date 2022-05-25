import React from 'react';

const Filter = ({ nameFilter, filterChange }) => {
    return (
        <div>
            filter shown with:
            <input
                name="filter"
                type="text"
                value={nameFilter}
                onChange={filterChange} />
        </div>
    );
};

export default Filter;