const obj = [
  {
    header: "Body Analysis",
    image: "Gallery/heart.png",
    text: "I usually start my consultations off by performing an in-depth health assessment, using functional movement screenings and a body composition analysis",
  },
  {
    header: "Fitness Programs",
    image: "Gallery/Dumbell.png",
    text: "Once fitness levels have been assessed, I design a custom workout routine for your goals, time constraints, & budget. I encourage, motivate & guide you to reach your health and fitness goals on a personalized level",
  },
  {
    header: "Health and Nutrition",
    image: "Gallery/Health.png",
    text: "As part of my training program, I'll work one-on-one with you as your nutrition coach to develop a meal plan that creates new and sustainable eating habits that still fit your lifestyle & will maximize your fitness goals.",
  },
  {
    header: "Flexibility",
    image: "Gallery/Flexibility.png",
    text: "My programs are flexible & specifically designed to help you reach your health & fitness goals. I'll work with you to customize an exercise & meal plan that reflects not only your short term goals but the long game as well.",
  },
];

const Body = () => {
  return (
    <div className="maincont" id="About">
      <div className="content">
        <div className="body-content">
          <div className="ms-5">
            <h3 className="heading-8 blue">
              Every<span className="highlight">Body</span> is Different.
            </h3>
            <div className="under"></div>
            <hr className="hr"></hr>
            <div className="fix5">
            <h1>
              <span className="blue fixa upit">MAXIMIZE YOUR</span>
            </h1>
            
            <h1 className="highlight fixa upit">LIFE</h1></div>
          </div>
          <div className="ms-5">
            <div className="fixabout">
              <p className="bigger">
                Stop waiting to get in <span className="highlight">shape</span>!
                I will help you sculpt the body that fits your lifestyle and
                I'll help you maintain it through all aspects of life. Why give
                up the things you love to do? I will walk you through every step
                of transforming your body from nutrition to exercise all the way
                down to your molecular structure.
              </p>
              <p className="bigger">
                Personalization is key to getting the best possible results,
                which is why my workout programs are modified to fit your
                individual fitness goals and fitness level. Whether you're new
                to working out or you're an experienced fitness buff my{" "}
                <span className="highlight">fitness masterclass</span> is
                designed for you to achieve your goals and to enjoy your life!
              </p>
            </div>
          </div>
        </div>

        <CompList />
      </div>
    </div>
  );
};

function CompList(props) {
  return (
    <div className="pushdown">
      <div className="Items">
        {obj.map((item, index) => (
          <Comp
            key={index}
            image={item.image}
            header={item.header}
            text={item.text}
          />
        ))}
      </div>

    </div>
  );
}

function Comp(props) {
  return (
    <div className="fix">
      <img className="images" src={props.image} alt={props.index} />
      <h2 className="headername">{props.header}</h2>
      <div className="under2"></div>
      <p className="paragraph-3">{props.text}</p>
    </div>
  );
}

export default Body;
