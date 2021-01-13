import React from "react";

import ContactView from "./pages/contacts";

function App() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="rows">
          <div className="col-md-6 offset-3">
            <h2>Welcome to Hook & Context API</h2>
          </div>
        </div>
      </div>
      <hr />
      <ContactView />
    </div>
  );
}

export default App;
