'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Platos que usaremos para la animación de las fotos flotantes
const platosAnimacion = [
  { id: 'p1', src: '/imagenes/comida1.webp', alt: 'Ensalada César', initial: { x: '-50vw', y: '50vh', rotation: -45, scale: 2 } },
  { id: 'p2', src: '/imagenes/comida7.webp', alt: 'Arroz con Mariscos', initial: { x: '50vw', y: '-50vh', rotation: 45, scale: 1.5 } },
  { id: 'p3', src: '/imagenes/comida2.webp', alt: 'Carne Gratinada', initial: { x: '-30vw', y: '-40vh', rotation: -20, scale: 1.8 } },
  { id: 'p4', src: '/imagenes/comida10.webp', alt: 'Salteado de Carne', initial: { x: '40vw', y: '60vh', rotation: 30, scale: 2.2 } },
  { id: 'p5', src: '/imagenes/comida5.webp', alt: 'Pescado Frito', initial: { x: '0', y: '80vh', rotation: 0, scale: 3 } }, // Este entra desde abajo al centro
];

export default function GsapPrueba() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // === INNOVACIÓN: PLATOS FLOTANTES QUE INVITAN AL SCROLL ===
    // La sección se fija (pin) mientras haces scroll, los platos vuelan a su posición,
    // y luego se libera para que sigas viendo la página "normal" abajo.
    
    // 1. Animación automática al cargar (para que no esté vacío antes de scrollear)
    gsap.from('.main-title-word', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Colocamos los platos en sus posiciones iniciales (fuera de cámara o muy grandes)
    platosAnimacion.forEach(plato => {
      gsap.set(`#${plato.id}`, { 
        x: plato.initial.x, 
        y: plato.initial.y, 
        rotation: plato.initial.rotation,
        scale: plato.initial.scale,
        opacity: 0
      });
    });

    // 2. Timeline atado al ScrollTrigger (El efecto WOW)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-pin-section',
        start: "top top",
        end: "+=2000", // 2000px de scroll interactivo
        scrub: 1.5, // Suavidad en la animación
        pin: true,  // Fija la pantalla
      }
    });

    // Fase 1 del scroll: Los platos entran volando hacia el centro/alrededor del texto
    tl.to('#p5', { y: '10vh', scale: 1.2, opacity: 1, rotation: 5, duration: 2, ease: "power2.out" }, 0)
      .to('#p1', { x: '-25vw', y: '0', scale: 1, opacity: 1, rotation: -10, duration: 2, ease: "power2.out" }, 0.2)
      .to('#p2', { x: '25vw', y: '-5vh', scale: 0.9, opacity: 1, rotation: 15, duration: 2, ease: "power2.out" }, 0.4)
      .to('#p3', { x: '-15vw', y: '-25vh', scale: 0.7, opacity: 1, rotation: -5, duration: 2, ease: "power2.out" }, 0.6)
      .to('#p4', { x: '20vw', y: '25vh', scale: 0.8, opacity: 1, rotation: 10, duration: 2, ease: "power2.out" }, 0.8);

    // El título principal hace un pequeño zoom y se difumina al acercarnos a la comida
    tl.to('.main-title-container', { scale: 0.8, opacity: 0.2, duration: 2 }, 0.5);

    // Aparece el texto "¡Buen Provecho!" en el centro
    tl.fromTo('.buen-provecho', 
      { scale: 0.5, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.5)" }, 
      1.5
    );

    // Fase 2 del scroll: Todo vuela hacia arriba para salir de la pantalla y dejar que la página fluya
    const platosArr = platosAnimacion.map(p => `#${p.id}`);
    tl.to(platosArr, {
      y: '-150vh', // Salen hacia arriba
      stagger: 0.1,
      duration: 2,
      ease: "power2.in"
    }, 3)
    .to('.main-title-container, .buen-provecho', { y: '-100vh', opacity: 0, duration: 1.5 }, 3);

  }, { scope: container });

  return (
    <div ref={container} className="bg-white relative font-sans overflow-hidden">
      
      {/* Botón de volver */}
      <Link href="/" className="fixed top-6 left-6 px-5 py-2.5 bg-red-600 text-white rounded-full z-50 font-bold transition-all shadow-lg hover:bg-red-700">
        Regresar
      </Link>

      {/* SECCIÓN HERO (Fijada con Pin) */}
      <section className="hero-pin-section h-screen w-full relative flex items-center justify-center bg-[#fafafa]">
        
        {/* Título Principal */}
        <div className="main-title-container absolute z-10 flex flex-col items-center text-center px-4 pointer-events-none">
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black text-gray-900 leading-[0.9] tracking-tighter mix-blend-multiply">
            <div className="overflow-hidden"><span className="main-title-word block">SABOR</span></div>
            <div className="overflow-hidden"><span className="main-title-word block text-red-600">PREMIUM</span></div>
            <div className="overflow-hidden"><span className="main-title-word block">EMPRESARIAL</span></div>
          </h1>
          <p className="main-title-word mt-6 text-xl text-gray-500 font-medium tracking-widest uppercase">
            Desliza para saborear
          </p>
        </div>

        {/* Texto Intermedio (Buen provecho) */}
        <div className="buen-provecho absolute z-30 text-center pointer-events-none opacity-0">
          <h2 className="text-5xl md:text-7xl font-black text-white px-8 py-4 bg-red-600/90 backdrop-blur-md rounded-full shadow-[0_20px_50px_rgba(220,38,38,0.5)] transform -rotate-2 border-4 border-white">
            ¡Buen Provecho!
          </h2>
        </div>

        {/* Platos Flotantes */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden flex items-center justify-center">
          {platosAnimacion.map((plato) => (
            <div 
              key={plato.id}
              id={plato.id}
              className="absolute will-change-transform"
            >
              <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-4 md:border-8 border-white overflow-hidden">
                <Image 
                  src={plato.src} 
                  alt={plato.alt} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 250px, 350px"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-40 text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </div>
      </section>

      {/* ======================================================== */}
      {/* EL RESTO DE LA PÁGINA "NORMAL" (Fluye debajo del Hero) */}
      {/* ======================================================== */}
      
      <section className="py-24 bg-white px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Servicio de<br/><span className="text-red-600">Catering Corporativo</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Una vez pasada la animación de entrada, la página continúa de forma tradicional, clara y profesional. Aquí puedes presentar a tu equipo, la higiene, los servicios, etc.
            </p>
            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-red-600 transition-colors shadow-lg">
              Conoce nuestro proceso
            </button>
          </div>
          <div className="flex-1 w-full relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/imagenes/catering.webp" 
              alt="Catering" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-black mb-10">Algunos de nuestros servicios regulares</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-72">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Beneficio {item}</h3>
              <p className="text-gray-600">Descripción normal y legible para el usuario de tu sitio web.</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
