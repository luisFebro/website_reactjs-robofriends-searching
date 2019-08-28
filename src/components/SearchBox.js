import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa32">
            <input
                className="br2 ma2 pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;