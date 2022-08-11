/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import star from '../../assets/images/star-icon.svg';
import './Item.css';

const Item = ({ data }) => (
  <li>
    <a href={data.url} target="new">
      {data.nameWithOwner.slice(0, 70)}
    </a>
    <span title="Stargazer">
      {data.stargazerCount}
      <img src={star} className="starIcon" alt="star icon" />
    </span>
  </li>
);

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;
