import { useEffect } from "react";
import "../../src/styles/cursor.css";
import Script from "next/script";

const Cursor = () => {
  return (
    <>
      <div className="cursor" id="cursor"></div>
      <Script src="/cursor.js" strategy="lazyOnload" />
    </>
  );
};

export default Cursor;
