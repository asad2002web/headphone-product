import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopBtn = () => {
    const [showButton, setShowButton] = useState(false);
    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, []);
    return (
        <div>
            {showButton && (
                <div onClick={scrollTop}
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        right: "30px",
                        height: "45px",
                        width: "45px",
                        padding: "10px",
                        borderRadius: "50%",
                        border: "2px solid #333",
                        backgroundColor: "#FF0000",
                        color: "#fff",
                        cursor: "pointer",
                        transition: ".5s",
                        boxShadow: "#000 0px 0px 15px"
                    }}>
                    <FaArrowUp
                        // Tailwind use
                        className="
                    animate-bounce
                    text-[22px]
                    "
                    />
                </div>
            )}
        </div>

    );
};

export default GoToTopBtn;