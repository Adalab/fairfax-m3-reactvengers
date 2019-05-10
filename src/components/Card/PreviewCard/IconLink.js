import React from 'react';
import PropTypes from 'prop-types';

const IconLink = ({ liClass, linkClass, iconClass, iconsData }) => {
    return (
        <li className={`card__link-sm ${liClass} hidden`}>
            <a className={`${linkClass} social__link`} href={iconsData}>
                <i className={iconClass}></i>
            </a>
        </li>
    )
}

IconLink.propTypes = {
    liClass: PropTypes.string.isRequired,
    linkClass: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
}

export default IconLink;