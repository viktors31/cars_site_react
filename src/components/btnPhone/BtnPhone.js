import PIcon from './phone-black.svg';
import "./style.css"

const BtnPhone = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={PIcon} alt="" />
			Contact seller.
		</a>
	);
};

export default BtnPhone;