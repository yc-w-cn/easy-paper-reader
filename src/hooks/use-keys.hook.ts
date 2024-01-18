import localforage from "localforage";
import { useEffect, useState } from "react";

export function useKeys() {
  const [keys, setKeys] = useState<string[]>([]);

  const refresh = () =>
    localforage.keys().then((internalKeys) => {
      if (internalKeys) {
        setKeys(internalKeys);
        return
      }
      setKeys([]);
    });

  useEffect(() => {
    refresh();
  }, []);

  return { keys, setKeys, refresh };
}
