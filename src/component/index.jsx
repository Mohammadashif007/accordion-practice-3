import { useState } from "react";
import accordionData from "./data";
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const handleSingleSelectedData = (id) => {
        setSelected(id === selected ? null : id);
    };

    return (
        <div className="wrapper">
            <div className="accordion">
                {accordionData.map((item) => (
                    <div className="item" key={item.id}>
                        <div
                            onClick={() => handleSingleSelectedData(item.id)}
                            className="title"
                        >
                            <p>{item.question}</p>
                            {selected ? <span>-</span> : <span>+</span>}
                        </div>
                        {selected === item.id ? (
                            <p className="content">{item.answer}</p>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
