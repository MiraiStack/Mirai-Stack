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
        // Desktop only and respect reduced motion check
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isTouch || prefersReducedMotion) return;

        setIsVisible(true);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        setSize();
        window.addEventListener("resize", setSize);

        let mouseX = width / 2;
        let mouseY = height / 2;
        let currentX = mouseX;
        let currentY = mouseY;
        let lastX = mouseX;
        let lastY = mouseY;

        const trail: TrailParticle[] = [];

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Hide effect when cursor leaves the window
        const handleMouseLeave = () => {
            // We could abruptly fade, but smoothly tracking to leaving point works.
        };
        window.addEventListener("mouseout", handleMouseLeave);

        let animationFrameId: number;

        const drawRadialGradient = (
            x: number,
            y: number,
            radius: number,
            opacity: number
        ) => {
            // Draw a highly blurred radial gradient
            const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
            // Soft white at center
            grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
            // Very subtle cyan midpoint
            grad.addColorStop(0.4, `rgba(180, 240, 255, ${opacity * 0.4})`);
            // Fade to transparent
            grad.addColorStop(1, `rgba(180, 240, 255, 0)`);

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Smoothly lerp towards mouse position
            currentX += (mouseX - currentX) * 0.12;
            currentY += (mouseY - currentY) * 0.12;

            const dx = currentX - lastX;
            const dy = currentY - lastY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Emit mist vapor trail if moving past threshold
            if (dist > 1.5) {
                trail.push({
                    x: currentX,
                    y: currentY,
                    life: 1, // Life degrades from 1.0 to 0
                    size: Math.random() * 40 + 60, // Large soft blobs
                    vx: dx * 0.05 + (Math.random() - 0.5) * 0.5, // Slow independent drift
                    vy: dy * 0.05 + (Math.random() - 0.5) * 0.5,
                });
            }

            // Optimize by limiting max particles
            if (trail.length > 50) {
                trail.shift();
            }

            lastX = currentX;
            lastY = currentY;

            // Draw vapor trail
            for (let i = trail.length - 1; i >= 0; i--) {
                const p = trail[i];
                p.life -= 0.02; // Fast fade-out
                p.x += p.vx;
                p.y += p.vy;

                if (p.life <= 0) {
                    trail.splice(i, 1);
                } else {
                    // Maximum opacity is very low (0.015)
                    drawRadialGradient(p.x, p.y, p.size, p.life * 0.015);
                }
            }

            // Draw central gentle ambient glow over cursor
            // Very large radius, extremely dim opacity (0.035)
            drawRadialGradient(currentX, currentY, 300, 0.035);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", setSize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] h-full w-full"
            style={{ mixBlendMode: "screen" }}
        />
    );
}
