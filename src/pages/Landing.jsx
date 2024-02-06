import { useState } from 'react'
import { IoCube } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";


function Landing() {

// eslint-disable-next-line no-undef
const [toName, setToName] = useState('');
const [fromName, setFromName] = useState('');
const inputStyle = `border-pink-500 bg-pink-300 
rounded-2xl p-2 border-[.3rem] mb-4 placeholder-pink-500 text-pink-500 font-bold text-2xl text-center`
const anims = `!outline-none focus:ring-8 focus:ring-pink-400 focus:bg-pink-200 hover:ring-8 hover:ring-pink-400 hover:bg-pink-200 transition-all duration-300 ease-in-out`
const [link, setLink] = useState("")

const genLink = () => {
    const url = new URL(window.location.href);
    url.pathname = "/valentine";
    url.searchParams.set('to', toName);
    url.searchParams.set('from', fromName);
    setLink(url.href);
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
}

  return (
    <div className='flex flex-col justify-center items-center p-8 h-[100vh]'>
        <h1 className="font-bold text-pink-500 rounded-2xl bg-pink-100 p-4">Be my Valentine!</h1>
        
        <div className="flex flex-col items-center mt-8">
            <label className="text-lg font-semibold mb-2 text-black" htmlFor="toName">
                To:
            </label>
            <input
                type="text"
                id="toName"
                value={toName}
                onChange={(e) => setToName(e.target.value)}
                placeholder="Recipient's Name"
                className={`${inputStyle} ${anims}`}
            />

            <label className="text-lg font-semibold mb-2 text-black" htmlFor="fromName">
                From:
            </label>
            <input
                type="text"
                id="fromName"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                placeholder="Your Name"
                className={`${inputStyle} ${anims}`}
            />
            <button
                type="button"
                className={`${anims} bg-pink-300 border-[.3rem] border-pink-500 text-pink-500 text-2xl font-bold rounded-2xl p-2 mt-4 mb-4 letter-spacing-2 flex items-center justify-center gap-3`}
                onClick={genLink}
            ><p className='h-full'>Build</p><IoCube className='transition-all duration-500 hover:text-black hover:rotate-90'/> 
            </button>
            </div>

            {
                link && (<div className='flex items-center justify-center mt-4'>
                        <a href={link} target="_blank" rel="noreferrer" className={`transition-all duration-300 ${link.length > 40 ? "text-sm" : "text-lg"} p-4 bg-pink-100 rounded-2xl flex  gap-2 text-pink-500 font-bold text-2xl rounded-r-none`}>
                            <FaLink />{link}
                        </a>
                        <button className={`bg-white p-4 h-full rounded-2xl rounded-l-none transition-all duration-300 !outline-none hover:text-pink-500 focus:text-pink-500`} onClick={copyToClipboard}>
                            <IoCopy/>
                        </button>
                    </div>
                )
            }
        </div>
  )
}

export default Landing