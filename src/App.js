import "./styles.css";

export default function App() {
  var obj1 = {
    name: "Ram",
    age: "25",
    yuga: "Treta"
  };
  var obj2 = {
    name: "Krishna",
    age: "31",
    yuga: "Dwapar"
  };
  // function printProp(obj, prop) {
  //   console.log(obj[prop]);
  // }
  // console.log(printProp(obj1, "name"));

  // for (var prop in obj2) {
  //   console.log(prop);
  //   console.log(prop, obj2[prop]);
  // }
  // var keys = Object.keys(obj1);

  function compare(obj1, obj2) {
    if (obj1["age"] > obj2["age"]) {
      console.log(obj1["name"]);
    } else if (obj1["age"] < obj2["age"]) {
      console.log(obj2["name"]);
    }
  }
  compare(obj1, obj2);
  return (
    <div className="App">
      <div>{JSON.stringify(obj1)}</div>
      <div>{JSON.stringify(obj2)}</div>
      <div>
        {JSON.stringify(obj1["age"]) > JSON.stringify(obj2["age"])
          ? JSON.stringify(obj1["name"])
          : JSON.stringify(obj2["name"])}
      </div>
      <p>{Object.getOwnPropertyNames(obj1)}</p>
      <p>{Object.keys(obj1)}</p>
      <p>{Object.values(obj1)}</p>
    </div>
  );
}
