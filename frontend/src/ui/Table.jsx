import { useDeletePost } from "../features/post/useDeletePost";
import Button from "../ui/Button";

function Table({ data, headers }) {
  const { isDeleting, deletePost } = useDeletePost();

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header) => (
            <th key={header} className="border border-gray-300 px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
          <tr key={post.id} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">{post.id}</td>
            <td className="border border-gray-300 px-4 py-2">{post.title}</td>
            <td className="border border-gray-300 px-4 py-2">{post.content}</td>
            <td className="border border-gray-300 px-4 py-2">
              <Button
                variation="danger"
                size="medium"
                disabled={isDeleting}
                onClick={() => deletePost(post.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
