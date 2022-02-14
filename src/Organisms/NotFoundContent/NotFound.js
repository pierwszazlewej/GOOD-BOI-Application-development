import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import NotFoundPageWrapperStyled from './NotFoundPageWrapperStyled';
import notFound from '../../Assets/notFound.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundPageWrapperStyled>
      <img src={notFound} alt="Dog with question mark" />
      <div className="mainContentWrapper">
        <h2>Strona nie istnieje.</h2>
        <p>
          Przepraszamy, nie znaleźliśmy strony o tym adresie. <br /> Przejdź do
          poprzedniej strony lub skontaktuj się z nami.
        </p>
      </div>
      <div className="buttons-wrapper">
        <MainButton
          secondary
          text="Wróć do poprzedniej strony"
          onClick={() => navigate(-1)}
        />

        <FakeButton
          colors="ternary"
          text="Formularz kontaktowy"
          to="/contact-form"
        />
      </div>
    </NotFoundPageWrapperStyled>
  );
};

export default NotFound;
