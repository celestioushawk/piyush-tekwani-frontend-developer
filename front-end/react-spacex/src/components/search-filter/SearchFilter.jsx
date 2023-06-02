import './SearchFilter.css';

const SearchFilter = ({
	updateActiveFilter,
	updateBoosterFilter,
	updateEngineFilter,
}) => {
	return (
		<>
			<section className="search-filters">
				<div className="status-filter">
					<select
						name="active"
						id="active"
						onChange={(e) => updateActiveFilter(e.target.value)}
					>
						<option value="" defaultChecked>
							Status
						</option>
						<option value="true">Active</option>
						<option value="false">Not Active</option>
					</select>
				</div>
				<div className="engines-filter">
					<select
						name="engines"
						id="engines"
						onChange={(e) => updateEngineFilter(e.target.value)}
					>
						<option value="" defaultChecked>
							Engines
						</option>
						<option value="5">&gt;5</option>
						<option value="10">&gt;10</option>
						<option value="20">&gt;20</option>
						<option value="30">&gt;30</option>
					</select>
				</div>
				<div className="boosters-filter">
					<select
						name="boosters"
						id="boosters"
						onChange={(e) => updateBoosterFilter(e.target.value)}
					>
						<option value="" defaultChecked>
							Boosters
						</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
			</section>
		</>
	);
};

export default SearchFilter;
