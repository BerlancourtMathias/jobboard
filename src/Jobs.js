import Job from "./Job";
const Jobs = () => {
  return (
    <div className="container">
      <Job
        className="red"
        title="Full Time Sales Associate - Sydney Boutique"
        city="Sydney"
        contractType="CDI"
        country="Australie"
      />
      <Job
        className="green"
        title="Agent de Sécurité-Pantin"
        city="Pantin"
        contractType="CDI"
        country="France"
      />
      <Job className="yellow" />
      <Job className="blue" />
      <Job className="pink" />
      <Job className="red" />
      <Job className="green" />
      <Job className="yellow" />
      <Job className="blue" />
    </div>
  );
};
export default Jobs;

//

const function1 = (name) => {
  console.log("hello", name);
};

const function2 = (surname) => {
  console.log("surname", surname);

  function1("Mathias");
};

function2("blabla");
