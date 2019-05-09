import React from 'react';
import PropTypes from 'prop-types';

const TitleCollapsible = ({titleInfo: {wrapperClass, containerClass, iconClass, titleClass, title, arrowClass}}) => {
  return(
    <div className={`${wrapperClass} collapse__title`}>
      <div className={containerClass}> <i className={iconClass}></i>
        <h3 className={titleClass}>{title}</h3>
      </div>
      <div className={arrowClass}><i className="fas fa-chevron-down arrow"></i></div>
    </div>
  )
}

TitleCollapsible.propTypes = {
  titleInfo: PropTypes.string.isRequired,
}

export default TitleCollapsible;