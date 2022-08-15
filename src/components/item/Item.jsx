/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import star from '../../assets/images/star-icon.svg';
import './Item.css';

const Item = ({ topic, data }) => {
  const [itemDisplay, setItemDisplay] = useState('none');

  const handleClick = () => {
    if (itemDisplay === 'none') setItemDisplay('block');
    else setItemDisplay('none');
  };

  return (
    <li>
      <div
        className="itemBox"
        onClick={handleClick}
        onKeyUp={handleClick}
        role="button"
        tabIndex="0"
      >
        <p>{topic}</p>
        <span title="Stargazer">
          {data.stargazerCount}
          <img src={star} className="starIcon" alt="star icon" />
        </span>
      </div>
      <div className="itemTopics" style={{ display: itemDisplay }}>
        <ul>
          { data.relatedTopics.length ? data.relatedTopics.map((elem) => (
            <li key={uuidv4()}>
              <div className="itemBox">
                <p>{elem.name}</p>
                <span title="Stargazer">
                  {elem.stargazerCount}
                  <img src={star} className="starIcon" alt="star icon" />
                </span>
              </div>
            </li>
          )) : <li><div className="itemBox">No related topic available</div></li>}
        </ul>
      </div>
    </li>
  );
};

Item.propTypes = {
  data: PropTypes.object.isRequired,
  topic: PropTypes.string.isRequired,
};

export default Item;
