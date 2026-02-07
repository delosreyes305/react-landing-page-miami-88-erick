export const Card = ({ name, age, image }) => {
  return (
    
    <div className="card card-image-wrapper shadow p-2 mt-4" style={{width: "18rem"}}>
      <img src={image} className="card-img-top object-fit-cover"
  style={{ height: "200px" }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">Age: {age}</h5>
        <p className="card-text">
          Thank you for for your visit. {name} is {age} years old. If you want to connect with this specialist press the button "call".
        </p>
        <a href="#" className="btn btn-primary">
          Call Specialist
        </a>
      </div>
    </div>
    
  );
};

export default Card;
