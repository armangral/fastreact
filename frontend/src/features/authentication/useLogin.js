import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryclient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (user) => {
      //setting data manually in react query cache(user is complete session obj so we will do user.user to get user)
      queryclient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err);

      toast.error("Provided email or password are incorrect!");
    },
  });

  return { login, isLoading };
}
