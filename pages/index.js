import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Logo from "../components/Logo";
import Button from "react-bootstrap/Button";
import { Mulish } from "@next/font/google";
const mulish = Mulish({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={mulish.className}>
      <div className={css.scene}>
        <Canvas
          shadows={true}
          className={css.canvas}
          camera={{
            position: [-10, 5, 5],
          }}
        >
          <Logo route={"/"} position={[0, 2, 0]} />
          <ambientLight />
        </Canvas>
      </div>
      <div className={css.overlay3D}>
        <p className={css.sentence}>My first Nextjs + React-Three-Fiber page! </p>
        <Button>Get started</Button>
      </div>
    </main>
  );
}
