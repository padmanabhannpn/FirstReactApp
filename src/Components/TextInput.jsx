const TextInput = ({ label, id, ...props }) => (
  <div className="mb-4">
    {label && <Label htmlFor={id}>{label}</Label>}
    <input
      id={id}
      type="text"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default TextInput;