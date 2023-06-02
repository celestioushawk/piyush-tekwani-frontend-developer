import RocketTestImage from '../../assets/test.jpg'
import './RocketCard.css';

const RocketCard = () => {
	return(
		<>
			<div className="rocket-card-wrapper">
				<div className="rocket-image">
					<img src={RocketTestImage} alt="Representational Image of Rocket" />
				</div>
				<div className="rocket-stats-wrapper">
					<div className="rocket-name">
						<h3>Falcon Heavy</h3>
					</div>
					<div className="rocket-stats">
						<div className="rocket-engine rocket-stat">
							<span className="stat-heading">Engines</span>
							<span className="stat-value">9</span>
						</div>
						<div className="separator"></div>
						<div className="rocket-stages rocket-stat">
							<span className="stat-heading">Stages</span>
							<span className="stat-value">3</span>
						</div>
						<div className="separator"></div>
						<div className="rocket-boosters rocket-stat">
							<span className="stat-heading">Boosters</span>
							<span className="stat-value">2</span>
						</div>
					</div>
					<div className="rocket-description">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, laborum corrupti? Amet aperiam ad labore, ipsam quibusdam adipisci aut repudiandae!
						</p>
					</div>
					<div className="view-more-button">
						<button>View Rocket</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default RocketCard;