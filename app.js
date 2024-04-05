// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello, i am  from react" //children of the div
// );
// //   const root = ReactDOM.createRoot(document.getElementById("root"));
// //   root.render(heading); //this render methode is used to convert this object to h1 tag
// console.log(heading); //it will return the object(react Element)
/*
ex-2
------
<div id="parent">
  <div id="child">
    <h1>I am from h1 tag</h1>
    <h2>I am from h2 tag</h2>
  </div>   
  <div id="child2">
    <h1>I am from h1 tag</h1>
    <h2>I am from h2 tag</h2>
  </div>   
</div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello i am from h1 tag"),
    React.createElement("h2", {}, "hello i am from h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello i am from h1 tag"),
    React.createElement("h2", {}, "hello i am from h2 tag"),
  ]),
]);
console.log(parent);

ReactDOM.render(parent, document.getElementById("root"));
