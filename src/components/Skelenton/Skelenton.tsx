
interface SkelentonProps {
	count: number;
}
const Skelenton = ({ count }: SkelentonProps) => {
	// Create an array with 5 elements to map over
	const skeletonCards = new Array(count).fill(null);

	return (
		<div className="card_container">
			{skeletonCards.map((_, i) => (
				<div className="skelenton-cont" key={i}>
					<div className="skelenton_container">
						<div className="pp">
							<div className="card-skelenton">
							</div>
						</div>
						<div className="card-tile">
							<div className="card-skelenton">
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Skelenton
