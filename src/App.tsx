import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
import CalenderView from "./components/CalenderView"

function App() {

  return (
    <>
      <div className="flex flex-1 flex-col h-screen bg-zinc-950">
        <div>
          <TopBar />
        </div>
        <div className="flex flex-1 min-h-0">
          <SideBar />
          <div className="flex flex-1 overflow-y-auto">
            <CalenderView />
          </div>
        </div>
      </div>
    </>
  )
}

export default App