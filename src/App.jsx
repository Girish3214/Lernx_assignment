import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="min-h-full">
      <SideBar />
      <div className="md:ml-80">
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
