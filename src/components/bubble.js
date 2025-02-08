import { useEffect } from "react";
import "../index.css"; // Ensure the CSS file is imported

const BubbleBackground = () => {
  useEffect(() => {
    const bubbleContainer = document.createElement("div");
    bubbleContainer.classList.add("bubbles-container");
    document.body.appendChild(bubbleContainer);

    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Randomize size, position, and animation speed
      const size = Math.random() * 50 + 10 + "px"; // 10px to 60px
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.animationDuration = Math.random() * 5 + 3 + "s"; // 3s to 8s duration

      bubbleContainer.appendChild(bubble);

      // Remove bubble after animation ends
      setTimeout(() => {
        bubble.remove();
      }, 8000);
    }

    // Generate bubbles every 400ms
    const interval = setInterval(createBubble, 400);

    return () => {
      clearInterval(interval);
      document.body.removeChild(bubbleContainer);
    };
  }, []);

  return null; // This component only creates bubbles
};

export default BubbleBackground;
