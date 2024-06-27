import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Скупка автомобилей</h2>
							<p>
								Audi, Skoda, VW, BMW, Mazda, Ford, GM
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Ремонт авто</h2>
							<p>Принимаем любые.</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;