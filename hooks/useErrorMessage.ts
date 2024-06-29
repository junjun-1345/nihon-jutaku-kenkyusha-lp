import { useState, useEffect, useCallback } from "react";

export default function useErrorMessage() {
  const [message, setMessage] = useState<string>("");

  const setErrorMessage = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000); // 3秒後にメッセージをクリア
  }, []);

  return { message, setErrorMessage };
}
