/* eslint-disable @next/next/no-img-element */
import SplashScreen from "./SplashScreen";

const WHATSAPP = "https://wa.me/573183890049";
const IMG = "https://images.squarespace-cdn.com/content/6a57fa17cd051c4179352331";

const nav = [
  { label: "Inicio", href: "#", active: true },
  { label: "Colecciones", href: "#collections" },
  { label: "Servicios", href: "#servicios" },
];

const pillars = [
  {
    icon: "location_on",
    title: "#1 Destino",
    color: "primary",
    text: "Emergente en Sudamérica para el turismo de eventos y convenciones corporativas.",
  },
  {
    icon: "public",
    title: "Global Reach",
    color: "tertiary",
    text: "Servicios con estándares internacionales de calidad y logística impecable.",
  },
  {
    icon: "volunteer_activism",
    title: "Calidez Real",
    color: "secondary",
    text: "La energía de nuestra gente se refleja en cada detalle de nuestras decoraciones.",
  },
];

// Clases escritas completas para que Tailwind las detecte
const pillarStyles: Record<string, { box: string; icon: string; title: string }> = {
  primary: { box: "bg-primary/10", icon: "text-primary", title: "text-primary" },
  tertiary: { box: "bg-tertiary/10", icon: "text-tertiary", title: "text-tertiary" },
  secondary: { box: "bg-secondary/10", icon: "text-secondary", title: "text-secondary" },
};

const collections = [
  {
    title: "Cumpleaños",
    badge: "Espacio dedicado",
    text: "Disfruta de un espacio dedicado completamente para ti.",
    img: `${IMG}/dc7adc6a-38b7-4c24-a793-74eff9b27d4f/cumplea%C3%B1osBannerImg.JPEG?content-type=image%2Fjpeg`,
    gradient: "from-primary/90",
    badgeBg: "bg-on-tertiary-container/30",
  },
  {
    title: "Matrimonios",
    badge: "Elegancia Premium",
    text: "Espacio elegante, exclusivo y cuidadosamente diseñado.",
    img: `${IMG}/a8325107-ce83-4b2a-9ab7-eb316f825551/matrimoniosBannerImg.JPEG?content-type=image%2Fjpeg`,
    gradient: "from-on-tertiary-fixed-variant/90",
    badgeBg: "bg-tertiary/30",
  },
  {
    title: "Infantiles",
    badge: "Diversión",
    text: "Decoración infantil colorida, creativa y llena de detalles encantadores.",
    img: `${IMG}/06614f6c-2e24-4c91-b076-a2b19604745e/infantilesBannerImg.JPEG?content-type=image%2Fjpeg`,
    gradient: "from-secondary/90",
    badgeBg: "bg-white/20",
  },
];

const services = [
  {
    icon: "business",
    title: "Decoración Corporativa",
    text: "Lanzamientos de marca, galas y convenciones con impacto visual garantizado.",
  },
  {
    icon: "self_improvement",
    title: "Eventos de Bienestar",
    text: "Retiros y encuentros de mindfulness con atmósferas serenas y equilibradas.",
  },
  {
    icon: "celebration",
    title: "Celebraciones Sociales",
    text: "Bodas, aniversarios y fiestas temáticas personalizadas hasta el último detalle.",
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/decorpartycali" },
  { label: "Facebook", href: "https://www.facebook.com/Decorpartycal/" },
  { label: "TikTok", href: "https://www.tiktok.com/@decorpartycali" },
];

type IconProps = { name: string; className?: string; style?: React.CSSProperties };

const Icon = ({ name, className = "", style }: IconProps) => (
  <span className={`material-symbols-outlined ${className}`} style={style}>
    {name}
  </span>
);

function NavBar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-[0_8px_32px_0_rgba(255,27,141,0.1)]">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-pink-600 tracking-tighter font-['Epilogue']">
          Decorparty Cali
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {nav.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={
                active
                  ? "text-pink-600 font-bold border-b-2 border-pink-600 transition-all duration-300 hover:scale-105 font-['Epilogue'] tracking-tight"
                  : "text-slate-700 font-medium hover:text-pink-500 transition-all duration-300 hover:scale-105 font-['Epilogue'] tracking-tight"
              }
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="material-symbols-outlined text-pink-600">celebration</button>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Cotiza tu evento
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow -z-10" />
      <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-variant text-primary font-label-bold">
            <Icon name="star" className="mr-2 text-[18px]" />
            Destino Mundial de Eventos
          </div>
          <h2 className="font-display-xl text-on-background">
            Transformamos tus eventos en{" "}
            <span className="text-primary">experiencias de clase mundial</span> en la ciudad más
            cálida de Colombia.
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Cali se posiciona como el nuevo epicentro del turismo de reuniones. Combinamos la
            calidez del Valle con un estándar internacional de elegancia y festividad.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all inline-flex items-center"
            >
              Cotiza tu evento
              <Icon name="arrow_forward" className="ml-2" />
            </a>
            <a
              href="https://www.flowcode.com/page/decorpartycali"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-label-bold text-lg hover:bg-primary/5 transition-all"
            >
              Explorar Portafolio
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img
              alt="Elegant Balloon Decor"
              className="w-full h-full object-cover"
              src={`${IMG}/6022306a-6c9f-4274-9b01-7ec144b0fd43/bannerEntradaImg.JPEG?content-type=image%2Fjpeg`}
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-3xl overflow-hidden shadow-xl border-8 border-white transform -rotate-6 hidden md:block">
            <img
              alt="Platos"
              className="w-full h-full object-cover"
              src={`${IMG}/a5a3fd92-9b4b-4778-919d-2a9aa5411d98/platosInicioImg.JPEG?content-type=image%2Fjpeg`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCali() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="font-headline-lg text-on-background">Cali: El Corazón de los Eventos</h3>
          <p className="text-body-md text-on-surface-variant">
            La capital mundial de la salsa se transforma hoy en el destino preferido para eventos
            internacionales gracias a su infraestructura y hospitalidad inigualable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon, title, color, text }) => {
            const s = pillarStyles[color];
            return (
              <div
                key={title}
                className="glass-card p-10 rounded-[32px] text-center space-y-4 hover:translate-y-[-8px] transition-all"
              >
                <div
                  className={`w-16 h-16 ${s.box} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon name={icon} className={`${s.icon} text-3xl`} />
                </div>
                <h4 className={`font-headline-md ${s.title}`}>{title}</h4>
                <p className="text-body-md">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="py-section-gap" id="collections">
      <div className="mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-label-bold tracking-widest uppercase">
              Nuestras Colecciones
            </span>
            <h3 className="font-headline-lg text-on-background">Inspiración que cuenta historias</h3>
          </div>
          <p className="max-w-md text-on-surface-variant text-body-md">
            Convertimos tus celebraciones en recuerdos inolvidables. Tú solo disfruta, como el
            invitado de honor de tu propia fiesta
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map(({ title, badge, text, img, gradient, badgeBg }) => (
            <div key={title} className="group relative overflow-hidden rounded-[32px] aspect-[3/4]">
              <img
                alt={title}
                src={img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-linear-to-t ${gradient} via-transparent to-transparent`} />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div
                  className={`${badgeBg} backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block`}
                >
                  {badge}
                </div>
                <h4 className="font-headline-md mb-2">{title}</h4>
                <p className="text-sm opacity-90 line-clamp-2">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const gallery = [
    { alt: "Rojo elegante", h: "h-64", file: "7914ec6e-07d6-4705-af77-90771ffa8cd5/rojoEleganteImg" },
    { alt: "Blanco libre", h: "h-48", file: "3485ad70-5183-4fc9-b259-994f0b53562c/blancoLibreImg" },
    { alt: "Oscuro", h: "h-48", file: "10bca00b-1563-4a1e-ac13-38073c6b19a2/oscuroImg" },
    { alt: "Chelsea Pool Party", h: "h-64", file: "a8530755-2480-4ca5-9d4b-d06eabfed623/chelseaPoolpartyImg" },
  ];
  const photo = ({ alt, h, file }: { alt: string; h: string; file: string }) => (
    <img
      key={alt}
      alt={alt}
      className={`rounded-2xl w-full ${h} object-cover`}
      src={`${IMG}/${file}.JPEG?content-type=image%2Fjpeg`}
    />
  );

  return (
    <section className="py-section-gap bg-on-background text-white" id="servicios">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="font-headline-lg leading-tight">
              Soluciones integrales para cada tipo de{" "}
              <span className="text-primary-fixed-dim">celebración.</span>
            </h3>
            <div className="space-y-6">
              {services.map(({ icon, title, text }) => (
                <div key={title} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-primary-fixed-dim flex items-center justify-center">
                    <Icon name={icon} className="text-primary-fixed-dim" />
                  </div>
                  <div>
                    <h5 className="text-body-lg font-bold mb-1">{title}</h5>
                    <p className="text-on-secondary-fixed-dim opacity-70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-label-bold hover:scale-105 transition-all"
            >
              Hablar con un Planeador
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">{gallery.slice(0, 2).map(photo)}</div>
            <div className="space-y-4 pt-8">{gallery.slice(2).map(photo)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-section-gap overflow-hidden">
      <div className="mx-auto px-6">
        <div className="bg-surface-container-high rounded-[48px] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-headline-lg text-on-background">
                Tu confianza es nuestro mayor activo
              </h3>
              <p className="text-body-lg text-on-surface-variant">
                Contamos con el respaldo de más de 500 eventos exitosos en la región, operando con
                los estándares de seguridad y logística más exigentes de la industria.
              </p>
              <div className="flex gap-8 border-t border-outline-variant pt-8 mt-8">
                {[
                  { n: "500+", l: "Eventos" },
                  { n: "100%", l: "Garantía" },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <div className="text-4xl font-bold text-primary">{n}</div>
                    <div className="text-sm font-label-bold text-on-surface-variant uppercase">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-8 rounded-[32px] shadow-2xl shadow-primary/10 max-w-sm rotate-2">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-tertiary-container fill"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    />
                  ))}
                </div>
                <p className="text-body-md italic mb-6">
                  &quot;Me encanta en excelente servicio por parte de Yuliana, su agilidad para dar
                  respuesta y entender la necesidad es excelente. Y cuando ves el resultado es más
                  de lo que esperabas.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden" />
                  <div className="font-bold">Erika Gomez</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full rounded-t-[32px] bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-xl font-bold text-slate-900 dark:text-white font-['Epilogue']">
            Decorparty Cali
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-['Epilogue'] text-sm leading-relaxed">
            © 2024 Decorparty Cali. Elevando cada celebración con la energía de nuestra tierra.
          </p>
          <div className="flex gap-4">
            <a className="text-pink-600 hover:opacity-80 transition-opacity" href="#">
              <Icon name="social_leaderboard" />
            </a>
            <a className="text-pink-600 hover:opacity-80 transition-opacity" href="#">
              <Icon name="photo_camera" />
            </a>
          </div>
        </div>
        <div>
          <h6 className="font-bold mb-4 font-['Epilogue'] text-slate-900 dark:text-white">
            Redes Sociales
          </h6>
          <ul className="space-y-2 text-sm">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a className="text-slate-500 hover:text-teal-500 transition-colors" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
    >
      <Icon name="chat" className="text-3xl" />
      <span className="absolute right-full mr-4 bg-white text-on-background px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¡Hablemos de tu evento!
      </span>
    </a>
  );
}

export default function DecorpartyCali() {
  return (
    <>
      <SplashScreen />
      <NavBar />
      <Hero />
      <WhyCali />
      <Collections />
      <Services />
      <Trust />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
