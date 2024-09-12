import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  LinkIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webm';
import porfolioImage1 from '../images/portfolio/portfolio-1.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import profilepic from '../images/profilepic.jpeg';
import testimonialPerson1 from '../images/testimonial/testimonialPerson1.jpg';
import testimonialsImage from '../images/testimonial/testimonialsImage.webp';
import ogImageURL from '../../public/ogimageurl.jpeg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  SocialCreator,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfólio Dioclesiano',
  description: 'Um pouco sobre mim. Veja, aprove, contrate.',
  twitterUrl: 'https://dioportfolio.vercel.app/',
  ogImageUrl: ogImageURL,
  twitterImageUrl: ogImageURL
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
  Testimonials: 'Referências',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Sou Diocleisiano.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Sou Brasileiro de nascimento, resido em Portugal, sou um <strong className="text-stone-100">Técnico de Manutenção de Hardware (computador e celular),
        já trabalhei como Técnico de Informática, de Hardware, Especialista em Cibersegurança e Software Tester</strong>, atualmente, busco uma posição no mercado de
        T.I em que possa agregar valor a empresa em que estiver.
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
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Preciso destacar minha paixão pela tecnologia e por tudo que estudei até aqui. Sei que há um mundo de conhecimentos para serem adquiridos, mas acredito que o pouco de todos os dias trará o sucesso esperado. Busco constantemente aprender e me alinhar com técnicas de CIBERSEGURANÇA, pois a evolução das ameaças cibernéticas são imensas e cada dia que passa o mundo precisa de bons profissionais. Destaco minha vontade de contribuir para a segurança online, protegendo dados e sistemas contra ameaças em um mundo cada vez mais digital, usando uma abordagem proativa para resolver problemas de segurança. Por isso me mantenho atualizado com as melhores práticas e ferramentas de cibersegurança. A proteção das informações confidenciais dos usuários e das organizações também é uma responsabilidade imensa. No entanto, sigo meus estudos para adquirir conhecimentos e aguardo o momento certo para ingressar em uma equipe profissional que tenha objetivos em comum a fim de reforçar as defesas cibernéticas.`,
  aboutItems: [
    {label: 'Onde Fico', text: 'Lisboa, PLx', Icon: MapIcon},
    {label: 'Idade', text: `${Math.floor((new Date().getTime() - new Date(1986, 8, 17).getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toString()}`, Icon: CalendarIcon},
    {label: 'Nacionalidade', text: 'Brasileiro', Icon: FlagIcon},
    {label: 'Formação', text: 'Centro de Especialização Tecnológica | Faculdade Pitágoras | Faculdade Descomplica | Citeforma', Icon: AcademicCapIcon},
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
        level: 4,
      },
    ],
  },
  {
    name: 'Desenvolvimento Front-End',
    skills: [
      {
        name: 'HTML',
        level: 5,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'CSS',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 5,
      },
    ],
  },
  {
    name: 'Integrations and Version Control',
    skills: [
      {
        name: 'Git and GitHub',
        level: 5,
      },
    ],
  },
  {
    name: 'Hardware',
    skills: [
      {
        name: 'Manutenção de Computadores e Celulares',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Olá Mundo',
    description: 'Primeiro Repositório Versionado',
    url: 'https://github.com/Dioclesiano/Ola-Mundo_na_Tela',
    image: porfolioImage1,
  },
  {
    title: 'Projeto Android',
    description: 'Website de informações gerais sobre o sistema android',
    url: 'https://github.com/Dioclesiano/Projeto_Android',
    image: porfolioImage2,
  },
  {
    title: 'Estudos Sobre Python',
    description: 'Alguns exercícios resolvidos em Python',
    url: 'https://github.com/Dioclesiano/Estudos_sobre_Python',
    image: porfolioImage3,
  },
  {
    title: 'Estudo sobre Javascript',
    description: 'Estudos e exercícios resolvidos em Javascript',
    url: 'https://github.com/Dioclesiano/Estudos_sobre_JavaScript',
    image: porfolioImage4,
  },
  {
    title: 'Estudo sobre GitHub',
    description: 'Estudos e exercícios resolvidos sobre GitHub',
    url: 'https://github.com/Dioclesiano/Entendendo...',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2024',
    location: 'Citeforma - Lisboa, Portugal',
    title: 'Técnico Especialista em Gestão de Redes e Sistemas Informáticos',
    content: <p>'Finalização do curso de Técnico Especialista em Gestão de Redes e Sistemas Informáticos na Citeforma'</p>,
  },
  {
    date: '2023',
    location: 'Centro de Especialização Tecnológica - Tomar, Portugal',
    title: 'Técnico Especialista em Cibersegurança',
    content: <p>Curso técnico de cibersegurança</p>,
  },
  {
    date: '2020',
    location: 'Faculdade Descomplica, Belo Horizonte - Brasil',
    title: 'Graduação em Ciências da Computação',
    content: <p>Finalização do curso de Graduação em Ciência da Computação na Faculdade Descomplica</p>,
  },
  {
    date: '2015',
    location: 'Faculdade Pitágoras, Belo Horizonte - Brasil',
    title: 'Técnico de Informática',
    content: <p>Finalização do curso de Técnico de Informática na Faculdade Pitágoras</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 – 2024',
    location: 'F5 Consultoria Empresarial, Paraná - Brasil',
    title: 'Software Tester',
    content: (
      <p>
        Execução de testes de software automatizados em aplicativos e sistemas.
      </p>
      ),
  },
  {
    date: '2023',
    location: ' Instituto Politécnico de Tomar, Portugal',
    title: 'Especialista em Cibersegurança',
    content: <p>Experiência prática em Cibersegurança</p>,
  },
  {
    date: '2021 – 2022',
    location: 'Sonae (Worten Resolve), Alfragide - Portugal',
    title: 'Técnico de Hardware',
    content: <p>Experiência prática em manutenção de Hardware</p>,
  },
  {
    date: '2016 – 2019',
    location: 'SmartPhone Center, Belo Horizonte - Brasil',
    title: 'Técnico Eletrônico',
    content: <p>Experiência prática em manuseio e manutenção de celulares</p>,
  },
  {
    date: '2013 – 2015',
    location: 'Red Zero, Contagem - Brasil',
    title: 'Técnico de Informática',
    content: <p>Experiência prática no manuseio e manutenção de equipamentos computacionais</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialsImage,
  testimonials: [
    {
      name: 'Vitor Mesquita',
      text: 'Profissional capacitado em cibersegurança, com conhecimento e experiência em testes de cibersegurança. Atualmente, sou desenvolvedor web e este profissional busca se aprimorar a cada dia.',
      image: testimonialPerson1,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'A apenas um toque de distância.',
  description: 'Entre em contato para serviços ou ofertas de vagas, vamos conversar.',
  items: [
    {
      type: ContactType.Email,
      text: 'diocontato.website@gmail.com',
      href: 'mailto:diocontato.website@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lisboa, PLx, Portugal',
      href: 'https://maps.app.goo.gl/dyYrGwAqxgcF955z6',
    },
    {
      type: ContactType.Github,
      text: 'Dioclesiano',
      href: 'https://github.com/Dioclesiano',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Dioclesiano'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dioclesianopaz/'},
];

// Socials from website creator

export const socialLinksCreator: SocialCreator[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/VitorsmX'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/vitorsm10/'},
  {label: 'Website', Icon: LinkIcon, href: 'https://visoteckgo.vercel.app/'},
];
