const geetingGoodAfteroonstyle ={
  color:"darkorange",
  backgroundColor: "yellow",
  padding: "5px",
  margin: "10px",
  borderRadius: "10px",
  width: "500px",
}


function GreetingGm(){
 const date = new Date();

 const currentHour = date.getHours();
 const currentMinute = date.getMinutes();

  return (
    <div className="greeting1">
  <h1>Good Morning 🌄 {currentHour}:{currentMinute}</h1>
  </div>
)
}

const GreetingGA = ()=>{
  const date = new Date();
 
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
 
   return (
    <div style={
      geetingGoodAfteroonstyle
    }>
    <h1>Good Afternoon 🌄 {currentHour}:{currentMinute}</h1>
    </div>
 )
 }

 const GreetingGE = ()=>{
  const date = new Date();
 
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
 
   return (
    <div className="greeting2">
  <h1>Good Evening🌄 {currentHour}:{currentMinute}</h1>
  </div>
 )
 }

 const GreetingGn = ()=>{
  const date = new Date();
 
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
 
   return (<div  style={{
    color:"white",
    backgroundColor: "darkblue",
    padding: "5px",
    margin: "10px",
    borderRadius: "10px",
    width: "500px",
  }}>
   <h1>Good Night 🌄 {currentHour}:{currentMinute}</h1>
   </div>
 )
 }

export default GreetingGm;

export {
  GreetingGA,
  GreetingGE,
  GreetingGn
}
