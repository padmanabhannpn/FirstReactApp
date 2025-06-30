const Toggle = ({ checked, onChange }) => (
  <label className="flex items-center cursor-pointer">
    <div className="relative">
      <input 
        type="checkbox" 
        className="sr-only" 
        checked={checked}
        onChange={onChange}
      />
      <div className={`block w-10 h-6 rounded-full ${checked ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
      <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${checked ? 'transform translate-x-4' : ''}`}></div>
    </div>
  </label>
);

export default Toggle;