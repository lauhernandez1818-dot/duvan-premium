'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  Mail,
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
  MessageCircleIcon
} from 'lucide-react';
import CalculadoraPedido from '@/src/components/CalculadoraPedido';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

const WHATSAPP_MSG = 'Hola, me interesa solicitar una cotización de almuerzos corporativos.';
const WHATSAPP_URL = `https://wa.me/584241520170?text=${encodeURIComponent(WHATSAPP_MSG)}`;

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

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

      {/* Hero Section - ESPECTACULAR */}
      <section ref={heroRef} className="relative overflow-hidden bg-black min-h-screen flex items-center">
        {/* Background - estático en móvil para evitar lag, animación suave en desktop */}
        <div className="absolute inset-0">
          {/* Orbes de gradiente - sin animación pesada (reduce lag en teléfono) */}
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-blue-600/40 rounded-full blur-3xl" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        {/* Floating navigation - animación rápida para menos lag */}
        <motion.nav 
          initial={{ y: -20, opacity: 0.9 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute top-0 left-0 right-0 z-50"
        >
          <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-6 max-w-[100vw]">
            <div className="flex items-center justify-between gap-2 sm:gap-4 backdrop-blur-xl bg-gray-900/90 border border-white/10 rounded-full px-3 sm:px-6 md:px-8 py-2.5 sm:py-4 min-w-0">
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
                <a href="tel:+584241520170" className="flex items-center gap-1 sm:gap-2 text-white hover:text-white transition-colors min-h-[44px] items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="hidden sm:inline font-medium text-xs md:text-base">+58 424-1520170</span>
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
          className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 pt-28 sm:pt-40 pb-16 sm:pb-32 max-w-[100vw] min-w-0"
        >
          <div className="max-w-7xl mx-auto text-center min-w-0">
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
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tighter px-1 sm:px-2 break-words">
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
              
              {/* Tagline en dos líneas */}
              <div className="text-sm sm:text-2xl md:text-3xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4 break-words">
                <p className="mb-2">
                  De <span className="font-bold">3,000 a 6,000 comidas diarias</span> con 
                  <span className="text-red-500 font-bold"> excelencia garantizada</span>
                </p>
                <p>
                  en la Gran Caracas
                </p>
              </div>

              {/* Stats Bar - FULL RESPONSIVE - CON ANIMACIONES COMO EL RESTO */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-5xl mx-auto px-1 sm:px-2 w-full min-w-0">
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
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-6 group-hover:border-white/30 transition-all h-full min-w-0">
                      <stat.icon className="w-4 h-4 sm:w-8 sm:h-8 text-white mx-auto mb-1 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-lg sm:text-4xl md:text-5xl font-black text-white mb-0.5 sm:mb-1 truncate">{stat.value}</div>
                      <div className="text-[10px] sm:text-sm text-gray-400 font-medium truncate">{stat.label}</div>
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
                  href="tel:+584241520170"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto max-w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 min-h-[48px] flex items-center justify-center touch-manipulation"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 opacity-0 group-hover:opacity-30 rounded-xl sm:rounded-2xl blur-xl transition-all duration-500" />
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 animate-gradient bg-[length:200%_auto]" />
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-10 py-3 sm:py-6 text-white font-black text-sm sm:text-xl">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    LLAMAR AHORA
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </motion.a>
                
                <motion.a 
                  href="#cotizacion"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto max-w-full flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-4 sm:px-10 py-3 sm:py-6 rounded-xl sm:rounded-2xl font-black text-sm sm:text-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
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
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-zinc-900 via-gray-800 to-zinc-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-[100vw] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header - FULL RESPONSIVE */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-xl border border-red-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span className="text-white font-bold text-sm sm:text-base">QUIÉNES SOMOS</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-2 sm:px-4 break-words">
                SOBRE <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">NOSOTROS</span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
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
                    <span className="relative">VER GALERÍA COMPLETA</span>
                    <ChevronRight className="relative w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
                <p className="text-gray-400 mt-4 text-sm sm:text-base">
                  Conoce nuestras instalaciones y equipo profesional
                </p>
              </div>
            </motion.div>

            {/* Beneficios Cards - FULL RESPONSIVE */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[
                { 
                  icon: Truck, 
                  title: 'Logística 360°',
                  description: 'Cobertura total en toda la Gran Caracas con transporte especializado',
                  color: 'from-red-600 to-red-500',
                  iconBg: 'bg-red-600'
                },
                { 
                  icon: Shield, 
                  title: 'Certificación Total',
                  description: 'Cumplimos con todas las normas sanitarias y de seguridad alimentaria',
                  color: 'from-blue-600 to-blue-500',
                  iconBg: 'bg-blue-600'
                },
                { 
                  icon: Clock, 
                  title: 'Puntualidad Extrema',
                  description: '15 años cumpliendo horarios sin excusas. Tu equipo come a tiempo, siempre',
                  color: 'from-gray-600 to-gray-700',
                  iconBg: 'bg-gray-600'
                },
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

            {/* Texto descriptivo - FULL RESPONSIVE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 rounded-2xl sm:rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16">
                <div className="max-w-4xl mx-auto">
                  <p className="text-base sm:text-2xl md:text-3xl leading-relaxed text-gray-300 mb-6 sm:mb-8">
                    Somos <span className="text-white font-bold">líderes en alimentación corporativa</span> en la Gran Caracas. 
                    Nuestra <span className="text-red-500 font-bold">infraestructura de clase mundial</span> y compromiso con la 
                    excelencia nos permite servir entre <span className="text-blue-500 font-bold">3,000 y 6,000 comidas diarias</span>, 
                    manteniendo siempre los más altos estándares de calidad, frescura y puntualidad.
                  </p>
                  <p className="text-sm sm:text-xl text-gray-400 leading-relaxed">
                    Detrás de cada comida hay un equipo apasionado por la excelencia. Con más de 15 años 
                    de experiencia, nuestros fundadores y su equipo se dedican diariamente a transformar 
                    la alimentación corporativa en una experiencia memorable.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Por Qué Nos Eligen - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-[100vw] min-w-0">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-2 sm:px-4 break-words">
                ¿POR QUÉ NOS <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">ELIGEN?</span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
                Empresas líderes confían en nosotros día a día
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  number: '01',
                  icon: TrendingUp,
                  title: 'Capacidad Comprobada',
                  description: '3,000 a 6,000 comidas diarias con la misma calidad desde el primer hasta el último plato',
                  gradient: 'from-red-600 via-red-500 to-orange-500',
                  shadowColor: 'shadow-red-600/50',
                },
                {
                  number: '02',
                  icon: Clock,
                  title: 'Puntualidad Total',
                  description: '15 años cumpliendo horarios de entrega sin excusas. Tu equipo come a tiempo, siempre',
                  gradient: 'from-blue-600 via-blue-500 to-cyan-500',
                  shadowColor: 'shadow-blue-600/50',
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
                  <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 group-hover:border-white/30 transition-all h-full overflow-hidden">
                    {/* Background number */}
                    <div className="absolute top-4 right-4 text-[80px] sm:text-[120px] font-black text-white/5 leading-none">
                      {benefit.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${benefit.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center ${benefit.shadowColor} group-hover:shadow-2xl transition-all group-hover:scale-110 group-hover:rotate-6`}>
                        <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">{benefit.description}</p>
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

      {/* Testimonios - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-zinc-900 via-gray-800 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 px-2 sm:px-4 break-words">
                CLIENTES <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">SATISFECHOS</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
                  <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 group-hover:border-white/30 transition-all h-full">
                    <div className="flex gap-1 mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="font-bold text-white text-base sm:text-lg">{testimonial.author}</p>
                      <p className="text-sm sm:text-base text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-2 sm:px-4 break-words">
                  ENCUENTRA TU <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">PLAN IDEAL</span>
                </h2>
                <p className="text-base sm:text-xl md:text-2xl text-gray-400 px-4">
                  Descubre qué plan se adapta mejor a tu empresa
                </p>
              </div>
              <CalculadoraPedido />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-zinc-900 via-gray-800 to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-2 sm:px-4 break-words">
                CÓMO <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">TRABAJAMOS</span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gray-400 px-4">Proceso simple y transparente</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
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
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${step.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center font-black text-black shadow-lg border-2 sm:border-4 border-black text-sm sm:text-base">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - FULL RESPONSIVE */}
      <section className="py-16 sm:py-24 md:py-32 bg-zinc-900 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[100vw] min-w-0">
          <div className="max-w-4xl mx-auto min-w-0">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 px-2 sm:px-4 break-words">
                PREGUNTAS <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">FRECUENTES</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
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
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 group-hover:border-white/30 transition-all">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{faq.q}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contacto - FULL RESPONSIVE */}
      <section id="cotizacion" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-red-600 via-blue-600 to-zinc-900 relative overflow-hidden">
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
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-[100vw] min-w-0">
          <div className="max-w-5xl mx-auto text-center min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 break-words px-2">
                <span className="block">SOLICITA UNA</span>
                <span className="block">COTIZACIÓN</span>
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 px-2 sm:px-4">
                Respuesta garantizada en menos de 24 horas
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12 w-full min-w-0">
                {[
                  { icon: CheckCircle2, text: 'Respuesta en 24 horas' },
                  { icon: Users, text: 'Asesoría personalizada' },
                  { icon: Shield, text: 'Sin compromiso' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 min-w-0"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span className="text-white font-bold text-xs sm:text-base md:text-lg truncate">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-[100vw] min-w-0">
                <motion.a 
                  href="tel:+584241520170"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full sm:w-auto max-w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl min-h-[48px] flex items-center justify-center touch-manipulation"
                >
                  <div className="absolute inset-0 bg-white" />
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-12 py-4 sm:py-7 text-black font-black text-base sm:text-xl md:text-2xl">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform flex-shrink-0" />
                    <span className="hidden sm:inline">+58 424-1520170</span>
                    <span className="sm:hidden">LLAMAR</span>
                  </div>
                </motion.a>
                
                <motion.a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto max-w-full flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-12 py-4 sm:py-7 rounded-xl sm:rounded-2xl font-black text-base sm:text-xl md:text-2xl hover:shadow-2xl hover:shadow-green-500/50 transition-all min-h-[48px] touch-manipulation"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
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
      <footer className="bg-zinc-900 border-t border-white/10 text-white py-8 sm:py-12 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[100vw] min-w-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg sm:rounded-xl bg-white p-1 sm:p-1.5 shadow-md">
                <Image
                  src="/imagenes/logo-duvan.png"
                  alt="Inversiones Duvan"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1 min-w-0 leading-tight">
                <span className="text-[11px] sm:text-xl font-black text-white whitespace-nowrap">INVERSIONES</span>
                <span className="text-[11px] sm:text-xl font-black bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">DUVAN</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left flex-wrap justify-center">
              <a href="tel:+584241520170" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors min-h-[44px] justify-center sm:justify-start">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-base">+58 424-1520170</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-base">Gran Caracas, Venezuela</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-base break-words px-2">
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
