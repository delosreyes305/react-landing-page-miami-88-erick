export const Jumbotron = () => {
  return (
    <div className="p-5 mb-5 shadow bg-body-tertiary">
      {" "}
      <div className="container-fluid p-5 py-5">
        {" "}
        <h1 className="display-5 fw-bold">This Is A Landing Page</h1>{" "}
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>{" "}
        <button className="btn btn-primary btn-lg" type="button">
          Call To Action
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Jumbotron;