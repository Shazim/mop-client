import { FormField } from 'components/app/forms'
import React from 'react'
import PropTypes from 'prop-types';


function TextField({ placeholder = '', mb = "0", label = "", }) {
    return (
        <div className="bg-transparent">
            <div className={`font-bold text-secondary text-sm uppercase mb-${mb} tracking`}>{label}</div>
            <FormField className="bg-white outline-none uppercase text-secondary placeholder-gray font-bold text-sm pl-8 py-5 tracking" placeholder={placeholder} />
        </div>
    )
}

TextField.propTypes = {
    placeholder: PropTypes.oneOf(['some text']),
    mb: PropTypes.oneOf(['7', '25']),
    label: PropTypes.oneOf(["some text"]),
};

export default TextField
