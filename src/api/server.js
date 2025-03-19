const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use("/images", express.static(path.join(__dirname, "assets/images/ImagesProjets"))); // Correction du chemin

// Données de la page Home
const homeData = {
    banner: {
        title: "Welcome to Our Creative Studio",
        subtitle: "We bring your ideas to life with stunning visuals.",
        image: "/images/banner.jpg",
    },
    about: {
        title: "About Us",
        description: "We are a team of passionate designers and developers creating amazing digital experiences.",
        image: "/images/about-us.jpg",
    }
};

// Données Portfolio
const portfolioItems = [
    { id: 1, img: "/images/1.jpg", title: "Fashion Model", subtitle: "Photography", link: "/portfolio-single-style-3" },
    { id: 2, img: "/images/2.jpg", title: "Funny Dog", subtitle: "Photography", link: "/portfolio-single-style-4" },
    { id: 3, img: "/images/3.jpg", title: "Creative Branding", subtitle: "Branding", link: "/portfolio-single-style-5" },
    { id: 4, img: "/images/4.jpg", title: "Colibri Creative Project", subtitle: "Photography", link: "/portfolio-single-style-1" },
    { id: 5, img: "/images/5.jpg", title: "Luxury Car Website", subtitle: "Design", link: "/portfolio-single-style-3" },
    { id: 6, img: "/images/6.jpg", title: "Portrait Inspiration", subtitle: "Branding", link: "/portfolio-single-style-4" },
];

// Routes API
app.get("/api/home", (req, res) => {
    res.json(homeData);
});

app.get("/api/portfolio", (req, res) => {
    res.json(portfolioItems);
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
