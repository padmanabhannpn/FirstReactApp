const IconButton = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded-full"
    aria-label={label}
  >
    {icon} {label}
  </button>
);


export default IconButton;