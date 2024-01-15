const allthecomponents = [
  {
    header: "Weight Loss",
    image: "Gallery/weightloss.png",
  },

  { header: "Body Building", image: "Gallery/bodybuilding.png" },
  {
    header: "Boot Camp",
    image: "Gallery/bootcamp.png",
  },
  {
    header: "Circuit Training",
    image: "Gallery/CircuitTraining.png",
  },
  {
    header: "Group Training",
    image: "Gallery/GroupTraining.png",
  },
  {
    header: "Health",
    image: "Gallery/healthandnutrition.png",
  },
  {
    header: "Calisthenics",
    image: "Gallery/calisthenics1.png",
  },
  {
    header: "Cross Fit",
    image: "Gallery/crossfit.png",
  },
  {
    header: "Sports Training",
    image: "Gallery/sportstraining.png",
  },
];

function Components(props) {
  return (
    <div className="toplevel">
      <div className="content">
        <img className="image2" src="Gallery/test2.svg" alt="bla" />
      </div>
      <AllMethods />
    </div>
  );
}

function AllMethods() {
  return (
    <div className="flexcomp white">
      {allthecomponents.map((item, index) => (
        <MethodsList key={index} im={item.image} header={item.header} />
      ))}
    </div>
  );
}

function MethodsList(props) {
  return (
    <div className="disp flex-item">
      <img className="icon images" src={props.im} alt={props.key} />
      <h1 className="small bolder">{props.header}</h1>
    </div>
  );
  }

function Programs() {
  return (
    <div className="main5" id="Programs">
      <div className="text-center flex-item">
        <div className="wi">
          <hr></hr>
          <hr></hr>
          <h1 className="white bolder">FITNESS PROGRAMS</h1>
        </div>
        <div className="container8">
        <div className="container5">
        <div className="wid">
        
          <p className="white paragraph2">
            Getting in shape shouldn't be a punishment. It's an amazing and
            empowering lifestyle decision that anyone can achieve. I believe in
            finding the pleasurable side of fitness, and while there may be sore
            muscles along the way, the amount of fun and levels of energy you
            will experience will far exceed the discomfort.
          </p>
          <div className="mt-4"></div>
          <p className="white paragraph2">
            While Specializing in <span className="highlight">weight loss</span> training, I also offer many other
            types of personal training programs that are designed around your
            needs, including individualized programs, athletic & sports
            training, cardiovascular conditioning & functional fitness, muscle
            building, muscle toning, injury rehab, mind-body connection,
            nutrition coaching, fitness for seniors and more.
          </p>
        </div>
        </div>
        </div>
      </div>
      <div className="container2nd flex-item">
        <Components />
      </div>
    </div>
  );
}
export default Programs;
