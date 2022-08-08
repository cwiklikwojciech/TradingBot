import './Home.css';
import React, { useState } from 'react';
import Select from 'react-select';
import MaxMin from '../MaxMin/MaxMin';
import Spread from '../Spread/Spread';
import Orderbook from '../Orderbook/Orderbook';

function Home() {
	const [ value, setValue ] = useState('btc-pln');

	const options = [
		{ value: 'btc-pln', label: 'BTC-PLN' },
		{ value: 'ltc-pln', label: 'LTC-PLN' },
		{ value: 'eth-pln', label: 'ETH-PLN' }
	];

	const handleValue = (value) => {
		setValue(value);
	};

	return (
		<div className="grid grid-cols-4 gap-4 text-blue-600 p-5 ">
			<div className="... border border-slate-100/25">1</div>
			<div className="col-span-2 border border-slate-100/25">
				<div className="App">
					<div className="container">
						<header>
							<div className="select">
								<Select
									options={options}
									onChange={({ value }) => handleValue(value)}
									defaultValue={{ value: 'btc-pln', label: 'BTC-PLN' }}
								/>
							</div>

							<div className="spread">
								<Spread value={value} />
							</div>

							<div className="price">
								<MaxMin value={value} />
							</div>
						</header>
					</div>
					<Orderbook value={value} />
				</div>
			</div>
			<div className="... border border-slate-100/25">03</div>
		</div>
	);
}

export default Home;
