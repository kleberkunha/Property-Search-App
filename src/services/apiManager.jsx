import Cookies from "js-cookie";
import { fetchCategoriesFailure } from "store/actions/categoryActions";
import { fetchCategoriesSuccess } from "store/actions/categoryActions";
import { fetchCategoriesRequest } from "store/actions/categoryActions";
import { createListingRequest } from "store/actions/listingActions";
import { createListingSuccess } from "store/actions/listingActions";
import { createListingFailure } from "store/actions/listingActions";
import { fetchListingsFailure, fetchListingsRequest, fetchListingsSuccess } from "store/actions/listingActions";
import { fetchLocationsFailure } from "store/actions/locationsActions";
import { fetchLocationsSuccess } from "store/actions/locationsActions";
import { fetchLocationsRequest } from "store/actions/locationsActions";
import { fetchLoginFailure, fetchLoginLogout, fetchLoginRequest, fetchLoginSuccess } from "store/actions/userActions";
import { fetchRegisterFailure, fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterUnregister } from "store/actions/userActions";
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "store/actions/userActions";
const baseUrl = "https://thpimmo-back.herokuapp.com";


export const listingsFetch = () => {
  return (dispatch) => {
    dispatch(fetchListingsRequest());
    fetch(baseUrl + "/api/v1/properties", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchListingsFailure(response.errors));
        } else {
          dispatch(fetchListingsSuccess(response));
        }
      });
  };
};

// BELOW IS THE FUNCTION TO CREATE A NEW USER
export const registerFetch = (username, email, password, passwordConfirmation) => {
  const data = {
    user: {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  };
  return (dispatch) => {
    let token
    dispatch(fetchRegisterRequest());
    fetch(baseUrl + "/api/signup", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.headers.get("authorization")) {
          token = response.headers.get("authorization").split("Bearer ")[1];
        }
        return response.json()
      })
      .then((response ) => {
        if (response.errors || response.error) {
          dispatch(fetchRegisterFailure(response.errors));
        } else {
          Cookies.set("token_cookie", token);
          Cookies.set("id_cookie", response.data.id);
          dispatch(fetchRegisterSuccess(response));
        }
      });
  };
};


// BELOW IS THE FUNCTION TO LOG IN
export const loginFetch = (userData) => {

  return (dispatch) => {
    let token;
    dispatch(fetchLoginRequest());
    fetch(baseUrl + "/api/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.headers.get("authorization")) {
        token = response.headers.get("authorization").split("Bearer ")[1];
        }
        return response.json();
      })
      .then((response) => {
        if (response.errors || response.error) {
          dispatch(fetchLoginFailure(response.errors));
        } else {
          Cookies.set("token_cookie", token);
          Cookies.set('id_cookie',response.data.id);
          dispatch(fetchLoginSuccess(response));
        }
      });
  };
};

// BELOW IS THE FUNCTION TO LOG IN WITH COOKIES
export const loginUserWithCookie = async() =>{
  const token = Cookies.get('token_cookie');
  const id = Cookies.get('id_cookie');

  const cookiesConfig = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(baseUrl + `/api/v1/users/${id}`, cookiesConfig)
  const cookieData = await response.json();
  if (!cookieData.error) {
    return true;
  } else {
    return false;
  }

};


// BELOW IS THE FUNCTION TO LOG OUT
export const logoutUser = () => {
  return (dispatch) => {
    dispatch(fetchRegisterUnregister())
    dispatch(fetchLoginLogout())
  }
};

// BELOW IS THE FUNCTION TO FETCH ALL CATEGORIES
export const categoriesFetch = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    fetch(baseUrl + "/api/v1/categories", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchCategoriesFailure(response.errors));
        } else {
          dispatch(fetchCategoriesSuccess(response));
        }
      });
  };
};

// BELOW IS THE FUNCTION TO FETCH ALL LOCATIONS
export const locationsFetch = () => {
  return (dispatch) => {
    dispatch(fetchLocationsRequest());
    fetch(baseUrl + "/api/v1/locations", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchLocationsFailure(response.errors));
        } else {
          dispatch(fetchLocationsSuccess(response));
        }
      });
  };
};

// BELOW IS THE FUNCTION TO FETCH ALL USERS
export const usersFetch = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(baseUrl + "/api/v1/users", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          dispatch(fetchUsersFailure(response.errors));
        } else {
          dispatch(fetchUsersSuccess(response));
        }
      });
  };
};

// BELOW IS THE FUNCTION TO CREATE A LISTING
export const createListing = (data) => {
  return (dispatch) => {
    dispatch(createListingRequest());
    fetch(baseUrl + "/api/v1/properties", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token_cookie")}`,
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status < 299) {
        response
          .json()
          .then((response) => dispatch(createListingSuccess(response)));
      } else {
        response.json().then((response) => {
          dispatch(createListingFailure(response));
        });
      }
    });
  };
};