

export default function Button({ children , onClick,width, type }){
return <button 
type={type}

className={`text-white
 bg-olive-500
  hover:bg-olive-700 
  focus:ring-4
   focus:ring-olive-300
    font-medium rounded-lg 
    text-sm px-5 py-2.5 me-2 mb-2
     dark:bg-olive-600
      dark:hover:bg-olive-700 
      focus:outline-none
       dark:focus:ring-olive-800 w-${width}`}
       onClick={onClick}>
        {children}</button>
}