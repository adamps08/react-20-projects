import { useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeoOfColor] = useState('hex');
    const [color, SetColor] = useState('#000000')

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',]
        let hexColor = '#';

        for (let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }

        console.log(hexColor)

        SetColor(hexColor)
    }

    function handleCreateRandomRgbColor() {

    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}

        >
            <button onClick={() => setTypeoOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeoOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} > Generate Random Color </button>
    </div >
    )
}