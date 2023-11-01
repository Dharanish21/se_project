
import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css'
const Home = ({detail, view, close, setClose, addtocart}) => {
  return (
    <>
        {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                               
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>YOU’RE JUST A CLICK
AWAY FROM SOME
AMAZING DEALS!</h2>
                <Link to='/product' className='link'>Order Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
            <img src='https://res.cloudinary.com/the-infatuation/image/upload/v1656116752/cms/AleksandraBoruch_CatalystCafe_Group-4.jpg' alt='sliderimg' width='1000' height='600'>
</img>
            </div>
        </div>
    </div>
    
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Orders</h3>
            <p>All Online platforms</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Payments</h3>
            <p>Online payments available</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every Oder</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) => 
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                    <li onClick={() => view (curElm)}><BsEye /></li>
                    <li><AiOutlineHeart /></li>                                     
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>₹{curElm.Price}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
       
       <Link to='/product' className='link'>  Order Now  <BsArrowRight /></Link>
      </div>
      <div className='img_box'>
        <img src='https://www.leocoffee.co.in/cdn/shop/files/F0470AC5-D46D-4112-834D-7C5C1F9EF9CF.jpg?v=1673668314' alt='sliderimg' width='' height=''></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home