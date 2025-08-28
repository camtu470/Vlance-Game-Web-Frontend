import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar";
import Footer from "./components/home/footer";

import HomePage from "./app/home";
import AboutUsPage from "./app/pages/about";
import ContactPage from "./app/pages/contact";
import ShopPage from "./app/pages/shop";
import ServicesPage from "./app/pages/services";
import NFTtDetailPage from "./app/pages/shop/products/[id]";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111923] text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/shop/products/:id" element={<NFTtDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
