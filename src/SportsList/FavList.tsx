import React from "react";

interface IProps{
    title: String,
    children: React.ReactNode
}
function FavList({ title, children }: IProps) {
    return (
       
            <div className="header">
                <h2>{title}</h2>
                <ul>{children}</ul>
        
            </div> 
          
    )
}
export default FavList