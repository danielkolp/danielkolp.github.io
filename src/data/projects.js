import blenderDemo from '../assets/video/blenderdemo.mp4'
import blenderDemo2 from '../assets/video/blenderdemo2.mp4'
import graffitiGame1 from '../assets/images/graffiti.png'
import projectImage from '../assets/images/image.png'
import cratesImage from '../assets/images/crates.png'
import cratesDetailImage from '../assets/images/cratesdetail.png'
import cratesImg1 from '../assets/images/cratesgallery/cratesimg1.png'
import cratesImg2 from '../assets/images/cratesgallery/cratesimg2.png'
import cratesImg3 from '../assets/images/cratesgallery/cratesimg3.png'

export const projectsData = {
  '01': {
    id: '01',
    title: 'Graffiti Game',
    subtitle: 'A 3D graffiti game built with Three.js. Creative name pending.',
    description: 'A 3D graffiti game built with React Three Fiber. Explore, tag and leave your mark.',
    fullDescription: 'Graffiti Game is an interactive 3D experience that lets you explore a virtual city and create graffiti art. Built with Three.js, this project demonstrates advanced 3D rendering techniques and creative coding.',
    overviewParagraphs: [
      'Graffiti Game started as a test for how far a browser-based 3D interface could go before it stopped feeling playful. The goal was to make the interaction feel physical, like you were moving through a space instead of clicking through a demo.',
      'The visual language balances grit and precision: slight post-processing, responsive motion, and a UI that stays quiet while the work does the talking.',
    ],
    technologies: ['THREE.JS', 'WEBGL', 'JAVASCRIPT', 'VITE', 'BLENDER'],
    year: '2025',
    role: 'Developer & Designer',
    link: 'https://danielkolp.github.io/graffiti-game/',
    image: graffitiGame1,
    detailImage: projectImage,
    gallery: [
      {
        type: 'video',
        src: blenderDemo,
        title: 'Graffiti Game Blender Demo 1',
      },
      {
        type: 'video',
        src: blenderDemo2,
        title: 'Graffiti Game Blender Demo 2',
      },
    ],
    details: [
      {
        label: 'Challenge',
        text: "Let me be a little clear: I've literally never worked with Blender before this project. The original project was to create something, and do a round of QA tests. However, I wanted to push it a little bit further and create something I've always wanted to make: a 3D game.",
        text2: "This meant I had to have a little bit of fun with Blender. Essentially, I downloaded (royalty-free) 3D models. I then used Mixamo to rig grab animations for the player character. The main challenge was learning how to actually stash the animations as actions onto the model, and orient them correctly so that they don't make super unnatural movements.",
      },
      {
        label: 'Solution',
        text: 'So yes, there were many problems that occurred during development. I was frustrated at Blender (as you would expect), there were major performance issues that needed to be fixed, and the hardest part: UX decisions.',
        text2: "How do you make a 3D game actually feel not miserable to play? The thing is, at least for me, when I play a 3D video game and something unnatural happens with physics, movement, or controls, it breaks immersion and makes the game feel bad. Although my controls aren't perfect, I'm not exactly a triple AAA game studio, so I guess I had to make a few compromises.",
        text3: "But at the end of the day, I think the project turned out pretty well, considering this was my first ever attempt at making something like this. It was fun to dip my toes into Blender and see what Three.js can do with a little bit of creativity."
      },
      {
        label: 'Result',
        text: "The result is an awesome, slightly buggy 3D game in which you can draw on walls. Multiplayer has been implemented, but I don't really have the resources to host a backend server for it. The game has a bit of an initial lag spike, but for the most part, it runs pretty smoothly. It's been a fun experiment and a great learning experience, and I'm excited to see where I can take it next.",
      },
    ],
  },
  '02': {
    id: '02',
    title: 'Crates',
    subtitle: 'A music discovery app for finding high-quality underground tracks',
    description: 'Music discovery app that ranks underground tracks using engagement and rarity signals from YouTube data.',
    fullDescription: 'Crates is a music discovery app that surfaces high-quality underground tracks by combining engagement signals, rarity indicators, and creator momentum from YouTube data. The goal is to help listeners find songs that feel fresh before they break out, while keeping the experience fast, curated, and easy to explore.',
    overviewParagraphs: [
      'Crates is built around the idea that good discovery should feel like digging through an expertly tagged record bin, not scrolling a feed that rewards whatever is already loudest. The app uses YouTube engagement signals and scarcity cues to highlight tracks with real underground momentum.',
      'The product framing leaves room to explain how signals are weighted, how rankings are refreshed, and how the interface balances surfacing niche gems without burying the strongest picks. That makes the page read like a product case study rather than a generic music app.',
    ],
    technologies: ['REACT', 'YOUTUBE DATA', 'RANKING SIGNALS', 'UX DESIGN'],
    year: '2025',
    role: 'Product Developer',
    link: 'https://danielkolp.github.io/crates',
    image: cratesImage,
    detailImage: cratesDetailImage,
    gallery: [cratesImg1, cratesImg2, cratesImg3],
    details: [
     {
  label: 'Overview',
  text: 'Music discovery shouldn’t feel like digging through garbage to find one good track. Crates turns that process into something intentional. Instead of sending users down endless YouTube or SoundCloud rabbit holes, it actively pulls them deeper into high-quality underground music. The app analyzes signals like engagement velocity, repeat interest, and rarity to surface tracks that are gaining momentum before they break out.',
},
{
  label: 'Challenge',
  text: 'The hardest problem wasn’t finding underground tracks, it was filtering out the noise. Initially, the algorithm was picking up on YouTube shorts and Minecraft Lets Play videos, so I had to figure out how to actually filter them out. Then I realized remembered the \'topic\' feature on YouTube, which are auto-generated channels that host official audio releases with clean metadata. They essentially act like a structured music layer inside YouTube, which made them a strong signal for real tracks.',
},
{
  label: 'Solution',
 text: 'Crates uses YouTube Topic channels as a high-signal layer to filter out Shorts, gaming content, and other non-music noise. From there, it ranks tracks using engagement metrics like view-to-like ratio and comment activity, prioritizing under-the-radar uploads that show strong listener interest despite low exposure.'
},
{
  label: 'Result',
  text: 'The result is a discovery experience that feels like digging through a curated record bin. Instead of endless scrolling, users consistently uncover early, high-quality tracks that feel fresh and worth saving. Essentially as if you\'re digging through crates in the back of a record store and finding that one gem that hasn\'t been discovered yet. Although the algorithm isn\'t perfect, it does a decent job of finding music that feels fresh and underground. It uses a neat Tinder-like swiping interface that makes it easy to quickly save tracks you like and discard ones you don\'t.',
},
    ],
  },
  '03': {
    id: '03',
    title: 'Prompt Lab',
    subtitle: 'AI prompt generator for faster, better results',
    description: 'AI prompt generator for faster, better results.',
    fullDescription: 'Prompt Lab is a web application that helps users craft better AI prompts through an intuitive, guided interface. It uses machine learning to suggest improvements and variations. The project page format leaves enough room for a fuller narrative, including product goals, design decisions, and results.',
    overviewParagraphs: [
      'Prompt Lab helps people get better results from AI systems without forcing them to learn prompt engineering from scratch. The interface guides the process while still leaving room for experimentation.',
      'It is built to support richer project storytelling too, so the page can hold product thinking, implementation notes, and outcome-focused writing without turning into a cramped block of text.',
    ],
    technologies: ['REACT', 'NEXT.JS', 'AI/ML', 'API INTEGRATION'],
    year: '2024',
    role: 'Full Stack Developer',
    link: '#',
    image: null,
    underConstruction: true,
    detailImage: null,
    gallery: [null, null, null],
    details: [
      {
        label: 'Challenge',
        text: 'Design an accessible interface for both beginners and advanced AI users.',
      },
      {
        label: 'Solution',
        text: 'Built a progressive interface with helpful suggestions and templates, plus advanced options for power users.',
      },
      {
        label: 'Result',
        text: 'A popular tool used by thousands of AI enthusiasts to create better prompts and achieve better results.',
      },
    ],
  },
  '04': {
    id: '04',
    title: 'Frame Shift',
    subtitle: 'Interactive motion experiments for web storytelling',
    description: 'Interactive motion experiments for web storytelling.',
    fullDescription: 'Frame Shift is a playground for motion-led narratives on the web. It combines timing systems, scroll choreography, and lightweight WebGL effects to make story sections feel cinematic without sacrificing performance. The case study breaks down animation architecture, pacing decisions, and optimization tradeoffs.',
    overviewParagraphs: [
      'Frame Shift explores how motion can carry meaning, not just decoration. Each transition is tied to structure and rhythm so the page feels intentional instead of noisy.',
      'The implementation focuses on reusable timelines and predictable state changes. That keeps interactions smooth across devices while giving enough flexibility to iterate on storytelling beats quickly.',
    ],
    technologies: ['REACT', 'GSAP', 'WEBGL', 'VITE'],
    year: '2025',
    role: 'Creative Developer',
    link: '#',
    image: null,
    detailImage: null,
    gallery: [null, null, null],
    details: [
      {
        label: 'Challenge',
        text: 'Create rich motion interactions that feel cinematic while staying performant on typical laptops and phones.',
      },
      {
        label: 'Solution',
        text: 'Built a modular timeline system with section-based triggers, then layered subtle WebGL accents and fallback states for lower-powered devices.',
      },
      {
        label: 'Result',
        text: 'A highly interactive story experience with smooth transitions and stable frame pacing across modern browsers.',
      },
    ],
  },
}
