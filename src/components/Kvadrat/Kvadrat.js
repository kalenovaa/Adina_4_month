import React, {useState} from 'react';

const Kvadrat = () => {

    const [cvet1, setCvet1] = useState("blue")
    const [cvet2, setCvet2] = useState("red")
    const [border1, setBorder1] = useState("2px solid red")
    const [border2, setBorder2] = useState("2px solid blue")

    const handleClick1 = () => {
        setCvet1(cvet2)
        setCvet2(cvet1)
        setBorder2(border1)
        setBorder1(border2)
    }
    const handleClick2 = () => {
        setCvet1(cvet2)
        setCvet2(cvet1)
        setBorder2(border1)
        setBorder1(border2)
    }

    return (
        <div>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    background: cvet1,
                    border: border1
                }}
                onClick={handleClick1}
            ></div>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    background: cvet2,
                    border: border2
                }}
                onClick={handleClick2}
            ></div>
        </div>
    );
};

export default Kvadrat;