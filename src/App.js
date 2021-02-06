import React from 'react'
import Apple from './apple'
import store from './mobx/apple'
import { Provider } from 'mobx-react'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Apple></Apple>
      </Provider>
    </div>
  );
}

export default App;
