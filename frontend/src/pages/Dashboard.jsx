import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Nav from "../ui/Nav";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Heading type="h4" className="my-3 text-gray-700	">
        Dashboard
      </Heading>
      <Nav />
    </div>
  );
}

export default Dashboard;
