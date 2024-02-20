import { useQuery } from "@tanstack/react-query";
import { getposts } from "../../services/apiPosts";

export function usePosts() {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getposts,
  });

  return { isLoading, error, posts };
}
