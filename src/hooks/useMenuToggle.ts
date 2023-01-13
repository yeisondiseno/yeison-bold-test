import { useState } from "react";

export default function useMenuToggle() {
  // states
  const [menuState, setMenuState] = useState({
    toggle: "close",
  });

  // action states
  const handleToggle = () => {
    const newState = menuState.toggle === "open" ? "close" : "open";
    setMenuState({
      ...menuState,
      toggle: newState,
    });
  };

  const actions = {
    handleToggle,
  };

  return {
    ...menuState,
    ...actions,
  };
}
