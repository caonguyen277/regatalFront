import React from "react";

const ShowImage = ({ item, url ,path }) => (
    <div className="css-DivImgCard-Product product-img text-xs-center text-lg-center">
        
        <img
            src={`http://regatal.onrender.com/api/${url}/photo/${item._id}/${path}`}
            alt={item.name}
            className="img-thumbnail"
            style={{ maxHeight: "100%", maxWidth: "100%", border: "none"}}
        />
        
    </div>
);

export default ShowImage;
