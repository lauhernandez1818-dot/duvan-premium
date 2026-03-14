'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Truck,
  Shield,
  Star,
  ChefHat,
  Calendar,
  MapPin,
  MessageCircle,
  TrendingUp,
  Zap,
  Flame,
  Target,
  Sparkles,
  Heart,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  X,
} from 'lucide-react';
import CalculadoraPedido from '@/src/components/CalculadoraPedido';
import CarouselPropuesta from '@/src/components/CarouselPropuesta';
import CarouselBienestar from '@/src/components/CarouselBienestar';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const WHATSAPP_MSG = 'Hola, me interesa solicitar una cotización de almuerzos corporativos.';
const whatsappPhone = process.env.NEXT_PUBLIC_DUVAN_PHONE_1 || "";
const WHATSAPP_URL = whatsappPhone ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(WHATSAPP_MSG)}` : "#";

// Array del equipo de trabajo (orden alfabético)
const equipoTrabajo = [
  {
    nombre: 'Ayudantes de Cocina',
    imagen: '/imagenes/Ayudantes-de-cocina.webp',
    descripcion: 'Apoyo fundamental en la preparación diaria, asegurando eficiencia y organización en cada proceso culinario.',
  },
  {
    nombre: 'Carnicería',
    imagen: '/imagenes/Carniceria.webp',
    descripcion: 'Selección y preparación de carnes de primera calidad, garantizando frescura y los más altos estándares.',
  },
  {
    nombre: 'Cocineros Principales',
    imagen: '/imagenes/Cocineros-principales.webp',
    descripcion: 'Líderes culinarios que transforman ingredientes frescos en platos excepcionales con técnicas profesionales.',
  },
  {
    nombre: 'Frutería',
    imagen: '/imagenes/Panaderia-pasteleria-y-fruteria.webp',
    descripcion: 'Selección y preparación de frutas frescas para complementos saludables y postres naturales.',
  },
  {
    nombre: 'Hortalizas',
    imagen: '/imagenes/Hortalizas.webp',
    descripcion: 'Manejo especializado de vegetales frescos, asegurando calidad y nutrición en cada preparación.',
  },
  {
    nombre: 'Inventario',
    imagen: '/imagenes/Inventario.webp',
    descripcion: 'Control y gestión de suministros para mantener disponibilidad constante y optimizar recursos.',
  },
  {
    nombre: 'Panadería Pastelería',
    imagen: '/imagenes/Panaderia-pasteleria-y-fruteria.webp',
    descripcion: 'Elaboración artesanal de panes frescos y postres que complementan cada menú con calidad premium.',
  },
  {
    nombre: 'Personal de Empaque y Distribución',
    imagen: '/imagenes/Personal-de-empanque-y-distribucion.webp',
    descripcion: 'Empaque profesional y distribución eficiente, garantizando que cada comida llegue en perfectas condiciones.',
  },
  {
    nombre: 'Servicios Generales',
    imagen: '/imagenes/Servicios-generales.webp',
    descripcion: 'Mantenimiento y limpieza de instalaciones, asegurando un ambiente sanitario óptimo en todas las áreas.',
  },
  {
    nombre: 'Transportista',
    imagen: '/imagenes/Transportistas.webp',
    descripcion: 'Logística especializada con transporte térmico para entregas puntuales manteniendo la temperatura ideal.',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const videoCalidadRef = useRef<HTMLVideoElement>(null);
  const [showVideoCalidadLightbox, setShowVideoCalidadLightbox] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    if (!showVideoCalidadLightbox) return;
    const scrollY = window.scrollY ?? document.documentElement.scrollTop;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    const t = setTimeout(() => {
      videoCalidadRef.current?.requestFullscreen().catch(() => {});
    }, 150);
    return () => {
      clearTimeout(t);
      const prevScrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      if (prevScrollY) window.scrollTo(0, parseInt(prevScrollY || '0', 10) * -1);
    };
  }, [showVideoCalidadLightbox]);

  const closeVideoLightbox = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setShowVideoCalidadLightbox(false);
  };


  return (
        <div className="min-h-screen bg-black overflow-x-hidden w-full max-w-[100vw] min-w-0">
      {/* Botón Flotante de WhatsApp */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.35 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
            Chatea con nosotros
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </div>

        {/* Botón */}
        <div className="relative">
          {/* Anillo de pulso - animación ligera para no causar lag en móvil */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          
          {/* Botón principal */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all">
            {/* Ícono de WhatsApp */}
            <svg
              className="w-9 h-9 sm:w-11 sm:h-11 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </div>
      </motion.a>

      {/* Hero Section - video de fondo + overlay */}
      <section ref={heroRef} className="relative overflow-hidden bg-black min-h-screen flex items-center">
        {/* Video de fondo */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
          {/* Overlay negro 50% para que el título resalte */}
          <div className="absolute inset-0 bg-black/50" aria-hidden />
        </div>

        {/* Floating navigation - animación rápida para menos lag */}
        <motion.nav 
          initial={{ y: -20, opacity: 0.9 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute top-0 left-0 right-0 z-50"
        >
          <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 py-3 sm:py-6 max-w-[100vw] min-w-0">
            <div className="flex items-center justify-between gap-2 sm:gap-4 min-[800px]:gap-4 xl:gap-6 backdrop-blur-xl bg-gray-900/90 border border-white/10 rounded-full px-3 sm:px-6 md:px-8 min-[800px]:px-6 xl:px-8 min-[1920px]:px-10 py-2.5 sm:py-4 min-w-0">
              <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                {/* Logo con fondo claro para que se vea bien sobre oscuro */}
                <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 shadow-md">
                  <Image
                    src="/imagenes/logo-duvan.png"
                    alt="Inversiones Duvan"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 36px, 48px"
                    priority
                  />
                </div>
                {/* Pantallas pequeñas: 2 líneas. Pantallas grandes (sm+): 1 línea "Inversiones Duvan" */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 min-w-0 leading-tight">
                  <span className="text-[11px] sm:text-base md:text-xl font-black text-white tracking-tight whitespace-nowrap">INVERSIONES</span>
                  <span className="text-[11px] sm:text-base md:text-xl font-black bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">DUVAN</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                <a href={whatsappPhone ? `tel:+${whatsappPhone}` : "#"} className="flex items-center gap-1 sm:gap-2 text-white hover:text-white transition-colors min-h-[44px] items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  {whatsappPhone && <span className="hidden sm:inline font-medium text-xs md:text-base">+{whatsappPhone}</span>}
                </a>
                <a href="#cotizacion" className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-3 sm:px-6 py-2 min-h-[44px] flex items-center justify-center rounded-lg text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all touch-manipulation">
                  Cotizar
                </a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Content - FULL RESPONSIVE */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 pt-28 sm:pt-40 min-[800px]:pt-36 xl:pt-44 min-[1920px]:pt-48 pb-16 sm:pb-32 xl:pb-40 min-[1920px]:pb-48 max-w-[100vw] min-w-0"
        >
          <div className="max-w-7xl xl:max-w-[90rem] min-[1920px]:max-w-[100rem] mx-auto text-center min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
            >
              {/* Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-xl border border-red-600/50 rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12"
              >
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                <span className="text-white font-bold text-xs sm:text-base">15+ AÑOS DE EXCELENCIA</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </motion.div>
              
              {/* Main Headline - 3 líneas como en Vercel (sin depender de br) */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl min-[1920px]:text-9xl font-black text-white mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 leading-tight tracking-tighter px-1 sm:px-2 break-words">
                <span className="block">ALIMENTACIÓN</span>
                <span className="relative block">
                  <span className="relative z-10 text-white">CORPORATIVA</span>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-2 bg-gradient-to-r from-red-600/50 via-blue-600/50 to-red-600/50 blur-2xl -z-10"
                  />
                </span>
                <span className="block">DE <span className="text-red-600">ALTO</span> <span className="text-blue-600">IMPACTO</span></span>
              </h1>
              
              {/* Tagline - mensaje de valor sin repetir números */}
              <div className="text-sm sm:text-2xl md:text-3xl xl:text-4xl min-[1920px]:text-5xl text-white mb-8 sm:mb-12 xl:mb-16 min-[1920px]:mb-20 max-w-4xl xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto leading-relaxed font-light px-2 sm:px-4 break-words">
                <p className="mb-2">
                  <span className="font-bold">Somos tu mejor opción</span>
                </p>
                <p>
                  en la Gran Caracas
                </p>
              </div>

              {/* Stats Bar - FULL RESPONSIVE - CON ANIMACIONES COMO EL RESTO */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 xl:gap-6 min-[1920px]:gap-8 mb-8 sm:mb-12 xl:mb-16 min-[1920px]:mb-20 max-w-5xl xl:max-w-6xl min-[1920px]:max-w-7xl mx-auto px-1 sm:px-2 w-full min-w-0">
                {[
                  { icon: Award, value: '15+', label: 'Años', color: 'from-red-600 to-red-500' },
                  { icon: Users, value: '6K', label: 'Comidas/Día', color: 'from-blue-600 to-blue-500' },
                  { icon: Target, value: '100%', label: 'Puntualidad', color: 'from-gray-500 to-gray-400' },
                  { icon: Shield, value: '100%', label: 'Certificado', color: 'from-red-600 to-blue-600' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    {/* Glow effect al hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 rounded-xl sm:rounded-2xl blur-xl transition-all duration-500`} />
                    <div className="relative bg-white/5 backdrop-blur-sm border-2 border-white/35 rounded-xl sm:rounded-2xl p-2 sm:p-6 xl:p-8 min-[1920px]:p-10 group-hover:border-white/50 transition-all h-full min-w-0">
                      <stat.icon className="w-4 h-4 sm:w-8 sm:h-8 xl:w-10 xl:h-10 min-[1920px]:w-12 min-[1920px]:h-12 text-white mx-auto mb-1 sm:mb-3 xl:mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-lg sm:text-4xl md:text-5xl xl:text-6xl min-[1920px]:text-7xl font-black text-white mb-0.5 sm:mb-1 xl:mb-2 truncate">{stat.value}</div>
                      <div className="text-[10px] sm:text-sm xl:text-base min-[1920px]:text-lg text-gray-400 font-medium truncate">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons - FULL RESPONSIVE - CON ANIMACIONES COMO EL RESTO */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-4 w-full max-w-[100vw] min-w-0"
              >
                <motion.a 
                  href={whatsappPhone ? `tel:+${whatsappPhone}` : "#"}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto max-w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 min-h-[48px] flex items-center justify-center touch-manipulation"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 opacity-0 group-hover:opacity-30 rounded-xl sm:rounded-2xl blur-xl transition-all duration-500" />
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 animate-gradient bg-[length:200%_auto]" />
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3 xl:gap-4 px-4 sm:px-10 xl:px-12 min-[1920px]:px-16 py-3 sm:py-6 xl:py-7 min-[1920px]:py-8 text-white font-black text-sm sm:text-xl xl:text-2xl min-[1920px]:text-3xl">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    LLAMAR AHORA
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </motion.a>
                
                <motion.a 
                  href="#cotizacion"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto max-w-full flex items-center justify-center gap-2 sm:gap-3 xl:gap-4 bg-white/5 backdrop-blur-sm border-2 border-white/35 text-white px-4 sm:px-10 xl:px-12 min-[1920px]:px-16 py-3 sm:py-6 xl:py-7 min-[1920px]:py-8 rounded-xl sm:rounded-2xl font-black text-sm sm:text-xl xl:text-2xl min-[1920px]:text-3xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline">SOLICITAR COTIZACIÓN</span>
                  <span className="sm:hidden">COTIZAR</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* Sobre Nosotros - CON GALERÍA ESPECTACULAR - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-gradient-to-b from-[#0d2159] via-[#0f172a] to-[#0d2159] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl xl:max-w-[90rem] min-[1920px]:max-w-[100rem] mx-auto"
          >
            {/* Section Header - FULL RESPONSIVE */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20 xl:mb-24 min-[1920px]:mb-28">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-xl border border-red-600/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                <span className="text-white font-bold text-sm sm:text-base">QUIÉNES SOMOS</span>
              </motion.div>
              <p className="text-base sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl text-gray-400 max-w-3xl xl:max-w-4xl min-[1920px]:max-w-5xl mx-auto px-4">
                Líderes en alimentación corporativa desde hace más de una década
              </p>
            </div>

            {/* Botón Ver Galería - SIN FOTOS PREVIEW */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <div className="text-center">
                <Link href="/galeria">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl shadow-2xl hover:shadow-blue-600/50 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <ChefHat className="relative w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="relative">VER GALERÍA</span>
                    <ChevronRight className="relative w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
                <p className="text-gray-400 mt-4 text-sm sm:text-base">
                  Conoce nuestras instalaciones y equipo profesional
                </p>
              </div>
            </motion.div>

            {/* Texto descriptivo - FULL RESPONSIVE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 rounded-2xl sm:rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16">
                <div className="max-w-4xl xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto">
                  <p className="text-base sm:text-2xl md:text-3xl xl:text-4xl min-[1920px]:text-5xl leading-relaxed text-gray-300 mb-6 sm:mb-8 xl:mb-10 min-[1920px]:mb-12">
                    Somos <span className="text-white font-bold">líderes en alimentación corporativa</span> en la Gran Caracas. 
                    Atendemos a <span className="text-red-500 font-bold">bancos, clínicas, industria, empresas pequeñas y medianas, entes e instituciones</span>,
                    con menús personalizados, trazabilidad total y <span className="text-blue-500 font-bold">normas sanitarias certificadas</span>. 
                    Calidad, frescura y puntualidad en cada entrega.
                  </p>
                  <p className="text-sm sm:text-xl xl:text-2xl min-[1920px]:text-3xl text-gray-400 leading-relaxed">
                    Detrás de cada comida hay un equipo apasionado por la excelencia. Nuestros fundadores y su equipo 
                    se dedican diariamente a transformar la alimentación corporativa en una experiencia memorable, 
                    con instalaciones preparadas y procesos que priorizan la seguridad y el sabor.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Nuestro Equipo de Trabajo - FULL RESPONSIVE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-16 sm:mt-20 md:mt-24"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-2 break-words">
                  NUESTRO <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">EQUIPO DE TRABAJO</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 mb-6 sm:mb-8">
                  Profesionales especializados en cada área para garantizar la excelencia
                </p>
                {/* Botón para ir a la página del equipo */}
                <Link href="/equipo">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg shadow-2xl hover:shadow-blue-600/50 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Users className="relative w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="relative">CONOCE MÁS DE NOSOTROS</span>
                    <ChevronRight className="relative w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Nuestra Propuesta Gastronómica - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-[#0d2159] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-12 xl:mb-16 min-[1920px]:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black text-white mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 px-2 sm:px-4 break-words">
                NUESTRA PROPUESTA <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">GASTRONÓMICA</span>
              </h2>
              <p className="text-base sm:text-lg xl:text-xl min-[1920px]:text-2xl text-gray-400 max-w-2xl xl:max-w-3xl min-[1920px]:max-w-4xl mx-auto px-4">
                Menús variados, ingredientes de primera y servicio premium
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[100vw] min-w-0 px-2 sm:px-4"
            >
              <CarouselPropuesta />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección Calidad - Higiene y servicio premium */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-[#0d2159] relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 px-2 break-words">
                HIGIENE Y <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">SERVICIO PREMIUM</span>
              </h2>
              <p className="text-base sm:text-lg xl:text-xl min-[1920px]:text-2xl text-gray-400 max-w-2xl xl:max-w-3xl min-[1920px]:max-w-4xl mx-auto px-4">
                Preparación con los más altos estándares de higiene y calidad
              </p>
            </div>
            <div className="p-1 sm:p-1.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-600 to-blue-600">
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video bg-black group cursor-pointer"
                onClick={() => setShowVideoCalidadLightbox(true)}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  aria-hidden
                >
                  <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 border border-white/30">
                    <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <span className="text-white font-semibold text-sm sm:text-base">Ver en pantalla completa</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox video Calidad - portal a body, fondo opaco tapa todo */}
      {typeof document !== 'undefined' &&
        showVideoCalidadLightbox &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              className="fixed z-[9999] flex items-center justify-center overflow-hidden pointer-events-auto"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                minWidth: '100vw',
                  height: '100%',
                minHeight: '100dvh',
                backgroundColor: '#0d2159',
              }}
              onClick={closeVideoLightbox}
            >
              {/* Capa de fondo que tapa todo: no se ve nada de la página */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100vw',
                  height: '100dvh',
                  minHeight: '100vh',
                  backgroundColor: '#0d2159',
                }}
                aria-hidden
              />
              <button
                type="button"
                onClick={closeVideoLightbox}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-[70] w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-[90vh] sm:h-[85vh] max-w-5xl mx-auto bg-black rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  ref={videoCalidadRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                >
                  <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
              </motion.div>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm z-[70]">
                Higiene y servicio premium
              </p>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

      {/* Por qué elegir a Duvan - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-gradient-to-b from-[#0d2159] via-[#0f172a] to-[#0d2159] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600/20 to-red-600/20 backdrop-blur-xl border border-blue-600/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-white font-bold text-sm sm:text-base">VENTAJAS COMPETITIVAS</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black text-white mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 px-2 sm:px-4 break-words">
                ¿POR QUÉ ELEGIR A <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">DUVAN</span>?
              </h2>
              <p className="text-base sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl text-gray-400 max-w-3xl xl:max-w-4xl min-[1920px]:max-w-5xl mx-auto px-4">
                Empresas líderes confían en nosotros día a día
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 min-[1920px]:gap-12">
              {[
                {
                  number: '01',
                  icon: TrendingUp,
                  title: 'Capacidad Comprobada',
                  description: 'Escala sin sacrificar calidad: desde empresas medianas hasta grandes operaciones. Misma excelencia desde el primer hasta el último plato.',
                  gradient: 'from-red-600 via-red-500 to-orange-500',
                  shadowColor: 'shadow-red-600/50',
                },
                {
                  number: '02',
                  icon: Clock,
                  title: 'Puntualidad Total',
                  description: 'Horarios de entrega cumplidos sin excusas. Tu equipo come a tiempo, siempre.',
                  gradient: 'from-blue-400 via-blue-300 to-cyan-300',
                  shadowColor: 'shadow-blue-400/50',
                },
                {
                  number: '03',
                  icon: Zap,
                  title: 'Frescura Garantizada',
                  description: 'Preparación el mismo día + transporte térmico especializado = comida como recién hecha',
                  gradient: 'from-gray-600 via-gray-500 to-slate-500',
                  shadowColor: 'shadow-gray-500/50',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-30 rounded-2xl sm:rounded-3xl blur-2xl transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 xl:p-10 min-[1920px]:p-12 group-hover:border-white/30 transition-all h-full overflow-hidden">
                    {/* Background number */}
                    <div className="absolute top-4 right-4 text-[80px] sm:text-[120px] xl:text-[140px] min-[1920px]:text-[160px] font-black text-white/5 leading-none">
                      {benefit.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-4 sm:mb-6 xl:mb-8">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 min-[1920px]:w-28 min-[1920px]:h-28 bg-gradient-to-br ${benefit.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center ${benefit.shadowColor} group-hover:shadow-2xl transition-all group-hover:scale-110 group-hover:rotate-6`}>
                        <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 min-[1920px]:w-14 min-[1920px]:h-14 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl min-[1920px]:text-5xl font-black text-white mb-3 sm:mb-4 xl:mb-5">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg xl:text-xl min-[1920px]:text-2xl text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl ${benefit.gradient} opacity-5 rounded-tl-full`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misión - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-[#0d2159] relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl min-[1920px]:text-7xl font-black text-white mb-6 sm:mb-8 xl:mb-10 min-[1920px]:mb-12 px-2 break-words">
              NUESTRA <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">MISIÓN</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl text-gray-300 leading-relaxed">
              Transformar la alimentación corporativa en una experiencia memorable, con sabor de hogar y eficiencia en cada entrega.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios al contratarnos - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-gradient-to-b from-[#0d2159] via-[#0f172a] to-[#0d2159] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-2 sm:px-4 break-words">
                BENEFICIOS AL <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">CONTRATARNOS</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 min-[1920px]:gap-10">
              {[
                { icon: Truck, title: 'Logística 360°', description: 'Cobertura total en toda la Gran Caracas con transporte especializado', color: 'from-red-600 to-red-500', iconBg: 'bg-red-600' },
                { icon: Shield, title: 'Certificación Total', description: 'Cumplimos con todas las normas sanitarias y de seguridad alimentaria', color: 'from-blue-600 to-blue-500', iconBg: 'bg-blue-600' },
                { icon: Clock, title: 'Puntualidad Extrema', description: 'Cumplimos horarios de entrega sin excusas. Tu equipo come a tiempo, siempre', color: 'from-gray-600 to-gray-700', iconBg: 'bg-gray-600' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-300`} />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/30 transition-all h-full">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${item.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonios - FULL RESPONSIVE (800x600 en adelante) */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-gradient-to-b from-[#0d2159] via-[#0f172a] to-[#0d2159] overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 max-w-[100vw] min-w-0">
          <div className="max-w-7xl mx-auto min-w-0">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-xl border border-red-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span className="text-white font-bold text-sm sm:text-base">TESTIMONIOS</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black text-white mb-6 xl:mb-8 min-[1920px]:mb-10 px-2 sm:px-4 break-words">
                CLIENTES <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">SATISFECHOS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 min-[800px]:gap-6 xl:gap-8 min-[1920px]:gap-10">
              {[
                {
                  quote: "Llevamos 3 años con Inversiones Duvan y la calidad nunca ha bajado. Nuestros 500 empleados almuerzan a tiempo todos los días y la comida siempre está caliente y deliciosa.",
                  author: "Gerente de RRHH",
                  company: "Sector Bancario - Caracas",
                  gradient: 'from-red-600 to-red-500',
                },
                {
                  quote: "Lo que más valoramos es la puntualidad y la variedad del menú. Como clínica, necesitamos que todo funcione como reloj, y ellos nunca fallan.",
                  author: "Coordinadora Administrativa",
                  company: "Clínica Privada - 300+ empleados",
                  gradient: 'from-blue-600 to-blue-500',
                },
                {
                  quote: "Con 1,000 empleados en planta, no podemos darnos el lujo de errores. Inversiones Duvan entiende nuestras necesidades y se adapta perfectamente a nuestros horarios de turnos.",
                  author: "Director de Operaciones",
                  company: "Industria Manufacturera",
                  gradient: 'from-gray-600 to-gray-700',
                },
                {
                  quote: "Somos una empresa mediana y necesitábamos un proveedor confiable. La puntualidad y la variedad del menú nos convencieron desde el primer día. Muy recomendables.",
                  author: "Coordinador de Compras",
                  company: "Empresa de Servicios - 150 empleados",
                  gradient: 'from-red-600 to-red-500',
                },
                {
                  quote: "Como institución pública exigimos higiene y trazabilidad. Inversiones Duvan cumple con todos los estándares y nuestro personal está muy satisfecho con la calidad.",
                  author: "Jefe de Administración",
                  company: "Ente Gubernamental - Gran Caracas",
                  gradient: 'from-blue-600 to-blue-500',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-300`} />
                  <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 xl:p-10 min-[1920px]:p-12 group-hover:border-white/30 transition-all h-full">
                    <div className="flex gap-1 mb-4 sm:mb-6 xl:mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg xl:text-xl min-[1920px]:text-2xl text-gray-300 mb-4 sm:mb-6 xl:mb-8 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                    <div className="border-t border-white/10 pt-4 xl:pt-6">
                      <p className="font-bold text-white text-base sm:text-lg xl:text-xl min-[1920px]:text-2xl">{testimonial.author}</p>
                      <p className="text-sm sm:text-base xl:text-lg min-[1920px]:text-xl text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tranquilidad y Bienestar - NUEVA SECCIÓN */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-[#0d2159] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 xl:mb-20"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black text-white mb-4 sm:mb-6 px-2 break-words leading-tight">
              TRANQUILIDAD Y BIENESTAR <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent italic pe-2">PARA TUS COLABORADORES!</span>
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl xl:text-4xl min-[1920px]:text-5xl font-bold text-gray-400">
              Para tu empresa
            </p>
          </motion.div>
          
          <CarouselBienestar />
        </div>
      </section>

      {/* Nuestras Opciones - FULL RESPONSIVE (800x600 en adelante) */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-zinc-900 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 max-w-[100vw] min-w-0">
          <div className="max-w-5xl xl:max-w-6xl min-[1920px]:max-w-7xl mx-auto min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8 sm:mb-12 xl:mb-16 min-[1920px]:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black text-white mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 px-2 sm:px-4 break-words">
                  NUESTRAS <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">OPCIONES</span>
                </h2>
                <p className="text-base sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl text-gray-400 px-4">
                  Encuentra el plan que se adapta a tu empresa
                </p>
              </div>
              <CalculadoraPedido />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso - FULL RESPONSIVE (800x600 en adelante) */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-gradient-to-b from-[#0d2159] via-[#0f172a] to-[#0d2159] overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 max-w-[100vw] min-w-0">
          <div className="max-w-7xl xl:max-w-[90rem] min-[1920px]:max-w-[100rem] mx-auto min-w-0">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 xl:mb-24 min-[1920px]:mb-28">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black text-white mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 px-2 sm:px-4 break-words">
                CÓMO <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">TRABAJAMOS</span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl text-gray-400 px-4">Proceso simple y transparente</p>
            </div>

            <div className="grid grid-cols-1 min-[800px]:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 min-[800px]:gap-6 xl:gap-8 min-[1920px]:gap-10">
              {[
                { icon: MessageCircle, title: 'Cotización', description: 'Nos cuentas tus necesidades y en 24h recibes propuesta personalizada', color: 'from-red-600 to-red-500' },
                { icon: Calendar, title: 'Planificación', description: 'Definimos menú, horarios y logística adaptados a tu empresa', color: 'from-blue-600 to-blue-500' },
                { icon: ChefHat, title: 'Preparación', description: 'Elaboramos todo fresco el día de entrega con ingredientes de primera', color: 'from-slate-400 to-slate-500' },
                { icon: Truck, title: 'Entrega', description: 'Transporte térmico puntual directamente a tus instalaciones', color: 'from-red-600 to-blue-600' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {/* Connecting line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 sm:top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                  
                  <div className="relative">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 min-[1920px]:w-32 min-[1920px]:h-32 bg-gradient-to-br ${step.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-2xl mb-4 sm:mb-6 xl:mb-8 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 min-[1920px]:w-16 min-[1920px]:h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 xl:-top-4 xl:-right-4 min-[1920px]:-top-5 min-[1920px]:-right-5 w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 min-[1920px]:w-16 min-[1920px]:h-16 bg-white rounded-full flex items-center justify-center font-black text-black shadow-lg border-2 sm:border-4 xl:border-[5px] border-black text-sm sm:text-base xl:text-lg min-[1920px]:text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl font-black text-white mb-2 sm:mb-3 xl:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base xl:text-lg min-[1920px]:text-xl text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-zinc-900 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 max-w-[100vw] min-w-0">
          <div className="max-w-4xl xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto min-w-0">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 xl:mb-24 min-[1920px]:mb-28">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black text-white mb-6 xl:mb-8 min-[1920px]:mb-10 px-2 sm:px-4 break-words">
                PREGUNTAS <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">FRECUENTES</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 xl:space-y-8 min-[1920px]:space-y-10">
              {[
                { q: '¿Cuál es el pedido mínimo?', a: 'Atendemos pedidos desde 50 personas. Para eventos especiales consulta sin compromiso.' },
                { q: '¿Qué zonas cubren?', a: 'Toda la Gran Caracas: Este, Oeste, Norte y Sur. Logística 360° garantizada.' },
                { q: '¿Con cuánta anticipación debo ordenar?', a: 'Recomendamos 48 horas para planificación óptima. Pedidos urgentes consultar disponibilidad.' },
                { q: '¿Ofrecen menús personalizados?', a: 'Sí. Adaptamos el menú a restricciones alimentarias, presupuesto y preferencias de tu empresa.' },
                { q: '¿Incluyen el servicio de mesa?', a: 'Sí. Incluimos vajilla desechable premium, servilletas y cubiertos. Servicio de montaje opcional.' },
                { q: '¿Cómo garantizan la frescura?', a: 'Transporte térmico especializado y preparación el mismo día de entrega. Normas sanitarias certificadas.' },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-all duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 xl:p-10 min-[1920px]:p-12 group-hover:border-white/30 transition-all">
                    <h3 className="text-lg sm:text-xl xl:text-2xl min-[1920px]:text-3xl font-bold text-white mb-3 xl:mb-4">{faq.q}</h3>
                    <p className="text-sm sm:text-base xl:text-lg min-[1920px]:text-xl text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botón Ver Catálogo - debajo de FAQs, antes del eslogan */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12 sm:mt-16 md:mt-20"
            >
              <Link href="/catalogo">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl transition-all overflow-hidden"
                >
                  <Maximize2 className="relative w-6 h-6 sm:w-7 sm:h-7" />
                  <span className="relative">VER CATÁLOGO</span>
                  <ChevronRight className="relative w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              <p className="text-gray-400 mt-4 text-sm sm:text-base">
                Platos, información y videos en un solo lugar
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promedio de comidas diarias - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-gradient-to-b from-[#0d2159] via-[#0f172a] to-[#0d2159] relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl min-[1920px]:text-7xl font-black text-white mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 px-2 break-words">
              PROMEDIO DE <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">COMIDAS DIARIAS</span>
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl min-[1920px]:text-6xl font-black text-white">
              <span className="text-red-500">3.000</span> a <span className="text-blue-500">6.000</span> comidas diarias
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eslogan - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-[#0d2159] relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl xl:max-w-5xl min-[1920px]:max-w-6xl mx-auto text-center"
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-[1920px]:text-6xl font-black text-white leading-relaxed italic">
              &ldquo;Sabor de hogar, eficiencia corporativa en cada entrega.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contactos - FULL RESPONSIVE */}
      <section id="cotizacion" className="py-16 sm:py-24 md:py-32 xl:py-40 min-[1920px]:py-48 bg-gradient-to-br from-red-600 via-blue-600 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 relative z-10 max-w-[100vw] min-w-0">
          <div className="max-w-5xl xl:max-w-6xl min-[1920px]:max-w-7xl mx-auto text-center min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl min-[1920px]:text-9xl font-black text-white mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 break-words px-2">
                <span className="block">CONTACTOS</span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl text-white/80 mb-8 sm:mb-12 xl:mb-16 min-[1920px]:mb-20 px-2 sm:px-4">
                Solicita una cotización — respuesta en menos de 24 horas
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 xl:gap-8 min-[1920px]:gap-10 mb-8 sm:mb-12 xl:mb-16 min-[1920px]:mb-20 w-full min-w-0">
                {[
                  { icon: CheckCircle2, text: 'Respuesta en 24 horas' },
                  { icon: Users, text: 'Asesoría personalizada' },
                  { icon: Shield, text: 'Sin compromiso' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center justify-center gap-2 sm:gap-3 xl:gap-4 bg-black/30 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 xl:p-8 min-[1920px]:p-10 min-w-0"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 min-[1920px]:w-8 min-[1920px]:h-8 text-white flex-shrink-0" />
                    <span className="text-white font-bold text-xs sm:text-base md:text-lg xl:text-xl min-[1920px]:text-2xl truncate">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-[100vw] min-w-0">
                <motion.a 
                  href={whatsappPhone ? `tel:+${whatsappPhone}` : "#"}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto max-w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl min-h-[48px] flex items-center justify-center touch-manipulation"
                >
                  <div className="absolute inset-0 bg-white" />
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3 xl:gap-4 px-4 sm:px-12 xl:px-16 min-[1920px]:px-20 py-4 sm:py-7 xl:py-8 min-[1920px]:py-10 text-black font-black text-base sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 min-[1920px]:w-10 min-[1920px]:h-10 group-hover:rotate-12 transition-transform flex-shrink-0" />
                    {whatsappPhone && <span className="hidden sm:inline">+{whatsappPhone}</span>}
                    <span className="sm:hidden">LLAMAR</span>
                  </div>
                </motion.a>
                
                <motion.a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto max-w-full flex items-center justify-center gap-2 sm:gap-3 xl:gap-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-12 xl:px-16 min-[1920px]:px-20 py-4 sm:py-7 xl:py-8 min-[1920px]:py-10 rounded-xl sm:rounded-2xl font-black text-base sm:text-xl md:text-2xl xl:text-3xl min-[1920px]:text-4xl hover:shadow-2xl hover:shadow-green-500/50 transition-all min-h-[48px] touch-manipulation"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 min-[1920px]:w-10 min-[1920px]:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WHATSAPP
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - FULL RESPONSIVE */}
      <footer className="bg-[#0d2159] border-t border-white/10 text-white py-8 sm:py-12 xl:py-16 min-[1920px]:py-20 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-[800px]:px-6 xl:px-8 min-[1920px]:px-12 max-w-[100vw] min-w-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 min-[1920px]:w-16 min-[1920px]:h-16 flex-shrink-0 rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 xl:p-2 shadow-md">
                <Image
                  src="/imagenes/logo-duvan.png"
                  alt="Inversiones Duvan"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 min-w-0 leading-tight">
                <span className="text-[11px] sm:text-xl xl:text-2xl min-[1920px]:text-3xl font-black text-white whitespace-nowrap">INVERSIONES</span>
                <span className="text-[11px] sm:text-xl xl:text-2xl min-[1920px]:text-3xl font-black bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">DUVAN</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 xl:gap-8 min-[1920px]:gap-10 text-center sm:text-left flex-wrap justify-center">
              <a href={whatsappPhone ? `tel:+${whatsappPhone}` : "#"} className="flex items-center gap-2 xl:gap-3 text-gray-400 hover:text-white transition-colors min-h-[44px] justify-center sm:justify-start">
                <Phone className="w-4 h-4 xl:w-5 xl:h-5 min-[1920px]:w-6 min-[1920px]:h-6 flex-shrink-0" />
                {whatsappPhone && <span className="text-xs sm:text-base xl:text-lg min-[1920px]:text-xl">+{whatsappPhone}</span>}
              </a>
              <Link href="/galeria" className="flex items-center gap-2 xl:gap-3 text-gray-400 hover:text-white transition-colors min-h-[44px] justify-center sm:justify-start">
                <ChefHat className="w-4 h-4 xl:w-5 xl:h-5 min-[1920px]:w-6 min-[1920px]:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-base xl:text-lg min-[1920px]:text-xl">Galería</span>
              </Link>
              <div className="flex items-center gap-2 xl:gap-3 text-gray-400 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 xl:w-5 xl:h-5 min-[1920px]:w-6 min-[1920px]:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-base xl:text-lg min-[1920px]:text-xl">Gran Caracas, Venezuela</span>
              </div>
              <Link href="/catalogo" className="flex items-center gap-2 xl:gap-3 text-gray-400 hover:text-white transition-colors min-h-[44px] justify-center sm:justify-start">
                <Maximize2 className="w-4 h-4 xl:w-5 xl:h-5 min-[1920px]:w-6 min-[1920px]:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-base xl:text-lg min-[1920px]:text-xl">Catálogo</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 sm:mt-8 xl:mt-10 min-[1920px]:mt-12 pt-6 sm:pt-8 xl:pt-10 min-[1920px]:pt-12 text-center text-gray-400 text-xs sm:text-base xl:text-lg min-[1920px]:text-xl break-words px-2">
            <p>© 2026 Inversiones Duvan. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
// Actualización diseño Duvan 2026