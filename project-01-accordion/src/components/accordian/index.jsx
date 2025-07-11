
import { useState } from "react"
import data from "./data";
import "./styles.css";
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    // single selection
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    // multiple selection
    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple]
        const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId)

        console.log(findIndexofCurrentId)
        if (findIndexofCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexofCurrentId, 1)
        setMultiple(copyMultiple)
    }

    console.log(selected, multiple);
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className="item" key={index}>
                            <div
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ?
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className="content">{dataItem.answer}</div> :
                                    selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                            }
                            {/*                             
                            {
                                selected === dataItem.id || 
                                multiple.indexOf(data.Item.id) !== -1 ?
                                    <div className="content">{dataItem.answer}</div>
                                    : null
                            } */}
                        </div>
                    ))
                ) : (
                    <div>No Data found!</div>
                )}
            </div>
        </div>
    );
}

