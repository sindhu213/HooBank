import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonial, Client, ServiceTrial, Footer, } from './containers';
import './app.scss';

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Stats />
      <Business />
      <Billing /> 
      <CardDeal />
      <Testimonial />
      <Client />
      <ServiceTrial />
      <Footer />
    </>
  )
}

export default App;
