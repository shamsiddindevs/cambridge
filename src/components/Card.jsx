import React,{useState,useRef} from "react";
import src from '../assets/src.mp4'
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
const Card = () => {
  const videoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsOpen(true);
    } else {
      videoRef.current.pause();
      setIsOpen(false);
    }
  };
  return (
   <>
    <div className=" w-full  px-6 my-10">
      <div className="carousel   flex gap-5   ">
        <div className="carousel-item  flex flex-col  justify-between w-80 h-[500px] w- ">
          
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"
            className="w-full h-[48%] rounded-3xl overflow-hidden object-cover"
          />
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"
            className="w-full h-[48%] rounded-3xl overflow-hidden object-cover"
          />
          
        </div>
        <div className="carousel-item relative rounded-3xl  overflow-hidden w-80 h-[500px]">
          <video ref={videoRef}  className=" w-full object-cover" src={src} controls ={false} autoPlay ></video>
          {!isOpen &&<button onClick={handlePlayPause} className="text-5xl absolute top-1/2 left-1/2  -translate-y-1/2  -translate-x-1/2"><FaPlayCircle/></button>}
          {isOpen &&<button onClick={handlePlayPause}  className="text-5xl absolute top-1/2 left-1/2  -translate-y-1/2  -translate-x-1/2"><FaPauseCircle /></button>}
        </div>
        <div className="carousel-item rounded-3xl overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item rounded-3xl overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item rounded-3xl overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item rounded-3xl overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Burger"
          />
        </div>
      </div>
    </div>

   </>
  );
};

export default Card;
