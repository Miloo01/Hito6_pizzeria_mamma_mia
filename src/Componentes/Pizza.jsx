import React from 'react'
import { useState, useEffect } from "react";

const Pizza = () => {
   // 3 - info guardará los valores traídos desde la API
  const [info, setInfo] = useState([]);

  // 2 - Llamamos a la función consultarApi al momento de montar el componente
  useEffect(() => {
    consultarApi();
  }, []);

  // 1 - Función que consulta la API
  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001"; // Endpoint de la API
    const response = await fetch(url);
    const data = await response.json();
    setInfo(`${data.sentence} - ${data.character.name}`); // Con setInfo actualizamos el estado
  };

  return (
    <>
      {/* Mostramos la info */}
      {info}
    </>
  );
}

export default Pizza
