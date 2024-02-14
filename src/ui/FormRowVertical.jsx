const FormRowVertical = ({ label, error, children }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={children.props.id} className="mb-3 text-md font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
};

export default FormRowVertical;
