export const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 mt-5 shadow bg-warning">
      {" "}
      <div className="container-fluid p-5 py-5">
        {" "}
        <h1 className="display-5 fw-bold">This Is A Landing Page</h1>{" "}
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor <strong>sit amet,</strong> consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud{" "}
          <strong>exercitation ullamco laboris</strong> nisi ut aliquip ex ea
          commodo consequat.
        </p>{" "}
        <button className="btn btn-dark btn-lg" type="button">
          Call To Action
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Jumbotron;
