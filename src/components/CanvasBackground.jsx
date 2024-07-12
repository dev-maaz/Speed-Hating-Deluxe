
import React, { useRef, useEffect } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  const createPattern = () => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Example: Draw a background pattern or image
    context.fillStyle = '#0a0a0a'; // Set your desired background color
    context.fillRect(0, 0, canvas.width, canvas.height);

    let redValue = 225;

    for(let i = 0; i < window.innerHeight; i += 20) {

        redValue = 225 - i/4

        for(let j = 0; j < window.innerWidth; j += 20) {

            redValue -= 2

            context.fillStyle = `rgb(${redValue},0,0)`;
            context.fillRect(j, i, 2, 2);
        }
    }

    for(let i = window.innerHeight ; i > 0; i -= 20) {

        redValue = 225 - (window.innerHeight-i)/4

        for(let j = window.innerWidth; j > 0; j -= 20) {

            redValue -= 2

            context.fillStyle = `rgb(${redValue},0,0)`;
            context.fillRect(j, i, 2, 2);
        }
    }

    // Clean up on unmount
    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }

  useEffect(() => {

    createPattern();
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default CanvasBackground;
