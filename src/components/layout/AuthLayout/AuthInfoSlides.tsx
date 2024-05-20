// Components
import Slider from 'src/components/molecules/Slider';
import AuthSliderCard from 'src/components/organisms/Auth/AuthSliderCard';

// Data
import { AuthSliderData } from 'src/data/authSliderData';

const AuthInfoSlides = () => {
  return <Slider data={AuthSliderData} Card={AuthSliderCard} pagination={true} />;
};

export default AuthInfoSlides;
