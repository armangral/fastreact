import PostsTable from "../features/post/PostsTable";
import Heading from "../ui/Heading";

function Posts() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Heading type="h4" className="my-3 text-gray-700	">
        Posts
      </Heading>
      <div className="w-full max-w-lg mt-7 rounded-lg shadow-sm p-8 flex flex-col bg-white items-center">
        <PostsTable />
      </div>
    </div>
  );
}

export default Posts;
