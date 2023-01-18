import { Mulish } from "@next/font/google";
import { Nav } from "react-bootstrap";

const mulish = Mulish({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={mulish.className} data-bs-theme="dark">
   <Nav  className="justify-content-space-between navbar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Feature</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Documentation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >Contributing</Nav.Link>
        </Nav.Item>
      </Nav>
    </main>
  );
}
