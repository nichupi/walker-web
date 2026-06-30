function Button({buttonStyles}: {buttonStyles: string}) {
    return <>
        <div className={"bg-taupe-700 border-2 border-taupe-500 h-14 w-14 rounded-lg shrink-0 " + buttonStyles}></div>
    </>
}
export default Button