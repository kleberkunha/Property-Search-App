import { Link } from "react-router-dom";
import './UserProfileResponsive/UserProfileResponsive.scss';
import HousingList from 'components/HousingList/HousingList';
import Loading from 'components/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { listingsFetch, usersFetch } from 'services/apiManager';
import Cookies from "js-cookie";

const  UserProfile = () => {
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

  useEffect(() => {
    getListings();
    getUsers();
    console.log("test");
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
                      <h1>Camila Smith</h1>
                      <p>deydey@theEmail.com</p>
                  </div>
                  <ul className="nav nav-pills nav-stacked">
                    <li><Link to="#"> <i className="fa fa-edit"></i> Edit profile</Link></li>
                  </ul>
                </div>
              </div>
              <div className="profile-info col-md-9">
                <div className="panel">
                  <div className="bio-graph-info details-adm">
                    <h1>Details</h1>
                    <div className="row align-details">
                      <div className="bio-row">
                          <p>First Name : Camila</p>
                      </div>
                      <div className="bio-row">
                          <p>Last Name : Smith</p>
                      </div>
                      <div className="bio-row">
                          <p>Country : Australia</p>
                      </div>
                      <div className="bio-row">
                          <p>Email : jsmith@flatlab.com</p>
                      </div>
                      <div className="bio-row">
                          <p> (33) 03 4567890</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="my-itens">My itens</h3>
                <div className="container main-content-cards-profile mt-5">
                  <div className="row">
                    <div className="col-sm-12">
                      {
                        listings.listings ?

                        <HousingList data={listings.listings} />
                        :
                        <Loading />
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