function TextArea({ id, register, name, validation, ...props }) {
  return (
    <textarea
      id={id}
      {...register(name, validation)}
      {...props}
      className="p-2 border rounded-md  text-gray-800 focus:ring-1 focus:ring-blue-800 focus:outline-none   shadow-sm w-full h-32"
    />
  );
}

export default TextArea;
