import { useState } from 'react';
import PropTypes from 'prop-types';
import Exercise from '../../Atoms/Exercise/Exercise';
import Points from '../Points/Points';
import EditAccept from '../../Atoms/EditAccept/EditAccept';
import ExerciseCardStyled from './ExerciseCardStyled';

const ExerciseCard = ({ exerciseInfo, onChange }) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ExerciseCardStyled>
      <Exercise codeName={exerciseInfo.codeName} toggle={toggle} />
      <Points exerciseInfo={exerciseInfo} toggle={toggle} onChange={onChange} />
      <EditAccept onClick={toggleHandler} toggle={toggle} />
    </ExerciseCardStyled>
  );
};

ExerciseCard.propTypes = {
  exerciseInfo: PropTypes.shape({
    codeName: PropTypes.string.isRequired,
    result: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
};

export default ExerciseCard;
