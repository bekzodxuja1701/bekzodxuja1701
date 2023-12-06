// import roll from "./img/roll.png";

function App() {
  return (
    // <div className="bg-red-500 py-2 px-2">
    //   <h1 className="bg-green-500 pl-2 text-white font-bold">Hello</h1>
    //   <div className="flex justify-end ">
    //     <button className="bg-cyan-500 mt-2 py-1 px-3 text-white rounded hover:bg-cyan-700 transition duration-1000">
    //       click
    //     </button>
    //   </div>
    // </div>

    <div className="py-8 px-8max-w-sm max-auto bg-white">
      <div className="">
        <img src={roll} alt="" className="w-24 h-24"/>
      </div>
      <div>
        <p className="text-black">Erin Lindford</p>
        <p>Product Engineer</p>
      </div>
    </div>
  );
}

export default App;
