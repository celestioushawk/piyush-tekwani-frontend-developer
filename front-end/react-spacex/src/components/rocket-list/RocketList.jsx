import { useEffect, useState } from 'react';
import axios from 'axios';
import RocketCard from '../rocket-card/RocketCard';
import './RocketList.css';
import SearchFilter from '../search-filter/SearchFilter';
import NoRocketFound from '../no-rocket/NoRocketFound';
/**
 * RocketList component to show the data grid of all the rockets fetched from the SpaceX API.
 */
const RocketList = () => {
	const baseURL = 'http://localhost:3000/';
	// State to store the data of rockets recieved from the API.
	const [rocketData, setRocketData] = useState([]);
	// State to store value of the active status filter of the rocket.
	const [activeFilter, setActiveFilter] = useState('');
	// State to store the value of the number of boosters of the rocket.
	const [boosterFilter, setBoosterFilter] = useState('');
	// State to store the value of the number of engines of the rocket.
	const [engineFilter, setEngineFilter] = useState('');
	// State to store if no rocket was found and display the fallback message.
	const [noRocketFoundFlag, setNoRocketFoundFlag] = useState(false);
	// API call to fetch data of all rockets.
	useEffect(() => {
		axios
			.get(baseURL + 'rockets', {
				auth: {
					username: import.meta.env.VITE_USERNAME,
					password: import.meta.env.VITE_PASSWORD,
				},
			})
			.then((response) => setRocketData(response.data));
	}, []);
	// API call to query according to filters.
	useEffect(() => {
		const queryObject = [];
		if (engineFilter) {
			queryObject.push({ 'engines.number': { $gt: `${engineFilter}` } });
		}
		if (activeFilter) {
			queryObject.push({ active: `${activeFilter}` });
		}
		if (boosterFilter) {
			queryObject.push({ boosters: { $gte: `${boosterFilter}` } });
		}
		axios
			.post(
				baseURL + 'rockets/query',
				{
					query: {
						$and: queryObject,
					},
					options: {},
				},
				{
					auth: {
						username: import.meta.env.VITE_USERNAME,
						password: import.meta.env.VITE_PASSWORD,
					},
				}
			)
			.then((response) => {
				if (response.data.totalDocs === 0) {
					setNoRocketFoundFlag(true);
				}
				setRocketData(response.data.docs);
			});
	}, [activeFilter, boosterFilter, engineFilter]);

	return (
		<>
			{rocketData ? (
				<section className="rocket-list" id="rocket-list">
					<div className="rocket-list-header">
						<h2>Our Rockets</h2>
						<SearchFilter
							updateActiveFilter={setActiveFilter}
							updateBoosterFilter={setBoosterFilter}
							updateEngineFilter={setEngineFilter}
						/>
					</div>
					{!noRocketFoundFlag ? (
						<div className="rockets">
							{rocketData?.map((singleRocketData) => {
								return (
									<RocketCard
										key={singleRocketData.id}
										rocketData={singleRocketData}
									/>
								);
							})}
						</div>
					) : (
						<NoRocketFound />
					)}
				</section>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default RocketList;
