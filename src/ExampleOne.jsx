import React, { useEffect, useState } from "react";
import Button from "./Components/Button";
import LikeButton from "./Components/LikeButton";
import Heading from "./Components/Heading";

function ExampleOne() {
  // State for counter
//   const [count, setCount] = useState(0);

  // State for array
//   const [useArray, setUseArray] = useState(["a", "b", "c"]);

  // Effect that runs when the length of the array changes
//   useEffect(() => {
//     console.log("useArray length changed:", useArray.length);
//   }, [useArray.length]);

  // Function to add an element to the array
  const handleAddToArray = () => {
    //  setUseArray(prevArray => [...prevArray, 'newItem']);
    alert("Button Click");
  };

  return (
    <div>
      <p> Multiple Component</p>

      <div>
        <Button children={"Click Event"} onClick={handleAddToArray} />
      </div>

      <br />

      <div>
        <Button children={"Click Event Two"} onClick={handleAddToArray} />
      </div>

      <br />

      <div className="">
        <LikeButton />
      </div>

      <br />

      <div>
        <Heading children={"Test"} />
      </div>

      {/* <button onClick={() => setCount(c => c + 1)}>
                Increment Count
            </button>

            <button onClick={handleAddToArray}>
                Add to Array
            </button>

            <p>Current Array: {useArray.join(', ')}</p> */}
    </div>
  );
}

export default ExampleOne;
