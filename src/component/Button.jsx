

export const Button=({clasName,size="default",children,onClick,...props})=>{
    const baseClass="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2  focus-visible:ring-primary  bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";
    const Classes=baseClass
    const classSize={
        sm:"px-4 py-2  text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-6 py-4 text-sm"
    }
    return(
        <button onClick={onClick} className={`${Classes} ${classSize[size]} ${clasName} ${props}`}>
            <span className="relative flex items-center justify-center gap-2 whitespace-nowrap  cursor-pointer">{children}</span>
        </button>
    )
}