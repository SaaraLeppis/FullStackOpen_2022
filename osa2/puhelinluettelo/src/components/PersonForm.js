import React from 'react';

const PersonForm = ({ submit, newName, nameChange, numberChange, phoneNumber }) => {
    return (
        <form onSubmit={submit}>
            <div className='inputs-wrapper'>
                name:
                <input
                    type="text"
                    value={newName}
                    onChange={nameChange} />
                number:
                <input
                    type='text'
                    value={phoneNumber}
                    onChange={numberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;