import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>VICTOR</em>
					</strong>
					<br />a car seller and car mechanic.
				</h1>
				<div className="header__text">
					<p>with passion for repairing and finding interesting cars.</p>
				</div>
				<a href="#!" className="btn">
					Contact me!
				</a>
			</div>
		</header>
	);
}

export default Header;