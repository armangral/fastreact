function Input({
  id,
  placeholder = "",
  type = "text",
  name,
  onChange,
  ...props
}) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <div>
      <div>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
          className="
          w-full h-11 border rounded-md px-4 py-2 text-gray-800 focus:ring-1 focus:ring-blue-800 focus:outline-none
        "
        />
      </div>
    </div>
  );
}

export default Input;
