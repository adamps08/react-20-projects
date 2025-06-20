import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/model-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-with-api';

function App() {
  return (
    <div className="App">
      {/*Accordion Component */}
      <Accordian />
      {/*Random Color Component */}
      <RandomColor />
      {/* Star Rating Component */}
      <StarRating noOfStars={10} />
      {/* Image Slider Component */}
      <ImageSlider 
        url={"https://picsum.photos/v2/list"} 
        page= {'1'} 
        limit={'10'}
      />
      {/* Load More PRoducts Component */}
      <LoadMoreData/>
      {/* Tree-view Component */}
      <TreeView menus={menus}/>
      {/* QR Code Generator Componet */}
      <QRCodeGenerator/>
      {/* Light and Dark Mode */}
      <LightDarkMode/>
      {/* Scroll Indicator Componet */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      {/* Custom Tabs Componet */}
      <TabTest/>
      {/* Custom Modal Component */}
      <ModalTest/>
      {/* Github Profile Finder Component */}
      <GithubProfileFinder/>
      {/* Search Autho Complete*/}
      <SearchAutocomplete/>
    </div>

  );
}

export default App;
