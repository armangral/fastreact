import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditPost } from "../../services/apiPosts";

export function useEditPost() {
  const queryClient = useQueryClient();

  const { mutate: editPost, isLoading: isEditing } = useMutation({
    mutationFn: ({ newPostData, id }) => createEditPost(newPostData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => err.message,
  });

  return { isEditing, editPost };
}
