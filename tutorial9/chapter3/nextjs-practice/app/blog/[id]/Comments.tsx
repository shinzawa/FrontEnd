"use client";

import { useEffect, useState } from "react";

export default function Comments() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return <p>Loading heavy comments...</p>;

  return <div>This is a heavy comments section.</div>;
}
