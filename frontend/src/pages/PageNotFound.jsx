import Heading from "../ui/Heading";
import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border border-gray-100 rounded-md p-12 max-w-3xl text-center">
        <Heading type="h3" className="mb-8">
          The page you are looking for could not be found 😢
        </Heading>
        <button
          onClick={moveBack}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
