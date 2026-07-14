import { useEffect, useState } from "react";

export function TypingRoles({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i % roles.length];
    if (!del && txt === current) {
      const t = setTimeout(() => setDel(true), 1500);
      return () => clearTimeout(t);
    }
    if (del && txt === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setTxt((v) => (del ? v.slice(0, -1) : current.slice(0, v.length + 1)));
    }, del ? 35 : 65);
    return () => clearTimeout(t);
  }, [txt, del, i, roles]);
  return (
    <span className="text-gradient">
      {txt}
      <span className="inline-block w-[2px] h-[0.9em] translate-y-[0.1em] bg-brand-cyan ml-1 animate-pulse" />
    </span>
  );
}
