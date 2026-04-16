import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"

function App() {

  return (
    <>
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex flex-1 min-h-0">
          <SideBar />
        </div>
      </div>
    </>
  )
}

export default App