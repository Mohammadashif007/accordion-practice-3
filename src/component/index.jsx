import { useState } from "react";
import accordionData from "./data";
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enable, setEnable] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    const handleSingleSelectedData = (id) => {
        setSelected(id === selected ? null : id);
    };

    const handleMultiSelection = (id) => {
        let cpyMultiple = [...multiSelected]; 
        const findIndexOfCurrentId = cpyMultiple.indexOf(id);
        
        if(findIndexOfCurrentId === -1) cpyMultiple.push(id);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiSelected(cpyMultiple);
    };

    console.log(selected, multiSelected);

    return (
        <div className="wrapper">
            {enable ? (
                <button onClick={() => setEnable(!enable)}>
                    Disable Multi Selection
                </button>
            ) : (
                <button onClick={() => setEnable(!enable)}>
                    Enable Multi Selection
                </button>
            )}

            <div className="accordion">
                {accordionData && accordionData.length > 0 ? (
                    accordionData.map((item) => (
                        <div className="item" key={item.id}>
                            <div
                                onClick={enable ? ()=> handleMultiSelection(item.id):() =>
                                    handleSingleSelectedData(item.id)
                                }
                                className="title"
                            >
                                <p>{item.question}</p>
                                {selected ? <span>-</span> : <span>+</span>}
                            </div>
                            {selected === item.id || multiSelected.indexOf(item.id) !== -1 ? (
                                <p className="content">{item.answer}</p>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <p>Data not found</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
