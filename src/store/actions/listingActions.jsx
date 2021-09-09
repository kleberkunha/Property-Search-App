export const FETCH_LISTINGS_REQUEST = "FETCH_LISTINGS_REQUEST";
export const FETCH_LISTINGS_SUCCESS = "FETCH_LISTINGS_SUCCESS";
export const FETCH_LISTINGS_FAILURE = "FETCH_LISTINGS_FAILURE";

export const fetchListingsRequest = () => {
  return {
    type: FETCH_LISTINGS_REQUEST,
  };
};
export const fetchListingsSuccess = (listings) => {
  return {
    type: FETCH_LISTINGS_SUCCESS,
    listings,
  };
};
export const fetchListingsFailure = (error) => {
  return {
    type: FETCH_LISTINGS_FAILURE,
    error,
  };
};

export const CREATE_LISTING_REQUEST = "CREATE_LISTING_REQUEST";
export const CREATE_LISTING_SUCCESS = "CREATE_LISTING_SUCCESS";
export const CREATE_LISTING_FAILURE = "CREATE_LISTING_FAILURE";

export const createListingRequest = () => {
  return {
    type: CREATE_LISTING_REQUEST,
  };
};
export const createListingSuccess = (listing) => {
  return {
    type: CREATE_LISTING_SUCCESS,
    listing,
  };
};
export const createListingFailure = (error) => {
  return {
    type: CREATE_LISTING_FAILURE,
    error,
  };
};

export const DELETE_LISTING_REQUEST = "DELETE_LISTING_REQUEST";
export const DELETE_LISTING_SUCCESS = "DELETE_LISTING_SUCCESS";
export const DELETE_LISTING_FAILURE = "DELETE_LISTING_FAILURE";

export const deleteListingRequest = () => {
  return {
    type: DELETE_LISTING_REQUEST,
  };
};
export const deleteListingSuccess = () => {
  return {
    type: DELETE_LISTING_SUCCESS,
  };
};
export const deleteListingFailure = (error) => {
  return {
    type: DELETE_LISTING_FAILURE,
    error,
  };
};