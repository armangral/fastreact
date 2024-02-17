import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryclient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (user) => {
      //setting data manually in react query cache(user is complete session obj so we will do user.user to get user)
      localStorage.setItem("token", user.access_token);
      console.log(user);
      queryclient.setQueryData(["user"], user.user);
      navigate("index", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  return { login, isLoading };
}
