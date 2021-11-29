import React from 'react'
import '../../../index.css'
import { ReactComponent as Searchicon } from '../../../assets/images/searchIcon.svg';
import { FormField } from '../forms';
function SearchBar({ classes = "" }) {
    return (
        <div className={classes}>
            <Searchicon className="mr-15 self-center" />
            <FormField placeholder='Search For An Artist' className='' />
        </div>
    )
}

export default SearchBar
