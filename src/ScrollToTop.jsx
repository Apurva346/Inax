import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Navin page var gelyavar scroll top la ghevun jato
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;