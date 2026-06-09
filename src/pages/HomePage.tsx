import { useState, useEffect, useRef, ReactNode, CSSProperties, MouseEvent } from "react";
import avatar from "../images/avatar.png";
import bannerVideo from "../images/bannerback.mp4";
import minecraftBook from "../images/mc-book.png";
import windowsXP from "../images/windows-xp.png";
import textIcon from "../images/text-icon.png";
import imageIcon from "../images/image-icon.png";

import re7Cover from "../images/re7-cover.png";
import sekiroCover from "../images/sekiro-cover.png";
import bo2Cover from "../images/bo2-cover.png";
import mcCover from "../images/mc-cover.png";

import cnpCover from "../images/CNP-BC.png";
import collectiveCover from "../images/collectvie-BC.png";
import leadsCover from "../images/Leads-BC.png";
import dataCover from "../images/Data-BC.png";
import ivanCover from "../images/ivan-BC.png";
import artOfBusinessCover from "../images/Artofbusiness-BC.png";
import angelCover from "../images/Angel-BC.png";
import fermatCover from "../images/Fermat-BC.png";
import threeDeathsCover from "../images/threedeaths-BC.png";
import phillipCover from "../images/phillip-BC.png";
import berserkCover from "../images/Berserk-BC.png";

import somenightsMp3 from "../Songs/somenights.mp3";
import somenightsCover from "../images/somenights.png";
import undergroundcover from "../images/Underground.png";
import undergroundmp3 from "../Songs/underground.mp3";
import TNScover from "../images/TN.png";
import TNSmp3 from "../Songs/TNS.mp3";

import runStamp from "../images/RUNNOTE.png";

import PCBstamp from "../images/PCBstamp.png";
import TELEstamp from "../images/TELEstamp.png";
import TELEDATAstamp from "../images/TELEDATAstamp.png";

import robohandVideo from "../images/ROBOHAND.mp4";
import miniradarVideo from "../images/MINIRADAR.mp4";

import intExploreIcon from "../images/intexplore.png";

// Chapterly project assets
import chapterlyLibrary from "../images/library.png";
import chapterlyStats from "../images/stats.png";
import chapterlyGoals from "../images/goals.png";
import chapterlyRecs from "../images/recommendations.png";
import chapterlyNotes from "../images/notes.png";
import chapterlyOnboarding from "../images/onboarding.png";
import chapterlyVideo from "../images/chapterly_demo.mp4";

// CodeSum project assets
import codesumImg1 from "../images/codesum_img1.png";
import codesumImg2 from "../images/codesum_img2.png";
import codesumImg3 from "../images/codesum_img3.png";
import codesumVideo from "../images/codesum_demo.mp4";

import obsidIcon from "../images/obsid-icon.png";

// StudentWire project images
import SWimage1 from "../images/SWimage-1.png";
import SWimage2 from "../images/SWimage-2.png";
import SWimage3 from "../images/SWimage-3.png";
import SWimage4 from "../images/SWimage-4.png";
import SWimage5 from "../images/SWimage-5.png";
import SWimage6 from "../images/SWimage-6.png";
import SWimage7 from "../images/SWimage-7.png";

import tbImage1 from "../images/TBimage-1.png";
import tbImage2 from "../images/TBimage-2.png";
import tbImage3 from "../images/TBimage-3.png";

import placeholderImg from "../images/placeholder.png";

import swUserIcon from "../images/SWuserICON.png";
import hackusericon from "../images/HackuserICON.png";
import MCusericon from "../images/MCuserICON.png";
import comppusericon from "../images/CompPuserICON.png";
import modusericon from "../images/MODuserICON.png";

import cf1image from "../images/CFimg-1.png";
import cf2image from "../images/CFimg-2.png";



// ─── Types ────────────────────────────────────────────────────────────────────
interface Song { id: number; title: string; genre: string; bpm: number; date: string; duration: string; src: string; cover: string; }
interface Background { name: string; type: "image" | "color"; value: string; }
interface Game { id: number; title: string; cover: string; platform: string; rating: number; review: string; }
interface Book { id: number; title: string; author: string; cover: string; rating: number; review: string; }
interface Project {
  slug: string;
  title: string;
  description: string;
  type: string;
  year: number;
  tags: string[];
  status: string;
  action: string;
  files: { name: string; type: "doc" | "image" | "code" | "video"; icon?: string; content?: string; src?: string }[];
} // required
interface SkillProject {
  title: string;
  description: string;
  details: string;
  tags: string[];
  year: number;
  status: string;
  resources?: string[];
  images?: string[];
  videos?:string[];
  prefix?: string; // optional custom prefix
}
interface CurrentProject { 
  id: string; 
  title: string; 
  type: string; 
  year: number; 
  status: string; 
  tags: string[]; 
  description: string; 
  files: { filename: string; details: string; }[]; 
  url?: string; 
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const MY_SONGS: Song[] = [
  { 
    id: 1, 
    title: "Some Nights", 
    genre: "Electronic / House", 
    bpm: 128, 
    date: "2024-12-01", 
    duration: "3:48", 
    src: somenightsMp3,
    cover: somenightsCover,
  },
  { 
    id: 2, 
    title: "The Underground", 
    genre: "Deep House", 
    bpm: 122, 
    date: "2024-12-05", 
    duration: "2:43", 
    src: undergroundmp3,
    cover: undergroundcover,
  },
  { 
    id: 3, 
    title: "TNs Remix", 
    genre: "House", 
    bpm: 130, 
    date: "2024-12-10", 
    duration: "3:36", 
    src: TNSmp3,
    cover: TNScover,
  },
];

const MY_GAMES: Game[] = [
  { 
    id: 1, 
    title: "Resident Evil 7", 
    platform: "PC", 
    cover: re7Cover, 
    rating: 5, 
    review: "I played this on the PS4 for the first time and it became the best game I've ever played since. It revived the Resident Evil series as a whole, and the entire story from start to finish is peak. I've played it in every way now – I know it in and out. Peak game, best RE game, my personal number 1." 
  },
  { 
    id: 2, 
    title: "Sekiro: Shadows Die Twice", 
    platform: "PC", 
    cover: sekiroCover, 
    rating: 5, 
    review: "This is the best fromsoftware game in my opinion, the combat and everything in this game is peak, especially the visuals and progression, AND this game is THE MOST replayable game, its more replayable than re7 even is, i still think re7 is better but this game is more replayable, the bosses are peak, the story is peak this game is peak" 
  },
  { 
    id: 3, 
    title: "Elden Ring", 
    platform: "PC", 
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg", 
    rating: 5, 
    review: "Everyone loves this game, my first playthough i had an intelligence build then changed to a dex-arc build then the second playthrough i had a strength-faith build then the third one i had an intelligence build, and each playthrough was fun and unique and each ending was great the last ending i got was the ranni ending, peak game and the DLC before the most recent one is unbelievable too i havent played night-reign DLC, it looks kinda shit but the rest of the game is amazing." 
  },
  { 
    id: 4, 
    title: "Call of Duty: Black Ops 2", 
    platform: "PC", 
    cover: bo2Cover, 
    rating: 5, 
    review: "best COD, best zombies too, i think im nostalgic about this one though, bo3 zombies is good but its not better than bo2 zombies" 
  },
  { 
    id: 5, 
    title: "Minecraft", 
    platform: "PC", 
    cover: mcCover, 
    rating: 5, 
    review: "minecraft is minecraft, i've been on the same hardcore world since i was 12 years old, havent died once and i still play on it from time to time, whenever i play minecraft i only play on that, if i wasnt lazy then there should be images here or something" 
  },
];

const MY_BOOKS: Book[] = [
  { id: 1,  title: "Crime and Punishment",                   author: "Fyodor Dostoevsky",  cover: cnpCover,         rating: 5, review: "Raskolnikov's unravelling is one of the most gripping psychological studies in all of literature." },
  { id: 2,  title: "The Archetypes and the Collective Unconscious", author: "C.G. Jung",      cover: collectiveCover,  rating: 5, review: "Jung's exploration of the collective unconscious offers a powerful lens for understanding why certain characters, symbols, and stories resonate across cultures and centuries. The book introduces archetypes, these are universal, inherited patterns of behaviour and imagery that shape human experience without our conscious awareness.The Anima and Animus represent the inner feminine in men and the inner masculine in women. Recognising these can explain why readers or viewers are drawn to specific romantic characters or why certain relationships feel fated. The Shadow archetype, perhaps the most immediately recognisable, embodies the repressed, darker side of the psyche. Understanding the Shadow helps make sense of why villains in fiction always mirror the hero's own hidden flaws, and why audiences can feel both repelled and fascinated by them.The Trickster archetype is particularly memorable: a figure that is both a healer and a force of chaos. It appears in myths from Hermes to Coyote, and in modern stories as the witty, rule‑breaking character who disrupts stale orders. Other archetypes – the Hero, the Mother, the Self – offer additional frameworks to analyse literature, film, dreams, and even everyday behaviour.While Jung's writing can be dense and digressive, the insights are rewarding. This book is not a quick read ( i had to spend 5-10 minutes a page writing things down on another piece of paper to truly grasp everything), but for anyone interested in why we love certain stories or why symbols repeat across time, it is an essential work that continues to influence art, psychology, and culture." },
  { id: 3,  title: "100M Dollar Leads",                     author: "Alex Hormozi",        cover: leadsCover,       rating: 4, review: "Practical, no‑fluff advice on generating leads and scaling offers. Alex Hormozi has written three books now. I have read all of them, but neither of the newer two is as good as this one. I read this book cover to cover twice, and I listened to the audio version maybe two or three times. The knowledge in this book on lead generation is unreal and unmatched. The way he wrote it so that a child could understand the concepts is amazing. This is easily in the top five for me. Despite other reads eliciting more emotion from me, this one has been so unbelievably practical and useful that I cannot place it any lower." },
  { id: 4,  title: "Designing Data‑Intensive Applications", author: "Martin Kleppmann",    cover: dataCover,        rating: 5, review: "Every engineer, even those who aren't in software should read this, this book is one of the best written database books i have ever read, every diagram, analogy, use case is perfectly done, when i read this the second time i truly felt as though i knew databases in and out (i dont theres much to learn), but great book never the less." },
  { id: 5,  title: "The Death of Ivan Ilyich",              author: "Leo Tolstoy",         cover: ivanCover,        rating: 5, review: "A short but devastating meditation on mortality, authenticity, and the meaning of a well‑lived life. This book is quite monotone and slow. It really makes you feel the pain of Ivan, the main character who is slowly dying. In turn, his family neglect him and begin to resent him because he is no longer able to provide. The way Leo Tolstoy makes this story so low stimulus, so slow, makes you feel as though you truly understand Ivan, which is one of the beauties of this book. The writing is marvellous and wonderfully done so that we feel the mundane, day‑to‑day life Ivan is experiencing. In my opinion, the greatness of a book, show, game, or any media for that matter is not determined by material alone, but by the emotion it provokes in the consumer. Leo Tolstoy has done that in an amazing way in this book. " },
  { id: 6,  title: "The Art of Business",                   author: "Greg Clydesdale",     cover: artOfBusinessCover, rating: 4, review: "This book is criminally underrated. It follows the history of China and how the bottom of the social hierarchy, the merchant, rose to the top of the Chinese social order. It shows how historical events such as war, theological shifts in Chinese culture, and even trade route shifts along the Silk Road led to the prioritisation of merchants. The book also explores how Chinese families made a pivot from holding praise towards the government worker, the military general, and the private sector to instead celebrating the entrepreneur, the businessman, and the merchant. This book takes us through how this change in who the Chinese culture pedestalised grew China into the powerhouse it is today. It demonstrates how the smallest changes in theology, social order, and familial relations on a mass scale completely changed the trajectory of an economy and a country." },
  { id: 7,  title: "The Fiery Angel",                       author: "Valery Bryusov",      cover: angelCover,       rating: 4, review: "A Russian symbolist novel blending history, the occult, and psychological intensity. Set in 16th‑century Germany, it follows knight Ruprecht, who falls in love with the mysterious Renata, a woman convinced she is tormented by angels and demons. Renata's obsession with the angel Madiel (who she claims appeared to her as a fiery being) is the one driving the plot, as Ruprecht becomes entangled in her quest for exorcism, magical rituals, and a desperate search for a man named Heinrich, whom she believes to be Madiel incarnate. The novel is a romance, but it's quite intense and very occulty, you get scenes of necromancy, séances, and psychological breakdowns. Each character is morally complex: Ruprecht is the rational romantic who gets dragged into madness, Renata is both victim and manipulator, and Heinrich represents the cold, unattainable ideal. Bryusov masterfully weaves historical figures (like Agrippa and Faust) into the narrative, making it feel like a lost occult manuscript that we shouldn't be reading. It's not an easy read, but for those who love dark, gothic romance with a philosophical bite, this one stays with you." },
  { id: 8,  title: "Fermat's Last Theorem",                 author: "Simon Singh",         cover: fermatCover,      rating: 5, review: "The story of a 350‑year mathematical quest. When I went into this, I thought it would be more theoretical, more mathematical, but that wasn't the case at all. This story recounts the lives of all the people who took part in inspiring this theorem, those who contributed to creating it, the tragedies and injustices that took place along the path to solving it, and finally the man who did it, along with how it impacted mathematics and its community. At a certain point, you forget this is even about maths and become engrossed by how the dedication and collaboration of people from every corner of the world can lead to something so great. Amazing book." },
  { id: 9,  title: "The Three Deaths",                      author: "Leo Tolstoy",         cover: threeDeathsCover, rating: 4, review: "A reflective short story contrasting three different attitudes toward death. It's another amazing piece of work from Leo Tolstoy. Despite how short this story is, it has stayed with me for years, almost as if the duration I spent reading it felt like a dream, and now I recollect any memory of reading it as a beautiful, insightful dream. If you haven't read this, please do. It's under 100 pages, from what I can remember, and it will be worth your time. It's a truly beautiful story that'll have you thinking for days upon days." },
  { id: 10, title: "The Gospel of Philip",                  author: "Unknown",             cover: phillipCover,     rating: 5, review: "The gospel of Philip is one of the Gnostic Christian texts uncovered in Egypt a few years ago, this book is TRULY fascinating, it paints christianity as a religion in a whole new light and makes you question not only christianity but every other religion, the gospel of Phillip turns the head on who we traditionally see Jesus as, according to this gospel, Jesus is a wise holder of divine knowledge on earth to spread it not a son of god or god in any way, judas isnt the bad guy either according to this, god in the old testament is a false god and Lucifer in turn is a hero who brings the divine light to people and leads them away from this false god, hence the name \"Lucifer the light bringer\", I could dwell into this more but I don't think its fitting for this little website" },
  { id: 11, title: "Berserk (Vol. 1‑14)",                   author: "Kentaro Miura",       cover: berserkCover,     rating: 5, review: "Berserk isn't just a manga/comic/anime it's one of the most devastating and beautiful stories ever told. The narrative is dark, brutal, and tragic, which stands in direct contrast to the contemporary wave of happy endings and neat victories displayed in stories like MHA, AOT, Naruto etc. Guts' journey is about enduring suffering, not triumphing over it. There are no clean wins, only survival and the faintest glimmer of hope. It's a story that stays with you, haunts you, and makes you appreciate the weight of every single panel. I could have put Dune here too – it's just as masterful – but Berserk holds a raw, emotional power that few works of fiction, regardless of medium, can match." },
];

const PROJECTS: Project[] = [
  {
    slug: "chapterly",
    title: "CHAPTERLY",
    description: "Library and reading tracking app that makes keeping track of reading habits and discovering new books frictionless. Simple UI, completely free, with all essential features.",
    type: "iOS App",
    year: 2024,
    tags: ["Swift", "SwiftUI", "UIKit", "Core Data"],
    status: "Completed",
    action: "view",
    files: [
      { name: "README.txt", type: "doc", content: `CHAPTERLY – Frictionless Reading Tracker
  
  Overview:
  Chapterly is an iOS native app that helps users track their reading progress, manage a personal library, discover new books, and stay consistent. It was built because existing apps were either clunky, missing features, or put everything behind a paywall.
  
  Core Features:
  - Personal Library Management
  - Reading Progress Tracking (pages / time)
  - Book Notes & Insights
  - Reading Statistics Dashboard
  - Intelligent Recommendations
  - Goal Setting & Achievements
  
  Tech Stack:
  - Swift + SwiftUI (primary UI)
  - UIKit for legacy components
  - Core Data for offline storage
  
  Status: Completed (launched on App Store)
  
  Future Plans:
  - Social reading (leaderboards, friend competitions)
  - Goodreads / Audible integration
  - Cross‑platform sync
  - Advanced analytics
  ` },
{ name: "library.png", type: "image", icon: chapterlyLibrary },
{ name: "stats.png", type: "image", icon: chapterlyStats },
{ name: "goals.png", type: "image", icon: chapterlyGoals },
{ name: "recommendations.png", type: "image", icon: chapterlyRecs },
{ name: "notes.png", type: "image", icon: chapterlyNotes },
{ name: "onboarding.png", type: "image", icon: chapterlyOnboarding },
{ name: "demo.mp4", type: "video", src: chapterlyVideo }
    ]
  },
  {
    slug: "codesum",
    title: "CodeSum",
    description: "AI-powered code generation and analysis system with real-time documentation and implementation guidance.",
    type: "AI Web App",
    year: 2024,
    tags: ["OpenAI API", "JavaScript", "Node.js", "Tailwind", "AI fine-tuning"],
    status: "Live",
    action: "view",
    files: [
      {
        name: "README.txt",
        type: "doc",
        content: `CodeSum – AI‑Powered Code Assistant
      
      Overview:
      CodeSum is an AI‑powered web application that generates production‑ready code from natural language prompts, with real‑time analysis, automatic documentation, and error detection. It was built to explore a new UI style, gain experience with AI, and provide genuine utility to developers and students.
      
      🌐 Try it live: https://codesum.onrender.com
      
      Core Features:
      - Natural Language Code Generation
      - Multi‑Language Support (Python, JavaScript, Go, etc.)
      - Real‑time Code Analysis
      - Automated Documentation
      - Syntax Error Detection
      - Detailed Code Explanation
      
      Tech Stack:
      - OpenAI API (GPT‑4 / fine‑tuned model)
      - Node.js backend
      - JavaScript + Tailwind CSS frontend
      
      Status: Live
      
      AI Architecture:
      Leverages advanced machine learning models and natural language processing to transform requirements into production‑ready code with comprehensive documentation. The system includes a help guide to assist beginners in starting their coding journey.
      
      Future plans:
      - VS Code extension
      - Team collaboration features
      - Fine‑tuned model for specific frameworks
      `
      },
      { name: "screenshot1.png", type: "image", icon: codesumImg1 },
      { name: "screenshot2.png", type: "image", icon: codesumImg2 },
      { name: "screenshot3.png", type: "image", icon: codesumImg3 },
      { name: "demo.mp4", type: "video", src: codesumVideo }
    ]
  },
  {
    slug: "studentwire",
    title: "STUDENTWIRE",
    description: "Career guidance platform for students and graduates – personality + cognitive assessment to find your ideal career path.",
    type: "Web App",
    year: 2023,
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "BigFive", "AI"],
    status: "Live",
    action: "view",
    files: [
      {
        name: "README.txt",
        type: "doc",
        content: `StudentWires.com
  This platform is created by me alone. It is a comprehensive platform designed to help students and graduates make informed decisions about their future careers.
  
  82% of young people aged (16-24) in the UK are not sure what they want to do with their careers. There are a handful of career advising platforms, but NONE of them are catered to the needs or wants of younger people in high school or university. School counsellors are also usually trash – they don't even know you and want to give you advice on what they think you should do. This is why I created this platform: so students/graduates can make decent, informed decisions.
  
  How it works
  Complete the BigFive personality assessment, then complete a cognitive assessment. At the end, the user is given a career best suited to them based on the results of these assessments – for free.
  
  BigFive Personality Assessment
  - Extraversion: Reflects energy, sociability, and assertiveness; extraverts thrive in team-oriented and social settings.
  - Agreeableness: Indicates kindness, trust, and cooperation; agreeable individuals excel in collaborative and service-oriented roles.
  - Conscientiousness: Measures organization, responsibility, and dependability; highly conscientious people perform well in structured and detail-oriented tasks.
  - Neuroticism: Captures emotional stability and stress tolerance; low neuroticism fosters resilience and effective problem-solving under pressure.
  - Openness to Experience: Represents curiosity, creativity, and adaptability; open individuals succeed in innovation-driven or unstructured environments.
  
  Assessing these traits helps match individuals to roles that align with their strengths and personality, fostering productivity and job satisfaction.
  
  Free Features
  - Personality Assessment (BigFive)
  - IQ Assessment
  - The User's Top Career Match
  - Friend Compare – compare your results with your friends.
  
  Paid Features (StudentWire Dashboard)
  - ALL job matches from HIGHEST to LOWEST (e.g., 99.7% match with Software Engineering, 44% with cloud engineering, etc.)
  - Industry insights: Salary trends, industry investment trends (2019–present), job growth trends and forecasting (with detailed graphs and sources)
  - Salary Calculator: average salary for your career path based on your country, experience, and job title
  - Industry Match: describe your skills in a certain industry, and AI matches you with the best career path within that industry
  - Career Sim: realistic daily life of a career, salary, and job title
  - Opportunity Finder: best opportunities based on your skills, experience, and location
  - Step In: detailed steps showing how YOU can get your foot in the door of your dream career, based on realistic data
  - SW GPT: StudentWires GPT – answer any career question based on your results
  
  Tech Stack
  - Frontend: JavaScript
  - Backend: Node.js / Express
  - Database: MongoDB
  - Year: 2023
  
  Status: Live and accepting users.
  `
      },
      { name: "dashboard-screenshot.png", type: "image", icon: SWimage1 },
      { name: "personality-assessment.png", type: "image", icon: SWimage2 },
      { name: "career-matches.png", type: "image", icon: SWimage3 },
      { name: "industry-insights.png", type: "image", icon: SWimage4 },
      { name: "salary-calculator.png", type: "image", icon: SWimage5 },
      { name: "opportunity-finder.png", type: "image", icon: SWimage6 },
      { name: "SW-GPT.png", type: "image", icon: SWimage7 },
    ]
  },
  {
    slug: "cybers-online",
    title: "Cybers.online",
    description: "AI-powered cybersecurity platform providing advanced threat detection and digital footprint analysis.",
    type: "Cybersecurity Platform",
    year: 2023,
    tags: ["AI", "Machine Learning", "Cybersecurity", "Real-time Analytics", "Cloud Computing", "Data Visualization"],
    status: "Live",
    action: "view",
    files: [
      {
        name: "README.txt",
        type: "doc",
        content: `CYBERSKOPE
  AI-POWERED CYBERSECURITY PLATFORM
  
  CyberSkope represents the next generation of cybersecurity platforms, leveraging advanced artificial intelligence to provide comprehensive threat detection and digital footprint analysis. Built to protect organizations from evolving cyber threats, with an end goal of this project being to create an API which acts as a 24/7 cybersecurity agent for organisations.
  
   VISIT CYBERSKOPE: https://cybers.online
  
  API KEY FEATURES – Advanced AI-driven security capabilities
  
   AI THREAT DETECTION
  Advanced machine learning algorithms continuously monitor and analyze network traffic to identify potential threats in real-time.
  
   DIGITAL FOOTPRINT ANALYSIS
  Comprehensive scanning and analysis of your organization's digital presence to identify vulnerabilities and exposure risks.
  
   SECURITY MONITORING
  24/7 automated monitoring with intelligent alerting systems to ensure immediate response to security incidents.
  
  TECHNOLOGY STACK
  Built with the most efficient and reliable technologies:
  
  • Artificial Intelligence
  • Machine Learning
  • Cybersecurity
  • Real-time Analytics
  • Cloud Computing
  • Data Visualization
  
  Status: Live – API in active development.
  `
      },
      
    ]
  },
  {
    slug: "zettk-cli",
    title: "Zettk-CLI",
    description: "A KISS command-line interface for managing a markdown-based Zettelkasten (knowledge base).",
    type: "CLI Tool",
    year: 2026,
    tags: ["Go", "CLI", "Zettelkasten", "Markdown", "Productivity"],
    status: "Live",
    action: "view",
    files: [
      {
        name: "README.txt",
        type: "doc",
        content: `Zettk-CLI – KISS Zettelkasten Manager
  
  What is a Zettelkasten?
  A Zettelkasten (German for "slip box") is a note‑taking system where each note contains one atomic idea, has a unique ID, and links to other notes via wiki‑style links (e.g. [[another-note]]). Knowledge emerges organically through connections, not folders.
  
  What is Zettk-CLI?
  A lightweight, opinionated command‑line tool for creating and navigating a markdown‑based Zettelkasten. It manages notes under ~/zettelkasten and integrates with your favourite terminal editor ($EDITOR).
  
  Directory structure:
  ~/zettelkasten/
  ├── 00-INBOX/       (new notes)
  ├── 01-ARCHIVE/     (processed notes)
  │   └── daily-notes/
  ├── 02-INPUT/       (external references)
  ├── scratchpad/     (quick notes)
  └── templates/      (note templates)
  
  Commands:
    init              – initialise a new Zettelkasten
    new <title>       – create a new note (opens in $EDITOR)
    open <search>     – open an existing note
    find <search>     – search for a note (shows metadata)
    sp                – open the scratchpad
    daily             – open today's daily note
  
  Built with Go.

  `
      },
      
    ]
  },
  {
    slug: "obsid-cld",
    title: "OBSID-CLD",
    description: "Browser-native, zero‑infrastructure knowledge operating system disguised as a note‑taking app.",
    type: "Web App",
    year: 2026,
    tags: ["HTML", "CSS", "JavaScript", "Local Storage", "Markdown", "Graph Visualization", "AES-256", "PWA"],
    status: "Live",
    action: "view",
    files: [
      {
        name: "README.txt",
        type: "doc",
        content: `What Is OBSID-CLD?
  OBSID-CLD is an experimental personal knowledge system designed around a simple premise:
  Your notes should belong to you, live where you are, and move with you without requiring anyone else's infrastructure.
  
  Unlike traditional note‑taking applications that depend on cloud synchronization, authentication layers, proprietary storage formats, or backend services, OBSID-CLD operates entirely within the browser.
  
  The entire application exists as a single HTML document containing:
  - User interface
  - Storage engine
  - Markdown editor
  - Knowledge graph renderer
  - Encryption layer
  - Import/export system
  - Theme engine
  - Sharing infrastructure
  
  Everything runs client‑side.
  Everything stays local.
  
  Architecture – Single‑Artifact Deployment
  The entire system is distributed as one self‑contained file:
  
  OBSID-CLD.html
  │
  ├── UI Framework
  ├── Markdown Engine
  ├── Graph Engine
  ├── Vault System
  ├── Encryption Layer
  ├── Theme Engine
  ├── Share Card System
  ├── Import/Export Pipeline
  └── Local Persistence Layer
  
  This allows OBSID-CLD to be:
  - Hosted anywhere
  - Embedded anywhere
  - Shared anywhere
  - Archived forever
  
  A complete knowledge environment can be transported as easily as a photograph.
  
  Core Concepts
  
  Local‑First Storage
  Every note is stored directly in browser storage.
  No API requests. No cloud sync. No account registration. No telemetry.
  The application treats the browser itself as the operating environment.
  
  Linked Knowledge Graph
  Notes are connected using wiki‑style links: [[Project Alpha]]
  OBSID-CLD continuously resolves these references into a living graph structure.
  The graph engine generates node relationships, backlinks, knowledge clusters, and navigation pathways.
  
  Bi‑Directional Linking
  Every connection is automatically indexed.
  If Note A → [[Note B]], then OBSID-CLD creates Note B ← Backlink from Note A.
  
  Graph Visualization Engine
  Interactive network view with node dragging, dynamic positioning, relationship mapping, fullscreen exploration, and direct note navigation.
  
  Vault Portability – .obsid Format
  Portable vault format packaging notes, metadata, folders, links, themes, and settings into a single transferable object.
  Vaults can be encrypted with AES‑256‑GCM (PBKDF2, 100,000 iterations) – all inside the browser.
  
  Share Cards
  OBSID Cards package selected notes into distributable knowledge artifacts (metadata, tags, descriptions, multiple notes, downloadable source material).
  
  Embeddable Knowledge Runtime
  Embed OBSID-CLD in any website via iframe. Every visitor gets a private, isolated instance.
  
  Theme Engine
  Presets: Mono, Dark, Sepia, Terminal, Slate, Rose, Midnight, Paper, Forest.
  
  Command Palette
  Universal ⌘+K interface for navigation, search, commands, discovery, and shortcuts.
  
  Markdown Processing Pipeline
  Supports headings, bold, italic, quotes, lists, tasks, tables, code blocks, [[Wiki Links]], and #Tags.
  
  Design Philosophy
  - No Accounts – identity is not required to write a note.
  - No Servers – infrastructure is optional.
  - No Lock‑In – data remains portable.
  - No Install Process – runs anywhere a browser exists.
  - No Complexity Tax – a single person can understand the deployment artifact.
  
  Technical Summary
  Capability               Included
  Local‑first storage      ✓
  Markdown editor          ✓
  Wiki linking             ✓
  Backlinks                ✓
  Interactive graph        ✓
  Folder hierarchy         ✓
  Tag system               ✓
  Command palette          ✓
  Image embedding          ✓
  Theme engine             ✓
  Portable vault format    ✓
  AES‑256 encrypted exports ✓
  Embeddable runtime       ✓
  Share cards              ✓
  Single‑file deployment   ✓
  
  Why OBSID-CLD Exists
  Most note‑taking software assumes your thoughts must eventually become someone else's database.
  OBSID-CLD explores the opposite direction: a knowledge system that runs entirely in the browser, stores data locally, visualizes connections, exports itself as a portable vault, and can be deployed by copying a single file.
  No installation. No subscription. No infrastructure.
  Just notes, links, graphs, and ownership.

  Vault.obsid file format
  This file format is made in a way in which is can store an entire vault and in addition to that it can encrypt it, meaning if i have a vault of notes and i export them as a .obsid file and set a password on them and send it to a friend, the friend can only view that in obsidcld.com after importing and entering the password.
  This also allows you to take an .md, .csv, .json, .txt file import it and convert it into a .obsid file and then you can take notes in and out of obsidcld and view them in this website alone, its essentially a tool that makes your notes invisible everywhere but obsidcld, and in this day and age i personally value my privacy and dont want my data to be collected.
  
  The only other place with password protected documentation and notes to be specific is google who track everything and store everything you write, obsid-cld offers that same functionality but private and WITH the note taking environment that i created for it such as backlinks, graphs etc.
  OBSID-CLD – A browser‑native, zero‑infrastructure knowledge operating system disguised as a note‑taking app.
        `
      }
    ]
  }
];

// ─── CURRENT PROJECTS (for the IDE window) ────────────────────────────────────
const CURRENT_PROJECTS: CurrentProject[] = [
  {
    id: "ikioi",
    title: "Ikioi",
    type: "Web App / Productivity",
    year: 2026,
    status: "Live",
    tags: ["React", "TypeScript", "Supabase", "Node.js", "Tailwind"],
    description: "Goal‑setting & daily execution platform that turns big ambitions into actionable tasks with AI assistance.",
    files: [
      {
        filename: "README.txt",
        details: `IKIOI – Turn Big Ambitions into Daily Actions
  
  Mission:
  Ikioi helps people stop overthinking and start doing. It provides clarity on what's achievable, prioritises what matters, and turns long‑term goals into a concrete daily schedule.
  
  Core Features:
  - Feasibility Meter: AI‑powered analysis that evaluates any goal based on your experience and timeframe (e.g. "run a marathon in 90 days"). Shows a score and gives actionable suggestions.
  - Smart Board (Lio AI): An intelligent chat assistant that reschedules tasks, finds free calendar slots, and updates your agenda automatically.
  - Agenda + Reminders: A clean daily view of tasks, organised by morning/afternoon/evening, with email, SMS, and Apple Calendar reminders.
  - Roadmaps: (See roadmaps.txt) Visual project planning with dependency mapping, team assignments, and AI‑balanced workloads.
  - Blog & Insights: Educational content about goal‑setting, habits, and productivity.
  
  Target Audience:
  Students, professionals, entrepreneurs, and anyone who struggles with consistency or feels overwhelmed by vague ambitions.
  
  Live at: https://ikioi.online
  `
      },
      {
        filename: "why.txt",
        details: `Why I built Ikioi
  
  Most people don't struggle with setting goals. They struggle with completing them – including myself. The problem isn't motivation; it's the lack of a system that makes success inevitable.
  
  Ikioi implements the Three‑Lens Goal Setting System, which breaks any goal down so that completion becomes nearly automatic.
  
  How it works:
  1. Goal → 2. Sequences → 3. Steps → 4. Scheduled actions
  
  Example: Getting a driver's licence
  - Goal: Obtain a full driving licence
  - Sequences: Pass practical test + Pass theory test (2 sequences)
  - Steps for practical: Book lessons twice a week, practice parking, master junctions
  - Steps for theory: Study highway code for 20 minutes every evening, take mock tests
  
  Each step is turned into a calendar event with smart reminders. If something comes up, Lio AI auto‑shuffles your schedule and syncs with your existing workflows (Google Calendar, Apple Calendar, etc.). When you complete all steps of a sequence, that sequence is done. When all sequences are done, the goal is finished – without you ever having to think about "how to stay motivated".
  
  This is the opposite of vague ambition. It's a deterministic path to completion, designed for people who want to stop dreaming and start doing.`
      },
      {
        filename: "roadmaps.txt",
        details: `Ikioi Roadmaps – Visual Project Management
  
  Turn any goal into a visual, executable plan – with your team.
  
  How it works:
  1. Describe your goal (e.g. "Launch my SaaS MVP in 90 days")
  2. AI generates a node graph: milestones, dependencies, time estimates
  3. Edit freely – add, remove, rename, reconnect nodes
  4. Invite teammates, assign nodes to specific people
  5. Break nodes into sub‑tasks and schedule them to your calendar (Lio AI slots them around existing commitments)
  6. Track progress: completion rates, workload distribution, blocked items, real‑time updates
  
  The node canvas shows every task as a connected node. Dependencies are visible, blockers surface immediately, and each node has a title, description, time estimate, assignee, and status (not started, in progress, blocked, done).
  
  Team features (Premium):
  - Assignment: assign nodes to one or more people
  - Comments: leave feedback on any node
  - Permissions: Owner (full control), Member (can update and comment), Viewer (read‑only)
  
  Analytics (Premium):
  - Workload distribution per team member
  - Completion rate per phase and per person
  - Blocked tasks list with downstream impact
  - Timeline vs actual – compare AI estimates to real completion dates
  
  Use cases: product launches, learning a skill, fitness training, team projects.
  
  Status: Beta – core functionality is live. Features ship based on user feedback.`
      },
      {
        filename: "results.txt",
        details: `Ikioi – Metrics & User Feedback (June 2026)
  
  As of June 2026:
  
  - Registered users: 1,832
  - Monthly recurring users: 430
  - Goals created: 16,285
  - Tasks completed: 178,000
  - Task growth: ~2,000 new tasks completed per week
  
  User completion rates (goals set > 30 days ago):
  - Users who use Analytics + AI adjustments + daily calendar sync: 58% completion rate
  - Users who only set goals without calendar use or analytics: 19% completion rate
  
  User feedback (May–June 2026):
  
  "Honestly I didn't even know I needed something like this, it's just simple and easy to use. I've been using this for 3 weeks now and going from winging your entire day to having structure is huge, it made me realise that I in fact do have enough time for basically everything I need to do."
  
  — Armaan, Mechanical Engineer
  
  "I used to use Notion to plan everything, but I'd end up spending more time thinking about my schedule than actually following it. With Ikioi, it's WAY easier because I already know what I need to do, I can slot things into place quickly, set reminders to my phone, and just get on with it without fuss."
  
  — Julia, Med Student`
      }
    ],
    url: "https://ikioi.online",
  },
  {
    id: "synthropic",
    title: "Synthropic",
    type: "Web App / AI",
    year: 2026,
    status: "Building",
    tags: ["React", "TypeScript", "Tailwind", "Node.js", "Shopify"],
    description: "AI-powered dropshipping store builder – niche discovery, product margin analysis, brand kit, ad creatives, and store management.",
    files: [
      {
        filename: "README.txt",
        details: `Synthropic – Build, Launch, Scale. Fast.
  
  Mission:
  Synthropic helps dropshippers skip the guesswork and go from idea to launched store in a single workflow. AI handles niche analysis, product selection, brand creation, ad copy, theme generation, and store export.
  
  Core Features:
  - Niche scoring: AI evaluates 500+ niches by competition, brandability, trend, and margin.
  - Product margin analysis: Real cost data with predicted margin percentages.
  - Store validation score: 0–10 rating based on market demand, risk, and profitability.
  - Brand kit generation: Name, logo direction, colour palette – instant.
  - Domain availability checker: Live search with best-price guarantee.
  - Marketing playbook: TikTok, Instagram, Facebook ad hooks and scripts.
  - Creative generation: Scroll‑stopping hooks and video scripts.
  - One‑prompt Shopify theme: Describe your store, get a production‑ready Liquid theme.
  - One‑click export: Download products.csv, brand-kit.md, ad-copy.md, theme prompt, and more.
  
  Target audience:
  Solopreneurs, small teams, and enterprises launching or scaling dropshipping stores.
  
  Live at: (coming soon)
  `
      },
      {
        filename: "why.txt",
        details: `Why I built Synthropic
  
  Even though platforms like Shopify have made it incredibly easy to start a store technically, most people still fail because they don't know where they fit in the market. They struggle to find a niche, to find winning products, to create a brand that stands out, and to produce creatives that actually convert.
  
  Synthropic alleviates all of that.
  
  What Synthropic does:
  - Finds new niches and scores them by competition, demand, and profitability.
  - Identifies well‑performing products within each niche, with real margin data.
  - Provides a website builder that lets you manage your store's UI directly from our platform.
  - Helps you manage products and creatives in one place.
  - Gives advanced analytics and KPIs to track what's working and what isn't.
  
  The AI engine – Synthropic‑V1 – is a custom‑built model dedicated to generating high‑performing creatives for Meta, TikTok, and Google Ads. It learns from real ad data to write hooks, scripts, and copy that stop the scroll.
  
  But Synthropic isn't only for new stores. It can also connect to your existing Shopify store, pull your product and sales data, and provide highly detailed analytics – helping you scale without switching tools.
  
  Whether you're starting from zero or already have a store, Synthropic gives you a clear sense of direction. You'll finally know where you stand in the market and exactly what to do next.`
      }
    ],
    url: "",
  },
];

// "What I'm up to" notepad tabs
const UP_TO_TABS: { label: string; title: string; content: string }[] = [
  {
    label: "Coding",
    title: "Coding project - logs",
    content: `### Open-Source Galactic Hydrogen Mapping System

Alongside the software applications I am developing, I am contributing to an open-source radio astronomy project focused on detecting and mapping the 1.42 GHz neutral hydrogen line emitted throughout the Milky Way. The objective is to create a low-cost hardware and software pipeline capable of turning an affordable DIY radio telescope into a scientific instrument for Galactic hydrogen mapping.

The project combines radio-frequency electronics, FPGA development, embedded systems, digital signal processing, and scientific software engineering. It is a collaborative effort involving several contributors with different areas of responsibility.

A custom 1.42 GHz front-end receiver, designed by a collaborator, captures hydrogen-line signals from the sky and feeds them into an FPGA-based processing system. The FPGA performs high-speed signal acquisition and spectral analysis before transmitting processed data to a Raspberry Pi for further processing and storage.

My primary responsibility is developing the Python software stack that makes the hardware usable and accessible. This includes:

* Writing Python drivers to communicate with the FPGA over SPI, USB, or serial interfaces using libraries such as PySerial and pyftdi.
* Building real-time data-processing pipelines using NumPy and SciPy for calibration, noise reduction, bandpass correction, spectral averaging, and hydrogen-line peak detection.
* Developing visualisation tools using Matplotlib, Plotly, and web-based dashboards to display live spectra and observation data.
* Creating data-logging and storage systems using SQLite or PostgreSQL to record observations, timestamps, telescope pointing information, and location data for later analysis and mapping.
* Developing integration scripts and automation tools to simplify observations and data collection.
* Contributing to documentation, testing, and open-source collaboration workflows through GitHub, shared documentation, and code reviews.

Another collaborator is developing the mechanical tracking mount used to position the telescope, while the wider team contributes to hardware design, testing, and validation. Development is coordinated through GitHub repositories, shared documentation, and online collaboration platforms.

Beyond producing a working hydrogen-line telescope, the project provides practical experience in digital signal processing, embedded systems, hardware-software integration, scientific computing, data visualisation, and collaborative software engineering. The long-term vision is to establish a reusable open-source framework for low-cost scientific instrumentation.

The knowledge gained from this project will also support future developments, including custom software-defined radio receivers, FPGA-based signal-processing systems, automated tracking platforms, and computer-controlled optical imaging systems. These future projects may combine RF tracking data with motorised mounts and high-resolution cameras to track and image aircraft, satellites, and astronomical objects against the night sky.

Through this project, I am gaining hands-on experience in designing software for real-world scientific instruments while working within a multidisciplinary engineering team to solve practical hardware and software challenges.
`,
  },
  {
    label: "Music",
    title: "Music — House Music",
    content: `I have a friend who's a DJ and hes pretty good at it, earlier this year i got into making house music. I tried out making beats, like rap beats first but i didnt like it at all those are super boring and so i switched to producsing some house and i quite enjoy it, i just use FL Studio and i've made some mixed that got a couple thousand views on youtube. I havent had the time recently tho to keep up with it but im hoping to make more stuff soon"`,
  },
  {
    label: "Running",
    title: "Running — Weekly Mileage",
    content: `Running has become my main decompression tool. I try to run 1–2 times a week, sometimes 3, aiming for a 5K or a 10K. It's my favourite form of exercise right now – much more refreshing and relaxing than lifting weights, which I've started to get bored of.
  
  I'm planning to run a half‑marathon or a full marathon soon with friends. For that, I'll probably have to dial in on my diet and training in preparation.
  
  After a bit of inconsistency, I went out for my most recent run and actually got a new 5K record: 6KM at 5:22/KM, total time 32 minutes and 10 seconds.`,
  },
  {
    label: "Electronics",
    title: "Electronics — Bench Notes",
    content: `My electronics work sits at the intersection of software and hardware. I've been studying radar systems, LiDAR sensor fusion, and robotics control loops — partly out of curiosity, partly because I find the overlap with embedded C++ compelling.
  
  Current bench project: a robotic hand that mirrors the hand movements of a person in real time using a camera and Python. The code uses MediaPipe to detect hand landmarks, then maps the finger joint angles to servo commands sent over serial to an Arduino. The tricky part is smoothing the motion to avoid jitter, handling occlusion, and calibrating each servo's range of motion so the physical hand accurately mimics human gestures without breaking.
  
  I ordered all the 3D printed components and shells for the arm and hand. However, my computer got messed up and I lost the Python code. Even if I fix the computer, I won't get my code back. I feel completely demotivated to rewrite it from scratch, so this project is on pause for now.
  
  Another small project i did was i build a mini radar system, was pretty fun.`,
  },
  {
    label: "Reading",
    title: "Reading — Current List",
    content: `I'm trying to maintain a rate of 2 books a month, mixing non‑fiction and fiction to keep things fresh. The last book I finished was Sapiens by Yuval Noah Harari – a brilliant overview of human history and how our species came to dominate the planet.
  
  Right now I'm reading Neuromancer by William Gibson. It's a 1984 kind of book – but instead of Orwell's totalitarian state, Gibson envisions a gritty, high‑tech future of cyberspace, artificial intelligences, and corporate warfare. It's super interesting and feels eerily prescient.
  
  The mix matters to me. A week of dense Dostoevsky followed by something like Poor Charlie's Almanack creates interesting cross‑pollination. Mental models from investing apply to engineering; narrative structure from fiction applies to product design.`,
  },
];

// ─── Interests with retro terminal content (light mode, image support) ────────
// Images are optional – pass null if you don't have one yet, and add later.
interface InterestData {
  iconUrl: string;
  name: string;
  desc: string;
  terminal: string;
  images?: string[]; // optional array of image URLs or imported paths
}

const INTERESTS_DATA: InterestData[] = [
  {
    iconUrl: "https://win98icons.alexmeub.com/icons/png/joystick-4.png",
    name: "Star Wars",
    desc: "Galaxy far, far away",
    terminal: `C:\Netjuga\interests> open starwars.txt

I like star wars, the new stuff is bad but i still love it. Andor and rogue one are peak.

C:\Netjuga\interests> _`,
    images: [], // add your Star Wars images here, e.g. [swImg1, swImg2]
  },
  {
    iconUrl: "https://win98icons.alexmeub.com/icons/png/progman_16-4.png",
    name: "Hackathons",
    desc: "Builder",
    terminal: `C:\Netjuga\interests> open hackathons.txt

I enjoy going to hackathons from time to time, i usually just go with friends to experience it, i usually dont actually take part because im not always confident, however the last one i went to i was pretty confident in my ability and i did better than i thought i was going to do. I hope to go to more soon.

C:\Netjuga\interests> _`,
    images: [], // add hackathon photos here
  },
  {
    iconUrl: "https://win98icons.alexmeub.com/icons/png/joystick-4.png",
    name: "Minecraft",
    desc: "Hardcore world since age 12",
    terminal: `C:\Netjuga\interests> open minecraft.txt

 I love minecraft, i only really play on the same hardcore world i've been playing on since i was 12 which means i've been on this world for around 8-9 years now, and for anyone reading who doesn't know what hardcore is, its a difficulty which makes it so that when you die you can never play on the world again and i havent died in the entire time i've been on this world. I've done everything there is to do in minecraft at this point so i just go ahead with big building projects, the last one i did was inspired by cyber punk 2077 but i didnt end up finishing it, ill have some pictures/videos of the world from 2018 up until 2025. 

C:\Netjuga\interests> _`,
    images: [], // add minecraft world screenshots here
  },
  {
    iconUrl: "https://win98icons.alexmeub.com/icons/png/progman_14-4.png",
    name: "Competitive Programming",
    desc: "Algorithms & problem solving",
    terminal: `C:\Netjuga\interests> open comp_prog.txt

Competitive programming is great fun—right up until some super talented Indian or Chinese contestant completely destroys my rating. I'll include a few screenshots of my rankings on Codeforces and other platforms.
Realistically, I probably won't be reaching any top ranks anytime soon since I don't have as much time to practice as I used to, but I still enjoy taking part in contests and solving problems. Beyond being fun, competitive programming is also a fantastic way to strengthen a wide range of technical skills.
Most people think of data structures and algorithms first, but it also improves problem-solving, logical reasoning, pattern recognition, optimization techniques, mathematical thinking, debugging skills, code efficiency, time management under pressure, and the ability to break complex problems into smaller, manageable parts. 
Even if I'm not chasing a high rank, I find it rewarding because it keeps my programming skills sharp , constantly exposes me to new ways of thinking about problems, and has helped me connect with great people in the space that i otherwise would never have met.

C:\Netjuga\interests> _`,
    images: [cf1image, cf2image],
  },
  {
    iconUrl: "https://win98icons.alexmeub.com/icons/png/computer_explorer_connected-4.png",
    name: "Modding",
    desc: "Hardware modding & ethical hacking tools",
    terminal: `C:\Netjuga\interests> open modding.txt

 Modding is one of those interests that sits right at the edge
 of software and hardware, which is exactly why I like it.

I've worked on hardware and software projects involving wireless communications, network analysis, and embedded systems. Using devices such as a modified ESP32-2432S028, I've experimented with techniques like signal interference testing, Bluetooth device emulation, network simulation, and protocol analysis to better understand how modern wireless technologies operate.
My interest is purely educational and research-oriented—I enjoy exploring the capabilities of small, low-cost devices and learning how hardware and software can be combined to interact with complex communication systems. It's impressive how much functionality can be packed into such compact hardware, and these projects have given me hands-on experience with networking, radio communications, embedded programming, and cybersecurity concepts.

I also mess around with other devices like a PSP for example which i completely took apart and reconstructed to make it fit to the way i wanted it.
C:\Netjuga\interests> _`,
    images: [],
  },
];

const SKILL_PROJECTS: Record<string, SkillProject[]> = {
  "React": [
    {
      title: "CodeSum — AI Code Assistant",
      description: "AI‑powered code generation & analysis",
      prefix: "I built CodeSum in 2024 as an AI coding assistant to help people get started with programming. ",
      details: "It's built with React + Tailwind and integrates the OpenAI API. Users describe what they want to code in plain English, and the app returns production‑ready code, documentation, and error detection. The frontend handles streaming responses, syntax highlighting, and a responsive layout, at the time there werent many platforms dedicated to helping people start coding given the influx of people getting into it with AI making it easier, thats why i built it and it ended up getting some traction on hacker news and 7 github stars",
      tags: ["React","Tailwind","OpenAI API"],
      year: 2024,
      status: "Live"
    },
    {
      title: "Ikioi — Goal Execution Platform",
      description: "Turn vague ambitions into daily tasks with AI scheduling",
      prefix: "Ikioi is built entirely from react, typescript and javascript. Ikioi is a plaform i started building in january of 2026 which is designed to make goal setting functional and achievable, most people set goals without the systems to actually get them done and thats what ikioi fixes.  ",
      details: "React is great for these kind of projects and apps, the options you have on what kind of UI you want to make is unreal.",
      tags: ["React","TypeScript","Tailwind"],
      year: 2026,
      status: "Live",
      resources: ["https://ikioi.online"]
    },
  ],
  "TypeScript": [
    {
      title: "Ikioi — Full‑stack TypeScript",
      description: "End‑to‑type safety from database to UI",
      prefix: "For Ikioi, I used TypeScript across the entire stack. React frontend, Node.js backend, and Supabase typed client all share types. Zod validates runtime data, and shared types prevent mismatches. This eliminated an entire class of bugs during development. ",
      details: "Typescript makes up the bulk of functionality in this platform, building this app in the short amount of time i did (had it live after 2 weeks of development) taught me a lot and enhanced my TS ability significantly.",
      tags: ["TypeScript","React","Node.js","Zod"],
      year: 2026,
      status: "Live"
    },
  ],
  "Node.js": [
    {
      title: "CodeSum — Backend API",
      description: "Node.js + Express + OpenAI",
      prefix: "It handles prompt engineering, token optimisation, streaming responses to the frontend, rate limiting, request logging, and a simple cache for repeated prompts.",
      details: "i wrote most of the backend with node.js and the backend was mongodb which was pretty fun to use, at the time it was pretty popular and i was getting acclimated to it although im not sure id go with the document-oriented database today lol.",
      tags: ["Node.js","Express","OpenAI API"],
      year: 2024,
      status: "Live"
    },
    {
      title: "Ikioi — Backend & Lio AI",
      description: "Node.js + Supabase + AI agent",
      prefix: "I architected Ikioi's backend using Node.js and Express, building a robust REST API and real‑time WebSocket server that powers live agenda updates, goal tracking, and AI orchestration. ",
      details: "The Lio AI agent continuously analyses your progress toward each goal, detects gaps in your calendar, and automatically reschedules tasks to optimise your day. It uses smart planning heuristics – prioritising high‑impact work, respecting deadlines, and adapting to your energy patterns. I also wrote Supabase Edge Functions that trigger personalised email reminders and two‑way sync with Google Calendar and Apple Calendar. This ensures your schedule is always up‑to‑date, whether you're checking the web app or receiving a notification on your phone. The AI even predicts when you're falling behind and suggests micro‑adjustments to keep your goals on track.",
      tags: ["Node.js","Express","WebSockets","Supabase"],
      year: 2026,
      status: "Live"
    },
  ],
  "Swift": [
    {
      title: "Chapterly — iOS Reading Tracker",
      description: "Native iOS app with SwiftUI & UIKit",
      prefix: "I created Chapterly, a native iOS reading tracker, using SwiftUI and UIKit. I also built a widget that i still have on my phone to this day from which you can start a reading timer and stop it in which case the accumulated time gets added to your reading logs which keep track of how much you are reading, and what you are reading. There were a few apps like this that existed back then and there are probably some that still do exist now however they either had terrible UI or paywalled so i built this to tackle both.",
      details: "Users can track reading progress, take notes, and view statistics – all offline. Core Data handles local persistence.",
      tags: ["Swift","SwiftUI","UIKit","Core Data"],
      year: 2024,
      status: "Completed",
    },
  ],
  "C++": [
    {
      title: "Algorithmic Trading Bot",
      description: "Low‑latency C++ bot for live markets",
      prefix: "I developed a low-latency, high-frequency algorithmic trading platform in modern C++ that interfaces directly with live exchange WebSocket market data feeds. I designed and implemented a quantitative research pipeline incorporating large-scale historical backtesting, Monte Carlo simulations, walk-forward analysis, and statistical validation frameworks to evaluate strategy robustness across varying market regimes, volatility conditions, and liquidity profiles. ",
      details: "The system performs real-time market microstructure analysis through full order book reconstruction, market depth modelling, and event-driven signal generation to execute quantitative mean-reversion strategies. Built using advanced C++ concurrency primitives, lock-free data structures, custom memory allocators, NUMA-aware optimisations, and multithreaded processing pipelines, it minimizes latency and memory overhead while sustaining high message throughput. The execution engine supports sub-millisecond order routing and risk management on co-located infrastructure, enabling deterministic performance in latency-sensitive trading environments.",
      tags: [
        "C++20",
        "High-Frequency Trading",
        "Algorithmic Trading",
        "Quantitative Finance",
        "Market Microstructure",
        "WebSockets",
        "Low Latency Systems",
        "Multithreading",
        "Lock-Free Programming",
        "Custom Memory Allocators",
        "Order Book Reconstruction",
        "Monte Carlo Simulation",
        "Backtesting",
        "Linux",
        "Performance Optimization"
      ],
      year: 2025,
      status: "Live",
      images: [tbImage1, tbImage2, tbImage3]
    },
    {
      title: "Unreal Engine game development",
      description: "Unreal Engine 5 game dev experiments",
      prefix: "I built a few small projects in unreal engine, my very first project was in 2022 where i used c++ and blueprints to try and make a mini soulsborne type of game, i began with the environments and maps and learnt a lot about 3d animations and mapping, i then went on to make some UI and enemies to fight however i don't have videos of that :(, i then went ahead a little later and made another experimental game that got a lot further than the first which was a game where you spawn in a barn, find clues from different npc's and locations on how to get out of the place youre in and then you fight some enemies and win, game devlopment is super fun and it picks your brain to the same level embedded systems softare does. I might try to make a game in the future again if i have time, its super fun. ",
      details: "i created custom movement mechanics, interactive objects, and simple enemy AI. I used this project to learn Unreal's Blueprint system, animation blueprints, and environment design alongside some c++ which allowed me to truly see how my memory was being allocated and how classes behaved which is more unique to game development compared to other c++ development.",
      tags: ["Unreal Engine","Blueprints","Game Design", "cpp"],
      year: 2022,
      status: "Prototype",
      images: [placeholderImg],
    },
    {
      title: "NetSentry — Network Intrusion Detection",
      description: "High-performance network threat detection and traffic analysis engine in C++",
      prefix: "I designed and developed NetSentry, a high-performance network intrusion detection platform in modern C++ that performs real-time deep packet inspection (DPI) on live network traffic. Built on top of libpcap and Linux packet capture facilities, the system analyses network flows at wire speed while maintaining minimal processing overhead. ",
      details: "The platform reconstructs network sessions, parses multiple protocol layers, and combines signature-based detection with statistical anomaly analysis to identify suspicious behaviour, reconnaissance activity, protocol abuse, and potential intrusion attempts. It incorporates stream reassembly, flow tracking, rule-based threat detection, and behavioural heuristics to provide visibility into network activity. Engineered as a Linux daemon with asynchronous packet processing, multithreaded analysis pipelines, and an ncurses-powered monitoring interface, the system delivers low-latency threat detection and real-time operational telemetry for security monitoring environments.",
      tags: ["C++20","libpcap","Linux","Networking"],
      year: 2023,
      status: "Beta"
    },
  ],
  "Python": [
    {
      title: "Open-Source Galactic Hydrogen Mapping System",
      description: "Scientific instrumentation software for radio astronomy",
      prefix: "I contribute to an open-source radio astronomy project focused on detecting and mapping the 1.42 GHz neutral hydrogen emission line across the Milky Way. The project combines FPGA-based signal acquisition, embedded systems, radio-frequency instrumentation, and scientific computing to transform low-cost radio telescopes into capable astronomical research instruments. ",
      details: "My primary responsibility is developing the Python software stack that interfaces with FPGA hardware and enables data acquisition, calibration, processing, and visualisation of hydrogen-line observations. I develop hardware communication layers using SPI, USB, and serial interfaces, implement digital signal processing pipelines with NumPy and SciPy for spectral analysis and noise reduction, and build tools for real-time visualisation, automated observations, and long-term data storage. The software supports spectral averaging, bandpass correction, peak detection, observation logging, and data management, providing an end-to-end platform for collecting and analysing radio astronomy data. Development is conducted collaboratively through GitHub using open-source engineering practices, documentation, testing, and peer review workflows.",
      tags: ["Python","Digital Signal Processing","Data Visualisation","PostgreSQL"],
      year: 2026,
      status: "Live"
    },
    {
      title: "Vision-Controlled Robotic Hand",
      description: "Real-time computer vision and robotics control system",
    
      prefix: "I developed a computer-vision-driven robotics system that enables a multi-servo robotic hand to mirror human hand movements in real time. The project combines machine vision, embedded systems, and control engineering by translating live hand-tracking data into physical actuator commands.",
    
      details: "Using MediaPipe and OpenCV, the software extracts 3D hand landmarks from a camera feed and computes finger joint angles that are mapped to servo positions on an Arduino-controlled robotic hand. I implemented serial communication protocols, calibration routines, motion smoothing algorithms, and filtering techniques to reduce jitter and improve tracking stability. Particular focus was placed on handling landmark occlusions, compensating for servo range limitations, and maintaining natural movement replication through real-time kinematic transformations.",
    
      tags: [
        "Python",
        "Computer Vision",
        "MediaPipe",
        "OpenCV",
        "Robotics",
        "Embedded Systems",
        "Arduino",
        "Serial Communication",
        "Control Systems",
        "Hardware Integration"
      ],
    
      year: 2025,
      status: "Paused"
    }
  ],
  "PostgreSQL": [
    {
      title: "Synthropic — Dropshipping Analytics",
      description: "Multi‑tenant PostgreSQL schema",
      prefix: "For Synthropic, I designed a multi‑tenant PostgreSQL schema with row‑level security to isolate tenants. ",
      details: "I used materialised views to power real‑time dashboards and optimised indexes, reducing query times by 10×.",
      tags: ["PostgreSQL","Row-Level Security","Indexes"],
      year: 2026,
      status: "Building"
    },
  ],
  "Go": [
    {
      title: "Zettk‑CLI",
      description: "KISS Zettelkasten manager for the terminal",
      prefix: "I engineered Zettk-CLI, a high-performance command-line knowledge management system written in Go that provides a filesystem-native implementation of the Zettelkasten method. ",
      details: "The application leverages Go's standard library to deliver a dependency-free architecture for note indexing, discovery, retrieval, and journaling workflows. By treating Markdown documents as first-class data objects and integrating directly with user-defined editors, the tool maintains complete data portability while enabling rapid access to large note collections. The project emphasises clean software architecture, efficient filesystem operations, extensibility, and long-term maintainability through a minimal yet robust design philosophy.",
      tags: ["Go","CLI","Markdown"],
      year: 2025,
      status: "Live",
    },
  ],
  "Unreal Engine": [
    {
      title: "Unreal Engine game development",
      description: "Unreal Engine 5 game dev experiments",
      prefix: "I built a few small projects in unreal engine, my very first project was in 2022 where i used c++ and blueprints to try and make a mini soulsborne type of game, i began with the environments and maps and learnt a lot about 3d animations and mapping, i then went on to make some UI and enemies to fight however i don't have videos of that :(, i then went ahead a little later and made another experimental game that got a lot further than the first which was a game where you spawn in a barn, find clues from different npc's and locations on how to get out of the place youre in and then you fight some enemies and win, game devlopment is super fun and it picks your brain to the same level embedded systems softare does. I might try to make a game in the future again if i have time, its super fun. ",
      details: "i created custom movement mechanics, interactive objects, and simple enemy AI. I used this project to learn Unreal's Blueprint system, animation blueprints, and environment design alongside some c++ which allowed me to truly see how my memory was being allocated and how classes behaved which is more unique to game development compared to other c++ development.",
      tags: ["Unreal Engine","Blueprints","Game Design", "cpp"],
      year: 2022,
      status: "Prototype",
      images: [placeholderImg],
    },
  ],
  "Expo Go": [
    {
      title: "Ikioi Mobile (Expo)",
      description: "React Native mobile companion for Ikioi",
      prefix: "I developed the Ikioi mobile app with Expo Go. The ikioi mobile app is still in testing as of june 2026 since apple is very strict on almost everything within an app so that is whats delaying release, despite this i am still very excited for it, giving users a mobile experience for ikioi and having the convinience of recieving phone notifications for tasks instead of just emails is going to be fantastic and grow the user base (or so i hope). ",
      details: "It syncs with the Ikioi backend to display the daily agenda, receive push reminders, and let users quickly check off tasks. I used React Navigation, AsyncStorage for offline caching, and Expo's notification API. It will be available on both iOS and Android via Expo Go.",
      tags: ["Expo Go","React Native","TypeScript"],
      year: 2026,
      status: "Beta",
    },
  ],
};

const BACKGROUNDS: Background[] = [
  { name: "Windows XP",    type: "image", value: `url('${windowsXP}') center/cover no-repeat` },
  { name: "Bliss",         type: "image", value: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bliss_Windows_XP.jpg/1280px-Bliss_Windows_XP.jpg') center/cover no-repeat" },
  { name: "Teal",          type: "color", value: "#008080" },
  { name: "Midnight Blue", type: "color", value: "#1a1a4e" },
  { name: "Olive",         type: "color", value: "#6b7b3a" },
  { name: "Slate",         type: "color", value: "#4a5568" },
  { name: "Crimson",       type: "color", value: "#7b1a1a" },
  { name: "Forest",        type: "color", value: "#1a4a2e" },
];

const ABOUT_STATS = [
  { value: "3+",   label: "Years coding",      detail: "I started properly coding in 2022, before then i was making some gta mod menus and trying to make roblox games so it was nothing too serious but i started to really enjoy it more and more the better and more proficient i got in it, now i make random tools, programs and apps that (usually) have utility and are helpful." },
  { value: "7+",   label: "Projects shipped",  detail: "Across iOS apps, web platforms, CLI tools, cybersecurity tools, trading algorithms, and embedded pyhton code . Every project was built to solve a real problem or explore a genuinely interesting technical challenge, some of them had a benefit to me because they kept me not bored, some made me money and some advanced my knowledge, i feel as though i somtimes learn more from one project than i would do if i were to just study theory for a year." },
  { value: "2",    label: "Live startups",     detail: "Ikioi (goal-execution platform, 1,800+ users) and StudentWire (career guidance for students, live and accepting users). Both built solo from zero to production." },
  { value: "10k+", label: "Users reached",     detail: "Across StudentWire, Ikioi, CodeSum, and OBSID-CLD combined. Real users, not signups — people who have actively used the products." },
];

const SKILLS = ["React","TypeScript","Node.js","Swift","C++","Python","PostgreSQL","Go","Unreal Engine","Expo Go"];

// ─── XP Icon URLs ─────────────────────────────────────────────────────────────
const ICON_BOOK    = "https://win98icons.alexmeub.com/icons/png/msagent-4.png";
const ICON_PAINT   = "https://win98icons.alexmeub.com/icons/png/display_properties-4.png";
const ICON_NOTEPAD = "https://win98icons.alexmeub.com/icons/png/notepad-4.png";
const ICON_FOLDER  = "https://win98icons.alexmeub.com/icons/png/directory_closed-4.png";
const ICON_TOOLS   = "https://win98icons.alexmeub.com/icons/png/settings_gear-4.png";
const ICON_MUSIC   = "https://win98icons.alexmeub.com/icons/png/cd_audio_cd_a-4.png";
const ICON_STICK   = "https://win98icons.alexmeub.com/icons/png/joystick-4.png";
const ICON_USER    = "https://win98icons.alexmeub.com/icons/png/user-4.png";
const ICON_SEARCH  = "https://win98icons.alexmeub.com/icons/png/search-4.png";
const ICON_MAIL    = "https://win98icons.alexmeub.com/icons/png/mail_inbox-4.png";
const ICON_PC      = "https://win98icons.alexmeub.com/icons/png/computer_explorer_connected-4.png";
const ICON_TEXT    = "https://win98icons.alexmeub.com/icons/png/file_text-4.png";
const ICON_CHART   = "https://win98icons.alexmeub.com/icons/png/progman_14-4.png";
const ICON_RUN     = "https://win98icons.alexmeub.com/icons/png/run-4.png";
const ICON_CLOCK   = "https://win98icons.alexmeub.com/icons/png/clock-4.png";
const ICON_WORLD   = "https://win98icons.alexmeub.com/icons/png/world_connected-4.png";
const ICON_HELP    = "https://win98icons.alexmeub.com/icons/png/help_book_small-4.png";
const ICON_FILE_TEXT = "https://win98icons.alexmeub.com/icons/png/file_text-4.png";
const ICON_FILE_IMAGE = "https://win98icons.alexmeub.com/icons/png/paint_old-4.png";
const ICON_FILE_CODE = "https://win98icons.alexmeub.com/icons/png/notepad-4.png";
const ICON_MINECRAFT_BOOK = minecraftBook;
const ICON_OBSIDI = "https://win98icons.alexmeub.com/icons/png/card_file-4.png";
const ICON_FILE_VIDEO = "https://win98icons.alexmeub.com/icons/png/media_player-4.png";
const ICON_DEVICE = "https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png";

function XPImg({ size = 32, url }: { size?: number; url: string }) {
  return (
    <img
      src={url} alt="" width={size} height={size}
      style={{ imageRendering: "pixelated", display: "block", flexShrink: 0 }}
      onError={e => { (e.currentTarget as HTMLImageElement).style.visibility = "hidden"; }}
    />
  );
}

// ─── Shared title-bar button row ──────────────────────────────────────────────
function TitleButtons({ onClose }: { onClose?: () => void }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {(["_", "□", "×"] as const).map((c, i) => (
        <button key={c} onClick={i === 2 ? onClose : undefined} style={{
          background: i === 2 ? "#cc0000" : "#c0c0c0",
          border: "1px solid", borderColor: "#ffffff #808080 #808080 #ffffff",
          width: 17, height: 15, fontSize: 9, fontFamily: "monospace",
          cursor: "pointer", color: i === 2 ? "white" : "black",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>{c}</button>
      ))}
    </div>
  );
}

// ─── Menu Bar ─────────────────────────────────────────────────────────────────
function MenuBar() {
  const [open, setOpen] = useState<string | null>(null);
  const menus: Record<string, string[]> = {
    File: ["New Window","Close","---","Exit"],
    Edit: ["Cut","Copy","Paste","---","Select All"],
    View: ["Refresh","---","Large Icons","Small Icons","List","Details"],
    Help: ["Help Topics","---","About"],
  };
  return (
    <div style={{ background: "#ece9d8", borderBottom: "1px solid #808080", padding: "1px 0", display: "flex", position: "relative", zIndex: 10 }}>
      {Object.keys(menus).map(label => (
        <div key={label} style={{ position: "relative" }}>
          <button
            onMouseDown={() => setOpen(open === label ? null : label)}
            onMouseEnter={() => open && setOpen(label)}
            style={{ background: open === label ? "#000080" : "transparent", color: open === label ? "white" : "black", border: "none", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "default" }}
          >{label}</button>
          {open === label && (
            <div onMouseLeave={() => setOpen(null)} style={{ position: "absolute", top: "100%", left: 0, zIndex: 999, background: "#ece9d8", border: "2px solid", minWidth: 140, borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "3px 3px 6px rgba(0,0,0,0.4)" }}>
              {menus[label].map((item, i) =>
                item === "---"
                  ? <div key={i} style={{ height: 1, background: "#808080", margin: "3px 4px" }} />
                  : <div key={item} onClick={() => setOpen(null)} style={{ padding: "4px 20px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#000080"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "black"; }}
                    >{item}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Status Bar ───────────────────────────────────────────────────────────────
function StatusBar({ text }: { text: string }) {
  return (
    <div style={{ background: "#ece9d8", borderTop: "2px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 10, color: "#555", display: "flex", gap: 12, flexShrink: 0 }}>
      <div style={{ flex: 1, border: "1px inset #a0a0a0", padding: "1px 4px" }}>{text}</div>
      <div style={{ border: "1px inset #a0a0a0", padding: "1px 8px" }}>Ready</div>
    </div>
  );
}

// ─── Draggable + Resizable Window ────────────────────────────────────────────
interface DragWindowProps {
  title: string; iconUrl?: string; children: ReactNode;
  initialX?: number; initialY?: number; initialW?: number; initialH?: number;
  noClose?: boolean; onClose?: () => void; titleBarColor?: string; style?: CSSProperties;
}
function DragWindow({ title, iconUrl, children, initialX = 200, initialY = 80, initialW = 660, initialH = 520, noClose, onClose, titleBarColor, style = {} }: DragWindowProps) {
  const [pos, setPos]   = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ w: initialW, h: initialH });
  const dragging  = useRef(false);
  const resizing  = useRef(false);
  const dragStart = useRef({ mx: 0, my: 0, wx: 0, wy: 0 });
  const resStart  = useRef({ mx: 0, my: 0, ww: 0, wh: 0 });

  useEffect(() => {
    const onMove = (e: globalThis.MouseEvent) => {
      if (dragging.current)  setPos({ x: dragStart.current.wx + e.clientX - dragStart.current.mx, y: dragStart.current.wy + e.clientY - dragStart.current.my });
      if (resizing.current)  setSize({ w: Math.max(380, resStart.current.ww + e.clientX - resStart.current.mx), h: Math.max(300, resStart.current.wh + e.clientY - resStart.current.my) });
    };
    const onUp = () => { dragging.current = false; resizing.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, []);

  return (
    <div style={{ position: "fixed", left: pos.x, top: pos.y, zIndex: 50, width: size.w, height: size.h, background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "4px 4px 10px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", fontFamily: "Tahoma, sans-serif", ...style }}>
      <div
        onMouseDown={e => { if ((e.target as HTMLElement).tagName === "BUTTON") return; dragging.current = true; dragStart.current = { mx: e.clientX, my: e.clientY, wx: pos.x, wy: pos.y }; e.preventDefault(); }}
        style={{ background: titleBarColor || "linear-gradient(to right, #0a0adb, #1084d0)", padding: "3px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", userSelect: "none", cursor: "move", flexShrink: 0 }}
      >
        <span style={{ color: "white", fontWeight: "bold", fontSize: 12, display: "flex", alignItems: "center", gap: 5 }}>
          {iconUrl && <XPImg url={iconUrl} size={14} />}
          {title}
        </span>
        {!noClose && <TitleButtons onClose={onClose} />}
      </div>
      <MenuBar />
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>{children}</div>
      <div onMouseDown={e => { resizing.current = true; resStart.current = { mx: e.clientX, my: e.clientY, ww: size.w, wh: size.h }; e.preventDefault(); e.stopPropagation(); }}
        style={{ position: "absolute", right: 0, bottom: 0, width: 14, height: 14, cursor: "se-resize", backgroundImage: "radial-gradient(circle, #808080 1px, transparent 1px)", backgroundSize: "4px 4px", backgroundPosition: "2px 2px" }} />
    </div>
  );
}

// ─── Draggable modal window ───────────────────────────────────────────────────
function DraggableModal({ title, iconUrl, onClose, children, style = {}, noClose }: { title: string; iconUrl?: string; onClose?: () => void; children: ReactNode; style?: CSSProperties; noClose?: boolean; }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const dragging = useRef(false);
  const dragStart = useRef({ mx: 0, my: 0, wx: 0, wy: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: globalThis.MouseEvent) => {
      if (dragging.current && pos) {
        setPos({ x: dragStart.current.wx + e.clientX - dragStart.current.mx, y: dragStart.current.wy + e.clientY - dragStart.current.my });
      }
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [pos]);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      if (pos === null) {
        setPos({ x: rect.left, y: rect.top });
      }
      dragging.current = true;
      dragStart.current = {
        mx: e.clientX,
        my: e.clientY,
        wx: pos?.x ?? rect.left,
        wy: pos?.y ?? rect.top,
      };
    }
    e.preventDefault();
  };

  const containerStyle: CSSProperties = pos === null
    ? { position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 600, background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "4px 4px 10px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", fontFamily: "Tahoma, sans-serif", ...style }
    : { position: "fixed", left: pos.x, top: pos.y, zIndex: 600, background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "4px 4px 10px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", fontFamily: "Tahoma, sans-serif", ...style };

  return (
    <div ref={containerRef} style={containerStyle}>
      <div
        onMouseDown={handleDragStart}
        style={{ background: "linear-gradient(to right, #0a0adb, #1084d0)", padding: "3px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", userSelect: "none", cursor: "move", flexShrink: 0 }}
      >
        <span style={{ color: "white", fontWeight: "bold", fontSize: 12, display: "flex", alignItems: "center", gap: 5 }}>
          {iconUrl && <XPImg url={iconUrl} size={14} />}
          {title}
        </span>
        {!noClose && <TitleButtons onClose={onClose} />}
      </div>
      <MenuBar />
      <div style={{ background: "#ece9d8", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

// ─── Retro Terminal Popup (light mode, supports images) ──────────────────────
function TerminalPopup({ interest, onClose }: { interest: InterestData; onClose: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const full = interest.terminal;
  const hasImages = interest.images && interest.images.length > 0;

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplayed(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 10);
    return () => clearInterval(t);
  }, [full]);

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 950, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: hasImages ? 820 : 680,
          maxHeight: "85vh",
          background: "#f5f2eb",
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          boxShadow: "6px 6px 20px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Tahoma, sans-serif",
        }}
      >
        {/* Title bar */}
        <div style={{ background: "linear-gradient(to right, #0a0adb, #1084d0)", padding: "3px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <span style={{ color: "white", fontWeight: "bold", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
            <XPImg url={ICON_PC} size={14} />
            {interest.name} — Terminal
          </span>
          <TitleButtons onClose={onClose} />
        </div>

        {/* Menu bar strip */}
        <div style={{ background: "#ece9d8", borderBottom: "1px solid #c0c0c0", padding: "2px 8px", display: "flex", gap: 2, flexShrink: 0 }}>
          {["File","Edit","View","Help"].map(m => (
            <span key={m} style={{ fontFamily: "Tahoma, sans-serif", fontSize: 11, padding: "1px 6px", cursor: "default" }}>{m}</span>
          ))}
        </div>

        {/* Body: terminal text + optional images side by side */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Terminal text area */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 18px", background: "#fdfaf4", borderRight: hasImages ? "1px solid #c8c4bc" : "none" }}>
            <pre style={{
              color: "#1a1a2e",
              fontFamily: "'Courier New', monospace",
              fontSize: 12,
              lineHeight: 1.85,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}>
              {displayed}
              <span style={{ animation: "blink 1s step-end infinite", color: "#333" }}>█</span>
            </pre>
          </div>

          {/* Images panel (only rendered if images exist) */}
          {hasImages && (
            <div style={{ width: 200, overflowY: "auto", padding: "10px 8px", background: "#f0ede8", display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }}>
              <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 9, color: "#777", textAlign: "center", marginBottom: 4, letterSpacing: 1 }}>PHOTOS</div>
              {interest.images!.map((src, i) => (
                <div key={i} style={{ border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", background: "#c0c0c0", overflow: "hidden" }}>
                  <img
                    src={src}
                    alt={`${interest.name} ${i + 1}`}
                    style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 130 }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ background: "#ece9d8", borderTop: "2px solid #808080", padding: "5px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
          <span style={{ fontFamily: "monospace", fontSize: 9, color: "#666" }}>C:\Netjuga\interests\{interest.name.toLowerCase().replace(/\s/g, "_")}.txt</span>
          <button
            onClick={onClose}
            style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "2px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── IE Wiki Style Skill Detail Popup ────────────────────────────────────────
function SkillDetailPopup({ project, onClose }: { project: SkillProject; onClose: () => void }) {
  const slug = project.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const statusColor = (s: string) => s === "Live" ? "#00ff00" : s === "Beta" ? "#ffaa00" : "#4488ff";

  const tagRole: Record<string, string> = {
    "React": "Frontend UI framework",
    "TypeScript": "Type-safe JavaScript",
    "Node.js": "Backend runtime",
    "Swift": "iOS development language",
    "C++": "Systems programming",
    "Python": "Scripting and data",
    "PostgreSQL": "Primary database",
    "Go": "Concurrent systems language",
    "Unreal Engine": "Game development engine",
    "Expo Go": "React Native development tool",
    "Tailwind": "Utility CSS framework",
    "OpenAI API": "AI integration",
    "WebSockets": "Real-time communication",
    "Zod": "Runtime validation",
    "Supabase": "Backend-as-a-service",
    "JUCE": "Audio framework",
    "VST3": "Plugin format",
    "DSP": "Signal processing",
    "libpcap": "Packet capture",
    "Linux": "Deployment platform",
    "Networking": "Protocol layer",
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 980, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: 780, maxHeight: "90vh", background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "8px 8px 24px rgba(0,0,0,0.7)", display: "flex", flexDirection: "column" }}>
        <div style={{ background: "linear-gradient(to right, #0a0adb, #1084d0)", padding: "3px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <span style={{ color: "white", fontWeight: "bold", fontSize: 12, display: "flex", alignItems: "center", gap: 5 }}>
            <XPImg url={ICON_WORLD} size={14} />
            {project.title} — Microsoft Internet Explorer
          </span>
          <TitleButtons onClose={onClose} />
        </div>
        <MenuBar />
        <div style={{ background: "#ece9d8", borderBottom: "1px solid #808080", padding: "4px 8px", display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>◀</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>▶</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>■</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>↺</button>
          <div style={{ width: 1, height: 20, background: "#808080", margin: "0 4px" }} />
          <span style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, fontWeight: "bold" }}>Address</span>
          <input type="text" readOnly value={`https://netjuga.lol/projects/${slug}`} style={{ flex: 1, background: "white", border: "2px inset #808080", padding: "2px 6px", fontFamily: "monospace", fontSize: 11 }} />
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 12px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>Go</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>★</button>
        </div>
        <div style={{ overflowY: "auto", flex: 1, background: "white", padding: "24px 32px" }}>
          <hr style={{ border: "none", borderTop: "1px solid #c0c0c0", marginBottom: 16 }} />
          <h1 style={{ fontFamily: "Times New Roman, serif", fontSize: 28, color: "#000080", marginBottom: 4 }}>{project.title}</h1>
          <div style={{ fontFamily: "monospace", fontSize: 12, color: "#666", marginBottom: 12 }}>From Netjuga Wiki, the personal project encyclopaedia</div>
          <hr style={{ border: "none", borderTop: "1px solid #c0c0c0", marginBottom: 24 }} />
          <div style={{ float: "right", margin: "0 0 16px 24px", width: 260, border: "2px solid #a2a9b1", background: "#f8f9fa" }}>
            <div style={{ background: "#cee0f2", padding: "6px 10px", fontWeight: "bold", fontSize: 13, textAlign: "center" }}>{project.title}</div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ padding: "4px 8px", fontWeight: "bold", color: "#555", borderBottom: "1px solid #eaecf0" }}>Developer</td><td style={{ padding: "4px 8px", borderBottom: "1px solid #eaecf0" }}>Arslaan Ahmed</td></tr>
                <tr><td style={{ padding: "4px 8px", fontWeight: "bold", color: "#555", borderBottom: "1px solid #eaecf0" }}>Type</td><td style={{ padding: "4px 8px", borderBottom: "1px solid #eaecf0" }}>Software Project</td></tr>
                <tr><td style={{ padding: "4px 8px", fontWeight: "bold", color: "#555", borderBottom: "1px solid #eaecf0" }}>Year</td><td style={{ padding: "4px 8px", borderBottom: "1px solid #eaecf0" }}>{project.year}</td></tr>
                <tr><td style={{ padding: "4px 8px", fontWeight: "bold", color: "#555", borderBottom: "1px solid #eaecf0" }}>Status</td><td style={{ padding: "4px 8px", borderBottom: "1px solid #eaecf0" }}><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: statusColor(project.status) }} />{project.status}</span></td></tr>
                <tr><td style={{ padding: "4px 8px", fontWeight: "bold", color: "#555", borderBottom: "1px solid #eaecf0" }}>Stack</td><td style={{ padding: "4px 8px", borderBottom: "1px solid #eaecf0" }}>{project.tags.join(", ")}</td></tr>
                <tr><td colSpan={2} style={{ padding: "6px 8px", background: "#f0f0ff", textAlign: "center", fontSize: 12 }}><a href="#" style={{ color: "#0645ad", textDecoration: "none" }}>View Source</a></td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontFamily: "Times New Roman, serif", fontSize: 14, lineHeight: 1.9, marginBottom: 24 }}>
            {project.prefix || `${project.title} is a software project developed by Arslaan Ahmed in ${project.year}. `}
            {project.details}
          </p>

          <div style={{ border: "1px solid #a2a9b1", background: "#f8f9fa", display: "inline-block", padding: "12px 16px", marginBottom: 24 }}>
            <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 8 }}>Contents</div>
            <ol style={{ marginLeft: 20, fontSize: 13 }}>
              <li>Overview</li>
              <li>Technical Stack</li>
              <li>Development Notes</li>
              <li>Resources & Media</li>
              <li>Status</li>
            </ol>
          </div>
          <div style={{ clear: "both" }} />

          <h2 style={{ fontFamily: "Times New Roman, serif", fontSize: 20, borderBottom: "1px solid #a2a9b1", paddingBottom: 4, marginBottom: 12, marginTop: 8 }}>Overview</h2>
          <p style={{ fontFamily: "Times New Roman, serif", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            {project.description} The project was built to solve real problems and to push my understanding of {project.tags.join(", ")} in a production environment.
          </p>

          <h2 style={{ fontFamily: "Times New Roman, serif", fontSize: 20, borderBottom: "1px solid #a2a9b1", paddingBottom: 4, marginBottom: 12 }}>Technical Stack</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
            <thead><tr style={{ background: "#eaecf0" }}><th style={{ padding: "6px 12px", border: "1px solid #eaecf0", textAlign: "left" }}>Technology</th><th style={{ padding: "6px 12px", border: "1px solid #eaecf0", textAlign: "left" }}>Role</th></tr></thead>
            <tbody>
              {project.tags.map((tag, idx) => (
                <tr key={tag} style={{ background: idx % 2 === 0 ? "white" : "#f8f9fa" }}>
                  <td style={{ padding: "6px 12px", border: "1px solid #eaecf0" }}>{tag}</td>
                  <td style={{ padding: "6px 12px", border: "1px solid #eaecf0" }}>{tagRole[tag] || "Core dependency"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ fontFamily: "Times New Roman, serif", fontSize: 20, borderBottom: "1px solid #a2a9b1", paddingBottom: 4, marginBottom: 12 }}>Development Notes</h2>
          <pre style={{ background: "#f6f8fa", border: "1px solid #d0d7de", padding: "12px 16px", fontFamily: "'Courier New', monospace", fontSize: 11, lineHeight: 1.8, overflowX: "auto", marginBottom: 24, whiteSpace: "pre-wrap" }}>{project.details}</pre>

          {project.resources && project.resources.length > 0 && (
            <>
              <h2 style={{ fontFamily: "Times New Roman, serif", fontSize: 20, borderBottom: "1px solid #a2a9b1", paddingBottom: 4, marginBottom: 12 }}>Resources & Learning</h2>
              <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
                {project.resources.map((res, i) => (
                  <li key={i} style={{ fontSize: 13, lineHeight: 1.6 }}>
                    {res.startsWith("http") ? <a href={res} target="_blank" rel="noopener noreferrer" style={{ color: "#0645ad" }}>{res}</a> : res}
                  </li>
                ))}
              </ul>
            </>
          )}

          {project.images && project.images.length > 0 && (
            <>
              <h2 style={{ fontFamily: "Times New Roman, serif", fontSize: 20, borderBottom: "1px solid #a2a9b1", paddingBottom: 4, marginBottom: 12 }}>Screenshots</h2>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
                {project.images.map((img, i) => (
                  <img key={i} src={img} alt={`Screenshot ${i+1}`} style={{ maxWidth: 200, maxHeight: 150, border: "1px solid #ccc", objectFit: "cover" }} />
                ))}
              </div>
            </>
          )}

          {project.videos && project.videos.length > 0 && (
            <>
              <h2 style={{ fontFamily: "Times New Roman, serif", fontSize: 20, borderBottom: "1px solid #a2a9b1", paddingBottom: 4, marginBottom: 12 }}>Demo Videos</h2>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
                {project.videos.map((vid, i) => (
                  <video key={i} controls style={{ maxWidth: 300, maxHeight: 200, border: "1px solid #ccc" }}>
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            </>
          )}

          <h2 style={{ fontFamily: "Times New Roman, serif", fontSize: 20, borderBottom: "1px solid #a2a9b1", paddingBottom: 4, marginBottom: 12 }}>Status</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#f0f0f0", padding: "4px 12px", border: "1px solid #ccc" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: statusColor(project.status) }} />
              <span style={{ fontWeight: "bold" }}>{project.status}</span>
            </span>
            <span style={{ fontSize: 14 }}>
              {project.status === "Live" ? "It is deployed and actively maintained." :
               project.status === "Beta" ? "It is in active testing." : "It is under active development."}
            </span>
          </div>
          <div style={{ clear: "both" }} />
        </div>
        <div style={{ background: "#ece9d8", borderTop: "2px solid #808080", padding: "2px 8px", fontFamily: "monospace", fontSize: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
          <span>Done</span>
          <span style={{ border: "1px inset #a0a0a0", padding: "1px 6px" }}>Internet zone</span>
        </div>
      </div>
    </div>
  );
}

// ─── Skills Panel ────────────────────────────────────────────────────────────
import searchIcon from "../images/search-icon.png";

function SkillsPanel() {
  const [hovered, setHovered]       = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [detailProject, setDetailProject] = useState<SkillProject | null>(null);
  const tagColour = (t: string) => ({ "C++":"#004488","React":"#00bbdd","Swift":"#ff7700","Python":"#3070bb","AWS":"#ff9900","PostgreSQL":"#336699","TypeScript":"#1a4a8a","Node.js":"#338833" } as Record<string,string>)[t] || "#555577";
  const projects = activeSkill ? (SKILL_PROJECTS[activeSkill] || []) : [];

  const renderEmpty = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 320, textAlign: "center", padding: "24px", color: "#555" }}>
      <img src={searchIcon} alt="search" style={{ width: 96, height: 96, imageRendering: "pixelated", marginBottom: 16 }} />
      <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 16, fontWeight: "bold", marginTop: 8, marginBottom: 8, color: "#000080" }}>No results</div>
      <div style={{ fontFamily: "monospace", fontSize: 11, color: "#666", maxWidth: 260 }}>Select a skill from the chips above</div>
    </div>
  );

  const renderNoResults = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 320, textAlign: "center", padding: "24px", color: "#555" }}>
      <img src={searchIcon} alt="search" style={{ width: 96, height: 96, imageRendering: "pixelated", marginBottom: 16 }} />
      <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 16, fontWeight: "bold", marginTop: 8, marginBottom: 8, color: "#000080" }}>No results for "{activeSkill}"</div>
      <div style={{ fontFamily: "monospace", fontSize: 11, color: "#666", maxWidth: 260 }}>Try another skill</div>
    </div>
  );

  return (
    <>
      {detailProject && <SkillDetailPopup project={detailProject} onClose={() => setDetailProject(null)} />}
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ padding: "10px 14px", borderBottom: "1px solid #c0c0c0", flexShrink: 0 }}>
          <div style={{ fontFamily: "monospace", fontSize: 10, color: "#555", marginBottom: 8 }}>Click a skill chip to see related projects</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {SKILLS.map(sk => (
              <div key={sk} onClick={() => setActiveSkill(activeSkill === sk ? null : sk)}
                onMouseEnter={() => setHovered(sk)} onMouseLeave={() => setHovered(null)}
                style={{ padding: "5px 12px", fontFamily: "monospace", fontSize: 11, cursor: "pointer", userSelect: "none",
                  background: activeSkill === sk ? "#000080" : hovered === sk ? "#800080" : "#c0c0c0",
                  color: activeSkill === sk || hovered === sk ? "white" : "black",
                  border: "2px solid",
                  borderColor: activeSkill === sk ? "#0000cc #000040 #000040 #0000cc" : hovered === sk ? "#cc44cc #400040 #400040 #cc44cc" : "#ffffff #808080 #808080 #ffffff",
                  display: "flex", alignItems: "center", gap: 5, transition: "all 0.07s" }}>
                {(hovered === sk || activeSkill === sk) && <img src={searchIcon} style={{ width: 14, height: 14, imageRendering: "pixelated" }} alt="" />}
                {sk}
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", background: "#f5f4f0" }}>
          {!activeSkill && renderEmpty()}
          {activeSkill && projects.length === 0 && renderNoResults()}
          {activeSkill && projects.length > 0 && (
            <div style={{ padding: "10px 14px" }}>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: "#555", marginBottom: 10, borderBottom: "1px solid #c0c0c0", paddingBottom: 6 }}>
                About {projects.length} result{projects.length !== 1 ? "s" : ""} for <strong style={{ color: "#000080" }}>{activeSkill}</strong> — click a result to expand
              </div>
              {projects.map((p, i) => (
                <div key={i} onClick={() => setDetailProject(p)}
                  style={{ marginBottom: 12, padding: "8px 10px", cursor: "pointer", borderBottom: "1px solid #e0e0e0", background: "white", border: "1px solid transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#dce4f5"; e.currentTarget.style.borderColor = "#316ac5"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "transparent"; }}>
                  <div style={{ fontFamily: "monospace", fontSize: 9, color: "#006600", marginBottom: 2 }}>netjuga.lol › projects › {p.title.toLowerCase().replace(/\s+/g, "-")}</div>
                  <div style={{ fontSize: 13, color: "#0000cc", textDecoration: "underline", marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: "#333", lineHeight: 1.6 }}>{p.description} · <span style={{ fontFamily: "monospace", fontSize: 10, color: "#666" }}>{p.year}</span></div>
                  <div style={{ display: "flex", gap: 4, marginTop: 5, flexWrap: "wrap" }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 9, padding: "1px 6px", fontFamily: "monospace", background: tagColour(t), color: "white" }}>{t}</span>)}
                    <span style={{ fontSize: 9, fontFamily: "monospace", marginLeft: "auto", color: p.status === "Live" ? "#006600" : p.status === "Beta" ? "#885500" : "#004488" }}>● {p.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ─── Desktop Icon ─────────────────────────────────────────────────────────────
function DesktopIcon({ iconUrl, label, onClick, selected, onDoubleClick, size = 40 }: { iconUrl: string; label: string; onClick: (e: MouseEvent<HTMLDivElement>) => void; selected: boolean; onDoubleClick: (e: MouseEvent<HTMLDivElement>) => void; size?: number }) {
    return (
    <div onClick={onClick} onDoubleClick={onDoubleClick} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 76, cursor: "pointer", textAlign: "center", padding: "6px 4px", background: selected ? "rgba(49,106,197,0.5)" : "transparent", outline: selected ? "1px dotted white" : "none" }}>
<XPImg url={iconUrl} size={size} />
      <span style={{ fontSize: 11, marginTop: 4, color: "white", textShadow: "1px 1px 2px black, -1px -1px 2px black", fontFamily: "Tahoma, sans-serif", lineHeight: 1.3, padding: "1px 3px", whiteSpace: "pre-line", background: selected ? "rgba(49,106,197,0.7)" : "transparent" }}>{label}</span>
    </div>
  );
}

// ─── RETRO IDE — Current Projects ────────────────────────────────────────────
function CurrentProjectsIDE({ onClose }: { onClose: () => void }) {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});
  const [selectedFile, setSelectedFile] = useState<{ project: CurrentProject; file: { filename: string; details: string } } | null>(null);

  const toggleFolder = (projectId: string) => {
    setExpandedFolders(prev => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  useEffect(() => {
    if (CURRENT_PROJECTS.length > 0 && !selectedFile) {
      const firstProject = CURRENT_PROJECTS[0];
      if (firstProject.files.length > 0) {
        setSelectedFile({ project: firstProject, file: firstProject.files[0] });
      }
    }
  }, []);

  const statusColor = (s: string) => s === "Live" ? "#007700" : s === "Beta" ? "#996600" : "#0044aa";
  const tagColour = (t: string) => ({ "C++":"#00008b","React":"#006080","Swift":"#7a3800","Python":"#6b4f00","AWS":"#7a4700","PostgreSQL":"#003366","TypeScript":"#003366","Node.js":"#1a5200", "JUCE":"#5a006b","VST3":"#5a006b","DSP":"#5a006b","MIDI":"#5a006b","libpcap":"#8b0000","Linux":"#8b0000","Networking":"#8b0000","ncurses":"#8b0000","Raspberry Pi":"#00008b","PID":"#00008b","Sensors":"#00008b","WebSockets":"#5a4000","FIX Protocol":"#5a4000","Multithreading":"#5a4000" } as Record<string,string>)[t] || "#555555";

  const fileIcon = (filename: string) => {
    if (filename.endsWith(".cpp") || filename.endsWith(".vst3")) return "📘";
    if (filename.endsWith(".py")) return "📒";
    return "📄";
  };

  const getLineColor = (line: string): string => {
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("#") || trimmed.startsWith("/*") || trimmed.startsWith("*") || trimmed.startsWith('"""') || trimmed.startsWith("'''")) return "#4a7c4a";
    if (/\b(class|def|void|int|return|const|auto|struct|enum|if|else|for|while|import|from|include)\b/.test(line)) return "#00008b";
    return "#1a1a1a";
  };

  const currentProject = selectedFile?.project;
  const currentFile = selectedFile?.file;

  return (
    <DraggableModal title="code_editor.exe — Current Projects" iconUrl={ICON_TOOLS} onClose={onClose} style={{ width: 1100, minHeight: 680, maxHeight: "92vh" }}>
      <div style={{ background: "#d4d0c8", borderBottom: "2px solid #808080", padding: "2px 6px", display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}>
        {["File","Edit","View","Search","Run","Tools","Window","Help"].map(m => (
          <button key={m} style={{ background: "transparent", border: "none", color: "#000000", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer", padding: "2px 7px" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#000080"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000000"; }}>
            {m}
          </button>
        ))}
        <div style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 10, color: "#555555" }}>Netjuga IDE v1.0 — Classic Edition</div>
      </div>
      <div style={{ background: "#ece9d8", borderBottom: "1px solid #808080", padding: "3px 8px", display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
        {["💾","📂","🖨","✂","📋","↩","↪"].map((icon, i) => (
          <button key={i} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", width: 24, height: 22, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</button>
        ))}
        <div style={{ width: 1, height: 20, background: "#808080", margin: "0 4px" }} />
        {["▶","⏸","⏹"].map((icon, i) => (
          <button key={i} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", width: 24, height: 22, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</button>
        ))}
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{ width: 280, background: "#f0ede8", borderRight: "2px solid #808080", display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "4px 8px", background: "#d4d0c8", borderBottom: "2px solid #808080", display: "flex", alignItems: "center", gap: 5 }}>
            <XPImg url={ICON_FOLDER} size={14} />
            <span style={{ color: "#000000", fontFamily: "Tahoma, sans-serif", fontSize: 11, fontWeight: "bold" }}>Project Explorer</span>
          </div>
          <div style={{ overflowY: "auto", flex: 1, padding: "4px 0" }}>
            {CURRENT_PROJECTS.map(project => (
              <div key={project.id}>
                <div onClick={() => toggleFolder(project.id)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 8px", cursor: "pointer", fontFamily: "Tahoma, sans-serif", fontSize: 11, background: expandedFolders[project.id] ? "#d4d0c8" : "transparent", fontWeight: "bold" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#c8d8f0"; }}
                  onMouseLeave={e => { if (!expandedFolders[project.id]) e.currentTarget.style.background = "transparent"; else e.currentTarget.style.background = "#d4d0c8"; }}>
                  <span style={{ fontSize: 14 }}>{expandedFolders[project.id] ? "📂" : "📁"}</span>
                  <span>{project.title}</span>
                  <span style={{ fontSize: 9, color: statusColor(project.status), marginLeft: "auto" }}>● {project.status}</span>
                </div>
                {expandedFolders[project.id] && (
                  <div style={{ marginLeft: 20 }}>
                    {project.files.map((file, idx) => (
                      <div key={idx} onClick={() => setSelectedFile({ project, file })} style={{ display: "flex", alignItems: "center", gap: 6, padding: "3px 8px", cursor: "pointer", fontFamily: "monospace", fontSize: 11, background: selectedFile?.project.id === project.id && selectedFile?.file.filename === file.filename ? "#316ac5" : "transparent", color: selectedFile?.project.id === project.id && selectedFile?.file.filename === file.filename ? "white" : "#000000" }}
                        onMouseEnter={e => { if (!(selectedFile?.project.id === project.id && selectedFile?.file.filename === file.filename)) e.currentTarget.style.background = "#c8d8f0"; }}
                        onMouseLeave={e => { if (!(selectedFile?.project.id === project.id && selectedFile?.file.filename === file.filename)) e.currentTarget.style.background = "transparent"; }}>
                        <span style={{ fontSize: 12 }}>{fileIcon(file.filename)}</span>
                        <span>{file.filename}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "2px solid #808080", padding: "6px 8px", background: "#ece9d8" }}>
            <div style={{ fontFamily: "monospace", fontSize: 9, color: "#333333", lineHeight: 1.8 }}>
              <div style={{ color: "#006600" }}>$ git status</div>
              <div style={{ color: "#884400" }}>branch: main</div>
              <div style={{ color: "#000080" }}>{CURRENT_PROJECTS.reduce((acc, p) => acc + p.files.length, 0)} files total</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, background: "#ffffff", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ background: "#d4d0c8", borderBottom: "2px solid #808080", display: "flex", alignItems: "stretch", flexShrink: 0 }}>
            {currentFile && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "#ffffff", borderRight: "2px solid #808080", borderTop: "2px solid #000080" }}>
                <span style={{ fontSize: 11 }}>{fileIcon(currentFile.filename)}</span>
                <span style={{ fontFamily: "Tahoma, sans-serif", fontSize: 11, color: "#000000", fontWeight: "bold" }}>{currentFile.filename}</span>
                <span style={{ color: "#808080", fontSize: 11, cursor: "pointer", marginLeft: 4 }}>×</span>
              </div>
            )}
          </div>
          <div style={{ flex: 1, overflow: "auto", display: "flex", background: "#ffffff" }}>
            <div style={{ background: "#f0ede8", padding: "12px 6px 12px 4px", borderRight: "1px solid #d0ccc4", flexShrink: 0, userSelect: "none" }}>
              {currentFile?.details.split("\n").map((_, i) => (
                <div key={i} style={{ fontFamily: "'Courier New', monospace", fontSize: 12, lineHeight: "20px", color: "#888888", textAlign: "right", minWidth: 28 }}>{i + 1}</div>
              ))}
            </div>
            <pre style={{ flex: 1, margin: 0, padding: "12px 16px", fontFamily: "'Courier New', monospace", fontSize: 12, lineHeight: "20px", color: "#1a1a1a", whiteSpace: "pre-wrap", wordBreak: "break-word", background: "#ffffff" }}>
              {currentFile?.details.split("\n").map((line, i) => (
                <span key={i} style={{ display: "block", color: getLineColor(line) }}>{line || " "}</span>
              ))}
            </pre>
          </div>
          <div style={{ background: "#d4d0c8", borderTop: "2px solid #808080", padding: "2px 10px", display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
            <span style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, color: "#000000" }}>⎇ main</span>
            <span style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, color: "#000000" }}>{currentProject?.type || ""}</span>
            <span style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, color: "#000000", marginLeft: "auto" }}>{currentProject?.tags.join(" · ") || ""}</span>
            <span style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, color: currentProject ? statusColor(currentProject.status) : "#000", fontWeight: "bold" }}>● {currentProject?.status || ""}</span>
          </div>
          <div style={{ background: "#f0ede8", borderTop: "2px solid #808080", padding: "12px 16px", flexShrink: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <div>
                <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 14, fontWeight: "bold", color: "#000080", marginBottom: 2 }}>{currentProject?.title || ""}</div>
                <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, color: "#555555" }}>{currentProject?.description} · {currentProject?.year}</div>
              </div>
              {currentProject?.url && (
                <a href={currentProject.url} target="_blank" rel="noopener noreferrer" style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", color: "#000000", fontFamily: "Tahoma, sans-serif", fontSize: 10, padding: "3px 10px", cursor: "pointer", textDecoration: "none" }}>
                  View Project →
                </a>
              )}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {currentProject?.tags.map(t => (
                <span key={t} style={{ fontFamily: "monospace", fontSize: 9, color: tagColour(t), background: "#e8e4dc", border: "1px solid #c0bdb5", padding: "1px 6px" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DraggableModal>
  );
}

// ─── ABOUT (draggable + resizable) ───────────────────────────────────────────
function AboutDesktopWindow() {
  const [activeSection, setActiveSection] = useState<"bio" | "stats" | "skills" | "interests" | "contact">("bio");
  const [hoveredStat, setHoveredStat]       = useState<string | null>(null);
const [expandedStat, setExpandedStat]     = useState<string | null>(null);
const [terminalInterest, setTerminalInterest] = useState<InterestData | null>(null);
const [contactName, setContactName]           = useState("");
const [contactEmail, setContactEmail]         = useState("");
const [contactMsg, setContactMsg]             = useState("");
const [contactSending, setContactSending]     = useState(false);
const [contactSent, setContactSent]           = useState(false);
const [contactError, setContactError]         = useState("");

const handleContactSend = async () => {
  if (!contactName.trim() || !contactEmail.trim() || !contactMsg.trim()) {
    setContactError("Please fill in all fields.");
    return;
  }
  setContactError("");
  setContactSending(true);
  try {
    const res = await fetch("https://formspree.io/f/xojzwkjj", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name: contactName, email: contactEmail, message: contactMsg }),
    });
    if (res.ok) {
      setContactSent(true);
      setContactName(""); setContactEmail(""); setContactMsg("");
    } else {
      setContactError("Something went wrong. Please try again.");
    }
  } catch {
    setContactError("Network error. Please try again.");
  } finally {
    setContactSending(false);
  }
};

  const sections = ["bio", "stats", "skills", "interests", "contact"] as const;

  const sectionIcons: Record<string, string> = {
    bio:       ICON_TEXT,
    stats:     ICON_CHART,
    skills:    ICON_PC,
    interests: ICON_MUSIC,
    contact:   ICON_MAIL,
  };

  const interestIconMap: Record<string, string> = {
    "Star Wars":               swUserIcon,
    "Hackathons":              hackusericon,
    "Minecraft":               MCusericon,
    "Competitive Programming": comppusericon,
    "Modding":                 modusericon,
  };

  const avatarUrl = avatar;
  const videoUrl = bannerVideo;

  return (
    <>
      {terminalInterest && <TerminalPopup interest={terminalInterest} onClose={() => setTerminalInterest(null)} />}
      <DragWindow
        title="Netjuga.lol — User Profile"
        iconUrl={avatarUrl}
        titleBarColor="#800080"
        initialX={Math.max(10, window.innerWidth - 760)}
        initialY={40}
        initialW={760}
        initialH={520}
      >
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* LEFT SIDEBAR */}
          <div style={{ width: 240, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 14px", borderRight: "2px solid #808080", flexShrink: 0, overflow: "hidden", backgroundColor: "#800080" }}>
            <video autoPlay loop muted playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, pointerEvents: "none" }}>
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 4px)", pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%" }}>
              <div style={{ width: 120, height: 120, background: "#c0c0c0", border: "3px solid #ffffff", marginBottom: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
                <img src={avatarUrl} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ color: "white", fontWeight: "bold", fontSize: 15, textAlign: "center", marginBottom: 4, textShadow: "1px 1px 2px black" }}>Arslaan Ahmed</div>
              <div style={{ color: "#dbb0ff", fontSize: 10, marginBottom: 14, textAlign: "center", textShadow: "1px 1px 1px black" }}>aka Netjuga</div>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 5 }}>
                {sections.map(s => (
                  <button key={s} onClick={() => setActiveSection(s)} style={{ width: "100%", padding: "6px 8px", textAlign: "left", background: activeSection === s ? "#c0c0c0" : "rgba(0,0,0,0.6)", color: activeSection === s ? "#800080" : "white", border: activeSection === s ? "2px solid" : "1px solid rgba(255,255,255,0.3)", borderColor: activeSection === s ? "#ffffff #808080 #808080 #ffffff" : "transparent", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer", fontWeight: activeSection === s ? "bold" : "normal", display: "flex", alignItems: "center", gap: 7, transition: "all 0.1s" }}>
                    <XPImg url={sectionIcons[s]} size={14} />
                    <span style={{ textTransform: "capitalize" }}>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ background: "#c0c0c0", borderBottom: "2px solid #808080", padding: "3px 10px", fontFamily: "monospace", fontSize: 10, color: "#444", flexShrink: 0 }}>
              C:\Users\Netjuga\{activeSection}.{activeSection === "bio" ? "txt" : activeSection === "stats" ? "exe" : "log"}
            </div>

            {activeSection === "bio" && (
              <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#800080", fontWeight: "bold", marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
                    <XPImg url={ICON_USER} size={12} />
                    NAME / ROLE / EXP
                  </div>
                  <div style={{ background: "white", border: "2px inset #808080", padding: "7px 10px", fontFamily: "monospace", fontSize: 11 }}>
                    Arslaan Ahmed (Netjuga) &nbsp;|&nbsp; Software Engineer &nbsp;|&nbsp; 3+ yrs
                  </div>
                </div>
                <div style={{ background: "white", border: "2px inset #808080", padding: "10px 12px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.9 }}>
                  <p style={{ marginBottom: 8 }}>I'm a software engineer with 3+ years of hands-on experience building full-stack systems, shipping products, and building apps people actually use.</p>
                  <p style={{ marginBottom: 8 }}>I've built e-commerce ventures, deployed web apps used by real people, and written everything from Swift iOS apps to C++ network intrusion tools. I like making things that actually work.</p>
                  <p>Outside the editor: I run, train Muay Thai, produce house and techno, attend hackathons, and read — from Dostoyevsky to electrical engineering manuals.</p>
                </div>
              </div>
            )}

{activeSection === "stats" && (
  <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
    {ABOUT_STATS.map(s => (
      <div key={s.label}>
        <div
          onMouseEnter={() => setHoveredStat(s.label)}
          onMouseLeave={() => setHoveredStat(null)}
          onClick={() => setExpandedStat(expandedStat === s.label ? null : s.label)}
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "10px 14px", marginBottom: expandedStat === s.label ? 0 : 5,
            background: hoveredStat === s.label || expandedStat === s.label ? "#800080" : "white",
            color: hoveredStat === s.label || expandedStat === s.label ? "white" : "#1a1a1a",
            border: "2px solid", cursor: "pointer",
            borderColor: hoveredStat === s.label || expandedStat === s.label
              ? "#cc44cc #400040 #400040 #cc44cc"
              : "#ffffff #808080 #808080 #ffffff",
            transition: "background 0.08s",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 26, fontWeight: "bold" }}>{s.value}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11 }}>{s.label}</span>
            <span style={{ fontFamily: "monospace", fontSize: 10, opacity: 0.7 }}>
              {expandedStat === s.label ? "▲" : "▼"}
            </span>
          </div>
        </div>
        {expandedStat === s.label && (
          <div style={{
            background: "#f5f0ff", border: "2px solid", marginBottom: 5, padding: "10px 14px",
            borderColor: "#400040 #cc44cc #cc44cc #400040",
            fontFamily: "monospace", fontSize: 11, lineHeight: 1.8, color: "#2a002a",
          }}>
            {s.detail}
          </div>
        )}
      </div>
    ))}
  </div>
)}

            {activeSection === "skills" && <SkillsPanel />}

            {activeSection === "interests" && (
              <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
                {INTERESTS_DATA.map(item => (
                  <div key={item.name} onClick={() => setTerminalInterest(item)}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", marginBottom: 5, border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", background: "white", cursor: "pointer" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#800080"; e.currentTarget.style.borderColor = "#cc44cc #400040 #400040 #cc44cc"; (e.currentTarget.querySelector(".interest-text") as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "#ffffff #808080 #808080 #ffffff"; (e.currentTarget.querySelector(".interest-text") as HTMLElement).style.color = "black"; }}
                  >
                    <XPImg url={interestIconMap[item.name] || item.iconUrl} size={28} />
                    <div className="interest-text">
                      <div style={{ fontWeight: "bold", fontSize: 13 }}>{item.name}</div>
                      <div style={{ fontSize: 10, fontFamily: "monospace", marginTop: 2 }}>{item.desc}</div>
                    </div>
                    <div style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 9, color: "#808080" }}>▶ view</div>
                  </div>
                ))}
              </div>
            )}


{activeSection === "contact" && (
              <div style={{ flex: 1, overflowY: "auto", padding: 14, position: "relative" }}>
                {contactSent ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 320, textAlign: "center", gap: 12 }}>
                    <div style={{ fontSize: 52 }}>✉️</div>
                    <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 15, fontWeight: "bold", color: "#800080" }}>Message sent!</div>
                    <div style={{ fontFamily: "monospace", fontSize: 11, color: "#555", maxWidth: 240, lineHeight: 1.7 }}>
                      Thanks for reaching out. I'll get back to you as soon as I can.
                    </div>
                    <button
                      onClick={() => setContactSent(false)}
                      style={{ marginTop: 12, background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "4px 18px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ fontFamily: "monospace", fontSize: 10, color: "#555", marginBottom: 12 }}>
                      C:\Netjuga\contact.exe — Fill in the form below
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div>
                        <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, fontWeight: "bold", color: "#800080", marginBottom: 3 }}>NAME</div>
                        <input
                          type="text"
                          value={contactName}
                          onChange={e => setContactName(e.target.value)}
                          placeholder="Your name"
                          style={{ width: "100%", background: "white", border: "2px inset #808080", padding: "5px 8px", fontFamily: "monospace", fontSize: 11, outline: "none", color: "#1a1a1a" }}
                        />
                      </div>
                      <div>
                        <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, fontWeight: "bold", color: "#800080", marginBottom: 3 }}>EMAIL</div>
                        <input
                          type="email"
                          value={contactEmail}
                          onChange={e => setContactEmail(e.target.value)}
                          placeholder="your@email.com"
                          style={{ width: "100%", background: "white", border: "2px inset #808080", padding: "5px 8px", fontFamily: "monospace", fontSize: 11, outline: "none", color: "#1a1a1a" }}
                        />
                      </div>
                      <div>
                        <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, fontWeight: "bold", color: "#800080", marginBottom: 3 }}>MESSAGE</div>
                        <textarea
                          value={contactMsg}
                          onChange={e => setContactMsg(e.target.value)}
                          placeholder="What's on your mind?"
                          rows={5}
                          style={{ width: "100%", background: "white", border: "2px inset #808080", padding: "5px 8px", fontFamily: "monospace", fontSize: 11, outline: "none", resize: "vertical", color: "#1a1a1a" }}
                        />
                      </div>
                      {contactError && (
                        <div style={{ fontFamily: "monospace", fontSize: 10, color: "#cc0000", background: "#fff0f0", border: "1px solid #cc0000", padding: "4px 8px" }}>
                          ⚠ {contactError}
                        </div>
                      )}
                      <button
                        onClick={handleContactSend}
                        disabled={contactSending}
                        style={{ alignSelf: "flex-end", background: contactSending ? "#a0a0a0" : "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "5px 20px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: contactSending ? "default" : "pointer", display: "flex", alignItems: "center", gap: 6 }}
                      >
                        <span>{contactSending ? "Sending..." : "Send"}</span>
                        {!contactSending && <span style={{ fontSize: 13 }}>✉</span>}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

<StatusBar text={activeSection === "contact" ? "C:\\Netjuga\\contact.exe" : `Section: ${activeSection}`} />
          </div>
        </div>
      </DragWindow>
    </>
  );
}

// ─── PORTFOLIO ─────────────────────────────────────────────────────────────────
function PortfolioClipboard({ onClose }: { onClose: () => void }) {
  const [folderOpen, setFolderOpen] = useState<Project | null>(null);
  const [viewingFile, setViewingFile] = useState<{ project: Project; file: Project["files"][0] } | null>(null);

  const openDocument = (project: Project, file: Project["files"][0]) => setViewingFile({ project, file });
  const closeDocument = () => setViewingFile(null);
  const openFolder = (project: Project) => setFolderOpen(project);
  const closeFolder = () => setFolderOpen(null);

  const currentFiles = folderOpen?.files || [];

  return (
    <>
      <DraggableModal title="portfolio.exe — Project Explorer" iconUrl={ICON_FOLDER} onClose={onClose} style={{ width: 780, minHeight: 550 }}>
        <div style={{ background: "#ece9d8", borderBottom: "2px solid #808080", padding: "4px 8px", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, fontWeight: "bold", background: "white", border: "2px inset #808080", padding: "2px 8px" }}>
            {folderOpen ? `📁 C:\\PORTFOLIO\\${folderOpen.title}` : "📁 C:\\PORTFOLIO"}
          </span>
          <div style={{ flex: 1 }} />
          {folderOpen && (
            <button onClick={closeFolder} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "2px 10px", fontFamily: "Tahoma, sans-serif", fontSize: 10, cursor: "pointer" }}>⬅ Back</button>
          )}
        </div>

        <div style={{ flex: 1, overflowY: "auto", background: "#ffffff", padding: "20px" }}>
          {!folderOpen ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "16px" }}>
              {PROJECTS.map(project => (
                <div key={project.slug} onDoubleClick={() => openFolder(project)} style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", padding: "12px 8px", transition: "background 0.1s", borderRadius: 4 }}
                  onMouseEnter={e => e.currentTarget.style.background = "#eef"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <XPImg url={ICON_FOLDER} size={48} />
                  <span style={{ marginTop: 8, fontSize: 11, fontFamily: "Tahoma, sans-serif", textAlign: "center", wordBreak: "break-word", maxWidth: 100 }}>{project.title}</span>
                  <span style={{ fontSize: 9, color: "#666", marginTop: 2 }}>{project.year}</span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "16px" }}>
              {currentFiles.map((file, idx) => (
                <div key={idx} onDoubleClick={() => (file.type === "doc" || file.type === "image" || file.type === "video") && openDocument(folderOpen, file)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: (file.type === "doc" || file.type === "image" || file.type === "video") ? "pointer" : "default", padding: "12px 8px", transition: "background 0.1s", borderRadius: 4, opacity: (file.type === "doc" || file.type === "image" || file.type === "video") ? 1 : 0.7 }}
                  onMouseEnter={e => (file.type === "doc" || file.type === "image" || file.type === "video") && (e.currentTarget.style.background = "#eef")}
                  onMouseLeave={e => (file.type === "doc" || file.type === "image" || file.type === "video") && (e.currentTarget.style.background = "transparent")}>
                  <XPImg url={file.icon || (file.type === "doc" ? textIcon : file.type === "image" ? imageIcon : file.type === "video" ? ICON_FILE_VIDEO : ICON_FILE_CODE)} size={48} />
                  <span style={{ marginTop: 8, fontSize: 11, fontFamily: "Tahoma, sans-serif", textAlign: "center", wordBreak: "break-word", maxWidth: 100 }}>{file.name}</span>
                  <span style={{ fontSize: 9, color: "#666", marginTop: 2 }}>{file.type === "doc" ? "Text Document" : file.type === "image" ? "Image File" : file.type === "video" ? "Video File" : "Source Code"}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <StatusBar text={folderOpen ? `${currentFiles.length} items · Double‑click a file to open it` : `${PROJECTS.length} folders · Double‑click a folder to open it`} />
      </DraggableModal>

      {viewingFile && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, pointerEvents: "auto" }} onClick={closeDocument}>
          <div onClick={e => e.stopPropagation()} style={{ width: 800, maxHeight: "90vh", background: "#fffef7", border: "2px solid #888", boxShadow: "0 12px 28px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Courier New', 'Times New Roman', serif", lineHeight: 1.5, color: "#1a1a1a", maxWidth: "90vw" }}>
            <div style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>{viewingFile.project.title}</h1>
              <div style={{ display: "flex", gap: 24, fontSize: 12, color: "#555", borderBottom: "1px solid #ddd", paddingBottom: 12, marginBottom: 20 }}>
                <span><strong>Type:</strong> {viewingFile.project.type}</span>
                <span><strong>Year:</strong> {viewingFile.project.year}</span>
                <span><strong>Status:</strong> <span style={{ color: viewingFile.project.status === "Live" ? "#008800" : viewingFile.project.status === "Beta" ? "#aa6600" : "#0044aa" }}>{viewingFile.project.status}</span></span>
              </div>
              {viewingFile.file.type === "doc" && (
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: 12, lineHeight: 1.6, whiteSpace: "pre-wrap", background: "#f5f5ee", padding: "12px 16px", border: "1px solid #ddd" }}
                  dangerouslySetInnerHTML={{ __html: (viewingFile.file.content || "No content available.").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color:#0000cc;text-decoration:underline;">$1</a>').replace(/\n/g, "<br/>") }} />
              )}
              {viewingFile.file.type === "image" && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
                  <img src={viewingFile.file.icon} alt={viewingFile.file.name} style={{ maxWidth: "100%", maxHeight: "400px", border: "1px solid #ccc" }} />
                </div>
              )}
              {viewingFile.file.type === "video" && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
                  <video controls style={{ maxWidth: "100%", maxHeight: "400px", border: "1px solid #ccc" }}>
                    <source src={viewingFile.file.src} type="video/mp4" />
                  </video>
                </div>
              )}
              <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #ddd", fontSize: 10, color: "#888", textAlign: "center" }}>
                netjuga.lol — Arslaan Ahmed · {new Date().getFullYear()}
              </div>
            </div>
            <div style={{ padding: "16px 24px", textAlign: "center", borderTop: "1px solid #ddd", background: "#fffef7", flexShrink: 0 }}>
              <button onClick={closeDocument} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "4px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>Close Document</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── "What I'm Up To" Notepad ─────────────────────────────────────────────────
function UpToWindow({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const tab = UP_TO_TABS[activeTab];
  const isRunningTab = tab.label === "Running";
  const isCodingTab = tab.label === "Coding";
  const isElectronicsTab = tab.label === "Electronics";

  return (
    <DraggableModal title="what_im_up_to.txt — Notepad" iconUrl={ICON_NOTEPAD} onClose={onClose} style={{ width: 720, height: 600 }}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", borderBottom: "2px solid #808080", background: "#c0c0c0", flexShrink: 0, overflowX: "auto" }}>
          {UP_TO_TABS.map((t, i) => (
            <button key={t.label} onClick={() => setActiveTab(i)} style={{ padding: "4px 14px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer", border: "none", borderRight: "1px solid #808080", background: activeTab === i ? "#ece9d8" : "#c0c0c0", color: activeTab === i ? "#000080" : "#444", fontWeight: activeTab === i ? "bold" : "normal", borderTop: activeTab === i ? "2px solid #000080" : "2px solid transparent", position: "relative", zIndex: activeTab === i ? 1 : 0, marginBottom: activeTab === i ? -2 : 0, whiteSpace: "nowrap" }}>{t.label}</button>
          ))}
        </div>
        <div style={{ background: "#ece9d8", padding: "4px 12px", borderBottom: "1px solid #c0c0c0", fontFamily: "Tahoma, sans-serif", fontSize: 11, fontWeight: "bold", color: "#000080", flexShrink: 0 }}>{tab.title}</div>
        <div className="notepad-scroll" style={{ flex: 1, overflowY: "auto", position: "relative", background: "white" }}>
          <div style={{ position: "absolute", top: 0, left: 44, width: 1, bottom: 0, background: "repeating-linear-gradient(to bottom, #ffaaaa, #ffaaaa 28px, transparent 28px, transparent 56px)", backgroundAttachment: "local", pointerEvents: "none", zIndex: 2 }} />
          <div style={{ padding: "32px 18px 18px 60px", backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #d0d8f0 27px, #d0d8f0 28px)", backgroundAttachment: "local", minHeight: "100%" }}>
            <pre style={{ fontFamily: "'Courier New', monospace", fontSize: 13, lineHeight: "28px", margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word", color: "#1a1a1a", background: "transparent" }}>{tab.content}</pre>

            {isRunningTab && (
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32, marginBottom: 8 }}>
                <div style={{ width: 160, height: 284, background: "#fef7e0", border: "2px dashed #aaa", borderRadius: 12, padding: 10, boxShadow: "8px 8px 20px rgba(0,0,0,0.25)", textAlign: "center", transform: "rotate(2deg)" }}>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#888", letterSpacing: 2, marginBottom: 8 }}>★ STAMP ★</div>
                  <div style={{ width: "100%", height: "calc(100% - 52px)", background: "#e0d6b0", border: "1px solid #b0a070", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    <img src={runStamp} alt="Running PB" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 9, color: "#888", marginTop: 8 }}>2025 · 6KM @5:22/km</div>
                </div>
              </div>
            )}

            {isCodingTab && (
              <div style={{ display: "flex", justifyContent: "center", gap: 30, marginTop: 32, marginBottom: 16, flexWrap: "wrap" }}>
                {[{ src: PCBstamp, label: "PCB prototype", rot: "-2deg" }, { src: TELEstamp, label: "hydrogen line", rot: "1deg" }, { src: TELEDATAstamp, label: "FFT averaging", rot: "-1deg" }].map((s, i) => (
                  <div key={i} style={{ width: 120, height: 213, background: "#fef7e0", border: "2px dashed #aaa", borderRadius: 12, padding: 8, boxShadow: "6px 6px 16px rgba(0,0,0,0.25)", textAlign: "center", transform: `rotate(${s.rot})` }}>
                    <div style={{ fontFamily: "monospace", fontSize: 9, color: "#888", letterSpacing: 1, marginBottom: 6 }}>★ STAMP ★</div>
                    <div style={{ width: "100%", height: "calc(100% - 48px)", background: "#e0d6b0", border: "1px solid #b0a070", overflow: "hidden" }}>
                      <img src={s.src} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 8, color: "#888", marginTop: 6 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {isElectronicsTab && (
              <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 32, marginBottom: 16, flexWrap: "wrap" }}>
                {[{ src: robohandVideo, label: "robotic hand" }, { src: miniradarVideo, label: "mini radar" }].map((v, i) => (
                  <div key={i} style={{ width: 180, height: 320, background: "#fef7e0", border: "2px dashed #aaa", borderRadius: 16, padding: 10, boxShadow: "8px 8px 20px rgba(0,0,0,0.25)", textAlign: "center", transform: i === 0 ? "rotate(-1deg)" : "rotate(1deg)" }}>
                    <div style={{ fontFamily: "monospace", fontSize: 10, color: "#888", letterSpacing: 2, marginBottom: 8 }}>★ VIDEO STAMP ★</div>
                    <div style={{ width: "100%", height: "calc(100% - 52px)", background: "#111", border: "1px solid #b0a070", overflow: "hidden" }}
                      onMouseEnter={e => { const vid = e.currentTarget.querySelector("video"); if (vid) vid.play(); }}
                      onMouseLeave={e => { const vid = e.currentTarget.querySelector("video"); if (vid) { vid.pause(); vid.currentTime = 0; } }}>
                      <video src={v.src} loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 8, color: "#888", marginTop: 8 }}>hover to play ▷</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <StatusBar text={`C:\\Netjuga\\life\\${tab.label.toLowerCase()}.txt — ${tab.content.length} chars`} />
      </div>
    </DraggableModal>
  );
}

// ─── Music Player ─────────────────────────────────────────────────────────────
function MusicPlayer({ song, onClose }: { song: Song; onClose: () => void }) {
  const [songs] = useState<Song[]>(MY_SONGS);
  const [currentSong, setCurrentSong] = useState<Song>(song || songs[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = currentSong.src;
      audioRef.current.load();
      setPlaying(false);
      setProgress(0);
      setCurrentTime("0:00");
    }
  }, [currentSong]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const previous = () => { const idx = songs.findIndex(s => s.id === currentSong.id); setCurrentSong(songs[idx > 0 ? idx - 1 : songs.length - 1]); };
  const next = () => { const idx = songs.findIndex(s => s.id === currentSong.id); setCurrentSong(songs[(idx + 1) % songs.length]); };
  const skipBack = () => { if (audioRef.current) audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0); };
  const skipForward = () => { if (audioRef.current) audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, audioRef.current.duration || 0); };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    const dur = audioRef.current.duration;
    setProgress((cur / dur) * 100 || 0);
    const mins = Math.floor(cur / 60);
    const secs = Math.floor(cur % 60).toString().padStart(2, "0");
    setCurrentTime(`${mins}:${secs}`);
    if (dur && !isNaN(dur)) { const tm = Math.floor(dur / 60); const ts = Math.floor(dur % 60).toString().padStart(2, "0"); setDuration(`${tm}:${ts}`); }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * audioRef.current.duration;
  };

  const buttonStyle: CSSProperties = { background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", width: 44, height: 34, fontSize: 16, fontFamily: "monospace", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" };

  return (
    <DraggableModal title={`WMP — ${currentSong.title}`} iconUrl={ICON_MUSIC} onClose={onClose} style={{ width: 780, minHeight: 520 }}>
      <audio ref={audioRef} src={currentSong.src} onTimeUpdate={handleTimeUpdate} onEnded={() => { setPlaying(false); next(); }} />
      <div style={{ display: "flex", flexDirection: "column", height: "100%", flex: 1, overflow: "hidden" }}>
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          <div style={{ width: 240, borderRight: "2px solid #808080", background: "#ece9d8", overflowY: "auto", flexShrink: 0 }}>
            <div style={{ background: "#000080", color: "white", padding: "6px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, fontWeight: "bold" }}>Playlist</div>
            {songs.map((s, i) => (
              <div key={s.id} onClick={() => setCurrentSong(s)} style={{ padding: "8px 12px", cursor: "pointer", background: currentSong.id === s.id ? "#316ac5" : "transparent", color: currentSong.id === s.id ? "white" : "black", borderBottom: "1px solid #c0c0c0", fontFamily: "Tahoma, sans-serif", fontSize: 11, display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onMouseEnter={e => { if (currentSong.id !== s.id) e.currentTarget.style.background = "#c8d8f0"; }}
                onMouseLeave={e => { if (currentSong.id !== s.id) e.currentTarget.style.background = "transparent"; }}>
                <span>{s.title}</span>
                <span style={{ fontSize: 9, color: currentSong.id === s.id ? "#ffdd99" : "#666" }}>{s.duration}</span>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: "16px 20px", background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", overflowY: "auto" }}>
            <div style={{ width: 180, height: 180, border: "3px solid #c0c0c0", background: "#f0f0f0", marginBottom: 20, overflow: "hidden", boxShadow: "4px 4px 8px rgba(0,0,0,0.2)" }}>
              <img src={currentSong.cover} alt={currentSong.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => (e.currentTarget.style.display = "none")} />
            </div>
            <h2 style={{ fontSize: 20, marginBottom: 6, color: "#000080", fontFamily: "Tahoma, sans-serif" }}>{currentSong.title}</h2>
            <p style={{ fontSize: 12, color: "#555", marginBottom: 12, fontFamily: "monospace" }}>{currentSong.genre} · {currentSong.bpm} BPM</p>
            <div style={{ width: "100%", marginBottom: 16 }}>
              <div onClick={seek} style={{ background: "#c0c0c0", height: 8, cursor: "pointer", border: "1px inset #808080", borderRadius: 2 }}>
                <div style={{ background: "#000080", width: `${progress}%`, height: "100%", transition: "width 0.1s linear" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: 10, marginTop: 4 }}>
                <span>{currentTime}</span><span>{duration}</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 8 }}>
              <button onClick={previous} style={buttonStyle}>⏮</button>
              <button onClick={skipBack} style={buttonStyle}>«</button>
              <button onClick={togglePlay} style={{ ...buttonStyle, width: 52 }}>{playing ? "⏸" : "▶"}</button>
              <button onClick={skipForward} style={buttonStyle}>»</button>
              <button onClick={next} style={buttonStyle}>⏭</button>
            </div>
          </div>
        </div>
        <div style={{ background: "#ece9d8", borderTop: "2px solid #808080", padding: "8px 16px", textAlign: "center", fontSize: 10, fontFamily: "monospace", color: "#444", flexShrink: 0 }}>
          Find all my music at <a href="https://jugastracks.quest" target="_blank" style={{ color: "#000080", textDecoration: "underline" }}>jugastracks.quest</a> and mixes on YouTube <a href="https://youtube.com/@jugamadethis" target="_blank" style={{ color: "#000080", textDecoration: "underline" }}>@jugamadethis</a>
        </div>
      </div>
      <StatusBar text={`Now playing: ${currentSong.title} · ${currentSong.genre}`} />
    </DraggableModal>
  );
}

// ─── Music Library ────────────────────────────────────────────────────────────
function MusicLibrary({ onClose, onPlay }: { onClose: () => void; onPlay: (s: Song) => void }) {
  return (
    <DraggableModal title="My Music — House Tracks" iconUrl={ICON_MUSIC} onClose={onClose} style={{ width: 480 }}>
      <div style={{ padding: 14, flex: 1 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Tahoma, sans-serif", fontSize: 11 }}>
          <thead><tr style={{ background: "#000080", color: "white" }}>{["#","Title","Genre","BPM","Date","Length"].map(h => <th key={h} style={{ padding: "4px 8px", textAlign: "left", fontWeight: "normal" }}>{h}</th>)}</tr></thead>
          <tbody>
            {MY_SONGS.map((s, i) => (
              <tr key={s.id} onDoubleClick={() => onPlay(s)} style={{ background: i % 2 === 0 ? "#fff" : "#f0f0f0", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#316ac5")}
                onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "#fff" : "#f0f0f0")}>
                <td style={{ padding: "3px 8px" }}>{i + 1}</td>
                <td style={{ padding: "3px 8px" }}>{s.title}</td>
                <td style={{ padding: "3px 8px" }}>{s.genre}</td>
                <td style={{ padding: "3px 8px" }}>{s.bpm}</td>
                <td style={{ padding: "3px 8px" }}>{s.date}</td>
                <td style={{ padding: "3px 8px" }}>{s.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 10, display: "flex", justifyContent: "flex-end" }}><button onClick={onClose} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "3px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>Close</button></div>
      </div>
      <StatusBar text={`${MY_SONGS.length} tracks`} />
    </DraggableModal>
  );
}

// ─── Games Window ─────────────────────────────────────────────────────────────
function GamesWindow({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<Game>(MY_GAMES[0]);
  return (
    <DraggableModal title="My Games — Top 5" iconUrl={ICON_STICK} onClose={onClose} style={{ width: 900, minHeight: 520 }}>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{ width: 260, borderRight: "2px solid #808080", background: "#c0c0c0", overflowY: "auto" }}>
          <div style={{ background: "#808080", padding: "3px 10px", fontFamily: "Tahoma, sans-serif", fontSize: 10, color: "white", fontWeight: "bold" }}>TOP 5 GAMES</div>
          {MY_GAMES.map((g, i) => (
            <div key={g.id} onClick={() => setSelected(g)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", background: selected.id === g.id ? "#000080" : "transparent", color: selected.id === g.id ? "white" : "black", cursor: "pointer", borderBottom: "1px solid #a0a0a0", fontFamily: "Tahoma, sans-serif", fontSize: 11 }}
              onMouseEnter={e => { if (selected.id !== g.id) { e.currentTarget.style.background = "#316ac5"; e.currentTarget.style.color = "white"; } }}
              onMouseLeave={e => { if (selected.id !== g.id) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "black"; } }}>
              <span style={{ fontFamily: "monospace", fontSize: 10, minWidth: 14 }}>{i + 1}.</span>
              <img src={g.cover} alt={g.title} style={{ width: 26, height: 34, objectFit: "cover", border: "1px solid #808080", flexShrink: 0 }} referrerPolicy="no-referrer" crossOrigin="anonymous" onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <div style={{ flex: 1, overflow: "hidden" }}><div style={{ fontSize: 11, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{g.title}</div></div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 14, overflowY: "auto", background: "#ece9d8" }}>
          <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
            <div style={{ width: 130, height: 170, border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", overflow: "hidden", background: "#c0c0c0", flexShrink: 0 }}>
              <img src={selected.cover} alt={selected.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} referrerPolicy="no-referrer" crossOrigin="anonymous" onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div>
              <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 15, fontWeight: "bold", color: "#000080", marginBottom: 4 }}>{selected.title}</div>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: "#555", marginBottom: 8 }}>Platform: {selected.platform}</div>
              <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ fontSize: 14, color: i < selected.rating ? "#ffaa00" : "#c0c0c0" }}>★</span>)}
                <span style={{ fontFamily: "monospace", fontSize: 10, color: "#555", marginLeft: 4 }}>{selected.rating}/5</span>
              </div>
            </div>
          </div>
          <div style={{ background: "white", border: "2px inset #808080", padding: "10px 12px" }}>
            <div style={{ fontFamily: "monospace", fontSize: 10, color: "#000080", fontWeight: "bold", marginBottom: 6 }}>REVIEW.TXT</div>
            <div style={{ fontFamily: "monospace", fontSize: 12, lineHeight: 2 }}>{selected.review}</div>
          </div>
        </div>
      </div>
      <StatusBar text={`${MY_GAMES.length} games · Top 5`} />
    </DraggableModal>
  );
}

// ─── Books Window ─────────────────────────────────────────────────────────────
function BooksWindow({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<Book>(MY_BOOKS[0]);
  return (
    <DraggableModal title="My Books — Top 10" iconUrl={ICON_BOOK} onClose={onClose} style={{ width: 920, minHeight: 520 }}>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{ width: 260, borderRight: "2px solid #808080", background: "#c0c0c0", overflowY: "auto" }}>
          <div style={{ background: "#808080", padding: "3px 10px", fontFamily: "Tahoma, sans-serif", fontSize: 10, color: "white", fontWeight: "bold" }}>TOP 10 BOOKS</div>
          {MY_BOOKS.map((b, i) => (
            <div key={b.id} onClick={() => setSelected(b)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", background: selected.id === b.id ? "#000080" : "transparent", color: selected.id === b.id ? "white" : "black", cursor: "pointer", borderBottom: "1px solid #a0a0a0", fontFamily: "Tahoma, sans-serif", fontSize: 11 }}
              onMouseEnter={e => { if (selected.id !== b.id) { e.currentTarget.style.background = "#316ac5"; e.currentTarget.style.color = "white"; } }}
              onMouseLeave={e => { if (selected.id !== b.id) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "black"; } }}>
              <span style={{ fontFamily: "monospace", fontSize: 10, minWidth: 18 }}>{i + 1}.</span>
              <img src={b.cover} alt={b.title} style={{ width: 22, height: 32, objectFit: "cover", border: "1px solid #808080", flexShrink: 0 }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <div style={{ overflow: "hidden" }}><div style={{ fontSize: 10, fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 100 }}>{b.title}</div></div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 14, overflowY: "auto", background: "#ece9d8" }}>
          <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
            <div style={{ width: 110, height: 150, border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", overflow: "hidden", background: "#c0c0c0", flexShrink: 0 }}><img src={selected.cover} alt={selected.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} /></div>
            <div>
              <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 14, fontWeight: "bold", color: "#000080", marginBottom: 4 }}>{selected.title}</div>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: "#555", marginBottom: 6 }}>{selected.author}</div>
              <div style={{ display: "flex", gap: 2, alignItems: "center" }}>{Array.from({ length: 5 }).map((_, i) => (<span key={i} style={{ fontSize: 14, color: i < selected.rating ? "#ffaa00" : "#c0c0c0" }}>★</span>))}<span style={{ fontFamily: "monospace", fontSize: 9, color: "#555", marginLeft: 4 }}>{selected.rating}/5</span></div>
            </div>
          </div>
          <div style={{ background: "white", border: "2px inset #808080", padding: "10px 12px" }}><div style={{ fontFamily: "monospace", fontSize: 10, color: "#000080", fontWeight: "bold", marginBottom: 6 }}>REVIEW.TXT</div><div style={{ fontFamily: "monospace", fontSize: 12, lineHeight: 2 }}>{selected.review}</div></div>
        </div>
      </div>
      <StatusBar text={`${MY_BOOKS.length} books`} />
    </DraggableModal>
  );
}

// ─── BgPicker ─────────────────────────────────────────────────────────────────
function BgPicker({ current, onSelect, onClose }: { current: string; onSelect: (v: string) => void; onClose: () => void }) {
  return (
    <DraggableModal title="Appearance" iconUrl={ICON_PAINT} onClose={onClose} style={{ width: 400 }}>
      <div style={{ padding: 14, fontFamily: "Tahoma, sans-serif", fontSize: 11, flex: 1 }}>
        <div style={{ height: 80, background: current, border: "2px inset #808080", marginBottom: 12 }} />
        <p style={{ fontWeight: "bold", marginBottom: 6 }}>Background Images</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>{BACKGROUNDS.filter(b => b.type === "image").map(b => (<div key={b.name} onClick={() => onSelect(b.value)} style={{ width: 80, height: 50, background: b.value, border: current === b.value ? "3px solid #000080" : "2px solid #808080", cursor: "pointer", display: "flex", alignItems: "flex-end", padding: 3 }}><span style={{ fontSize: 9, color: "white", textShadow: "1px 1px black", background: "rgba(0,0,0,0.4)", padding: "1px 3px" }}>{b.name}</span></div>))}</div>
        <p style={{ fontWeight: "bold", marginBottom: 6 }}>Solid Colors</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>{BACKGROUNDS.filter(b => b.type === "color").map(b => (<div key={b.name} title={b.name} onClick={() => onSelect(b.value)} style={{ width: 32, height: 32, background: b.value, border: current === b.value ? "3px solid #000080" : "2px solid #808080", cursor: "pointer" }} />))}</div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={onClose} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "3px 20px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>OK</button></div>
      </div>
      <StatusBar text="Display Properties" />
    </DraggableModal>
  );
}

// ─── How To Use Window (smaller, scrollable) ──────────────────────────────────
function HowToWindow({ onClose }: { onClose: () => void }) {
  const sections = [
    { icon: ICON_USER, title: "About Me (always visible)", desc: "The purple window on the right is always open. It contains four tabs: Bio (who I am), Stats (key numbers), Skills (click a skill to see projects I've built with it — these are ALL my past projects), and Interests (click any to open a terminal window about that hobby)." },
    { icon: ICON_TOOLS, title: "Current Projects", desc: "Double-click the 'Current Projects' icon on the desktop or find it in the Start Menu. This opens a retro IDE showing the projects I'm actively building right now, with code comments explaining each one. Click a file in the left panel to switch projects." },
    { icon: ICON_FOLDER, title: "Portfolio (Past Projects)", desc: "Double-click 'Portfolio' on the desktop. This opens a clipboard resume viewer showing all my completed past projects. Use the ◀ ▶ arrows or dots at the top to flip through each project's resume page." },
    { icon: ICON_BOOK, title: "Skills → Past Projects (IE Wiki)", desc: "In the About Me window, click the 'Skills' tab. Click any skill chip (React, C++, Swift, etc.) to see a list of projects that used it. Click any search result to open a full Internet Explorer-style wiki page for that project." },
    { icon: ICON_STICK, title: "Games & Books", desc: "Find these in the Start Menu or desktop. Games shows my top 5 games with reviews. Books shows my top 10 reads. Click any entry in the left panel to see the full review on the right." },
    { icon: ICON_MUSIC, title: "My Music", desc: "Opens my house music track library. Double-click any track to open the Windows Media Player with that track loaded." },
    { icon: ICON_NOTEPAD, title: "What I'm Up To", desc: "A tabbed notepad showing what I'm currently doing across Muay Thai, music production, running, electronics, and reading. Each tab is a handwritten-style note on lined paper." },
    { icon: ICON_PAINT, title: "Appearance", desc: "Change the desktop wallpaper. Choose from the classic Windows XP Bliss image or a range of solid colours." },
    { icon: ICON_DEVICE, title: "This Device", desc: "Click 'This Device' in the Start Menu to see a neofetch-style system readout with your browser info, screen specs, and site details — styled like a Linux terminal." },
  ];

  return (
    // ── CHANGED: smaller width (500), maxHeight 70vh, overflowY scroll on body ──
    <DraggableModal title="help.exe — How To Use This Portfolio" iconUrl={ICON_HELP} onClose={onClose} style={{ width: 500, maxHeight: "70vh" }}>
      <div style={{ overflowY: "auto", flex: 1, background: "white", maxHeight: "calc(70vh - 80px)" }}>
        <div style={{ background: "linear-gradient(to right, #0a0adb, #1084d0)", padding: "14px 18px", color: "white" }}>
          <div style={{ fontSize: 14, fontWeight: "bold", marginBottom: 3 }}>Netjuga Portfolio — Help</div>
          <div style={{ fontSize: 10, opacity: 0.9 }}>Here's how to navigate this desktop.</div>
        </div>
        <div style={{ padding: "14px 16px" }}>
          {sections.map((s, idx) => (
            <div key={s.title} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: idx !== sections.length - 1 ? "1px solid #e0e0e0" : "none" }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "#ece9d8", border: "2px solid #808080" }}>
                <XPImg url={s.icon} size={28} />
              </div>
              <div>
                <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 12, fontWeight: "bold", marginBottom: 3 }}>{s.title}</div>
                <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 11, lineHeight: 1.5, color: "#333" }}>{s.desc}</div>
              </div>
            </div>
          ))}
          <div style={{ textAlign: "center", marginTop: 18, padding: 10, background: "#f0f0f0", border: "1px solid #ddd", fontFamily: "monospace", fontSize: 9, color: "#555" }}>
            netjuga.lol — Built in React + TypeScript · Drag any window to move it
          </div>
        </div>
      </div>
      <StatusBar text="Help · Windows XP Help and Support" />
    </DraggableModal>
  );
}

// ─── Neofetch "This Device" Window ───────────────────────────────────────────
function ThisDeviceWindow({ onClose }: { onClose: () => void }) {
  const [info, setInfo] = useState<Record<string, string>>({});

  useEffect(() => {
    const ua = navigator.userAgent;
    const getBrowser = () => {
      if (ua.includes("Firefox")) return "Firefox";
      if (ua.includes("Edg/")) return "Microsoft Edge";
      if (ua.includes("Chrome")) return "Chrome";
      if (ua.includes("Safari")) return "Safari";
      return "Unknown";
    };
    const getOS = () => {
      if (ua.includes("Windows NT 10")) return "Windows 10/11";
      if (ua.includes("Windows NT 6.1")) return "Windows 7";
      if (ua.includes("Mac OS X")) return "macOS";
      if (ua.includes("Linux")) return "Linux";
      if (ua.includes("Android")) return "Android";
      if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
      return "Unknown";
    };
    setInfo({
      OS: getOS(),
      Browser: getBrowser(),
      Resolution: `${window.screen.width}x${window.screen.height}`,
      "Viewport": `${window.innerWidth}x${window.innerHeight}`,
      "Color Depth": `${window.screen.colorDepth}-bit`,
      "Pixel Ratio": `${window.devicePixelRatio}x`,
      "Timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
      "Language": navigator.language,
      "Cores": `${navigator.hardwareConcurrency || "?"}`,
      "Site": "netjuga.lol",
      "Last Updated": "June 2026",
    });
  }, []);



  const labelColor = "#000080";
  const valueColor = "#1a1a1a";
  const accentColor = "#800080";

  const rows = Object.entries(info);
  const half = Math.ceil(rows.length / 2);

  return (
    <DraggableModal title="thisdevice.exe — System Information" iconUrl={ICON_DEVICE} onClose={onClose} style={{ width: 660 }}>
      <div style={{ background: "#f5f2eb", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        

        {/* Main neofetch area */}
        <div style={{ padding: "20px 24px", display: "flex", gap: 24, fontFamily: "'Courier New', monospace" }}>
          

          {/* Info columns */}
          <div style={{ flex: 1 }}>
            {/* Hostname banner */}
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: "bold", marginBottom: 4 }}>
              <span style={{ color: accentColor }}>visitor</span>
              <span style={{ color: "#555" }}>@</span>
              <span style={{ color: labelColor }}>netjuga.lol</span>
            </div>
            <div style={{ height: 1, background: "#c0c0c0", marginBottom: 10 }} />

            {/* Two-column table of info rows */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 16px" }}>
              {rows.map(([key, val]) => (
                <div key={key} style={{ display: "flex", gap: 6, fontSize: 11, lineHeight: 1.8 }}>
                  <span style={{ color: labelColor, fontWeight: "bold", minWidth: 80 }}>{key}</span>
                  <span style={{ color: "#555" }}>:</span>
                  <span style={{ color: valueColor }}>{val || "…"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: "#d4d0c8", borderTop: "1px solid #a0a0a0", padding: "3px 10px", fontFamily: "monospace", fontSize: 9, color: "#555", display: "flex", justifyContent: "space-between" }}>
          <span>netjuga.lol — neofetch v1.0</span>
          <button onClick={onClose} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "1px 12px", fontFamily: "Tahoma, sans-serif", fontSize: 10, cursor: "pointer" }}>Close</button>
        </div>
      </div>
    </DraggableModal>
  );
}

// ─── OBSID windows ─────────────────────────────────────────────────────────────
function ObsidCardWindow({ onClose, onExit }: { onClose: () => void; onExit: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 800 }}>
      <div style={{ background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "6px 6px 18px rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", fontFamily: "Tahoma, sans-serif", width: 800, height: 450 }}>
        <div style={{ background: "linear-gradient(to right, #0a0adb, #1084d0)", padding: "3px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <span style={{ color: "white", fontWeight: "bold", fontSize: 12, display: "flex", alignItems: "center", gap: 5 }}>
            <XPImg url={obsidIcon} size={14} />
            OBSID-CLD
          </span>
          <TitleButtons onClose={onClose} />
        </div>
        <div style={{ flex: 1, background: "#000", lineHeight: 0 }}>
          <iframe src="https://www.obsidcld.com/#c=N4IgdghgtgpiBcICCAnAzgGwhMACAFAHICiAKgFYCuA5hAJQgA0IALhNRgJZhyKkAWnNLiG4oAT1wB7AEZpOAE1wBjCCgUBCJq3ZoEAbRCz5S0RFwspUjLgCSYiApgWpuNDBQA3DxhhpMkvxSaCy4YFIsfhb8EKGqeDLOaDEoMEo4SjBgyijiAA6RSgDunCxBlKHUnJ7c1LgKseaWKlIoea2xnFJgeswsuSKhUhW4AGatuOLD6DAYo4PCylJQeb6RGJKjqc4Z0nlZbtPKMAB0IAC6zHncPAqEEX4G5wC+QA" width="100%" height="100%" style={{ border: "none", display: "block" }} title="OBSID-CLD" />
        </div>
        <div style={{ background: "#ece9d8", borderTop: "2px solid #808080", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#555" }}>obsidcld.com</span>
          <button onClick={onExit} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "3px 14px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>Done</button>
        </div>
      </div>
    </div>
  );
}

function ObsidExitModal({ onTryIt, onStay }: { onTryIt: () => void; onStay: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 900 }} onClick={onStay}>
      <div onClick={e => e.stopPropagation()} style={{ width: 380, background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "4px 4px 12px rgba(0,0,0,0.5)", fontFamily: "Tahoma, sans-serif" }}>
        <div style={{ background: "linear-gradient(to right, #0a0adb, #1084d0)", padding: "4px 8px", color: "white", fontWeight: "bold", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
          <XPImg url={ICON_OBSIDI} size={14} />
          OBSID CARD
        </div>
        <div style={{ padding: "20px 20px 10px" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18 }}>
            <XPImg url={ICON_OBSIDI} size={32} />
            <div style={{ fontSize: 12, lineHeight: 1.7, color: "#000" }}>
              You can try out <strong>OBSID</strong> yourself — it's free to use.<br />Click below to open it in a new tab.
            </div>
          </div>
          <div style={{ height: 1, background: "#808080", margin: "0 -20px 14px" }} />
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button onClick={onStay} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "4px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>Stay here</button>
            <button onClick={onTryIt} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "4px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer", fontWeight: "bold" }}>Try OBSID →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Confirm Dialog ───────────────────────────────────────────────────────────
function ConfirmDialog({ message, onConfirm, onCancel }: { message: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000, pointerEvents: "auto" }} onClick={onCancel}>
      <div onClick={e => e.stopPropagation()} style={{ width: 360, background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "4px 4px 10px rgba(0,0,0,0.5)", fontFamily: "Tahoma, sans-serif" }}>
        <div style={{ background: "linear-gradient(to right, #0a0adb, #1084d0)", padding: "6px 10px", color: "white", fontWeight: "bold", fontSize: 12 }}>Confirm</div>
        <div style={{ padding: "20px 20px 16px", fontSize: 12, color: "#000" }}>{message}</div>
        <div style={{ padding: "8px 12px 12px", display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button onClick={onCancel} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "4px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>Cancel</button>
          <button onClick={onConfirm} style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "4px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>OK</button>
        </div>
      </div>
    </div>
  );
}

// ─── Start Menu ───────────────────────────────────────────────────────────────
type ModalType = "bgPicker" | "musicLib" | "games" | "books" | "portfolio" | "currentProjects" | "upTo" | "howTo" | "obsicdi" | "thisDevice" | "skillsSearch" | null;






// ─── Skills Search (IE-style) ─────────────────────────────────────────────────
function SkillsSearchWindow({ onClose }: { onClose: () => void }) {
  const [detailProject, setDetailProject] = useState<SkillProject | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const tagColour = (t: string) =>
    ({ "C++":"#004488","React":"#00bbdd","Swift":"#ff7700","Python":"#3070bb",
       "AWS":"#ff9900","PostgreSQL":"#336699","TypeScript":"#1a4a8a","Node.js":"#338833"
    } as Record<string,string>)[t] || "#555577";

  const allProjects: { skill: string; project: SkillProject }[] = SKILLS.flatMap(skill =>
    (SKILL_PROJECTS[skill] || []).map(p => ({ skill, project: p }))
  );

  const displayed = activeSkill
    ? allProjects.filter(x => x.skill === activeSkill)
    : allProjects;

  const slug = (title: string) => title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <>
      {detailProject && <SkillDetailPopup project={detailProject} onClose={() => setDetailProject(null)} />}
      <DraggableModal
        title="Skills — Microsoft Internet Explorer"
        iconUrl={intExploreIcon}
        onClose={onClose}
        style={{ width: 860, minHeight: 600, maxHeight: "90vh" }}
      >
        {/* IE toolbar */}
        <div style={{ background: "#ece9d8", borderBottom: "1px solid #808080", padding: "4px 8px", display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>◀</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>▶</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>■</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>↺</button>
          <div style={{ width: 1, height: 20, background: "#808080", margin: "0 4px" }} />
          <span style={{ fontFamily: "Tahoma, sans-serif", fontSize: 10, fontWeight: "bold" }}>Address</span>
          <input
            type="text"
            readOnly
            value={activeSkill ? `https://netjuga.lol/skills/${activeSkill.toLowerCase()}` : "https://netjuga.lol/skills"}
            style={{ flex: 1, background: "white", border: "2px inset #808080", padding: "2px 6px", fontFamily: "monospace", fontSize: 11 }}
          />
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 12px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>Go</button>
          <button style={{ background: "#c0c0c0", border: "1px solid #808080", padding: "2px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>★</button>
        </div>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Left sidebar — skill filter */}
          <div style={{ width: 160, background: "#f0ede8", borderRight: "2px solid #808080", flexShrink: 0, overflowY: "auto" }}>
            <div style={{ background: "#000080", color: "white", padding: "5px 10px", fontFamily: "Tahoma, sans-serif", fontSize: 11, fontWeight: "bold" }}>
              Skills
            </div>
            <div
              onClick={() => setActiveSkill(null)}
              style={{ padding: "6px 10px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer", background: activeSkill === null ? "#316ac5" : "transparent", color: activeSkill === null ? "white" : "black", borderBottom: "1px solid #d0ccc8" }}
              onMouseEnter={e => { if (activeSkill !== null) e.currentTarget.style.background = "#dce4f5"; }}
              onMouseLeave={e => { if (activeSkill !== null) e.currentTarget.style.background = "transparent"; }}
            >
              All Skills
            </div>
            {SKILLS.map(skill => (
              <div
                key={skill}
                onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                style={{ padding: "6px 10px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer", background: activeSkill === skill ? "#316ac5" : "transparent", color: activeSkill === skill ? "white" : "black", borderBottom: "1px solid #d0ccc8" }}
                onMouseEnter={e => { if (activeSkill !== skill) e.currentTarget.style.background = "#dce4f5"; }}
                onMouseLeave={e => { if (activeSkill !== skill) e.currentTarget.style.background = "transparent"; }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Main results area */}
          <div style={{ flex: 1, overflowY: "auto", background: "white" }}>
            {/* IE-style search header */}
            <div style={{ borderBottom: "1px solid #e0e0e0", padding: "16px 24px 12px" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                <input
                  type="text"
                  readOnly
                  value={activeSkill || "all skills"}
                  style={{ flex: 1, border: "2px inset #808080", padding: "4px 8px", fontFamily: "Tahoma, sans-serif", fontSize: 12, maxWidth: 400 }}
                />
                <button style={{ background: "#c0c0c0", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", padding: "4px 16px", fontFamily: "Tahoma, sans-serif", fontSize: 11, cursor: "pointer" }}>
                  Search
                </button>
              </div>
              <div style={{ fontFamily: "Tahoma, sans-serif", fontSize: 11, color: "#555" }}>
                About <strong>{displayed.length}</strong> result{displayed.length !== 1 ? "s" : ""}{activeSkill ? ` for "${activeSkill}"` : " — all skills"}
              </div>
            </div>

            {/* Results list */}
            <div style={{ padding: "12px 24px" }}>
              {displayed.map(({ skill, project }, i) => (
                <div
                  key={i}
                  onClick={() => setDetailProject(project)}
                  style={{ marginBottom: 20, cursor: "pointer", paddingBottom: 16, borderBottom: "1px solid #f0f0f0" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f5f8ff"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{ fontFamily: "monospace", fontSize: 9, color: "#006600", marginBottom: 2 }}>
                    netjuga.lol › skills › {skill.toLowerCase()} › {slug(project.title)}
                  </div>
                  <div style={{ fontSize: 14, color: "#0000cc", textDecoration: "underline", marginBottom: 3, fontFamily: "Tahoma, sans-serif" }}>
                    {project.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#333", lineHeight: 1.6, fontFamily: "Tahoma, sans-serif", marginBottom: 6 }}>
                    {project.description}
                  </div>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: 9, background: "#e8f0fe", color: "#0000aa", padding: "1px 6px", border: "1px solid #b0c4f8" }}>
                      {skill}
                    </span>
                    {project.tags.slice(0, 4).map(t => (
                      <span key={t} style={{ fontSize: 9, padding: "1px 6px", fontFamily: "monospace", background: tagColour(t), color: "white" }}>{t}</span>
                    ))}
                    <span style={{ fontSize: 9, fontFamily: "monospace", marginLeft: "auto", color: project.status === "Live" ? "#006600" : project.status === "Beta" ? "#885500" : "#004488" }}>
                      ● {project.status} · {project.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "#ece9d8", borderTop: "2px solid #808080", padding: "2px 8px", fontFamily: "monospace", fontSize: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
          <span>Done</span>
          <span style={{ border: "1px inset #a0a0a0", padding: "1px 6px" }}>Internet zone</span>
        </div>
      </DraggableModal>
    </>
  );
}






function StartMenu({ onOpen, onClose }: { onOpen: (m: ModalType) => void; onClose: () => void }) {
  const items = [
    { label: "Portfolio",         modal: "portfolio"       as ModalType, iconUrl: ICON_BOOK },
    { label: "Current Projects",  modal: "currentProjects" as ModalType, iconUrl: ICON_TOOLS },
    { label: "What I'm up to",    modal: "upTo"            as ModalType, iconUrl: ICON_NOTEPAD },
    { label: "Books",             modal: "books"           as ModalType, iconUrl: ICON_MINECRAFT_BOOK },
    { label: "Games",             modal: "games"           as ModalType, iconUrl: ICON_STICK },
    { label: "My Music",          modal: "musicLib"        as ModalType, iconUrl: ICON_MUSIC },
    { label: "How To Use",        modal: "howTo"           as ModalType, iconUrl: ICON_HELP },
    { label: "OBSID-CLD",         modal: "obsicdi"         as ModalType, iconUrl: obsidIcon },
    { label: "This Device",       modal: "thisDevice"      as ModalType, iconUrl: ICON_DEVICE },
  ];
  return (
    <div style={{ position: "fixed", bottom: 34, left: 0, width: 320, background: "#ece9d8", border: "2px solid", borderColor: "#ffffff #808080 #808080 #ffffff", boxShadow: "4px 4px 12px rgba(0,0,0,0.5)", zIndex: 300, fontFamily: "Tahoma, sans-serif" }}>
      <div style={{ background: "linear-gradient(to right, #1164cf, #3a8dde)", display: "flex", alignItems: "center", gap: 12, padding: "10px 14px" }}>
      <div style={{ width: 44, height: 44, background: "#c0c0c0", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}><img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
              <div><div style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>Netjuga</div><div style={{ color: "#a8c8f0", fontSize: 10 }}>netjuga.lol</div></div>
      </div>
      <div style={{ padding: "6px 0" }}>
        {items.map(item => (
          <button key={item.label} onClick={() => { onOpen(item.modal); onClose(); }} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 14px", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 12, textAlign: "left", color: "black" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#316ac5"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "black"; }}>
            <XPImg url={item.iconUrl} size={20} /><span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Clock ────────────────────────────────────────────────────────────────────
function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => { const u = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })); u(); const t = setInterval(u, 10000); return () => clearInterval(t); }, []);
  return <span>{time}</span>;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const DESKTOP_ICONS = [
  { label: "Portfolio",         iconUrl: ICON_BOOK,           modal: "portfolio"       as ModalType },
  { label: "Current\nProjects", iconUrl: ICON_TOOLS,          modal: "currentProjects" as ModalType },
  { label: "What I'm\nup to",   iconUrl: ICON_NOTEPAD,        modal: "upTo"            as ModalType },
  { label: "Books",             iconUrl: ICON_MINECRAFT_BOOK, modal: "books"           as ModalType },
  { label: "My Music",          iconUrl: ICON_MUSIC,          modal: "musicLib"        as ModalType },
  { label: "Appearance",        iconUrl: ICON_PAINT,          modal: "bgPicker"        as ModalType },
  { label: "Games",             iconUrl: ICON_STICK,          modal: "games"           as ModalType },
  { label: "How To\nUse",       iconUrl: ICON_HELP,           modal: "howTo"           as ModalType },
  { label: "OBSID-CLD",         iconUrl: obsidIcon,           modal: "obsicdi"         as ModalType },
  { label: "Skills\nSearch",    iconUrl: intExploreIcon,      modal: "skillsSearch"    as ModalType, size: 62 },
];

export default function HomePage() {
  const [obsidCardOpen, setObsidCardOpen] = useState(false);
  const [obsidExitModal, setObsidExitModal] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  // ── CHANGED: default wallpaper is now the imported windowsXP image ──
  const [bg, setBg]           = useState(BACKGROUNDS[0].value);
  const [modal, setModal]     = useState<ModalType>(null);
  const [activeSong, setActiveSong] = useState<Song | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [openWindows, setOpenWindows] = useState<{ id: ModalType; label: string; iconUrl: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (m: ModalType) => {
    if (m === "obsicdi") {
      setObsidCardOpen(true);
      return;
    }
    setModal(m);
    if (m && !openWindows.find(w => w.id === m)) {
      const icon = DESKTOP_ICONS.find(d => d.modal === m);
      setOpenWindows(w => [...w, { id: m, label: icon?.label.replace("\n", " ") || m || "", iconUrl: icon?.iconUrl || ICON_FOLDER }]);
    }
  };

  const handleObsidExit = () => { setObsidCardOpen(false); setObsidExitModal(true); };
  const handleObsidTryIt = () => { setObsidExitModal(false); window.open("https://www.obsidcld.com", "_blank"); };
  const handleObsidStay = () => { setObsidExitModal(false); };

  const closeModal = (m: ModalType) => {
    setModal(null);
    setOpenWindows(w => w.filter(x => x.id !== m));
  };

  const closeAll = () => { setStartMenuOpen(false); setSelectedIcon(null); };

  return (
    <div onClick={closeAll} style={{ background: bg, minHeight: "100vh", position: "relative", fontFamily: "Tahoma, 'MS Sans Serif', sans-serif", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 16, left: 16, display: "flex", flexDirection: "column", gap: 4 }}>
        {DESKTOP_ICONS.map((item, i) => (
          <DesktopIcon key={item.label} iconUrl={item.iconUrl} label={item.label} selected={selectedIcon === i} size={item.size}
          onClick={(e: MouseEvent<HTMLDivElement>) => { e.stopPropagation(); setSelectedIcon(i); }}
          onDoubleClick={(e: MouseEvent<HTMLDivElement>) => { e.stopPropagation(); openModal(item.modal); setSelectedIcon(i); }}
        />
        ))}
      </div>

      <AboutDesktopWindow />

      {(modal || activeSong) && (
        <div onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 600, pointerEvents: "none" }}>
          <div style={{ pointerEvents: "all" }}>
            {modal === "bgPicker"        && <BgPicker current={bg} onSelect={v => setBg(v)} onClose={() => closeModal("bgPicker")} />}
            {modal === "musicLib"        && !activeSong && <MusicLibrary onClose={() => closeModal("musicLib")} onPlay={s => { setActiveSong(s); setModal(null); }} />}
            {modal === "games"           && <GamesWindow onClose={() => closeModal("games")} />}
            {modal === "books"           && <BooksWindow onClose={() => closeModal("books")} />}
            {modal === "portfolio"       && <PortfolioClipboard onClose={() => closeModal("portfolio")} />}
            {modal === "currentProjects" && <CurrentProjectsIDE onClose={() => closeModal("currentProjects")} />}
            {modal === "upTo"            && <UpToWindow onClose={() => closeModal("upTo")} />}
            {modal === "howTo"           && <HowToWindow onClose={() => closeModal("howTo")} />}
            {modal === "thisDevice"      && <ThisDeviceWindow onClose={() => closeModal("thisDevice")} />}
            {modal === "skillsSearch"    && <SkillsSearchWindow onClose={() => closeModal("skillsSearch")} />}
            {activeSong                  && <MusicPlayer song={activeSong} onClose={() => { setActiveSong(null); setOpenWindows(w => w.filter(x => x.id !== "musicLib")); }} />}
          </div>
        </div>
      )}

      {startMenuOpen && <StartMenu onOpen={m => openModal(m)} onClose={() => setStartMenuOpen(false)} />}

      {obsidCardOpen && <ObsidCardWindow onClose={() => handleObsidExit()} onExit={() => handleObsidExit()} />}
      {obsidExitModal && <ObsidExitModal onTryIt={handleObsidTryIt} onStay={handleObsidStay} />}

      <div onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 34, background: "linear-gradient(to bottom, #245edb 0%, #1748c8 4%, #1e55d8 6%, #1748c4 100%)", borderTop: "1px solid #3c70e8", display: "flex", alignItems: "center", padding: "0 4px", gap: 4, zIndex: 200 }}>
        <button onClick={() => setStartMenuOpen(p => !p)} style={{ background: startMenuOpen ? "#b0b0b0" : "#c0c0c0", border: "2px solid", borderColor: startMenuOpen ? "#808080 #ffffff #ffffff #808080" : "#ffffff #808080 #808080 #ffffff", padding: "1px 10px", fontWeight: "bold", fontSize: 12, fontFamily: "Tahoma, sans-serif", cursor: "pointer", height: 24, minWidth: 54 }}>Start</button>
        <div style={{ width: 1, background: "#1a3a8a", height: 24, margin: "0 2px" }} />
        {openWindows.map(w => (
          <button key={w.id} onClick={() => { setModal(w.id); }} style={{ display: "flex", alignItems: "center", gap: 5, height: 24, padding: "0 8px", background: modal === w.id ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.15)", border: "1px solid", borderColor: modal === w.id ? "rgba(0,0,0,0.5) rgba(255,255,255,0.2) rgba(255,255,255,0.2) rgba(0,0,0,0.5)" : "rgba(255,255,255,0.3) rgba(0,0,0,0.3) rgba(0,0,0,0.3) rgba(255,255,255,0.3)", cursor: "pointer", fontFamily: "Tahoma, sans-serif", fontSize: 11, color: "white", maxWidth: 140, overflow: "hidden", whiteSpace: "nowrap" }}>
            <XPImg url={w.iconUrl} size={14} /><span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{w.label}</span>
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2, padding: "2px 8px", color: "white", fontSize: 11, fontFamily: "Tahoma, sans-serif", display: "flex", alignItems: "center", gap: 8, height: 24 }}>
          <span title="Volume">🔊</span><span title="Network">🌐</span><div style={{ width: 1, background: "rgba(255,255,255,0.2)", height: 14 }} /><Clock />
        </div>
      </div>

      <style>{`
        @keyframes eq    { 0% { height: 10px } 100% { height: 55px } }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 14px; }
        ::-webkit-scrollbar-track { background: #c0c0c0; }
        ::-webkit-scrollbar-thumb { background: #c0c0c0; border: 2px solid; border-color: #ffffff #808080 #808080 #ffffff; }
        .interest-text { color: black; }
      `}</style>
    </div>
  );
}