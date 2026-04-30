"use client";

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { TrendingDown, Users, Zap, Shield, Car, BatteryCharging, Radio, Wrench, ShieldCheck, PlayCircle, Info, Crown, BarChart3 } from "lucide-react";

// Data
const sovData = [
  { name: "Chevrolet", value: 36.8, color: "#facc15" },
  { name: "Renault", value: 22.1, color: "#f97316" },
  { name: "Nissan", value: 16.3, color: "#ef4444" },
  { name: "Ford", value: 7.2, color: "#3b82f6" },
  { name: "Kia", value: 5.9, color: "#10b981" },
  { name: "Volkswagen", value: 3.3, color: "#001e50" },
  { name: "Otros", value: 8.4, color: "#64748b" },
];

const vwBudgetData = [
  { name: "NUEVO POLO TRACK", porcentaje: 9.3 },
  { name: "T-CROSS / PROMOS", porcentaje: 8.1 },
  { name: "TAOS", porcentaje: 3.6 },
  { name: "NIVUS", porcentaje: 2.1 },
  { name: "OTROS / FRAGMENTADO", porcentaje: 76.9 },
];

const mediaData = [
  { name: "Radio", inversion: 102.5 },
  { name: "TV Cable", inversion: 59.6 },
  { name: "TV Abierta", inversion: 54.8 },
  { name: "Prensa", inversion: 49.2 },
];

const competitorsData = [
  {
    brand: "Kia",
    icon: <Shield className="w-8 h-8 text-emerald-400" />,
    concept: "Seguridad & Espacio",
    messages: ["Viaja Seguro", "6 Airbags", "Mujer se Mueve Amplio"],
    color: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    brand: "Chevrolet",
    icon: <Wrench className="w-8 h-8 text-yellow-400" />,
    concept: "Respaldo & Mantenimiento",
    messages: ["Cuidatón", "Compras $700.000 en Mantenimiento"],
    color: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    brand: "Renault",
    icon: <BatteryCharging className="w-8 h-8 text-orange-400" />,
    concept: "Electrificación & Vida",
    messages: ["Kwid E-Tech", "Hecha para los que hacen"],
    color: "bg-orange-500/10 border-orange-500/20",
  },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl">
        <p className="text-white font-medium">{`${payload[0].name}`}</p>
        <p className="text-slate-300">{`${payload[0].value}% Share of Voice`}</p>
      </div>
    );
  }
  return null;
};

const CustomBarTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl">
        <p className="text-white font-medium">{`${payload[0].payload.name}`}</p>
        <p className="text-red-400 font-bold">{`${payload[0].value}% del Presupuesto`}</p>
      </div>
    );
  }
  return null;
};

export default function VWDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white tracking-tighter">
              VW
            </div>
            <span className="font-semibold text-lg tracking-tight">Marketing Dashboard</span>
          </div>
          <div className="text-sm font-medium text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
            Clase de Marketing
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        {/* HERO SECTION */}
        <section className="pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              El Reto de <span className="text-blue-500">Volkswagen</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              David contra Goliat en la industria automotriz colombiana. ¿Cómo hacemos ruido cuando la competencia grita 10 veces más fuerte que nosotros?
            </p>
          </motion.div>
        </section>

        {/* SECTION 1: SOV */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-red-400" />
                <h2 className="text-3xl font-bold">1. El Problema Inicial</h2>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-300">Share of Voice (Participación)</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Volkswagen está compitiendo en un mercado dominado por gigantes de volumen. Con un presupuesto significativamente menor, la marca se ahoga en el ruido.
              </p>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Presupuesto VW vs Lider</p>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-bold text-white">$11 Mil Millones</span>
                  <span className="text-slate-500 mb-1">vs $124.8 Mil Millones (Chev)</span>
                </div>
              </div>
            </div>

            <div className="h-[400px] w-full bg-slate-900/50 rounded-3xl border border-slate-800 flex flex-col p-6">
              <h4 className="text-center font-medium text-slate-300 mb-2">Distribución de Inversión (Top Marcas)</h4>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sovData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {sovData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {sovData.map((s) => (
                  <div key={s.name} className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                    {s.name} ({s.value}%)
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* ANÁLISIS A LA MINUCIA 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Info className="w-5 h-5"/> Análisis a profundidad</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              El mercado automotriz analizado mueve aproximadamente <strong>$339.6 Mil Millones</strong>. En este océano de inversión masiva, Volkswagen (con $11 Mil Millones) cuenta con un <i>Share of Voice</i> del 3.3%. <br/><br/>
              <strong>La conclusión estratégica:</strong> Es imposible competir usando "fuerza bruta" (frecuencia y volumen). Si Volkswagen intenta gritar de la misma forma que lo hace Chevrolet, su voz se perderá en el ruido. Se requiere extrema eficiencia y diferenciación.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2: COMPETITION INSIGHT */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-bold">2. El Hallazgo Competitivo</h2>
            </div>
            <p className="text-xl text-slate-400">
              Al analizar los mensajes de las campañas, descubrimos el secreto: <strong className="text-white">No venden carros, venden beneficios.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitorsData.map((comp, i) => (
              <motion.div
                key={comp.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border ${comp.color} bg-slate-900/30 backdrop-blur-sm relative overflow-hidden group hover:bg-slate-900/50 transition-colors`}
              >
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {comp.icon}
                </div>
                <div className="mb-6">{comp.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{comp.brand}</h3>
                <p className="text-blue-400 font-medium mb-6">{comp.concept}</p>
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mensajes en pauta</p>
                  {comp.messages.map((msg, j) => (
                    <div key={j} className="text-sm text-slate-300 bg-slate-800/50 py-2 px-3 rounded-lg border border-slate-700/50">
                      "{msg}"
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* ANÁLISIS A LA MINUCIA 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Info className="w-5 h-5"/> Explicación Táctica</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Al auditar los mensajes de la competencia, encontramos un patrón claro. Marcas como Kia o Chevrolet no gastan su dinero explicando las especificaciones de sus motores; gastan millones consolidando <strong>Territorios Mentales</strong>.<br/><br/>
              Kia concentra su pauta en repetir conceptos como <i>"Amplitud"</i> y <i>"Airbags"</i>. Chevrolet creó una campaña sombrilla llamada <i>"Cuidatón"</i> enfocada en el mantenimiento. Esto crea atajos mentales: cuando el cliente piensa en "respaldo", piensa en Chevrolet, independientemente de qué carro compre.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: RADIOGRAFÍA DE MEDIOS */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-6 h-6 text-indigo-400" />
              <h2 className="text-3xl font-bold">3. Radiografía de Medios</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* REY ABSOLUTO */}
              <div className="lg:col-span-1 bg-gradient-to-br from-yellow-900/40 to-slate-900 border border-yellow-700/50 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Crown className="w-40 h-40 text-yellow-500" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-yellow-500">El Rey Absoluto</h3>
                </div>
                <h4 className="text-4xl font-extrabold text-white mb-2">Chevrolet</h4>
                <p className="text-yellow-200/80 mb-6 font-medium text-lg">$124.8 Mil Millones (36.8% SOV)</p>
                <div className="space-y-4">
                  <div className="bg-slate-950/50 p-4 rounded-xl border border-yellow-900/30">
                    <p className="text-sm text-slate-400 mb-1">Estrategia Dominante:</p>
                    <p className="text-slate-200 font-medium">Fuerza bruta y volumen masivo. Gastan <strong>$57.8 MM</strong> solo en Radio, monopolizando el medio más popular del país.</p>
                  </div>
                </div>
              </div>

              {/* GRAFICO DE MEDIOS */}
              <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 text-slate-300">¿Dónde gasta su dinero la competencia?</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mediaData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#1e293b" />
                      <XAxis type="number" stroke="#64748b" tickFormatter={(value) => `$${value}k`} />
                      <YAxis dataKey="name" type="category" stroke="#94a3b8" />
                      <RechartsTooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl">
                                <p className="text-white font-medium">{`${payload[0].payload.name}`}</p>
                                <p className="text-indigo-400 font-bold">{`$${payload[0].value} Mil Millones`}</p>
                              </div>
                            );
                          }
                          return null;
                        }} 
                        cursor={{fill: '#1e293b'}} 
                      />
                      <Bar dataKey="inversion" fill="#6366f1" radius={[0, 4, 4, 0]}>
                        {mediaData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#818cf8' : '#4f46e5'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <h4 className="font-bold text-orange-400 mb-2">Renault (El Rey del Cable)</h4>
              <p className="text-slate-300 text-sm">Prefieren medios visuales y segmentados. Su inversión principal está en TV por Suscripción ($32.3 MM), ideal para mostrar su enfoque ecológico y tecnológico (E-Tech).</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <h4 className="font-bold text-red-500 mb-2">Nissan (Alcance Nacional)</h4>
              <p className="text-slate-300 text-sm">Apuestan por la masividad visual. Lideran la inversión en Televisión Abierta ($20.9 MM) buscando llegar a todos los hogares colombianos de manera tradicional.</p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-400"><Info className="w-5 h-5"/> Implicación para Volkswagen</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              La Radio es un campo de batalla hiper-saturado. Si Volkswagen entra a pautar de forma tradicional en radio comercial, <strong>su inversión de $11 MM será ahogada instantáneamente por los $102 MM de la competencia</strong>. La táctica de VW no puede ser gritar más fuerte, sino usar el medio de una forma completamente diferente (Formatos inmersivos, ASMR, pausas tácticas) para generar contraste.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: VW PROBLEM */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 md:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">4. El Diagnóstico de VW</h2>
                <h3 className="text-xl font-medium text-red-400 mb-6">El Síndrome del Catálogo</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Si la competencia concentra, <strong className="text-white">Volkswagen fragmenta.</strong> Diluimos nuestro ya limitado presupuesto promocionando carros individuales (referencias) y tasas de interés en lugar de fortalecer la marca.
                </p>
                <div className="space-y-4">
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-4">
                    <Radio className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-200">El resultado en el consumidor:</h4>
                      <p className="text-sm text-red-300/80 mt-1">
                        Sabe qué carros vende VW, pero no sabe por qué debería elegirlos por encima de un Kia o un Chevrolet. No hay un "Beneficio VW".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={vwBudgetData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#1e293b" />
                    <XAxis type="number" stroke="#64748b" />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" width={150} tick={{ fontSize: 12 }} />
                    <RechartsTooltip content={<CustomBarTooltip />} cursor={{fill: '#1e293b'}} />
                    <Bar dataKey="porcentaje" fill="#e6192b" radius={[0, 4, 4, 0]}>
                      {vwBudgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === vwBudgetData.length - 1 ? '#334155' : '#e6192b'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* ANÁLISIS A LA MINUCIA 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-red-950/40 border border-red-900/50 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400"><Info className="w-5 h-5"/> El Síndrome de la Fragmentación</h3>
            <p className="text-lg text-red-200/90 leading-relaxed">
              En lugar de construir un "Territorio Mental" (como lo hace Kia), Volkswagen fragmenta su pequeña inversión del 3.3% anunciando su portafolio de vehículos como si fueran marcas independientes. Pautamos la camioneta familiar <strong>Taos</strong> con un mensaje, el crossover <strong>Nivus</strong> con otro, y el auto compacto <strong>Polo Track</strong> con otro completamente diferente. <br/><br/>
              Al pautar "nombres de modelos" en vez del "ADN de la marca", la gran mayoría de nuestros anuncios terminan siendo simples promociones de "Tasas y Precios". El resultado es fatal: el cliente memoriza el nombre de un carro, pero jamás entiende por qué la <i>marca</i> Volkswagen es superior.
            </p>
          </motion.div>
        </section>

        {/* SECTION 4: THE SOLUTION */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">5. La Solución Estratégica</h2>
              <p className="text-xl text-slate-400">
                Pasar de pautar referencias a pautar <strong className="text-white">"Por qué comprar un Volkswagen"</strong> mediante una estrategia sombrilla basada en 3 pilares.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Seguridad", icon: <ShieldCheck className="w-10 h-10 text-blue-500" />, desc: "Plataforma MQB y 6 airbags de serie. La tranquilidad de la ingeniería Alemana." },
              { title: "Desempeño", icon: <Zap className="w-10 h-10 text-yellow-500" />, desc: "Motores Turbo TSI. Más potencia, consumiendo menos combustible." },
              { title: "Conectividad", icon: <Car className="w-10 h-10 text-indigo-500" />, desc: "Sistema VW Play y habitabilidad superior. Tecnología que te mueve." }
            ].map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] text-center group hover:border-blue-500/50 transition-colors"
              >
                <div className="w-20 h-20 mx-auto bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 mb-6 group-hover:scale-110 transition-transform">
                  {pilar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pilar.title}</h3>
                <p className="text-slate-400">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ANÁLISIS A LA MINUCIA 4 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-400"><Info className="w-5 h-5"/> Arquitectura de Marca</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              La estrategia consiste en crear una <strong>Campaña Sombrilla</strong>. Al enfocarnos en pautar los 3 beneficios principales transversales a toda la marca (Seguridad, Motor TSI, Conectividad), consolidamos todo el presupuesto. <br/><br/>
              Si invertimos en un anuncio que demuestre que <i>"Todos los VW vienen con 6 airbags y motores Turbo"</i>, un solo anuncio impulsa simultáneamente las ventas de todos los modelos, dándole al consumidor una razón de peso ("Ingeniería Alemana") para elegirnos.
            </p>
          </motion.div>
        </section>

        {/* SECTION 5: CREATIVE CONCEPT */}
        <section className="pb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-800/50 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-8 inline-block">
                Concepto Creativo
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
                "La competencia te hace elegir. Nosotros lo pusimos todo en un solo lugar."
              </h2>
              
              <div className="bg-slate-950/80 p-8 rounded-3xl border border-slate-800 mb-8 backdrop-blur-md">
                <h3 className="text-xl font-semibold mb-6 flex items-center justify-center gap-2">
                  <PlayCircle className="text-blue-500" /> Pieza Hero: "Elige Todo"
                </h3>
                <p className="text-slate-300 text-left mb-4 font-mono text-sm">
                  <strong className="text-blue-400">[Locutor]:</strong> "Algunos buscan conectividad... otros buscan una fortaleza. Y están los que necesitan la potencia para llegar más lejos."
                </p>
                <p className="text-slate-300 text-left mb-4 font-mono text-sm">
                  <strong className="text-blue-400">[Locutor]:</strong> "No importa qué Volkswagen elijas. El beneficio siempre viene de serie."
                </p>
                <p className="text-slate-300 text-center mt-6 text-xl font-bold uppercase tracking-wider text-white">
                  MÁS SEGUROS. MÁS POTENTES. MÁS CONECTADOS.
                </p>
              </div>

              <p className="text-slate-400 mb-8">
                KPI: Posicionar a VW como la marca "Premium Accesible", logrando que la inversión conjunta beneficie a todo el portafolio en lugar de competir internamente.
              </p>
              
              {/* ANÁLISIS A LA MINUCIA 5 */}
              <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl text-left backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-400"><Info className="w-5 h-5"/> Ejecución y Producción</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Históricamente, el 54% de la inversión publicitaria de VW está en Radio, lo que suele derivar en la "típica cuña comercial rápida" gritando tasas de interés.<br/><br/>
                  La propuesta creativa cambia esto: utilizaremos un formato inmersivo (Sonido 3D, ASMR, silencio táctico) para romper la pauta masiva y transmitir un sentimiento verdaderamente premium, elevando la percepción de la marca sin necesidad de gastar en televisión costosa.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
