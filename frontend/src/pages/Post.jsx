import Heading from "../ui/Heading";
import CreatePostForm from "../features/post/CreatePostForm";
import { useMoveBack } from "../hooks/useMoveBack";

function Post() {
  const moveBack = useMoveBack();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        onClick={moveBack}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-3"
      >
        &larr; Go back
      </button>
      <div className="min-w-[700px] px-6 py-12 bg-gray-50 rounded-lg shadow-md">
        {/* Heading component */}
        <Heading type="h2">Create a new post</Heading>

        {/* CreatePostForm */}
        <div className="mt-8">
          <CreatePostForm />
        </div>
      </div>
    </div>
  );
}

export default Post;
