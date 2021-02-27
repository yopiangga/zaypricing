
import './assets/css/css-reset.css';
import './assets/css/style.css';
import './assets/scss/desktop-style.css';
import './assets/scss/mobile-style.css';

import BundlePricing from "./Pages/BundlePricing";
import { DataProvider } from './Pages/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BundlePricing />
      </div>
    </DataProvider>
  );
}

export default App;
