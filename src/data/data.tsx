import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webm';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfólio Visoteck-Vitor',
  description: 'Conheça a gente e crie seu website já!',
  twitterUrl: 'https://visoteckgo.vercel.app/',
  ogImageUrl: "https://i.imgur.com/CKaPl4m.jpeg",
  twitterImageUrl: "https://i.imgur.com/CKaPl4m.jpeg"
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Sobre',
  Contact: 'Contato',
  Portfolio: 'Portfolio',
  Resume: 'Curriculo',
  Skills: 'Habilidades',
  Stats: 'Estatísticas',
  Testimonials: 'Clientes',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Sou Vitor Mesquita.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Sou de Capanema no Pará e um <strong className="text-stone-100">Desenvolvedor Full Stack Javascript</strong>,
        trabalho em <strong className="text-stone-100">Sistemas Web </strong>que ajudam meus
        clientes a ter uma posição na web, portfolio, e-commerce, compatível com dispositivos móveis.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Posso ajudar seu negócio a crescer, seja ele do tamanho que for, porque{' '}
        <strong className="text-stone-100">qualquer um</strong>, pode ter uma presença digital com um pouco de vontade
        de <strong className="text-stone-100">inovar</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Currículo',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contate-me',
      primary: false,
    },
    {
      href: `https://curriculo-marina-md.my.canva.site/tabela-de-servi-os-visoteck`,
      text: 'Tabela de Preços',
      primary: false,
      Icon: CurrencyDollarIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Sou um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes. Com experiência prática em tecnologias como React, Next.js, Tailwind, CSS3 e Typescript, ofereço serviços de desenvolvimento de websites e aplicações web que atendem às necessidades específicas de cada cliente.`,
  aboutItems: [
    {label: 'Onde Fico', text: 'Capanema, PA', Icon: MapIcon},
    {label: 'Idade', text: `${new Date().getFullYear() - 2000}`, Icon: CalendarIcon},
    {label: 'Nacionalidade', text: 'Brasileiro', Icon: FlagIcon},
    {label: 'Formação', text: 'Faculdade Estácio de Castanhal/ FCAT', Icon: AcademicCapIcon},
    {label: 'Emprego', text: 'Freelancer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Idiomas',
    skills: [
      {
        name: 'Português',
        level: 10,
      },
      {
        name: 'Inglês',
        level: 6,
      },
    ],
  },
  {
    name: 'Desenvolvimento Front-End',
    skills: [
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'SQL',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Express',
        level: 7,
      },
      {
        name: 'Nest.js',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Portfolio Nase7e Produtora',
    description: 'Portfolio digital otimizado para SEO que divulga o trabalho de Nailson Bulhões',
    url: 'https://www.naseteprodutora.com.br/',
    image: porfolioImage1,
  },
  {
    title: 'Criação de Cartão de Visita',
    description: 'Criação de Mídia Social para o Instagram de Instituição Religiosa GEU',
    url: 'https://www.instagram.com/geu.grupo_espirita_uniao/',
    image: porfolioImage2,
  },
  {
    title: 'Criação de Mídia Social Para Campanha Política',
    description: 'Campanha para vereador de Afrânio Feijão',
    url: 'https://www.instagram.com/afranio.melo/',
    image: porfolioImage3,
  },
  {
    title: 'Catálogo Digital e Físico Fetiche',
    description: 'Catalogo em PDF para divulgação de produtos íntimos',
    url: 'https://drive.google.com/file/d/1W_MpzrvH84lF1-fMVxr8T4x9ZilxIy8c/view?usp=sharing',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Novembro, 2016',
    location: 'São Pio X',
    title: 'Ensino Fundamental e Médio',
    content: (
      <p>
        Publicação de{' '}
        <a
          href="https://www.allprinteditora.com.br/vida-de-moleque-a-grande-aventura"
          target="_blank"
          className="font-semibold underline hover:text-blue-600">
          LIVRO
        </a>{' '}
        e organização de peças de teatro e produção audio-visual
      </p>
    ),
  },
  {
    date: 'Novembro, 2017',
    location: 'Colégio Professora Maria Goretti',
    title: 'Ensino Médio Completo',
    content: <p>Finalização do ensino médio em outra escola</p>,
  },
  {
    date: 'Novembro, 2022',
    location: 'Universidade Estácio de Castanhal/ FCAT',
    title: 'Graduação Tecnológica',
    content: (
      <p>
        Ministrei dois cursos livres em várias ocasiões, intitulados, "CURSO DE GIT E GITHUB SEM CODAR" e "CURSO DE
        GOOGLE CLASSROOM", também prestei estágio pela universidade como desenvolvedor de software na área de
        documentação para a empresa INFOTEMP
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dezembro, 2023 - Março, 2024',
    location: 'ÊXITOS',
    title: 'Operador de suporte técnico - Estágio',
    content: (
      <p>
        Prestação de suporte por telefone a clientes de serviços de internet, esclarecendo dúvidas, diagnosticando problemas e atendendo solicitações diversas, incluindo agendamento de visitas técnicas, se necessário.
      </p>
      ),
  },
  {
    date: 'Maio, 2024 - Atualmente',
    location: 'Home-office',
    title: 'Freelancer Full-Stack Developer',
    content: (
      <p>
        EXPERIÊNCIA PRÁTICA em desenvolvimento de
        websites como aplicações web com React, Next.js, Tailwind, CSS3, Typescript na IDE VScode.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Nailson Bulhões',
      text: 'Pude obter um website funcional e chamativo aos meus requisitos como produtor cultural e publicitário, me ajudou a divulgar meu trabalho e conquistar mais clientes.',
      image: 'https://nase7ebucket.s3.amazonaws.com/team/nailson-bulhoes-photo.jpeg',
    },
    {
      name: 'Valéria Duarte',
      text: 'Catálogo muito bem elaborado, com ótimo visual e de fácil entendimento. Profissional pontual, qualificado e comprometido com o que se propôs.',
      image: 'https://i.ibb.co/vVC69G9/fetiche-logo.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'A apenas um toque de distância.',
  description: 'Entre em contato para serviços, como criação de websites, orçamentos, requisitos, vamos conversar.',
  items: [
    {
      type: ContactType.Email,
      text: 'visoteck.contato@gmail.com',
      href: 'mailto:visoteck.contato@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Capanema PA, Brasil',
      href: 'https://maps.app.goo.gl/vHcJarYswe1rV17v6',
    },
    {
      type: ContactType.Instagram,
      text: '@visoteck_websites',
      href: 'https://www.instagram.com/visoteck_websites?igsh=cHLsOTVoNXBzNHBq',
    },
    {
      type: ContactType.Github,
      text: 'VitorsmX',
      href: 'https://github.com/VitorsmX',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/VitorsmX'},
  {
    label: 'Stack Overflow',
    Icon: StackOverflowIcon,
    href: 'https://stackoverflow.com/users/27062617/vitor-sousa-mesquita-560',
  },
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/vitorsm10/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/visoteck_websites?igsh=cHLsOTVoNXBzNHBq'},
];
