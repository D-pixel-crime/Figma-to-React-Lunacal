import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

function App() {
  return (
    <div className="min-h-screen max-w-screen bg-black text-white">
      <div className="background w-full h-full grid grid-cols-2 gap-5 lg:px-20 lg:py-10">
        <div className="col-start-1"></div>
        <div className="col-start-2 flex-center flex-col gap-10 w-full">
          <Box1 />
          <Box2 />
        </div>
      </div>
    </div>
  );
}

export default App;
