import './App.css';
import { useState } from "react";
import data from "./Data"
import Products from './Products';

function App() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState("product")

    const render = () => {

        if (page === "product") {
            return < > {
                    data.map((elem, idx) => {

                        return < >

                            <
                            div className = "display"
                        key = { idx } >
                            <
                            h2 > { elem.name } < /h2> <
                            img src = { elem.image }
                        /> <
                        h3 > { elem.price } < /h3> <
                            button onClick = {
                                () => addTocart(elem) } > Add to cart < /button> <
                            /div>

                        <
                        />

                    })
                } <
                />

        } else {

            return < > {
                    cart.map((elem, idx) => {

                        return < >

                            <
                            div className = "display"
                        key = { idx } >
                            <
                            h2 > { elem.name } < /h2> <
                            img src = { elem.image }
                        /> <
                        h3 > { elem.price } < /h3> <
                            button onClick = {
                                () => RemoveItem(elem) } > Remove < /button> <
                            /div>

                        <
                        />

                    })
                } <
                />

        }
    }









    function RemoveItem(itemToremove) {
        // console.log(cart);

        console.log((cart.filter((item) => item !== itemToremove)))
        setCart((cart.filter((item) => item !== itemToremove)))

    }


    function addTocart(item) {

        // console.log(JSON.stringify(cart));
        // console.log(cart);

        setCart([...cart, item]);

    }






    return ( <
        div className = "App" >

        <
        header >

        <
        button onClick = {
            () => { setPage("cart") } } > Cart { cart.length } < /button> <
        button onClick = {
            () => { setPage("product") } } > Products < /button> <
        img className = "img"
        src = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" / >
        <
        /header>

        <
        div className = "section" >

        {
            title
        }


        {
            render()
        }






        <
        div className = "foot" >

        <
        footer >

        <
        h4 > Privacy Policy | Terms of use < /h4>

        <
        /footer>

        <
        /div>

        <
        /div>  



        <
        /div>
    );
}

export default App;