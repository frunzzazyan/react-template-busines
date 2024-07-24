import React from 'react'
import Slider from "./Slider"
import Contact from "./Contact"

import "../Blog.css"

import { BsCalendar2Date } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Blog = ({blog}) => {
  return (
   <>
   <Slider/>
   <div className="news-filter">
    <div className="news">
      <div className="news-item">
        <div className="img">
          <img src={blog?.blog.items.item1.img} alt="" />
        </div>
        <p>{blog?.blog.items.item1.p}</p>
      </div>
      <div className="news-item">
        <div className="img">
          <img src={blog?.blog.items.item2.img} alt="" />
        </div>
        <p>{blog?.blog.items.item2.p}</p>
      </div>
      <div className="news-item">
        <div className="img">
          <img src={blog?.blog.items.item3.img} alt="" />
        </div>
        <p>{blog?.blog.items.item3.p}</p>
      </div>
      <div className="news-item">
        <div className="img">
          <img src={blog?.blog.items.item4.img} alt="" />
        </div>
        <p>{blog?.blog.items.item4.p}</p>
      </div>
      <div className="news-item">
        <div className="img">
          <img src={blog?.blog.items.item5.img} alt="" />
        </div>
        <p>{blog?.blog.items.item5.p}</p>
      </div>
      <div className="news-item">
        <div className="img">
          <img src={blog?.blog.items.item6.img} alt="" />
        </div>
        <p>{blog?.blog.items.item6.p}</p>
      </div>
    </div>
    <div className="filter">
      <input type="text" placeholder='Type a keyword and hit enter' />
      <ul>
        <h3>Categories</h3>
        <li>Family Law</li>
        <li>Criminal Law</li>
        <li>Business Law</li>
        <li>Insurance Law</li>
        <li>Drug Control Law</li>
      </ul>
      <div className="articles">
      <h3>Popular Articles</h3>
          <div className="article-item">
            <div className="img-article">
              <img src="#" alt="" />
            </div>
            <div className="text-article">
              <p>Even the all-powerful Pointing has no control about the blind texts</p>
              <span><BsCalendar2Date /> Oct. 04, 2018</span> <span><FaUser /> Dave Lewis</span><span><MdMessage /> 19</span>
            </div>
          </div>
          <div className="article-item">
            <div className="img-article">
              <img src="#" alt="" />
            </div>
            <div className="text-article">
              <p>Even the all-powerful Pointing has no control about the blind texts</p>
              <span><BsCalendar2Date /> Oct. 04, 2018</span> <span><FaUser /> Dave Lewis</span><span><MdMessage /> 19</span>
            </div>
          </div>
          <div className="article-item">
            <div className="img-article">
              <img src="#" alt="" />
            </div>
            <div className="text-article">
              <p>Even the all-powerful Pointing has no control about the blind texts</p>
              <span><BsCalendar2Date /> Oct. 04, 2018</span> <span><FaUser /> Dave Lewis</span><span><MdMessage /> 19</span>
            </div>
          </div>
      </div>
      <div className="tag-cloud">
        <h3>Tag Cloud</h3>
        <div className="span">

        <span>DISH</span>
        <span>MENU</span>
        <span>FOOD</span>
        <span>SWEET</span>
        <span>TASTY</span>
        <span>DELICIOUS</span>
        <span>DESSERTS</span>
        <span>DRINKS</span>
        </div>
      </div>

      <div className="subscribe">
        <h1>Subscribe to our Newsletter</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
        <form action="">
        <input type="email" placeholder='Email' />
        <input type="submit" value="Subscribe" />
        </form>
      </div>
      <ul>
        <h3>September 2018</h3>
        <li>August 2018</li>
        <li>July 2018</li>
        <li>June 2018</li>
        <li>May 2018</li>
        <li>April 2018</li>
      </ul>

      <h3>Paragraph</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
    </div>
   </div>
   <Contact contact={blog?.contact}/>
   </>
  )
}

export default Blog