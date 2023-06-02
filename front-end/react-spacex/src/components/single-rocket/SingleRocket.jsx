import RocketTestImage from '../../assets/test.jpg';
import './SingleRocket.css';

const SingleRocket = ({ showRocketModal, singleRocketData }) => {
	return (
		<>
			<section className="single-rocket-wrapper-bg">
				<div className="single-rocket-wrapper">
					<div className="single-rocket-close">
						<i
							className="fa-solid fa-xmark"
							onClick={() => showRocketModal(false)}
						></i>
					</div>
					<div className="single-rocket-images">
						<img
							src={singleRocketData.flickr_images[1]}
							onError={(e) => (e.target.src = RocketTestImage)}
							alt="Representational Image of Rocket"
						/>
					</div>
					<div className="single-rocket-stats">
						<div className="single-rocket-name">
							{singleRocketData.name}
						</div>
						<div className="single-rocket-summary">
							<div className="rocket-engine rocket-stat">
								<span className="stat-heading">Engines</span>
								<span className="stat-value">
									{singleRocketData.engines.number}
								</span>
							</div>
							<div className="separator"></div>
							<div className="rocket-stages rocket-stat">
								<span className="stat-heading">Stages</span>
								<span className="stat-value">
									{singleRocketData.stages}
								</span>
							</div>
							<div className="separator"></div>
							<div className="rocket-boosters rocket-stat">
								<span className="stat-heading">Boosters</span>
								<span className="stat-value">
									{singleRocketData.boosters}
								</span>
							</div>
						</div>
						<div className="single-rocket-description">
							<p>{singleRocketData.description}</p>
						</div>
						<div className="single-rocket-specs">
							<div className="single-rocket-height rocket-spec">
								<i className="fa-solid fa-ruler-vertical"></i>
								<span>
									Height: {singleRocketData.height.meters}{' '}
									meters
								</span>
							</div>
							<div className="single-rocket-height rocket-spec">
								<i className="fa-solid fa-dollar-sign"></i>
								<span>
									Cost:{' '}
									{singleRocketData.cost_per_launch.toLocaleString()}
								</span>
							</div>
							<div className="single-rocket-diameter rocket-spec">
								<i className="fa-solid fa-ruler-horizontal"></i>
								<span>
									Diameter: {singleRocketData.diameter.meters}{' '}
									meters
								</span>
							</div>
							<div className="single-rocket-mass rocket-spec">
								<i className="fa-solid fa-weight-hanging"></i>
								<span>
									Mass:{' '}
									{singleRocketData.mass.kg.toLocaleString()}{' '}
									kg
								</span>
							</div>
							<div className="single-rocket-legs rocket-spec">
								<i className="fa-solid fa-rocket"></i>
								<span>
									Landing Legs:{' '}
									{singleRocketData.landing_legs.number}
								</span>
							</div>
							<div className="single-rocket-success-rate rocket-spec">
								<i className="fa-regular fa-circle-check"></i>
								<span>
									Success Rate:{' '}
									{singleRocketData.success_rate_pct}%
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SingleRocket;
