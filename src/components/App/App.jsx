import Gallery from '../../pages/Gallery';
import Layout from '../../pages/Layout';
import Main from '../../pages/Main';
import NotFound from '../../pages/not-found';
import './App.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
      {/* <Header/>
      <FurnitureCategoryNav/>
      <AboutUs/>
      <OurService/>
      <Gallery/>
      <Footer/> */}
    </div>
  );
}

export default App;
