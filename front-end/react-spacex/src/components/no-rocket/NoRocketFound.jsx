import FallbackRocketImage from '../../assets/rocket.png';
import './NoRocketFound.css';
const NoRocketFound = () => {
	return (
		<>
			<div className="fallback-message">
				<img
					src={FallbackRocketImage}
					alt="Fallback Image for No Rocket Found"
				/>
				<h4>Sorry, no matching rockets found!</h4>
			</div>
		</>
	);
};

export default NoRocketFound;
