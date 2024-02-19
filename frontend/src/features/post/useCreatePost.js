import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createpost } from "../../services/apiPosts";

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { mutate: createPost, isLoading: isCreating } = useMutation({
    mutationFn: createpost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => err.message,
  });

  return { isCreating, createPost };
}
