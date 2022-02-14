import {
  CONTEST_ACTIONS,
  DOG_ACTIONS,
  USER_ACTIONS,
} from '../../Consts/reducersActions';
import { useContext, useEffect } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import propTypes from 'prop-types';

const ProfilePage = () => {
  const { contestState, contestDispatch } = useContext(ContestContext);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { state, dispatch } = useContext(UserDataContext);
  const { userId } = state;

  useEffect(() => {
    if (contestState.contestId || contestState.contestName) {
      contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    }
    if (dogState.chosenDog) {
      dogDispatch({ type: DOG_ACTIONS.CLEAR_CHOSEN_DOG });
    }
    if (state.selectedRole !== ROLE_NAME.PARTICIPANT) {
      dispatch({
        type: USER_ACTIONS.SELECT_ROLE,
        selectedRole: ROLE_NAME.PARTICIPANT,
      });
    }
  }, []);

  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCard />
      <FakeButton to="/user-dogs" text="Twoje Psy" colors="ternary" />
      <FakeButton
        to={`/contests`}
        state={{
          contestContent: 'results',
        }}
        text="Twoje Konkursy"
        colors="ternary"
      />
      <FakeButton
        to={`/user/${userId}/user-data`}
        text="Twoje Dane"
        colors="ternary"
      />
      <FakeButton
        to={'/contests'}
        state={{
          contestContent: 'future',
        }}
        text="Nadchodzące Konkursy"
        colors="secondary"
      />
    </ColumnWrapper>
  );
};

ProfilePage.propTypes = {
  userId: propTypes.string,
};

export default ProfilePage;
