import UseState from "./component/useState";
import UseState2 from "./component/UseState2";
import UseEffect from "./component/UseEffect";
import UseEffect2 from "./component/UseEffect2";
import UseContext from "./component/UseContext";
import LoginProvider from "./context/Logincontext";
import UseRef from "./component/UseRef";
import UseRef2 from "./component/UseRef2";
import UseReducer from "./component/UseReducer";
import UseLayoutEffect from "./component/UseLayoutEffect";
import UseMemo from "./component/UseMemo";
import UseCallback from "./component/UseCallback";


function App() {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseState />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseState2 />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseEffect />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseEffect2 />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <LoginProvider>
            <UseContext />
          </LoginProvider>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseRef />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseRef2 />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseReducer />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseLayoutEffect />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseMemo />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md ">
          <UseCallback />
      </div>
    </div>
  );
}

export default App