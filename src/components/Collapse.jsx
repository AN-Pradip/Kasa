import React from "react";

function Collapse(title, content){
    //Initialize input
    content = title.content;
    title = title.title;


    //hide or show collapse
    function CollapseAction(e){
        if(e.target.checked === true){
            e.target.nextSibling.nextSibling.style.display = "block"
            e.target.nextSibling.nextSibling.style.color = "#FF6060"
            e.target.parentNode.style.background = "#F6F6F6"
            e.target.nextSibling.lastChild.style.rotate = "90deg"
        } else {
            e.target.nextSibling.nextSibling.style.color = "transparent"
            e.target.nextSibling.nextSibling.style.display = "none"
            e.target.parentNode.style.background = "transparent"
            e.target.nextSibling.lastChild.style.rotate = "-90deg"
        }
    }

    //sort if content is an array and display
    if (Array.isArray(content)){
        return(
            <div className="collapse">
                <input className="collapse--checkbox" type="checkbox" id={title} onChange={CollapseAction}/>
                <label htmlFor={title} className="collapse--Label"> 
                    {title} 
                    <p className="collapse--arrow">&lt;</p>
                </label>
                <div className="collapse--List--Container">
                    <ul className="collapse--List">
                    {content.map((item, index) =>(
                            <li key={index} className="collapse--List--Item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
                <div className="collapse">
                    <input className="collapse--checkbox" type="checkbox" id={title} onChange={CollapseAction}/>
                    <label htmlFor={title} className="collapse--Label"> 
                        {title} 
                        <p className="collapse--arrow">&lt;</p>
                    </label>
                    <div className="collapse--Detail">
                        {content}
                    </div>
                </div>
        )
    }
}

export default Collapse