const Card = ({ children, title }) => (
  <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
    {title && (
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <Heading level={3}>{title}</Heading>
      </div>
    )}
    <div className="p-4">
      {children}
    </div>
  </div>
);

export default Card;