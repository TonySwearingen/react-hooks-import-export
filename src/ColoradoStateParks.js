import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks();

  return (
  <div>
    <h1>Colorado State Parks!</h1>;
    {/* <howManyParks/>;
    <MesaVerde/>;
    <RMFunctions.trees/>;
    <RMFunctions.wildlife/>; */}
  </div>
  )}
export default ColoradoStateParks;