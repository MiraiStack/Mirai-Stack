"use client";

import { useEffect, useRef, useState } from "react";

interface TrailParticle {
    x: number;
    y: number;
    life: number;
    size: number;
    vx: number;
    vy: number;
}

export default function CursorAmbience() {
    const [isVisible, setIsVisible] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isTouch || prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        setIsVisible(true);

        let width = window.innerWidth;
        let height = window.innerHeight;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        };

        setSize();
        window.addEventListener("resize", setSize);

        let mouseX = width / 2;
        let mouseY = height / 2;
        let currentX = mouseX;
        let currentY = mouseY;
        let lastX = mouseX;
        let lastY = mouseY;
        let hasMouseMoved = false;

        const trail: TrailParticle[] = [];

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            hasMouseMoved = true;
        };

        window.addEventListener("mousemove", handleMouseMove);

        let animationFrameId: number;

        const drawRadialGradient = (
            x: number,
            y: number,
            radius: number,
            opacity: number
        ) => {
            const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
            grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
            grad.addColorStop(0.35, `rgba(210, 245, 255, ${opacity * 0.45})`);
            grad.addColorStop(1, `rgba(210, 245, 255, 0)`);

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            if (hasMouseMoved) {
                currentX += (mouseX - currentX) * 0.14;
                currentY += (mouseY - currentY) * 0.14;
            }

            const dx = currentX - lastX;
            const dy = currentY - lastY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Mist trail only when movement is meaningfully fast
            if (hasMouseMoved && dist > 4) {
                trail.push({
                    x: currentX,
                    y: currentY,
                    life: 1,
                    size: Math.random() * 24 + 26,
                    vx: dx * 0.03 + (Math.random() - 0.5) * 0.35,
                    vy: dy * 0.03 + (Math.random() - 0.5) * 0.35,
                });
            }

            if (trail.length > 24) {
                trail.shift();
            }

            lastX = currentX;
            lastY = currentY;

            for (let i = trail.length - 1; i >= 0; i--) {
                const p = trail[i];
                p.life -= 0.035;
                p.x += p.vx;
                p.y += p.vy;

                if (p.life <= 0) {
                    trail.splice(i, 1);
                } else {
                    drawRadialGradient(p.x, p.y, p.size, p.life * 0.045);
                }
            }

            if (hasMouseMoved) {
                // Outer ambient halo
                drawRadialGradient(currentX, currentY, 170, 0.09);
                // Inner brighter center
                drawRadialGradient(currentX, currentY, 70, 0.06);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", setSize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] h-full w-full"
            style={{
                mixBlendMode: "screen",
            }}
        />
    );
}