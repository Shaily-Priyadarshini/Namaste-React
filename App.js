import React from "react";
import ReactDOM from "react-dom/client";
// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//   [  React.createElement(
//         "div",
//         {id:"child1"},
//         [React.createElement( "h1",{},"I am h1 tag"),React.createElement( "h2",{},"I am h2 tag")]),
//         React.createElement(
//             "div",
//             {id:"child2"},
//             [React.createElement( "h1",{},"I am h1 tag"),React.createElement( "h2",{},"I am h2 tag")])]

    
// )

// const heading=React.createElement("h1",{
//     id:"heading",
//     xyz:"abc"

// },"hello world")

const Title=()=>(
    <h3>I am Shaily</h3>
)

const Heading=()=>{
    return (
        <div className="container">
            <Title/>
            <h1>Hi</h1>
        </div>
    )

}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />)