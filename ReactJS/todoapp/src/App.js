import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
function App() {
  const [inputData, setInputData] = useState('');
  const [itemData, setItemData] = useState([]);

  // Add Handle Click 
  const addData = () => {
    if (!inputData) {
      alert('Kindly put something')
    } else {
      setItemData([...itemData, inputData])
      setInputData('')
    }
  }

  //  Handle Delete
  const handleDel = (ind) => {
    const updateItem = itemData.filter((_, i ) => i !== ind);
    setItemData(updateItem)
  }

  
  return (
    <>
      <div className="container bg-dark bg-gradient  text-white mt-3" >
        <h1 className='text-white text-center '>Todo App</h1>

        {/* Input Form  */}
        <div className="input-group mt-3 mx-auto w-50 p-3">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"
            value={inputData} onChange={(e) => setInputData(e.target.value)}
          />
          <button className="btn btn-outline-info d-flex align-items-center " type="button" onClick={addData} ><FaPlus /></button>
        </div>

        {/* Item List  */}
        <ul className="list-group w-50 mx-auto">
          {
            itemData.map((elem, i) => {
              return (

                <li class="list-group-item list-group-item-info d-flex justify-content-between align-items-center mb-1" key={i} >
                  {elem}
                  <button type="button" class="btn btn-outline-danger d-flex align-items-center" onClick={() => handleDel(i)}><FaTrash /></button>
                </li>

              )
            })
          }



        </ul>

        <div className="input-group mt-3 mx-auto w-50 p-3">
          <button type="button" className="btn btn-danger mx-auto" onClick={()=> setItemData([])}>Remove All</button>
        </div>

      </div>
    </>
  )
}

export default App
