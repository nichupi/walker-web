import Button from "./Button"

function SideBar() {
    return <>
        <div className="bg-taupe-900 w-20 flex flex-col items-center">
            <div className="flex-1">
                <Button buttonStyles="size-14 mt-3" />
                <Button buttonStyles="size-14 mt-3" />
                <div className="mt-3 w-10 shrink-0 min-h-0.5 bg-taupe-500 mx-auto" />
                <Button buttonStyles="size-14 mt-3" />
                <div className="mt-3 w-10 shrink-0 min-h-0.5 bg-taupe-500 mx-auto" />
                <Button buttonStyles="size-14 mt-3" />
                <Button buttonStyles="size-14 mt-3" />  
            </div>
            <div>
                <Button buttonStyles="size-14 mt-3 mb-3" />
            </div>
        </div>
    </>
}
export default SideBar  

