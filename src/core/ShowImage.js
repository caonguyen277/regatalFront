import React from "react";

const ShowImage = ({ item, url }) => (
    <div className="css-DivImgCard-Product product-img text-xs-center text-lg-center">
        
        <img
            src={`https://web-production-9f18.up.railway.app/api/${url}/photo/${item._id}`}
            alt={item.name}
            className="img-thumbnail"
            style={{ maxHeight: "100%", maxWidth: "100%", border: "none"}}
        />
        
    </div>
);

export default ShowImage;
