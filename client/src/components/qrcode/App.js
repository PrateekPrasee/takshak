import React from 'react';
import QRCode from 'qrcode'
import { useState } from 'react'
import './index.css';

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			color: {
				dark: '#220862',
				light: '#C4FCEF',
			}
		}, (err, url) => {
			if (err) return console.error(err)
			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h5 style={{color: '#FF8066', fontWeight: '600'}}>Generate Your own QR Code Instantly.</h5>
      <h6 style={{color: '#D63423'}}>*Your Data will not be stored.</h6>
        <input
        className='text'
				type="text"
				placeholder="ex. https://www.google.co.in"
				value={url}
				onChange={e => setUrl(e.target.value)} 
				style={{padding: '15px 24px', marginTop:'10px'}}
				/>
				<br />
			<button style={{fontSize: '15px', border: '1px dashed #D5CABD', borderRadius: '5px', appearance: 'none', outline: 'none', backgroundColor: '#FEFEDF', color: '#936C00', padding: '11px 16px', marginTop: '9px'}} onClick={GenerateQRCode}>Generate Your <b>QR</b></button>
			{qr && <>
        <img className='img1' src={qr} />
				<a style={{fontSize: '15px', border: 'none', appearance: 'none', outline: 'none', color: '#FF8066', backgroundColor: '#FEFEDF', border: '2px solid #FEFEDF', borderRadius:'5px', fontStyle: 'italic'}} href={qr} download="qrcode.png">Download</a>
			</>
      }
		</div>
	)
}

export default App;