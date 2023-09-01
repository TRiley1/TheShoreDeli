const HalfStarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#E3D0C0", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#E3D0C0", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "black", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "black", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon
        points="50,15 57.5,38.2 84.5,38.2 62.5,54 70,77.2 50,64 30,77.2 37.5,54 15.5,38.2 42.5,38.2"
        fill="url(#halfFill)"
      />
    </svg>
  );
};

export default HalfStarIcon;
