import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <button
                className="scroll-top show" id="scroll-top"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <i className="arrow-top fas fa-chevron-up" />
                <i className="arrow-bottom fas fa-chevron-up" />
            </button>
        )
    );
}
