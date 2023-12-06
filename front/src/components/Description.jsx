export const Description = ({ image, altImage, title, subtitle }) => {
	return (
		<div className="feature-item">
			<img src={image} alt={altImage} className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{subtitle}</p>
		</div>
	);
};
