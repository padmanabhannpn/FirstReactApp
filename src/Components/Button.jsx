const Button = ({ children, onClick }) => {
  

  return (
    <button 
      onClick={onClick}
      className={`bg-red`}
    >
      {children}
    </button>
  );
};


export default Button;