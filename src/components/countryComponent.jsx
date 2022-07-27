const Country = (props) => {
  return (
    <div
      style={{
        width: "20%",
        padding: "2rem",
        margin: "1rem",
        boxShadow: "0px 0px 13px 0px rgba(0,0,0,0.75)",
      }}
    >
      <img
        style={{ width: "100%" }}
        src={props.flags.png}
        alt={props.name.official}
      />
      <p> {props.name.official}</p>

      <p>{props.population}</p>
    </div>
  );
};

export default Country;
