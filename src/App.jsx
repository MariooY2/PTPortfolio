import Nav from "./assets/Nav";
import Cover from "./assets/cover";
import Cover1 from "./assets/cover1";
import Body from "./assets/about";
import Programs from "./assets/programs";
import ContactUs from "./assets/forms";
import CallButton from "./assets/callbutton";
import Footer from "./assets/footer";
function App() {
  return (
    <div className="widw">
      <Nav />
     {/* <Cover /> */}
     <Cover1 />
      <CallButton/>
      <Body />
      <Programs />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
