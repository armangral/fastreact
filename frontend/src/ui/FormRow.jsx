const FormRow = ({ children, label, error }) => (
  <div
    className={
      "flex items-center justify-between gap-6 py-3" +
      (error || (label && !error) ? " border-b border-gray-100" : "") +
      (error && !label ? " flex justify-end items-center gap-6" : "")
    }
  >
    {label && (
      <label htmlFor={children.props.id} className="font-medium w-32">
        {label}
      </label>
    )}
    <div className="flex-grow">{children}</div>
    {error && (
      <div className="w-40">
        <span className="text-sm text-red-700">{error}</span>
      </div>
    )}
  </div>
);

export default FormRow;
