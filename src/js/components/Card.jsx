export const Card = () => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src="https://wanderwisdom.com/.image/c_fill,w_1200,h_1200,g_faces:center/MjA1MTY0MzQ4NDg0NjI1OTg0/50-interesting-facts-about-miami-florida.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
