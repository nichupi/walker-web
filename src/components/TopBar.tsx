function TopBar() {
    return <>
        <div className="bg-taupe-800 h-14 flex justify-between text-white text-lg items-center px-10">
            <p>Walker</p>
            <div className="flex gap-3">
                <p>{"<-"}</p>
                <p>Saturday 12</p>
                <p>{"->"}</p>
            </div>
            <div className="flex gap-3">
                <button className="bg-taupe-700 px-3 rounded-md">week</button>
                <button className="bg-taupe-700 px-3 rounded-md">+activity</button>
            </div>
        </div>
    </>
}

export default TopBar