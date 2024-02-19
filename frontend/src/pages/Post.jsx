import Heading from "../ui/Heading";
import CreatePostForm from "../features/post/CreatePostForm";

function Post() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
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
