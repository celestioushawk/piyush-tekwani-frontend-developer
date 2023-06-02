import Background from '../../assets/banner_cover_image.jpg';
import Logo from '../../assets/spacex-logo-white.png';
import './Hero.css';

const Hero = () => {
	return (
		<>
			<section
				className="hero"
				style={{ background: `url(${Background}) no-repeat` }}
			>
				<a href="#">
					<div className="header">
						<img src={Logo} alt="SpaceX Logo" />
					</div>
				</a>
				<div className="hero-text">
					<h1>Pioneering the future, one launch at a time.</h1>
					<p>
						SpaceX: Revolutionizing space exploration with reusable
						rockets, pioneering Mars colonization, and pushing the
						boundaries of human spaceflight.
					</p>
					<div className="cta-button">
						<a href="#rocket-list">
							<button>Explore</button>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
