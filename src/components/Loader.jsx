import { Html, useProgress } from "@react-three/drei";
import { BLUE, PINK } from "../constants";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: "40rem",
        textAlign: "center",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 17,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading awesomeness <br /> {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
