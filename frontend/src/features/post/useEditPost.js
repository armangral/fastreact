import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createEditPost } from "../../services/apiPosts";

export function useEditPost() {
  const queryClient = useQueryClient();

  const { mutate: editPost, isLoading: isEditing } = useMutation({
    mutationFn: ({ newPostData, id }) => createEditPost(newPostData, id),
    onSuccess: () => {
      toast.success("Post successfully Edited");

      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editPost };
}
