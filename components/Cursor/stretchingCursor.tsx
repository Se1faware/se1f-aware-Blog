import React, { useEffect } from 'react';
import gsap from 'gsap';
import { vec2 } from 'vecteur';

interface CursorPosition {
  previous: vec2;
  current: vec2;
  target: vec2;
  lerpAmount: number;
}

interface CursorScale {
  previous: number;
  current: number;
  target: number;
  lerpAmount: number;
}

class Cursor {
  constructor(targetEl: HTMLElement) {
    this.el = targetEl;

    this.position = {
      previous: vec2(-100, -100),
      current: vec2(-100, -100),
      target: vec2(-100, -100),
      lerpAmount: 0.1
    } as CursorPosition;
    this.scale = {
      previous: 1,
      current: 1,
      target: 1,
      lerpAmount: 0.1
    } as CursorScale;

    this.isHovered = false;
    this.hoverEl = null;

    this.addListeners();
  }

  el: HTMLElement;
  position: CursorPosition;
  scale: CursorScale;
  isHovered: boolean;
  hoverEl: HTMLElement | null;

  update(): void {
    this.position.current.lerp(this.position.target, this.position.lerpAmount);
    this.scale.current = gsap.utils.interpolate(
      this.scale.current,
      this.scale.target,
      this.scale.lerpAmount
    );

    const delta = this.position.current.clone().sub(this.position.previous);

    this.position.previous.copy(this.position.current);
    this.scale.previous = this.scale.current;

    gsap.set(this.el, {
      x: this.position.current.x,
      y: this.position.current.y
    });

    if (!this.isHovered) {
      const angle = Math.atan2(delta.y, delta.x) * (180 / Math.PI);
      const distance = Math.sqrt(delta.x * delta.x + delta.y * delta.y) * 0.04;

      gsap.set(this.el, {
        rotate: angle,
        scaleX: this.scale.current + Math.min(distance, 1),
        scaleY: this.scale.current - Math.min(distance, 0.3)
      });
    }
  }

  updateTargetPosition(x: number, y: number): void {
    if (this.isHovered) {
      const bounds = this.hoverEl.getBoundingClientRect();

      const cx = bounds.x + bounds.width / 2;
      const cy = bounds.y + bounds.height / 2;

      const dx = x - cx;
      const dy = y - cy;

      this.position.target.x = cx + dx * 0.15;
      this.position.target.y = cy + dy * 0.15;
      this.scale.target = 2;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const distance = Math.sqrt(dx * dx + dy * dy) * 0.01;

      gsap.set(this.el, { rotate: angle });
      gsap.to(this.el, {
        scaleX: this.scale.target + Math.pow(Math.min(distance, 0.6), 3) * 3,
        scaleY: this.scale.target - Math.pow(Math.min(distance, 0.3), 3) * 3,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true
      });
    } else {
      this.position.target.x = x;
      this.position.target.y = y;
      this.scale.target = 1;
    }
  }

  addListeners(): void {
    gsap.utils.toArray("[data-hover]").forEach((hoverEl) => {
      // set hover states
      {
        const hoverBoundsEl = hoverEl.querySelector("[data-hover-bounds]") as HTMLElement;
        hoverBoundsEl.addEventListener("pointerover", () => {
          this.isHovered = true;
          this.hoverEl = hoverBoundsEl;
        });
        hoverBoundsEl.addEventListener("pointerout", () => {
          this.isHovered = false;
          this.hoverEl = null;
        });
      }

      // magnetic effect
      {
        const xTo = gsap.quickTo(hoverEl, "x", {
          duration: 1,
          ease: "elastic.out(1, 0.3)"
        });
        const yTo = gsap.quickTo(hoverEl, "y", {
          duration: 1,
          ease: "elastic.out(1, 0.3)"
        });

        hoverEl.addEventListener("pointermove", (event) => {
          const { clientX: cx, clientY: cy } = event;
          const { height, width, left, top } = hoverEl.getBoundingClientRect();
          const x = cx - (left + width / 2);
          const y = cy - (top + height / 2);
          xTo(x * 0.2);
          yTo(y * 0.2);
        });

        hoverEl.addEventListener("pointerout", () => {
          xTo(0);
          yTo(0);
        });
      }
    });
  }
}

const HomePage: React.FC = () => {
  useEffect(() => {
    const cursorElement = document.createElement('div');
    cursorElement.className = 'cursor';
    document.body.appendChild(cursorElement);

    const cursor = new Cursor(cursorElement);

    const cta = document.querySelector('.cta') as HTMLElement;
    const menuBtn = document.querySelector('.menu-btn') as HTMLElement;

    function update() {
      cursor.update();
    }

    function onMouseMove(event: MouseEvent) {
      const x = event.clientX;
      const y = event.clientY;
      cursor.updateTargetPosition(x, y);
    }

    function onResize() {
      const { x, y, width, height } = menuBtn.getBoundingClientRect();
      gsap.set(cta, {
        left: x - width,
        top: y + height
      });
    }

    gsap.ticker.add(update);
    window.addEventListener('pointermove', onMouseMove);
    window.addEventListener('resize', onResize);

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener('pointermove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.body.removeChild(cursorElement);
    };
  }, []);

  return (
    <main>
      <div>
        <button className="btn menu-btn" data-hover>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <div data-hover-bounds></div>
        </button>

        <button className="btn close-btn" data-hover>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <div data-hover-bounds></div>
        </button>
      </div>
    </main>

    <div className="cursor" />

    <svg className="cta" viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* SVG 内容 */}
    </svg>
  );
};

export default HomePage;