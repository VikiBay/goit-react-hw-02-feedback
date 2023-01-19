import {Wrapper, RateButton} from './FeedbackOptions.styled'
import PropTypes from 'prop-types'; 

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <Wrapper>
        {options.map(option => (
            <RateButton key={option} onClick={() => onLeaveFeedback(option)}>{option}</RateButton>
        ))}
    </Wrapper>
)



FeedbackOptions.propTypes = {
options: PropTypes.array.isRequired,
onLeaveFeedback: PropTypes.func.isRequired
};