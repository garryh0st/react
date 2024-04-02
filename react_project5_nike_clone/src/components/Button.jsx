
const Button = ({ label , iconURL}) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 gap-2 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red"> 
    {label}
    <img 
    src={iconURL}
    alt="arrow-right-icon"
    className="ml-2 rounded-full w-5 h-5 bg-blue-900 "/>
    </button>
  )
}

export default Button