import SignInForm from "../../SignInForm/SignInForm.compoent";
import SignUpForm from "../../SignUPForm/SignUpForm.component";
import "./Authentication.style.scss";
const Authentication = () => {
  // You can useEffect to get signin with redirect

  return (
    <div className="authenitcation-container">
      <SignInForm />

      {/* <Button buttonType="google" onClick={signInWithGoogleRedirect}>
        Sign IN with google Redict
      </Button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
