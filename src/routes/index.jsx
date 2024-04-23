import { Routes, Route } from "react-router-dom";
import Home from '../views/home';
import About from "../views/about";
import Menu from "../views/menu";

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />

            {/* route "/posts/create" */}
            {/* <Route path="/posts/create" element={<PostCreate />} /> */}

            {/* route "/posts/edit/:id" */}
            {/* <Route path="/posts/edit/:id" element={<PostEdit />} /> */}

        </Routes>
    )
}

export default RoutesIndex