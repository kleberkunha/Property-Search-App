import Jumbotron from 'components/Jumbotron/Jumbotron';
import HousingList from 'components/HousingList/HousingList';
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { listingsFetch } from 'services/apiManager';

const Home = () => {
  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)
  const [filterListings, setFilterListings] = useState();

  const getListings = () => {
    dispatch(listingsFetch())
  }


  useEffect(() => {
    getListings();
  }, []);
  
  const filter = (word = "", category_id = "") => {
    console.log(category_id);
    let filtered = listings.listings
      .filter((listing) => {
        return listing.title.toLowerCase().includes(word.toLowerCase()) ||
        listing.description.toLowerCase().includes(word.toLowerCase());
      })
      .filter((listing) => listing.category_id.toString().includes(category_id.toString()));

    setFilterListings(filtered)
  }


  return (
    <>
      <div className="homepage">
        <Jumbotron filter={filter} />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12">
              {filterListings ? (
                <HousingList data={filterListings} />
              ) : listings.listings ? (
                <HousingList data={listings.listings} />
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;