import RocketCard from '../rocket-card/RocketCard';
import './RocketList.css'

const RocketList = () => {
	return(
		<>
			<section className="rocket-list">
				<h2>Our Rockets</h2>
				<div className="rockets">
					<RocketCard />
					<RocketCard />
					<RocketCard />
				</div>
			</section>

		</>
	)
}

export default RocketList;