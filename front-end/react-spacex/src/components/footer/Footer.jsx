import Logo from '../../assets/spacex-logo-white.png';
import './Footer.css';
/**
 * Footer component to display footer imformation at the bottom of the page.
 */
const Footer = () => {
    return(
        <>
			<footer>
				<div className="company">
					<div className="company-logo">
						<img src={Logo} alt="" />
					</div>
					<div className="company-address">
						<p>
							1 Rocket Rd, Hawthorne, CA 90250, United States
						</p>
					</div>
				</div>
				<div className="copyright">
					<p>
						&#169; SpaceX. This is a project serving data through SpaceX API.
					</p>
				</div>
			</footer>
		</>
    )
}

export default Footer;