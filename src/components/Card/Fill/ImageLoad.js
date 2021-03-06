import React from 'react';
import PropTypes from 'prop-types';

const ImageLoad = props => {
  let { imageLoad, clickLoadImage, getImage, photo, isDefaultImage, classError } = props;
  const conditionStyle = isDefaultImage ? { backgroundImage: 'url()' } : { backgroundImage: `url(${photo})` };
  return (
    <div className={`fill__field-container field__image-container ${classError}`}>
      <label htmlFor="add__img" className="fill__label">
        imagen de perfil *
      </label>
      <div className="add__img-container">
        <input type="button" className="fill__button js__profile-trigger" onClick={clickLoadImage} value="añadir imagen" />
        <input
          id="add__img"
          className="fill__field add__img-input js__profile-upload-btn"
          type="file"
          accept=".png, .jpg, .jpeg"
          name="add__img"
          ref={imageLoad}
          onChange={event => {
            getImage(event);
          }}
        />
        <div className="fill__preview-little js__profile-preview" style={conditionStyle}>
          <img className="img__user" src={photo} alt="User-profile-pic" />
        </div>
      </div>
    </div>
  );
};

ImageLoad.propTypes = {
  photo: PropTypes.string.isRequired,
  imageLoad: PropTypes.object.isRequired,
  clickLoadImage: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
  isDefaultImage: PropTypes.bool.isRequired,
  classError: PropTypes.string.isRequired
};

export default ImageLoad;
