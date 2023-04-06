import React from "react";

export default function ImgSearch()
{
    return(
        <div className="img-search">
            <input type="search" className="search-input" placeholder="Search for images"/>
            <p className="search-paragraph">All images</p>
            <button className="search-btn">Search</button>
        </div>
    )
}