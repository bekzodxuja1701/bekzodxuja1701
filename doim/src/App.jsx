import { useState } from "react";

const App = () => {
  const [nameInputVal, setNameInputVal] = useState("");
  const [nameInputIsValid, setNameInputIsValid] = useState(false);
  const onNameChangeHandler = (e) => {
    setNameInputVal(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (nameInputVal.trim() === "") {
      setNameInputIsValid(false);
      return;
    }
    console.log("clicked");
    setNameInputIsValid(true);
  };
  return (
    <form onSubmit={onSubmitHandler} className="bg-indigo-800 p-2 m-2 rounded">
      <div className="flex flex-col">
        <label className="text-white">Name</label>
        <input
          type="text"
          className="outline-none px-2 rounded"
          value={nameInputVal}
          onChange={onNameChangeHandler}
        />
        {!nameInputIsValid && <p className="text-red-600">Name inValid</p>}
      </div>
      <div className="mt-5 flex justify-end">
        <button className="bg-green-500 py-1 px-3 rounded-md font-bold text-white hover:bg-green-700 transition">
          submit
        </button>
      </div>
    </form>
  );
};

export default App;
