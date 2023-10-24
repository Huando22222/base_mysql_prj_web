import "./Home.css";

import { useEffect, useState } from "react";
import Cards from "../components/Cards";
function Home() {
    const [product, setProduct] = useState([]);

	useEffect(() => {
        const loadProduct = async () => {
            let title="";
			try {
				const response = await fetch("http://localhost:4000", {
					method: "GET",
				});
				console.log("da vao fetch");
				if (response.ok) {
					const data = await response.json();
                    setProduct(data.posts);
                    
                    // title = data.posts.title;
					console.log("data: ", data.posts);
					console.log("data1: ", data.posts[0].title);
					console.log("title: ", title);
					console.log("product: ", product);// useEffect khong dong bo ??????????
					// console.log("product-attributes: ", product[0].title);
				}
			} catch (error) {
				console.log("false show product: " + error);
			}
		};

		loadProduct();
	}, []);
    
    return (
		<div className="container">
            <Cards product={ product} />
		</div>
	);
}

export default Home;