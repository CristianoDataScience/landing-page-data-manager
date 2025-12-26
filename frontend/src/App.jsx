import React, { useState } from 'react';
import {
  Brain,
  Database,
  Cpu,
  LineChart,
  Rocket,
  Mail,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Data Manager Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-brand-dark hidden sm:inline">Data Manager</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-brand-medium font-medium transition-colors">Serviços</a>
            <a href="#about" className="text-gray-600 hover:text-brand-medium font-medium transition-colors">Sobre</a>
            <a href="#contact" className="bg-brand-medium text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-dark transition-all">
              Contato
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-600 font-medium">Serviços</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-600 font-medium">Sobre</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-brand-medium text-white px-6 py-2 rounded-full text-center font-semibold">
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-medium uppercase bg-brand-light/10 rounded-full">
              Inteligência de Dados e IA
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
              Transforme seus dados em <span className="text-brand-accent">Poder de Decisão</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Somos especialistas em criar soluções de Machine Learning, Engenharia de Dados e Inteligência Artificial para empresas que buscam inovação e escala.
            </p>

            {/* Added Specialized Tools */}
            <div className="mb-10">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Especialistas em:</p>
              <div className="flex items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png" alt="Databricks" className="h-6 w-auto" />
                </div>
                <div className="flex items-center gap-2 font-bold text-gray-600">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="h-8 w-auto" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-brand-medium text-white rounded-xl font-bold flex items-center gap-2 hover:bg-brand-dark shadow-lg shadow-brand-medium/20 transition-all">
                Iniciar Projeto <ChevronRight size={20} />
              </a>
              <a href="#services" className="px-8 py-4 bg-white border-2 border-brand-light/20 text-brand-dark rounded-xl font-bold hover:bg-gray-50 transition-all">
                Nossos Serviços
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-brand-light/20 to-brand-medium/20 rounded-3xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 blur-3xl bg-brand-accent/30 rounded-full animate-pulse transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 flex flex-col items-center">
                <Brain className="w-40 h-40 text-brand-medium animate-pulse" />
                <div className="absolute -inset-4 bg-brand-medium/5 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Consultoria Estratégica',
      desc: 'Análise completa do seu cenário de dados e roadmap para adoção de IA.',
      icon: <MessageSquare className="w-8 h-8 text-brand-medium" />
    },
    {
      title: 'Produtos com IA',
      desc: 'Desenvolvimento de dashboards, copilotos e sistemas inteligentes sob medida.',
      icon: <Rocket className="w-8 h-8 text-brand-medium" />
    },
    {
      title: 'Engenharia de Dados',
      desc: 'Pipelines eficientes, data lakes e infraestrutura de dados moderna.',
      icon: <Database className="w-8 h-8 text-brand-medium" />
    },
    {
      title: 'Machine Learning',
      desc: 'Modelos preditivos robustos para otimização de processos e vendas.',
      icon: <Brain className="w-8 h-8 text-brand-medium" />
    },
    {
      title: 'Deep Learning',
      desc: 'Soluções de visão computacional, NLP e redes neurais complexas.',
      icon: <Cpu className="w-8 h-8 text-brand-medium" />
    },
    {
      title: 'Data Science',
      desc: 'Extração de insights valiosos através de estatística avanzada e BI.',
      icon: <LineChart className="w-8 h-8 text-brand-medium" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Soluções Ponta a Ponta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Combinamos engenharia rigorosa com ciência de dados de ponta para impulsionar seu negócio.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-brand-medium/5 transition-all"
            >
              <div className="mb-6 p-4 bg-white rounded-xl w-fit shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
              <p className="text-gray-600 bg-transparent leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const resp = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (resp.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Pronto para o próximo nível?</h2>
            <p className="text-brand-light mb-12 text-lg">Deixe seus dados e entraremos em contato para uma conversa técnica sem compromisso.</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg"><Mail className="w-6 h-6" /></div>
                <span>contato@datamanager.company</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg"><CheckCircle2 className="w-6 h-6" /></div>
                <span>Consultoria Gratuita (30 min)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-brand-dark text-sm font-bold mb-2">Nome Completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-medium transition-all"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-brand-dark text-sm font-bold mb-2">E-mail Corporativo</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-medium transition-all"
                    placeholder="email@empresa.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-brand-dark text-sm font-bold mb-2">Empresa</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-medium transition-all"
                    placeholder="Nome da empresa"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-brand-dark text-sm font-bold mb-2">Como podemos ajudar?</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-medium transition-all"
                  placeholder="Descreva brevemente seu desafio..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-500' : 'bg-brand-accent hover:bg-orange-600'
                  } text-white`}
              >
                {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado!' : 'Solicitar Contato'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="py-12 border-t border-gray-100 text-center text-gray-500">
        <p>© 2025 Data Manager Company. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
