"use client";

import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const x = useRef(0);
  const width = useRef(0);

  const [hovered, setHovered] = useState(false);
  const [, forceUpdate] = useState(0);

  const pixelsPerSecond =
    speed === "fast"
      ? 140
      : speed === "normal"
      ? 80
      : 45;

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const measure = () => {
      const children = [...contentRef.current.children];

      let total = 0;

      for (let i = 0; i < children.length / 2; i++) {
        total += children[i].getBoundingClientRect().width;
      }

      const gap = 16; // gap-4

      total += gap * (items.length - 1);

      width.current = total;
    };

    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [items]);

  useAnimationFrame((_, delta) => {
    if (pauseOnHover && hovered) return;

    const move = (pixelsPerSecond * delta) / 1000;

    if (direction === "left") {
      x.current -= move;

      if (Math.abs(x.current) >= width.current) {
        x.current += width.current;
      }
    } else {
      x.current += move;

      if (x.current >= 0) {
        x.current -= width.current;
      }
    }

    forceUpdate((v) => v + 1);
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden w-full",
        className
      )}
    >
      <motion.ul
        ref={contentRef}
        style={{
          x: x.current,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex w-max flex-nowrap gap-4 py-4"
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={`${item.slug}-${idx}`}
            className="relative h-[255px] min-w-[280px] md:min-w-[410px] md:h-[270px] shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-full bg-[#f0fff0] rounded-[18px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="absolute bottom-4 left-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>

              <div className="w-full h-full rounded-xl overflow-hidden">
                <Link to={item.link} className="block w-full h-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};