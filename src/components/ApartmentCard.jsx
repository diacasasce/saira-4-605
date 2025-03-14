const ApartmentCard = ({ title, description, details }) => {
  return (
    <div className="card-body">
      <h2 className="card-title text-accent-content">{title}</h2>
      <p className="text-accent-content">{description}</p>
      <div className="mt-4">
        <h3 className="font-bold mb-2 text-accent-focus">Features:</h3>
        <ul className="list-disc list-inside text-accent-content">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApartmentCard;
