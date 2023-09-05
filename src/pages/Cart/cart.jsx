import NavBar from '/src/components/NavBar/navbar';
import Footer from '/src/components/Footer/footer';
import furnitureData from '/src/productsforsale.json';
import { Link } from 'react-router-dom';
import './cart.css';

export default function Cart() {
	return (
		<>
			<NavBar />
			<div id="page_cart">
				<h1>Cart</h1>
				<div className="cart_items">
					<div className="cart_item-preview">
						<p className="cart_item-count">1.</p>
						<img
							src={furnitureData[2].location}
							width={250}
							alt="armchair gray"
						/>
						<div className="cart_item-information">
							<span className="cart_item-name">{furnitureData[2].name}</span>
							<span className="cart_item-price">{furnitureData[2].price}</span>
						</div>
					</div>
					<div className="cart_item-preview">
						<p className="cart_item-count">2.</p>
						<img
							src={furnitureData[5].location}
							width={250}
							alt="armchair gray"
						/>
						<div className="cart_item-information">
							<span className="cart_item-name">{furnitureData[5].name}</span>
							<span className="cart_item-price">{furnitureData[5].price}</span>
						</div>
					</div>
					<div className="cart_item-preview">
						<p className="cart_item-count">3.</p>
						<img
							src={furnitureData[6].location}
							width={250}
							alt="armchair gray"
						/>
						<div className="cart_item-information">
							<span className="cart_item-name">{furnitureData[6].name}</span>
							<span className="cart_item-price">{furnitureData[6].price}</span>
						</div>
					</div>
				</div>
				<div className="cart_checkout">
					<div className="cart_total">
						<h3 className="cart_total-label">Total:</h3>
						<span className="cart_total-price">$909.97</span>
					</div>
					<Link to="/">
						<button className="cart_checkout-button animating-button">
							Buy Now
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
