function Inputt({ register, name, validation, placeholder, ...rest }) {
  return (
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        {...register(name, validation)}
        {...rest}
      />
    </div>
  );
}

export default Inputt;
