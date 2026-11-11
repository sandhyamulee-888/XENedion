import React, { useEffect, useRef } from "react";

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodes = [
      { x: width / 2, y: height / 2, radius: 10, label: "XENedion Hub", isHub: true },
      { x: 0, y: 0, radius: 5, label: "Connaught Place", angle: 0.2, distance: 160, speed: 0.002, pulse: 0 },
      { x: 0, y: 0, radius: 5, label: "Indiranagar", angle: 1.5, distance: 220, speed: -0.0018, pulse: 1 },
      { x: 0, y: 0, radius: 5, label: "Bandra West", angle: 2.8, distance: 190, speed: 0.0015, pulse: 2 },
      { x: 0, y: 0, radius: 5, label: "Gachibowli", angle: 4.1, distance: 240, speed: -0.0016, pulse: 3 },
      { x: 0, y: 0, radius: 5, label: "Park Street", angle: 5.3, distance: 175, speed: 0.0022, pulse: 4 },
    ];

    const particles = [
      { nodeIndex: 1, progress: 0.1, speed: 0.007 },
      { nodeIndex: 2, progress: 0.4, speed: 0.005 },
      { nodeIndex: 3, progress: 0.7, speed: 0.006 },
      { nodeIndex: 4, progress: 0.2, speed: 0.008 },
      { nodeIndex: 5, progress: 0.85, speed: 0.0055 },
    ];

    let t = 0;

    const render = () => {
      t += 0.02;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const offsetX = (mouseX - width / 2) * 0.03;
      const offsetY = (mouseY - height / 2) * 0.03;

      ctx.clearRect(0, 0, width, height);

      const hubX = width / 2 + offsetX;
      const hubY = height / 2 + offsetY;
      nodes[0].x = hubX;
      nodes[0].y = hubY;

      for (let i = 1; i < nodes.length; i++) {
        const node = nodes[i];
        if (!prefersReducedMotion) {
          node.angle = (node.angle || 0) + (node.speed || 0.001);
        }
        const dist = (node.distance || 180) * (width < 768 ? 0.65 : 1);
        node.x = hubX + Math.cos(node.angle || 0) * dist;
        node.y = hubY + Math.sin(node.angle || 0) * (dist * 0.65);

        ctx.beginPath();
        ctx.moveTo(hubX, hubY);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = "rgba(148, 163, 184, 0.45)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#64748B";
        ctx.fill();

        const pulseFactor = prefersReducedMotion ? 1 : (Math.sin(t + (node.pulse || 0)) + 1) / 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3 + pulseFactor * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(212, 139, 24, ${0.25 + pulseFactor * 0.35})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (width > 640) {
          ctx.fillStyle = "#475569";
          ctx.font = "600 11px Inter, sans-serif";
          ctx.fillText(node.label, node.x + 10, node.y + 4);
        }
      }

      if (!prefersReducedMotion) {
        particles.forEach((p) => {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;

          const targetNode = nodes[p.nodeIndex];
          const px = targetNode.x + (hubX - targetNode.x) * p.progress;
          const py = targetNode.y + (hubY - targetNode.y) * p.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = "#FF7A00";
          ctx.shadowColor = "#FFA043";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      const hubPulse = (Math.sin(t * 1.5) + 1) / 2;
      const grad = ctx.createRadialGradient(hubX, hubY, 4, hubX, hubY, 40 + hubPulse * 15);
      grad.addColorStop(0, "rgba(255, 122, 0, 0.28)");
      grad.addColorStop(1, "rgba(255, 122, 0, 0)");
      ctx.beginPath();
      ctx.arc(hubX, hubY, 40 + hubPulse * 15, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(hubX, hubY, 9, 0, Math.PI * 2);
      ctx.fillStyle = "#FF7A00";
      ctx.shadowColor = "#FFA043";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(hubX, hubY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();

      ctx.fillStyle = "#0A1931";
      ctx.font = "bold 11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("ONE SHARED DATABASE", hubX, hubY - 18);
      ctx.textAlign = "start";

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.45,
      }}
    />
  );
}

