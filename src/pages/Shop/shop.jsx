import { ScrollRestoration } from 'react-router-dom';
import Item from '../../components/Item/item';
import NavBar from '../../components/NavBar/navbar';
import './shop.css';

export default function Shop() {
	return (
		<>
			<NavBar />
			<div id="route_shop">
				<h1 className="shop-title">Only The Best</h1>
				<p>Shop our careful selection of perfection & mastery</p>
				<div className="shop_products-window">
					{/* TODO: implement dynamic loading of all products via loop. */}
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
			<ScrollRestoration />
		</>
	);
}
