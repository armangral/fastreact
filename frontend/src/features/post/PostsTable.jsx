import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { usePosts } from "./usePosts";

function PostsTable() {
  const { isLoading, posts } = usePosts();
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
          headers={["Post Id", "Title", "Content", "Delete"]}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default PostsTable;
