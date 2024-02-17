function Heading({ type, className, children, ...props }) {
  const sizeClasses = {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-semibold",
    h4: "text-3xl font-bold text-center",
  };

  const combinedClasses = `${className} ${sizeClasses[type]}`;

  const HeadingTag = type;

  return (
    <HeadingTag className={combinedClasses} {...props}>
      {children}
    </HeadingTag>
  );
}

export default Heading;
