import PropTypes from 'prop-types'; 

export const Statistics = ({good,neutral, bad, total, positivePercentage}) => (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {total>0 ? positivePercentage : 0}</li>
    </ul>
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string
  };