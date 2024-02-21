import { useState } from "react";
import CreatePostForm from "../features/post/CreatePostForm";
import { useDeletePost } from "../features/post/useDeletePost";
import Button from "../ui/Button";

function Table({ data, headers }) {
  const { isDeleting, deletePost } = useDeletePost();
  const [showModal, setShowModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const handleEditClick = (post) => {
    setPostToEdit(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setPostToEdit(null);
    setShowModal(false);
  };

  return (
    <>
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
              <td className="border border-gray-300 px-4 py-2">
                {post.content}
              </td>
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
              <td className="border border-gray-300 px-4 py-2">
                <Button
                  variation="secondary"
                  size="medium"
                  onClick={() => handleEditClick(post)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CreatePostForm postToEdit={postToEdit} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Table;
