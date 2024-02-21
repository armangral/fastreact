import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import TextArea from "../../ui/TextArea";
import FormRow from "../../ui/FormRow";
import { useCreatePost } from "./useCreatePost";
import { useEditPost } from "./useEditPost";

function CreatePostForm({ postToEdit = {}, onClose }) {
  const { isCreating, createPost } = useCreatePost();
  const { isEditing, editPost } = useEditPost();

  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = postToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  function onSubmit(data) {
    if (isEditSession) {
      editPost(
        { newPostData: data, id: editId },
        {
          onSuccess: () => {
            reset();
            onClose(); // Close the modal after successful edit
          },
        }
      );
    } else {
      createPost(data, {
        onSuccess: () => {
          reset();
        },
      });
    }
  }

  function onError(errors) {
    // Handle form errors
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Title" error={errors?.title?.message}>
        <Input
          name="title"
          placeholder="Enter your title"
          register={register}
          validation={{ required: "Title is required" }}
        />
      </FormRow>

      <FormRow label="Content" error={errors?.content?.message}>
        <TextArea
          name="content"
          placeholder="Enter content"
          register={register}
          validation={{ required: "Content is required" }}
        />
      </FormRow>

      <FormRow>
        <div className="flex justify-between">
          <Button disabled={isWorking}>
            {isEditSession ? "Edit Post" : "Create Post"}
          </Button>
          <Button onClick={onClose} disabled={isWorking} type="reset">
            Cancel
          </Button>
        </div>
      </FormRow>
    </Form>
  );
}

export default CreatePostForm;
