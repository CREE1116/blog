import { useEffect, useState } from "react";
const Progressbar = () => {
  const [percentage, setPercentage] = useState(100);

  const getScrollPercentage = () => {
    const scroll = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const viewport = scrollHeight - clientHeight;
    const percentage = (scroll / viewport) * 100;
    return setPercentage(percentage);
  };

  useEffect(() => {
    getScrollPercentage();
    window.addEventListener("scroll", getScrollPercentage);
    return () => window.removeEventListener("scroll", getScrollPercentage);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800">
      <div
        className="bg-red-500 h-1"
        style={{ transform: `translateX(${percentage - 100}%)` }}
      />
    </div>
  );
};
export default Progressbar;
