import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();

  const restaurants = [
    {
      id: 1,
      name: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, Cityville",
      rating: 4.7,
      description: "Experience authentic italian cuisine in a cozy atmosphere",
      menu: [
        { dishName: "Spaghetti Carbonara", price: 15 },
        { dishName: "Margherita Pizza", price: 12 },
        { dishName: "Tiramisu", price: 8 },
      ],
    },
    {
      id: 2,
      name: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, Townsvilla",
      rating: 5,
      description: "Savor the flavor of India with our traditional dishes.",
      menu: [
        { dishName: "Chicken Tikka Masala", price: 14 },
        { dishName: "Vegetable Biriyani", price: 12 },
        { dishName: "Gulab Jamun", price: 6 },
      ],
    },
  ];
  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id.toString() === restaurantId.toString(),
  );
  console.log(restaurantData);
  return (
    <div>
      <Header />
      <main className="container py-4">
        <h1 className="display-4">
          <strong>{restaurantData.name}</strong>
        </h1>
        <p>Cuisine: {restaurantData.cuisine}</p>
        <p>Location: {restaurantData.location}</p>
        <p>Rating: {restaurantData.rating}</p>
        <p>{restaurantData.description}</p>
        <hr />
        <h3>Menu</h3>
        <div className="row">
          {restaurantData.menu.map((menuItem, index) => (
              <div key={index} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h4>{menuItem.dishName}</h4>
                    <p>Price: ${menuItem.price}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
