// import Hello from "./Hello";
import Counter from "./Counter";
import "./App.css";
import Mode from "./Mode";

function App() {
  return (
    <>
      {/* <Hello
        name={"Aysun"}
        surname={"Xipiyeva"}
        age={19}
        hobbies={["reading book", "music"]}
      />
      <Hello
        name={"Jane"}
        surname={"Wallece"}
        age={23}
        hobbies={["swimming", "music   "]}
      /> */}
      <Counter />
      <Mode />
    </>
  );
}

export default App;
