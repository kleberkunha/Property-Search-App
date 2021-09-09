import { Link } from "react-router-dom";
import './UserProfileResponsive/UserProfileResponsive.scss';
import HousingList from 'components/HousingList/HousingList';
import Loading from 'components/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { listingsFetch, usersFetch } from 'services/apiManager';
import Cookies from "js-cookie";

const  UserProfile = () => {
  const [userListings, setUserListings] = useState();

  const user_id = parseInt(Cookies.get('id_cookie'));

  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)
  const users = useSelector(state => state.users)

  const getListings = () => {
    dispatch(listingsFetch())
  }

  const getUsers = () => {
    dispatch(usersFetch())
  }

  const filterUserListing = () => {
    if (listings.listings) {
      let filtered = listings.listings
      .filter((listing) => {
        return listing.user_id === user_id
      })
      setUserListings(filtered)
    }
  }

  useEffect(() => {
    getListings();
    getUsers();
    filterUserListing();
  },[]);





  return (
    <>
      <div className="profile-adm-background">
        <div className="helping-recisize-backgroundADM">
          <div className="container bootstrap snippets bootdey content-profile">
            <div className="row bg-light p-5">
              <div className="profile-nav col-md-3">
                <div className="panel">
                  <div className="user-heading round">
                      <Link to="#">
                          <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                      </Link>
                  </div>
                </div>
              </div>
              <div className="profile-info col-md-9">
                <div className="panel">
                  <div className="bio-graph-info details-adm">
                    <h1>Details</h1>
                    <div className="row align-details">
                      <div className="bio-row">
                          <p>Email : {users.user && user_id ? users.user[user_id-1].email : "waiting"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="my-itens">My items</h3>
                <div className="container main-content-cards-profile mt-5">
                  <div className="row">
                    <div className="col-sm-12">
                    {userListings ? 
                      <HousingList data={userListings} /> : <Loading />
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile;