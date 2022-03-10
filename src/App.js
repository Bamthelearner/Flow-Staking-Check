import './App.css';

import * as fcl from "@onflow/fcl";
//import * as types from "@onflow/types";
import {useState} from 'react';
import { checkscript } from "./cadence/code.js";




fcl.config()
  .put("accessNode.api", "https://access-mainnet-beta.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/authn")

function App() {

  const [scriptResult, setScriptResult] = useState([]);


  const view = async () => {
    const result = await fcl.send([
      fcl.script(checkscript),
      fcl.args([
      ])
    ]).then(fcl.decode);

    console.log(result);
    setScriptResult(result);

  }



  return (
    <div className="App">
      <div>
        <h2>Flow Staking Service Status</h2>
      </div>
      <div>
        <button onClick={() => view()}>Check the status</button>
        <h2>Status : {scriptResult.toString()}</h2>

      </div>

        
   
    </div>
  );
}

export default App;