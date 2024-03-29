import Header from "../component/Header";
import Footer from "../component/Footer";
import {Link} from "react-router-dom"

function Restaurants() {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>Restaurants</h1>
        <div className="col-md-12">
          <div className="card mb-3" style={{ maxWidth: "1500px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-"
                  className="img-fluid rounded-start"
                  alt="restaurants"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Golden Spoon</h5>
                  <p className="card-text">
                    'The Taste of India' is the brand slogan of AMUL which
                    stands for Anand Milk Union Limited.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Rating: 4.7 | open now</small>
                  </p>
                  <Link className="btn btn-primary" to="/restaurants/1">View More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card mb-3" style={{ maxWidth: "1500px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-"
                  className="img-fluid rounded-start"
                  alt="restaurants"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Spice Junction</h5>
                  <p className="card-text">
                    Nice place to visit with your friends and family to have
                    unlimited starters and pizza, within budget.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Rating: 4.5 | open now</small>
                  </p>
                  <Link className="btn btn-primary" to="/restaurants/2">View More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Restaurants;
