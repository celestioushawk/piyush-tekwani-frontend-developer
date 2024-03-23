import { useState } from 'react';
import RocketTestImage from '../../assets/test.jpg';
import './RocketCard.css';
import SingleRocket from '../single-rocket/SingleRocket';
/**
 * RocketCard component to show summary information about a rocket in a card inside the data grid of rockets. 
 * @param {props} rocketData Prop containing data of a single rocket. 
 */
const RocketCard = ({ rocketData }) => {
	const [showRocketModal, setShowRocketModal] = useState(false);

	return (
		<>
			<div className="rocket-card-wrapper">
				<div className="rocket-image">
					<img
						src={rocketData?.flickr_images[1]}
						onError={(e) => (e.target.src = RocketTestImage)}
						alt="Representational Image of Rocket"
					/>
				</div>
				<div className="rocket-stats-wrapper">
					<div className="rocket-name">
						<h3>{rocketData.name}</h3>
					</div>
					<div className="rocket-stats">
						<div className="rocket-engine rocket-stat">
							<span className="stat-heading">Engines</span>
							<span className="stat-value">
								{rocketData.engines.number}
							</span>
						</div>
						<div className="separator"></div>
						<div className="rocket-stages rocket-stat">
							<span className="stat-heading">Stages</span>
							<span className="stat-value">
								{rocketData.stages}
							</span>
						</div>
						<div className="separator"></div>
						<div className="rocket-boosters rocket-stat">
							<span className="stat-heading">Boosters</span>
							<span className="stat-value">
								{rocketData.boosters}
							</span>
						</div>
					</div>
					<div className="rocket-description">
						<p>
							{rocketData.description.substring(0, 150) + '...'}
						</p>
					</div>
					<div className="view-more-button">
						<button onClick={() => setShowRocketModal(true)}>
							View Rocket
						</button>
					</div>
				</div>
			</div>
			{showRocketModal && (
				<SingleRocket
					showRocketModal={setShowRocketModal}
					singleRocketData={rocketData}
				/>
			)}
		</>
	);
};

export default RocketCard;
