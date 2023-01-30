const Job = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <span>
        {props.contractType} {props.country} {props.city}
      </span>
    </div>
  );
};
export default Job;
