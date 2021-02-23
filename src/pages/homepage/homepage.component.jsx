import React, { useState, useEffect } from 'react';

const Homepage = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        debugger
        fetch(`http://localhost:5000/banners`)
            .then(res => res.json())
            .then(json =>
                setBanners(json))
            .catch(err => console.log('Request Failed', err));
    }, []);

    return (
        <main>
            <div className="banners">
                {banners.map(banner => (
                    <div key={banner.id} className="banner">
                        {
                            console.log(`https://localhost:5000${banner.bannerImageUrl}`)
                        }
                        <p>{banner.bannerImageAlt}</p>
                        <img src={`${banner.bannerImageUrl}`} alt={banner.bannerImageAlt} />
                    </div>
                ))}
            </div>
            I am the Homepage
        </main>
    )
}

export default Homepage;