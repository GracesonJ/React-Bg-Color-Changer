import './App.css';
import { Button } from 'react-bootstrap';
function App() {
  const redClr = ()=>{
    document.body.style.backgroundColor="red";
  }
  const blueClr = ()=>{
    document.body.style.backgroundColor="blue";
  }

  return (
    <>
      <div className="container text-center border shadow " style={{marginTop:'10%',width:'50%',backgroundColor:'white', padding:'4%'}}>
        <div className='head'>
        <h1>Color Changer App</h1>
        <p className='mt-3 fs-5'>Change the Background color by clicking on any button below: </p>
        </div>
        <div className="list d-flex justify-content-between mt-5 border p-4 shadow">
            <Button className='rounded-circle' style={{width:'11%',backgroundColor:'red',height:'9vh'}} onClick={redClr}></Button>
            <button className='rounded-circle' style={{width:'11%',backgroundColor:'blue'}} onClick={blueClr}></button>
          <button className='rounded-circle' style={{width:'11%',backgroundColor:'green'}} onClick={() => document.body.style.backgroundColor = "green"}></button>
          <button className='rounded-circle' style={{width:'11%',backgroundColor:'#008CBA'}} onClick={() => document.body.style.backgroundColor = "#008CBA"}></button>
          <button className='rounded-circle' style={{width:'11%',backgroundColor:'orange'}} onClick={() => document.body.style.backgroundColor = "#FFA500"}></button>
          <button className='rounded-circle' style={{width:'11%',backgroundColor:'white'}} onClick={() => document.body.style.backgroundColor = "#FFFFFF"}></button>
        </div>
      </div>    
    </>
  );
}

export default App;
