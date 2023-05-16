import { useEffect, useRef } from "react";

const useOutsideClick = (callback: Function) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as Node | null)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
