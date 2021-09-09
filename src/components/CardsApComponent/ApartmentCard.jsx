import React from 'react';
import { useHistory } from 'react-router-dom';


const ApartmentCard = ({listing}) => {
  const history = useHistory();

  function truncate (str) {
    return str.length > 10 ? str.substring(0, 50) + "..." : str;

}

  return (
    <>
      <div
        className="mx-4 "
        onClick={() => history.push(`/listing/${listing.id}`)}
      >
        <div className="row">
          <div
            className="col-sm-10 card listing-card"
            style={{ width: "17rem" }}
          >
            <div className='img-box'>
              <img
                className="card-img-top"
                src={listing.photo}
                alt="annonce illustrée"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{listing.title}</h5>
              <p className="card-text">{listing.price} €/semaine</p>
              <p className="card-text">{listing.category}</p>
              <p
                className="btn btn-primary stretched-link"
                onClick={() => history.push(`/listing/${listing.id}`)}
              >
                Je fonce
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentCard;