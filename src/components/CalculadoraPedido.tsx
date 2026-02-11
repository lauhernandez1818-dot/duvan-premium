'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface Plan {
  name: string;
  minPersonas: number;
  maxPersonas: number;
  precioReferencia: string;
  beneficios: string[];
  gradient: string;
  iconColor: string;
}

const planes: Plan[] = [
  {
    name: 'Plan Esencial',
    minPersonas: 50,
    maxPersonas: 150,
    precioReferencia: 'Desde $8/persona',
    beneficios: [
      'Menú diario balanceado',
      'Entrega puntual garantizada',
      'Vajilla desechable premium incluida',
    ],
    gradient: 'from-red-600 to-red-500',
    iconColor: 'text-red-400',
  },
  {
    name: 'Plan Corporativo',
    minPersonas: 151,
    maxPersonas: 500,
    precioReferencia: 'Desde $7/persona',
    beneficios: [
      'Menú personalizado según preferencias',
      'Gestor de cuenta dedicado',
      'Opciones vegetarianas y especiales',
      'Servicio de montaje opcional',
    ],
    gradient: 'from-blue-600 to-blue-500',
    iconColor: 'text-blue-400',
  },
  {
    name: 'Plan Grande',
    minPersonas: 501,
    maxPersonas: 2000,
    precioReferencia: 'Desde $6.50/persona',
    beneficios: [
      'Menús premium personalizados',
      'Múltiples puntos de entrega',
      'Gestor de cuenta prioritario',
      'Reportes mensuales',
    ],
    gradient: 'from-amber-600 to-orange-500',
    iconColor: 'text-amber-400',
  },
  {
    name: 'Plan Enterprise',
    minPersonas: 2001,
    maxPersonas: 6000,
    precioReferencia: 'Cotización personalizada',
    beneficios: [
      'Menús premium totalmente personalizados',
      'Servicio VIP con meseros profesionales',
      'Múltiples puntos de entrega',
      'Atención prioritaria 24/7',
      'Reportes mensuales detallados',
    ],
    gradient: 'from-gray-600 to-gray-800',
    iconColor: 'text-gray-400',
  },
];

export default function CalculadoraPedido() {
  const [cantidadPersonas, setCantidadPersonas] = useState(200);

  const planRecomendado = planes.find(
    (plan) => cantidadPersonas >= plan.minPersonas && cantidadPersonas <= plan.maxPersonas
  );

  const porcentaje = ((cantidadPersonas - 50) / 5950) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-gray-800 via-zinc-900 to-gray-800 p-4 sm:p-6 md:p-8 min-[800px]:p-6 xl:p-10 min-[1920px]:p-12 shadow-2xl border border-white/10 w-full max-w-[100%] min-w-0"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-red-600/20 rounded-full blur-3xl"
          />
      </div>
      
      <div className="relative z-10">
        {/* Header - FULL RESPONSIVE */}
        <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8 min-w-0">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-2 sm:p-4 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg sm:rounded-2xl shadow-lg flex-shrink-0"
          >
            <Calculator className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-[1920px]:text-6xl font-black text-white truncate sm:whitespace-normal">
              CALCULADORA DE PLAN
            </h3>
            <p className="text-gray-400 text-[10px] sm:text-sm md:text-base xl:text-lg min-[1920px]:text-xl mt-1 font-medium truncate sm:whitespace-normal">
              Descubre tu plan ideal en segundos
            </p>
          </div>
        </div>

        {/* Slider Section - FULL RESPONSIVE */}
        <div className="mb-6 sm:mb-8 xl:mb-10 min-[1920px]:mb-12 bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 xl:p-10 min-[1920px]:p-12 border border-white/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 xl:mb-8 gap-3 xl:gap-4">
            <label className="text-base sm:text-lg md:text-xl xl:text-2xl min-[1920px]:text-3xl font-bold text-white flex items-center gap-2 xl:gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 min-[1920px]:w-8 min-[1920px]:h-8 text-red-600" />
              <span className="text-sm sm:text-base md:text-lg xl:text-xl min-[1920px]:text-2xl">Cantidad de Personas</span>
            </label>
            <motion.span 
              key={cantidadPersonas}
              initial={{ scale: 1.2, color: '#dc2626' }}
              animate={{ scale: 1, color: '#ffffff' }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl min-[1920px]:text-8xl font-black bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent"
            >
              {cantidadPersonas}
            </motion.span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="50"
              max="6000"
              step="50"
              value={cantidadPersonas}
              onChange={(e) => setCantidadPersonas(Number(e.target.value))}
              className="w-full h-4 bg-gray-800 rounded-full appearance-none cursor-pointer slider-thumb relative z-10"
              style={{
                background: `linear-gradient(to right, 
                  rgb(251 113 133) 0%, 
                  rgb(96 165 250) ${porcentaje}%, 
                  rgb(31 41 55) ${porcentaje}%, 
                  rgb(31 41 55) 100%)`,
              }}
            />
            {/* Markers */}
            <div className="absolute top-8 left-0 right-0 flex justify-between px-1">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-gray-600" />
                <span className="text-xs text-gray-500 mt-1">50</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-gray-600" />
                <span className="text-xs text-gray-500 mt-1">500</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-gray-600" />
                <span className="text-xs text-gray-500 mt-1">2K</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-gray-600" />
                <span className="text-xs text-gray-500 mt-1">6K</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-8 sm:mt-10 text-xs sm:text-sm text-gray-400 font-medium">
            <span>Mínimo</span>
            <span>Medio</span>
            <span>Máximo</span>
          </div>
        </div>

        {/* Todos los planes - clicables para cambiar sin usar la barra */}
        <div className="grid grid-cols-2 min-[800px]:grid-cols-4 gap-2 sm:gap-4 min-[800px]:gap-4 xl:gap-6 min-[1920px]:gap-8 mb-4 sm:mb-6 xl:mb-8 min-[1920px]:mb-10 min-w-0 w-full">
          {planes.map((plan, index) => {
            const isRecomendado = plan === planRecomendado;
            const personaRepresentativa = Math.min(
              plan.minPersonas + Math.floor((plan.maxPersonas - plan.minPersonas) / 2),
              plan.maxPersonas
            );
            return (
              <motion.button
                type="button"
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCantidadPersonas(personaRepresentativa)}
                className={`relative rounded-lg sm:rounded-2xl p-1.5 sm:p-4 border-2 transition-all min-w-0 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${
                  isRecomendado 
                    ? 'border-white bg-white/10 scale-[1.02] sm:scale-105' 
                    : 'border-white/10 bg-white/5 opacity-70 hover:opacity-100 hover:border-white/30'
                }`}
              >
                {isRecomendado && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-to-r from-red-600 to-blue-600 text-white text-[9px] sm:text-xs font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1 shadow-lg"
                  >
                    <Zap className="w-2 h-2 sm:w-3 sm:h-3" />
                    <span className="hidden sm:inline">RECOMENDADO</span>
                    <span className="sm:hidden">TOP</span>
                  </motion.div>
                )}
                <h4 className="font-black text-white text-[9px] sm:text-sm xl:text-base min-[1920px]:text-lg mb-0.5 sm:mb-1 xl:mb-2 truncate">{plan.name}</h4>
                <p className="text-[8px] sm:text-xs text-gray-400 truncate">{plan.minPersonas}-{plan.maxPersonas}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Plan Recomendado - DESTACADO */}
        {planRecomendado && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${planRecomendado.gradient} opacity-30 rounded-2xl sm:rounded-3xl blur-xl`} />
            
            <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 border-2 border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 xl:p-10 min-[1920px]:p-12">
              <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 mb-4 sm:mb-6 xl:mb-8">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 min-[1920px]:w-10 min-[1920px]:h-10 text-green-400" />
                <h4 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl min-[1920px]:text-5xl font-black text-white">
                  TU PLAN IDEAL
                </h4>
              </div>
              
              <div className={`bg-gradient-to-r ${planRecomendado.gradient} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 xl:p-10 min-[1920px]:p-12 mb-4 sm:mb-6 xl:mb-8 shadow-2xl`}>
                <h5 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl min-[1920px]:text-6xl font-black text-white mb-2 sm:mb-3 xl:mb-4">
                  {planRecomendado.name}
                </h5>
                <p className="text-white/90 text-xl sm:text-2xl md:text-3xl xl:text-4xl min-[1920px]:text-5xl font-black mb-2 xl:mb-3">
                  {planRecomendado.precioReferencia}
                </p>
                <p className="text-white/70 text-xs sm:text-sm md:text-base xl:text-lg min-[1920px]:text-xl font-medium">
                  Perfecto para {planRecomendado.minPersonas} - {planRecomendado.maxPersonas} personas
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 xl:space-y-5 min-[1920px]:space-y-6">
                <h6 className="font-black text-white text-base sm:text-lg md:text-xl xl:text-2xl min-[1920px]:text-3xl mb-3 sm:mb-4 xl:mb-5 flex items-center gap-2 xl:gap-3">
                  <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 min-[1920px]:w-7 min-[1920px]:h-7 text-green-400" />
                  BENEFICIOS INCLUIDOS
                </h6>
                {planRecomendado.beneficios.map((beneficio, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3 xl:gap-4 bg-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 xl:p-4 hover:bg-white/10 transition-all"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 min-[1920px]:w-8 min-[1920px]:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 xl:w-5 xl:h-5 min-[1920px]:w-6 min-[1920px]:h-6 text-white" />
                    </div>
                    <span className="text-gray-200 text-xs sm:text-sm md:text-base xl:text-lg min-[1920px]:text-xl font-medium leading-relaxed">{beneficio}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={`https://wa.me/584241520170?text=${encodeURIComponent(`Hola, me interesa solicitar cotización para el ${planRecomendado.name} (${planRecomendado.minPersonas}-${planRecomendado.maxPersonas} personas).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 sm:mt-8 xl:mt-10 min-[1920px]:mt-12 bg-gradient-to-r from-red-600 to-blue-600 text-white font-black py-4 sm:py-5 xl:py-6 min-[1920px]:py-8 px-4 sm:px-6 xl:px-8 min-[1920px]:px-10 rounded-xl sm:rounded-2xl hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 text-sm sm:text-base md:text-lg xl:text-xl min-[1920px]:text-2xl flex items-center justify-center touch-manipulation"
              >
                <span className="hidden sm:inline">SOLICITAR {planRecomendado.name.toUpperCase()}</span>
                <span className="sm:hidden">SOLICITAR PLAN</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dc2626, #2563eb);
          cursor: pointer;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.6);
          transition: all 0.2s ease;
          border: 3px solid white;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 0 25px rgba(220, 38, 38, 0.8);
        }
        .slider-thumb::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dc2626, #2563eb);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.6);
          transition: all 0.2s ease;
        }
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 0 25px rgba(220, 38, 38, 0.8);
        }
      `}</style>
    </motion.div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
