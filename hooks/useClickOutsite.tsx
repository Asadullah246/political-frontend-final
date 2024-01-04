import { useEffect } from "react";
export default function useClickoutside(ref:any, func:Function) {
  useEffect(() => {
    const listener = (e:any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      func();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, func]);
}