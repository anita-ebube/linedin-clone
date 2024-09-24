const Button = ({ children }) => {
    return (
      <div>
        <button className="border border-textcolor text-textcolor flex gap-2 rounded-full p-2 w-auto h-10 font-semibold text-base whitespace-nowrap">
          {children}
        </button>
      </div>
    );
  };
  
  export default Button;
  