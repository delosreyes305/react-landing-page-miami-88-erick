export const Card = ({ name, age, image }) => {
  return (
    <div
      className="card text-center border-black card-image-wrapper shadow p-2 mt-4 bg-warning-subtle"
      style={{ width: "18rem" }}
    >
      <img
        src={image}
        className="card-img-top border shadow rounded-2 object-fit-cover"
        style={{ height: "200px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title border shadow text-light bg-black p-3">
          {name}
        </h5>
        <h5 className="card-title border-black shadow bg-warning text-black p-2">
          Age: {age}
        </h5>
        <p className="card-text mt-3 mb-3">
          Thank you for for your visit. {name} is {age} years old. If you want
          to connect with this specialist press the button "call".
        </p>
        <a href="#" className="btn btn-dark">
          Call Specialist
        </a>
      </div>
    </div>
  );
};

export default Card;
