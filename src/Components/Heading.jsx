const Heading = ({ level = 2, children }) => {
  const Tag = `h${level}`;
  return <Tag className={`text-${3-level}xl font-bold mb-3`}>{children}</Tag>;
};

export default Heading