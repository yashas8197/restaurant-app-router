import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <main className="container py-4">
      <h1 className="display-3">Featured Restaurants</h1>
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <img
              className="img-fluid rounded py-3"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h3 className="card-title">Taste of Italy</h3>
            <p className="card-text">Italian | Rating 4.5</p>
            <p className="card-text">123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <img
              className="img-fluid rounded py-3"
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h3 className="card-title">Spice Village</h3>
            <p className="card-text">Indian | Rating: 5</p>
            <p className="card-text">456 Elm Street, Anytown USA</p>
          </div>
        </div>
      </div>
    </main>
  );
}
