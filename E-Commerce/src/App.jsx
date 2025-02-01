import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';
import NavBer from './components/NavBer';
import Items from './Components/Items';
import HeroSession from './Components/HeroSession';
import Card from './Components/Card';
import Watchlist from './Components/Watchlist';



function App() {
  const item = {
    id: '00001',
    item_img : `Images/Hoodies/H-1.jpg`,
    item_Name : `Mens Premium Hoodie Urban - Light Coffee`,
    item_Old_Price: " ৳ 2500",
    item_Price : ` ৳ 1790`,
    item_item_Category : `HOODIES` 
  }
  return (
    <>
    <NavBer/>
    <img className='HEROIMG' src="banner.png" alt="" style={{width: "100%"}}/> 
        <HeroSession/>
        <div className="items-container">
        <Items key={item.id} item={item}/>
        </div>
        <div className="App">
          <Card />
        </div>
        <div className="">
          <Watchlist/>
        </div>
    <Footer/>
    </>
  )
}

export default App;



