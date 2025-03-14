import ApartmentCard from '../components/ApartmentCard';

const Home = () => {
  const apartmentInfo = {
    title: "Luxury Downtown Apartment",
    description: "A beautiful 3-bedroom apartment located in the heart of downtown, offering stunning city views and modern amenities.",
    details: [
      "3 Bedrooms, 2 Bathrooms",
      "1,500 sq. ft.",
      "Fully furnished",
      "Modern kitchen with stainless steel appliances",
      "In-unit washer and dryer",
      "Hardwood floors",
      "Central air conditioning",
      "24/7 security",
      "Gym and pool access",
      "Walking distance to restaurants and shops",
      "Rent: $2,500/month",
      "Available from June 1st"
    ]
  };

  return (
    <div>
      <div className="hero min-h-[50vh] bg-accent-content rounded-lg mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-accent">Luxury Downtown Living</h1>
            <p className="py-6 text-secondary">Experience the best of urban living in our premium apartment with stunning views and modern amenities.</p>
            <button className="btn btn-accent text-accent-content">View Gallery</button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="card bg-accent text-accent-content shadow-xl">
          <ApartmentCard 
            title={apartmentInfo.title} 
            description={apartmentInfo.description} 
            details={apartmentInfo.details} 
          />
        </div>
        
        <div className="card bg-secondary text-secondary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Neighborhood</h2>
            <p>Located in the vibrant downtown district, this apartment offers easy access to:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Public transportation (2 blocks)</li>
              <li>City park (5 minute walk)</li>
              <li>Shopping center (10 minute walk)</li>
              <li>Restaurants and cafes (surrounding area)</li>
              <li>Entertainment venues (nearby)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
