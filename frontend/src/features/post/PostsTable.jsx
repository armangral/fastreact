import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

import Table from "../../ui/Table";
import { usePosts } from "./usePosts";

function PostsTable() {
  const { isLoading, posts, count } = usePosts();
  //   const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  //   if (!cabins.length) return <Empty resource={"cabins"} />;

  // Filtering and sorting logic (unchanged)
  // ...

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          data={posts}
          headers={["Post Id", "Title", "Content", "Delete", "Edit"]}
          isLoading={isLoading}
        />
      )}
      <div className="w-full max-w-lg mt-7 rounded-lg shadow-sm p-8 flex flex-col items-center bg-slate-100">
        <Pagination count={count} />
      </div>
    </>
  );
}

export default PostsTable;
