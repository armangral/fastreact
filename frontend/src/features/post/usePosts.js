import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function usePosts() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const {
    isLoading,
    data: { data: posts, count } = {},
    error,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Prefetching
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["posts", page + 1],
      queryFn: () => getPosts({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["posts", page - 1],
    });
  }

  return { isLoading, error, posts, count };
}
