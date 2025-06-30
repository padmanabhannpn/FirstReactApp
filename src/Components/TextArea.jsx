const TextArea = ({ label, id, rows = 4, ...props }) => (
  <div className="mb-4">
    {label && <Label htmlFor={id}>{label}</Label>}
    <textarea
      id={id}
      rows={rows}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default TextArea;