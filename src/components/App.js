// create your App component here
import react from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [image, setImage] = useState([]);

  let api = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setImage(data));
  }, [])

console.log(image.status)  

console.log(image.message)

  function display() {
    if (image.message==null) {
      return <p>loading</p>;
    } else {
        return(
        <img src={image.message} alt="A Random Dog" />)
      
    }
  }

  return <div>
    {display()}
  </div>;
}
