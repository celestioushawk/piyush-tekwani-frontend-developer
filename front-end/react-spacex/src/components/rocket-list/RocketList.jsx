import { useEffect, useState } from 'react';
import axios from 'axios';
import RocketCard from '../rocket-card/RocketCard';
import './RocketList.css';
import SearchFilter from '../search-filter/SearchFilter';
import NoRocketFound from '../no-rocket/NoRocketFound';

const RocketList = () => {
	const baseURL = 'http://localhost:3000/';

	const [rocketData, setRocketData] = useState([]);

	const [activeFilter, setActiveFilter] = useState("");

	const [boosterFilter, setBoosterFilter] = useState("");

	const [engineFilter, setEngineFilter] = useState("");

	const [noRocketFoundFlag, setNoRocketFoundFlag] = useState(false);

	useEffect(() => {
		axios
			.get(baseURL + 'rockets', {
				auth: {
					username: import.meta.env.VITE_USERNAME,
					password: import.meta.env.VITE_PASSWORD
				}
			})
			.then((response) => setRocketData(response.data));
		console.log("render")
	}, []);

	useEffect(() => {
		let queryObject = [];
		if(engineFilter) {
			queryObject.push({"engines.number": {"$gt": `${engineFilter}`}});
		}
		if(activeFilter) {
			queryObject.push({"active": `${activeFilter}`});
		}
		if(boosterFilter) {
			queryObject.push({"boosters": {"$gte": `${boosterFilter}`}});
		}
		axios.post(baseURL + "rockets/query", {
			"query": {
				"$and": queryObject
			},
			"options": {}
		}, {
			auth: {
				username: import.meta.env.VITE_USERNAME,
				password: import.meta.env.VITE_PASSWORD
			}
		}).then((response) => {
			if(response.data.totalDocs === 0) {
				setNoRocketFoundFlag(true);
			}
			setRocketData(response.data.docs);
		})

	}, [activeFilter, boosterFilter, engineFilter])

	return (
		<>
			{rocketData ? (
				<section className="rocket-list" id="rocket-list">
					<div className="rocket-list-header">
						<h2>Our Rockets</h2>
						<SearchFilter updateActiveFilter={setActiveFilter} updateBoosterFilter={setBoosterFilter} updateEngineFilter={setEngineFilter} />
					</div>
					{
						!noRocketFoundFlag ? (
							<div className="rockets">
								{
									rocketData?.map((singleRocketData) => {
										return <RocketCard key={singleRocketData.id} rocketData={singleRocketData} />
									})
								}
							</div>
						) : (
							<NoRocketFound />
						)
					}
				</section>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default RocketList;
