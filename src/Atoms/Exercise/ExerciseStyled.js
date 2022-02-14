import ExerciseCardStyled from '../../Molecules/ExerciseCard/ExerciseCardStyled';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ExerciseStyled = styled(ExerciseCardStyled)`
  width: 50%;
  align-items: center;
  padding: 0.625rem;
  margin: 0;
  border-radius: 0.75rem 0 0 0.75rem;
  color: ${({ theme }) => theme.grey800};
  ${FONTS.body_semibold};
  ${(props) =>
    props.toggle
      ? `background-color: ${props.theme.positive200};`
      : `background-color:  ${props.theme.grey100}; 
      color: ${props.theme.grey400}
      `}
  text-align: left;
`;

export default ExerciseStyled;
