import React from 'react'
import Navbar from '../Components/navbar'
import '../CSS/home.css'
import Slider from '../Components/slider';

const data = [
  { title: "Men's Eddie's Favorite Ultrasoft Thermal Henley", image: 'https://eddiebauer.scene7.com/is/image/EddieBauer/D0331827_100C1?$328V1$', price:'$38.50-$42', },
  { title: "Eddie's Favorite Flannel Classic Fit Shirt - Plaid", image: 'https://eddiebauer.scene7.com/is/image/EddieBauer/D0340156_093C1?$328V1$', price: '$30.00-$34.00',},
  { title: "Eddie's Favorite Ultrasoft Thermal Crew", image: 'https://eddiebauer.scene7.com/is/image/EddieBauer/D0331828_965C1?$328V1$', price:"$35.00-$38.50", },
  { title: "Women's Favorite Long-Sleeve Crewneck T-Shirt", image: 'https://eddiebauer.scene7.com/is/image/EddieBauer/D0095604_336C1?$328V1$', price: "$23.99",},
  { title: "Flannel Sleep Pants", image: 'https://eddiebauer.scene7.com/is/image/EddieBauer/D0151054_463C1?$328V1$', price: "$24.99-$28", },
];
const products = [
  {
    "id": 1,
    "name": "Chutes Snap Mock",
    "price": 32,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0290844_481C1?$748V1$",
    "description": "This pullover mock-neck is made with ultrasoft polyester microfleece that provides lightweight warmth and easy layering across the seasons. The snap front placket is reinforced with woven ripstop fabric. Finished with two hand pockets and a single chest pocket."
    },
    {
    "id": 2,
    "name": "Mountain Trek Long-Sleeve T-Shirt",
    "price": 60,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0291196_228C1?$748V1$",
    "description": "Our Mountain Trek Long-Sleeve T-Shirt is perfect for late summer days spent in cooler and varying temperatures. This extra soft layer features moisture-wicking fabric, odor control, and added stretch so you can enjoy long hikes in the wilderness and everyday adventures."
    },
    {
    "id": 3,
    "name": "Faux Shearling-Lined Thermal Henley",
    "price": 52.5,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0330621_644C1?$748V1$",
    "description": "Robust, thermal-knit cotton/polyester is bonded to 320g faux shearling fleece lining for substantial warmth without heavy bulk. The henley front placket makes it easy to layer under a waterproof shell or other jacket."
    },
    {
    "id": 4,
    "name": "Eddie Bauer Signature Sweatshirt",
    "price": 49,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0331604_722C1?$748V1$",
    "description": "Now THIS is a sweatshirt. Robust, 380 g/m2 cotton/polyester has the heft you know is going to last no matter how hard you work it. Inside, the fabric is brushed for maximum comfort whether on day one or one thousand. Gender-neutral sizing.\n\nModels Shown: Female 5'9\"-5'11\", Size S; Male 6'0\"-6'2\", Size M"
    },
    {
    "id": 5,
    "name": "Adventurer 4S Long-Sleeve Flannel Shirt",
    "price": 69.3,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0340720_296C1?$748V1$",
    "description": "Our Adventurer 4S Long-Sleeve Flannel brings comfort and year-round versatility to your wardrobe. The blend of recycled polyester and cotton is soft to the touch and easy on the earth. Two front pockets add style and extra storage to your outfit, while moisture-wicking tech keeps you comfortable on the trail."
    },
    {
    "id": 6,
    "name": "Legend Wash 100% Cotton Long-Sleeve Classic T-Shirt",
    "price": 60,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0332532_216C1?$748V1$",
    "description": "You asked for 100% cotton and we heard you."
    },
    {
    "id": 7,
    "name": "Legend Wash 100% Cotton Short-Sleeve Classic T-Shirt",
    "price": 60,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0332534_123C1?$748V1$",
    "description": "You asked for 100% cotton and we heard you."
    },
    {
    "id": 8,
    "name": "Ultimate Expedition Flex Flannel Shirt",
    "price": 63,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0290972_813C1?$748V1$",
    "description": "Made with FreeHeat® hollow-core polyester for extra warmth, this flannel shirt also features moisture wicking and two-way stretch performance. The fabric is brushed on both sides for softness."
    },
    {
    "id": 9,
    "name": "Convector 1/2-Zip",
    "price": 49,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0332040_216C1?$748V1$",
    "description": "With its knitted sweater fleece exterior and brushed fleece interior, this 1/2-zip pullover combines great looks and functional warmth. Works equally well on its own or as a cold-weather layer."
    },
    {
    "id": 10,
    "name": "Voyager Flex Long-Sleeve Shirt",
    "price": 49,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0340611_485C1?$748V1$",
    "description": "Going from the office to the trailhead is easy with our Voyager Flex button-up shirt, built for comfort during the day and adventure in the evenings. Moisture-wicking fabric and odor control technology  keep you feeling fresh on multi-day hikes or excursions."
    },
    {
    "id": 11,
    "name": "Camp Fleece 1/4-Zip",
    "price": 42,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0330987_969C1?$748V1$",
    "description": "The interior of this 1/4-zip sweatshirt is brushed for superior softness and comfort. The substantial cotton/polyester will stand up to both heavy use and serious relaxation."
    },
    {
    "id": 12,
    "name": "Eddie's Favorite Ultrasoft Thermal Henley",
    "price": 38.5,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0331827_100C1?$748V1$",
    "description": "We've added a new silicone finish to our best-selling Eddie's Favorite Thermals. The result is an even softer touch to go along with its classic waffle-knit texture and robust cotton/polyester strength. This is a henley pullover that will stand up to years of heavy use, whether on its own or layered under a flannel or fleece overshirt."
    },
    {
    "id": 13,
    "name": "Chutes Microfleece Shirt",
    "price": 32,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0330300_650C1?$748V1$",
    "description": "Exceptionally soft and unquestionably robust, the midweight polyester fleece of this button-front shirt brings a whole new dimension of comfort and warmth to winter weather. Wear it alone or layered; the fabric's natural wind- and water-resistance will help keep the elements at bay and the happiness high. Dual front pockets secure essentials."
    },
    {
    "id": 14,
    "name": "Wild River Thermal Henley",
    "price": 35,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0331607_216C1?$748V1$",
    "description": "Our new lightweight take on thermal knit in breathable cotton/polyester, with a min-waffle texture and rib-knit neck and cuffs for shape retention. The lighter weight makes it ideal for layering."
    },
    {
    "id": 15,
    "name": "Voyager Fleece-Lined Shirt Jacket",
    "price": 83.3,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0340563_181C1?$748V1$",
    "description": "The durable, quick-dry twill exterior of this snap-front shirt jacket is peached for soft comfort and then lined with polyester fleece for warmth, making it ideal for rugged use throughout fall and winter."
    },
    {
    "id": 16,
    "name": "Classic Field Pro Long-Sleeve Polo Shirt",
    "price": 60,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0330618_488C1?$748V1$",
    "description": "Our long-sleeve Field Pro Polo shirt has a wicking finish that pulls moisture away from the skin to keep you feeling cooler and drier while active. The breathable cotton piqué has a slight basketweave texture."
    },
    {
    "id": 17,
    "name": "Eddie's Favorite Flannel Classic Fit Shirt - Solid",
    "price": 30,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0340159_650C1?$748V1$",
    "description": "The softest, most durable flannel you'll find anywhere. Developed exclusively for us, with 2-ply cotton brushed on both sides for softness and specially treated to prevent shrinking and fading."
    },
    {
    "id": 18,
    "name": "Quest Fleece Full-Zip Jacket",
    "price": 56,
    "category": "men",
    "image": "https://eddiebauer.scene7.com/is/image/EddieBauer/D0290064_271C1?$748V1$",
    "description": "The brilliance of fleece is the simplicity of its go-anywhere, do-anything style and performance. For this full-zip jacket, we started with classic, 200-weight polyester fleece because it offers cross-seasonal comfort and lightweight warmth. The reverse-coil zipper with rubber tip lets you quickly regulate temperature."
    }
]

const Home = () => {
  
    
  function MyComponent(props) {
    const { data } = props;
  console.log(data);
    return (
      <div className='best-seller'>
        {data.map((item, index) => (
          <div key={index} className="seller">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>Price:{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
  
  
  return (
    <div>
      <Navbar/>
        <div className="banner">
          <div>
          <button>SHOP WOMEN</button>
          <button>SHOP MEN</button></div>
        </div><br /><br />
        <div className='sec1'>
        <div>
          <button>SHOP WOMEN</button>
          <button>SHOP MEN</button></div>
        </div>
        <div className='sec2'>
          <div >
          <button>SHOP WOMEN</button>
          <button>SHOP MEN</button>
          <button>SHOP KIDS</button>
          <button>SHOP HOME</button>
          </div>
        </div>
        <div className='sec3'>BUY ONLINE, PICK UP IN-STORE Learn More  ❯</div>
        <div className='sec4'>
          <div className='sec4-card'>
            <div>
              <img src="https://eddiebauer.scene7.com/is/image/EBContent/221227_hp_mrkt3box_AF_V1?$jpg12$&scl=1" alt="" />
            </div>
            <h3>American Forest</h3>
            <p>Thanks to you we're making a difference! We've partnered with American Forests for over 25 years, and your generous support has helped plant over 8 million trees across the US and Canada.</p>
            <h4><u> LEARN MORE</u></h4>
          </div>
            <div className='sec4-card'>
            <div>
              <img src="https://eddiebauer.scene7.com/is/image/EBContent/221227_hp_mrkt3box_TT_V1?$jpg12$&scl=1" alt="" />
            </div>
            <h3>Abundance Abounds!</h3>
            <p>Thanks to you we're making a difference! We've partnered with American Forests for over 25 years, and your generous support has helped plant over 8 million trees across the US and Canada.</p>
            <h4><u>FOLLOW US ON TIK TOK</u></h4>
            </div>
            <div className='sec4-card'>
            <div>
              <img src="https://eddiebauer.scene7.com/is/image/EBContent/221227_hp_mrkt3box_H5_V1?$jpg12$&scl=1" alt="" />
            </div>
            <h3>High Fives Foundation</h3>
            <p>Thanks to you we're making a difference! We've partnered with American Forests for over 25 years, and your generous support has helped plant over 8 million trees across the US and Canada.</p>
            <h4><u> LEARN MORE</u></h4>
            </div>
          </div>
          <div className='sec5'>
            <img src="https://eddiebauer.scene7.com/is/image/EBContent/211210_hp_klarna_V2?$a8$" alt="" />
          </div>
          <h2>Best Sellers</h2>
          <MyComponent data={data}/>
          <h2>Trending Products</h2>
          <Slider data={products}/>
          <div className='sec6'>
            <h2>WANDER. DISCOVER. EXPLORE. REPEAT.</h2>
            <p>Visit us on Instagram to get inspired and tag @eddiebauer and #LiveYourAdventure for a chance to be featured.</p>
          </div>
          <div className='sec7'>
            <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU5Mzc3MDkzLjE2MDY1MzQyNDU2MC5qcGVn.jpg?w=400&h=400&fit=cover" alt="" />
            </div>
            <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU5MTIyNzg1LjcyOTUwMDUxNjMzOC5qcGVn.jpg?w=400&h=400&fit=cover" alt="" />
            </div>
            <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU5MDM2MjM5LjIwMzUzNDQzMDQ1MC5qcGVn.jpg?w=400&h=400&fit=cover" alt="" />
            </div>
            <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4OTY0MTA2LjUwMTkwODM2NDcyNS5qcGVn.jpg?w=400&h=400&fit=cover" alt="" />
            </div>
          </div>
    </div>
  )
}

export default Home
