import {
  BackGroundImage,
  ContainerLogin,
  LimitedContainer,
  ContainerLoginScreen,
  LogoImage,
} from '../../styles/loginScreen.style';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackGroundImage src="./background.png" />
      <LimitedContainer>
        <ContainerLogin>
          <LogoImage src="./logo (2).png" />
        </ContainerLogin>
      </LimitedContainer>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
