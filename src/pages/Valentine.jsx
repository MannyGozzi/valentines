import {useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const anims = `!outline-none focus:ring-8 focus:ring-pink-400 focus:bg-pink-200 hover:ring-8 hover:ring-pink-400 hover:bg-pink-200 transition-all duration-300 ease-in-out`
const buttonStyles = "bg-pink-300 border-[.3rem] border-pink-500 text-pink-500 text-2xl font-bold rounded-2xl p-4 mt-4 mb-4 letter-spacing-2 flex items-center justify-center gap-3 select-none"


function Valentine() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let toName = params.get('to')
  let fromName = params.get('from')
  if (!toName) toName = "Valentine";
  if (!fromName) fromName = "Secret Admirer";
  const [no, setNo] = useState(0);
  const gifs = ["kissing.gif", "belly.gif", "love_you.gif", "spinning.gif", "fall.gif", "carry.gif"]
  const [shout, setShout] = useState(`${toName}, will you be my Valentine?`);
  const [yes, setYes] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const noCount = no + 1
    if (no < 4) setNo(prevCount => prevCount + 1);
    if (noCount == 1) {
      setShout("But I love you!");
    } else if (noCount == 2) {
      setShout("I really do!");
    } else if (noCount == 3) {
      setShout("Please?");
    } else if (noCount == 4) {
      setShout("Sad! 😭");
    }
  };

  const yesClick = () => {
    setNo(gifs.length-1)
    setShout(`Yayyyyy! I love you!`);
    setYes(true);
  }

  return (
    <div 
    className="flex flex-col h-screen justify-center items-center mb-24">
      <div className="mt-15 mb sm:mt-0" id="wrapper">
            <div id="pulsingheart" className="scale-[150%] mb-[4rem]"></div>
        </div>
      <h2 className="text-2xl text-pink-500 font-bold mb-4">From: {fromName}</h2>
      <div className='flex justify-center mb-4'><img
          src={gifs[no]}  // Make sure to adjust the path based on your project structure
          alt="Valentine GIF"
          className="rounded-2xl shadow-lg w-[200px] h-[200px] md:h-[300px] md:w-[300px] transition-all duration-300 hover:scale-110 object-cover	"
        />
        </div>
      <div className={`flex transition-all duration-300 justify-center item-center gap-6  ${no >= 4 ? "max-h-0 opacity-0 overflow-hidden" :"max-h-[300px]"}`}>
        <button
            type="button"
            className={`${anims}
             ${buttonStyles}`}
            onClick={yesClick}
        ><p className='h-full'>Yes</p>
        </button>
        <button
            type="button"
            className={`${anims} ${buttonStyles}`}
            style={{ transform: `scale(${100 - no * 15}%)` }}
            onClick={handleClick}
        ><p className='h-full'>No</p>
        </button>
      </div>
      <h2 className="text-2xl text-pink-500 font-bold mt-4">{shout}</h2>
      <button
          type="button"
          className={`${anims} ${yes || no >= gifs.length - 2 ? "max-h-[4rem]" : "max-h-0 opacity-0 overflow-hidden"} overflow-hidden bg-pink-300 border-[.3rem] border-pink-500 text-pink-500 text-2xl font-bold rounded-2xl p-2 px-3 mt-4 mb-4 letter-spacing-2 flex items-center justify-center gap-2`}
          onClick={() => navigate('../')}
      ><IoArrowBackCircle className='transition-all duration-500 hover:text-black hover:rotate-90' size={32}/> <p className='h-full'>Go back</p>
      </button>
    </div>
  );
    }

export default Valentine