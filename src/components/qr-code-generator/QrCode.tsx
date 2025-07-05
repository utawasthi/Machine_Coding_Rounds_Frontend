import { useState } from "react"
import QRCode from "react-qr-code";


export const QrCode = () => {

  const [inputValue , setInputValue] = useState<string>('');
  const [qrValue , setQrValue] = useState<string>('');

  return (
    <div className = 'flex flex-col gap-10 justify-center items-center w-[90vw] h-[60vh] ml-10 my-[10vw]'>
      <h1 className = 'text-2xl font-bold'>QR Code Generator</h1>
      <div className = 'flex flex-col w-[400px] gap-10 justify-center items-center p-6 shadow-2xl'>
        <div className = 'flex justify-between w-[350px]'>
          <input 
            type = 'text'
            onChange = {(e) => setInputValue(e.target.value)}
            name = 'qr-code'
            placeholder = 'Type Here...'
            className = 'p-3 outline-none border-[0.1px] rounded-2xl w-[230px]'
          />
          <button
            disabled = {inputValue.trim().length ? false : true}
            onClick = {() => setQrValue(inputValue)}
            className = 'w-[100px] rounded-2xl cursor-pointer bg-cyan-500 shadow-xl font-light'
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode 
            title = {qrValue}
            size = {256}
            value = {qrValue}
            viewBox = {`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  )
}