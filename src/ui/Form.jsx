function Form({ children, onSubmit }) {
  return (
    <form className="space-y-4 w-full " onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
