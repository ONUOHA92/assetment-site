import Layout from './Layout/Layout';
import LandingPage from './pages/LadingPage';
import {BrowserRouter , Route} from "react-router-dom"

function App() {
  return (
    <Layout>
      <BrowserRouter>
      <div className="App">
        <Route path="/" component={LandingPage} />
      </div>
      </BrowserRouter>
     
    </Layout>

  );
}

export default App;
