import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../../services/apiPosts";

export function useDeletePost() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => err.message,
  });

  return { isDeleting, deletePost };
}
