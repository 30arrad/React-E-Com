import HeroSession from "./HeroSession";
import Items from './Items';

const Home = () => {
    const item = {
        id: '00001',
        item_img : `Images/Hoodies/H-1.jpg`,
        item_Name : `Mens Premium Hoodie Urban - Light Coffee`,
        item_Old_Price: 2500,
        item_Price :  1790,
        item_item_Category : `HOODIES` 
      }
    return (
        <>
         <img className='HEROIMG' src="banner.png" alt="" style={{width: "100%"}}/> 
        <HeroSession/>

        <Items key={item.id} item={item}/>
        </>
    )

}

export default Home;