import React from 'react';

const Main = props => {
  const { btnText, iconsArr, description, title } = props;
  return (
    <main className="main__landing-page">
      <div className="main__landing">
        <div className="main__landing-info">
          <h2 className="main__landing-title">{title}</h2>
          <p className="main__landing-text">{description}</p>
        </div>
        <div className="main__landing-menu">
          <ul className="main__landing-list">
            <li className="main__landing-item">
              <i className="far fa-object-ungroup" />
              {iconsArr[0]}
            </li>
            <li className="main__landing-item">
              <i className="far fa-keyboard" />
              {iconsArr[1]}
            </li>
            <li className="main__landing-item">
              <i className="fas fa-share-alt" />
              {iconsArr[2]}
            </li>
          </ul>
        </div>
        <div className="main__landing-start">
          {' '}
          <a href="createCard.html" className="main__landing-link">
            {btnText}
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
