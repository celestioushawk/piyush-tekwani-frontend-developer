import RocketTestImage from '../../assets/test.jpg'
import './SingleRocket.css';

const SingleRocket = () => {
	return(
		<>
			<section className="single-rocket-wrapper-bg">
				<div className="single-rocket-wrapper">
					<div className="single-rocket-close">
						<i className="fa-solid fa-xmark"></i>
					</div>
					<div className="single-rocket-images">
						<img src={RocketTestImage} alt="" />
					</div>
					<div className="single-rocket-stats">
						<div className="single-rocket-name">
							Falcon Heavy
							<i></i>
						</div>
						<div className="single-rocket-summary">
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
						<div className="single-rocket-description">
							<p>
								With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.
							</p>
						</div>
						<div className="single-rocket-specs">
							<div className="single-rocket-height rocket-spec">
								<i className="fa-solid fa-ruler-vertical"></i>
								<span>
									Height: 70 meters
								</span>
							</div>
							<div className="single-rocket-height rocket-spec">
								<i className="fa-solid fa-dollar-sign"></i>
								<span>
									Cost: 700,00,000
								</span>
							</div>
							<div className="single-rocket-diameter rocket-spec">
								<i className="fa-solid fa-ruler-horizontal"></i>
								<span>
									Diameter: 3.7 meters
								</span>
							</div>
							<div className="single-rocket-mass rocket-spec">
								<i className="fa-solid fa-weight-hanging"></i>
								<span>
									Mass: 54,098 kg
								</span>
							</div>
							<div className="single-rocket-legs rocket-spec">
								<i className="fa-solid fa-rocket"></i>
								<span>
									Landing Legs: 3
								</span>
							</div>
							<div className="single-rocket-success-rate rocket-spec">
								<i className="fa-regular fa-circle-check"></i>
								<span>
									Success Rate: 91%
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SingleRocket;