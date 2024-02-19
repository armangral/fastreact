import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="posts" element={<Posts />} />

          <Route element={<ProtectedRoute />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
