import { CREATE_LISTING_SUCCESS } from "store/actions/listingActions";
import { DELETE_LISTING_REQUEST } from "store/actions/listingActions";
import { DELETE_LISTING_FAILURE } from "store/actions/listingActions";
import { DELETE_LISTING_SUCCESS } from "store/actions/listingActions";
import { CREATE_LISTING_REQUEST } from "store/actions/listingActions";
import { CREATE_LISTING_FAILURE } from "store/actions/listingActions";
import { FETCH_LISTINGS_FAILURE, FETCH_LISTINGS_REQUEST, FETCH_LISTINGS_SUCCESS } from "store/actions/listingActions";

const initialState = {
  loading: false,
  error: "",
  listings: "",
  listing:""
};

export const listingsReducer = (state = initialState, { type, error, listings, listing }) => {
  switch (type) {
    case DELETE_LISTING_REQUEST:
      return { ...state, loading: true };

    case DELETE_LISTING_SUCCESS:
      return { ...state, loading: false, error: "" };

    case DELETE_LISTING_FAILURE:
      return { ...state, loading: false, error: error };
    
    case FETCH_LISTINGS_REQUEST:
      return { ...state, loading: true };

    case FETCH_LISTINGS_SUCCESS:
      return { ...state, loading: false, listings: listings, error: "" };

    case FETCH_LISTINGS_FAILURE:
      return { ...state, loading: false, error: error };

    case CREATE_LISTING_REQUEST:
      return { ...state, loading: true };

    case CREATE_LISTING_SUCCESS:
      return { ...state, loading: false, listing: listing, error: "" };

    case CREATE_LISTING_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};

