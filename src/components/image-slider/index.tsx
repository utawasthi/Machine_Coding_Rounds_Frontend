import { useEffect, useState } from "react"
import './image-slider.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";


interface ImageType {
  author : string;
  id : string;
  download_url : string;
}

export const ImageSlider = () => {

  const [images , setImages] = useState<ImageType[]>([]);
  const [activeSlide , setActiveSlide] = useState<number>(0);
  const [error , setError] = useState<string>();
  const [loading , setLoading] = useState<boolean>(false);

  useEffect(() => {
    
    const fetchData = async (url : string , page : string , limit : string) => {
      try{
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        
        const data = await response.json();

        if(data){
          setImages(data);
        }
      }
      catch(err){
        console.log(err);
        setError(err + "");
      }
      finally{
        setLoading(false);
      }
    }

    fetchData('https://picsum.photos/v2/list' , '1' , '10');
  } , []);

  const handeClickBackward = () => {
    setActiveSlide((activeSlide - 1 + 10) % 10);
  }

  const handeClickForward = () => {
    setActiveSlide((activeSlide + 1) % 10);
  }

  if(loading){
    return <div>Loading the data .......</div>
  }

  if(error){
    return <div>Some error occcured .......</div>
  }

  return (
    <div className = 'main-container'>
      <h1 style = {{textAlign : 'center'}}>Image Slider</h1>
      <div className = 'slide-container'>
        <div 
          className = 'arrow'
          onClick = {handeClickBackward}
        >
          <IoIosArrowBack />
        </div>
        {
          images.map((item , ind) => (
            <div 
              className = 'image-container'
              key = {item.id}
            >
              {
                activeSlide === ind ? 
                <img 
                  src = {item.download_url}
                  className = 'image'
                /> : null
              }
            </div>
          ))
        }
        <div 
          className = 'arrow'
          onClick = {handeClickForward}
        >
          <IoIosArrowForward />
        </div>
      </div>
      <div className = 'circles-container'>
        {
          [...Array(10)].map((_ , ind) => (
            <RiCheckboxBlankCircleFill 
              className = {activeSlide == ind ? 'circle active' : 'circle'}
              onClick = {() => setActiveSlide(ind)}
            />
          ))
        }
      </div>
    </div>
  )
}