import { useForm } from "react-hook-form";

import Input from "../../ui/Input";

import Form from "../../ui/Form";
import Button from "../../ui/Button";
import TextArea from "../../ui/TextArea";
import FormRow from "../../ui/FormRow";

import { useCreatePost } from "./useCreatePost";

function CreatePostForm() {
  const { isCreating, createPost } = useCreatePost();

  const isWorking = isCreating;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    createPost(data, {
      onSuccess: (data) => {
        reset();
      },
    });
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
        <Button disabled={isWorking}>Create Post</Button>
      </FormRow>
    </Form>
  );
}

export default CreatePostForm;
