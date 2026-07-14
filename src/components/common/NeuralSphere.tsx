import { useEffect, useRef } from "react";

/* Rotating wireframe sphere of nodes + connecting edges (canvas 2D projection). */
export function NeuralSphere() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 90;
    type P = { x: number; y: number; z: number };
    const pts: P[] = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      pts.push({ x: Math.cos(theta) * Math.sin(phi), y: Math.sin(theta) * Math.sin(phi), z: Math.cos(phi) });
    }
    // Precompute edges based on angular distance
    const edges: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const d = pts[i].x * pts[j].x + pts[i].y * pts[j].y + pts[i].z * pts[j].z;
        if (d > 0.72) edges.push([i, j]);
      }
    }
    let ang = 0;
    const loop = () => {
      ang += 0.0035;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const R = Math.min(w, h) * 0.42;
      const cosA = Math.cos(ang), sinA = Math.sin(ang);
      const cosB = Math.cos(ang * 0.6), sinB = Math.sin(ang * 0.6);

      const proj = pts.map((p) => {
        // rotate Y
        let x = p.x * cosA - p.z * sinA;
        let z = p.x * sinA + p.z * cosA;
        // rotate X
        let y = p.y * cosB - z * sinB;
        z = p.y * sinB + z * cosB;
        const pers = 1.2 / (1.6 - z);
        return { x: cx + x * R * pers, y: cy + y * R * pers, z, s: pers };
      });

      // edges
      for (const [i, j] of edges) {
        const a = proj[i], b = proj[j];
        const depth = (a.z + b.z) * 0.5;
        const alpha = Math.max(0.05, (depth + 1) * 0.35);
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, `rgba(167, 139, 250, ${alpha})`);
        grad.addColorStop(1, `rgba(103, 232, 249, ${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      // nodes
      for (const p of proj) {
        const alpha = Math.max(0.2, (p.z + 1) * 0.5);
        ctx.fillStyle = `rgba(224, 231, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6 * p.s, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
