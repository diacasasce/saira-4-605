const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-accent">Contact Us</h1>
      
      <div className="card bg-secondary text-secondary-content shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title">Leasing Office</h2>
          <div className="space-y-2">
            <p><strong>Address:</strong> 123 Downtown Ave, City, State 12345</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> leasing@luxuryapartments.example</p>
            <p><strong>Hours:</strong> Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday Closed</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Property Manager</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> Jane Smith</p>
              <p><strong>Direct Line:</strong> (555) 123-4568</p>
              <p><strong>Email:</strong> manager@luxuryapartments.example</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Maintenance</h2>
            <div className="space-y-2">
              <p><strong>Emergency:</strong> (555) 123-4569</p>
              <p><strong>Regular Maintenance:</strong> (555) 123-4570</p>
              <p><strong>Email:</strong> maintenance@luxuryapartments.example</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 card bg-accent text-accent-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Visit Us</h2>
          <p>Schedule a tour to see our beautiful apartments in person. We're conveniently located in the heart of downtown, with easy access to public transportation.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary text-secondary-content">Schedule a Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 