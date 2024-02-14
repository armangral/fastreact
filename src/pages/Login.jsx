import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Logo />
      <Heading type="h4" className="my-3 text-gray-700	">
        Log in to your account
      </Heading>
      <div className="w-full max-w-lg mt-7 rounded-lg shadow-sm p-8 flex flex-col bg-white items-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
