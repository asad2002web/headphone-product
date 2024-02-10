import BenefitsSection from "../components/BenefitsSection"
import OrderForm from "../components/OrderForm"
import PhotoSection from "../components/PhotoSection"
import VideoSection from "../components/videoSection"

const Home = () => {
  return (
    <div>
      <VideoSection />
      <BenefitsSection />
      <PhotoSection />
      <OrderForm />
    </div>
  )
}

export default Home