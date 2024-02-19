const Button = ({ variation, size, children, ...props }) => {
  // Tailwind CSS classes for button sizes
  const sizeClasses = {
    small: "text-sm px-2 py-1 ",
    medium: "text-base px-4 py-2 ",
    large: "text-lg px-6 py-3 ",
  };

  // Tailwind CSS classes for button variations
  const variationClasses = {
    primary: "text-white bg-brand-600 hover:bg-brand-700",
    secondary: "text-white bg-green-600 hover:bg-green-700",
    danger: "text-white bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      className={`mt-2 rounded-md shadow-md focus:outline-none font-semibold ${sizeClasses[size]} ${variationClasses[variation]}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
