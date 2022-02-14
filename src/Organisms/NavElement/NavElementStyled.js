import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

export const NavElementStyled = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 3.75rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.125rem;
  background: ${({ theme }) => theme.white};

  .navText {
    width: 80%;
    color: ${({ theme }) => theme.grey800};
    ${FONTS.h3}
  }
  .burger-wrapper {
    display: flex;
    width: 10%;
    text-align: left;

    .burger-icon {
      color: ${({ theme }) => theme.grey200};
      font-size: 1.25rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
