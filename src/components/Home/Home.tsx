import React from "react"
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
 const Home = ()=>{
    return (
        <div> {reactDescriptions[genRandomInt(2)]}  Functionality
        </div>
    )
}
export default Home;