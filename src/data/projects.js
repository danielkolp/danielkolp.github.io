import blenderDemo from '../assets/video/blenderdemo.mp4'
import blenderDemo2 from '../assets/video/blenderdemo2.mp4'
import graffitiGame1 from '../assets/images/graffitigamenew1.png'
import graffitiGame2 from '../assets/images/graffitigamenew2.png'
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
    description: 'A 3D graffiti game built with Three.js. Creative name pending.',
    fullDescription: 'Graffiti Game is an interactive 3D experience that lets you explore a virtual city and create graffiti art. Built with Three.js, this project demonstrates advanced 3D rendering techniques and creative coding.',
    overviewParagraphs: [
      'Graffiti Game started as a test for how far a browser-based 3D interface could go before it stopped feeling playful. The goal was to make the interaction feel physical, like you were moving through a space instead of clicking through a demo.',
      'The idea was to make a game with a simple environment, simple mechanics, with some social shenanigans thrown in. Basically "walk around and do dumb stuff with random people".',
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
      {
        type: 'image',
        src: graffitiGame1,
        title: 'Graffiti Game In-Game Screenshot',
      },
      {
        type: 'image',
        src: graffitiGame2,
        title: 'Graffiti Game In-Game Screenshot',
      }
    ],
    details: [
     {
    label: 'Challenge',
    text: "This was my first time working with Blender and building a 3D experience from scratch. I wanted to create an interactive browser-based 3D game, which meant learning how to import, rig, and animate character models while integrating them into a real-time Three.js environment.",
    text2: "A key challenge was working with Mixamo animations and correctly converting them into reusable actions in Blender. This required properly structuring animation states and fixing orientation issues to avoid unnatural movement in-game.",
    text3: "Another major hurdle was making the animations look good. At the project's current state, the movement is functional and feels responsive, but the animation quality is still a bit rough around the edges. Previously, there was a jump animation, however the jumping did not really sync well with the animation.",
    text4: "I also had issues with the drawing mechanic, which is the absolute core of the experience. I pretty much had to figure out a way to make the drawing feel like you were actually painting something on the wall, which involved a lot of trial and error with how to get strokes to draw smoothly and responsively. In my first iteration, you would essentially draw one stroke, but you wouldn't see the stroke you were drawing until you finished the stroke, which made it feel really clunky and disconnected.",
    text5: "And then came multiplayer. Conveniently, there is this service named Render that allows you to deploy deploy backends that wipe state after a certain amount of time. This is perfect for a game like this. Because on one hand, graffiti's would be wiped after a certain amount of time, just like in the real world. On the other hand, it also allows for multiplayer support. Obviously, adding multiplayer was a huge challenge for me, as I had to mess around with plugins such as socket.io and figure out how to sync state across clients in real time."
     },
      {
  label: 'Solution',
  text: "I essentially had to learn how to use Blender on the fly, which involved a lot of trial and error. I started by downloading a royalty-free simple character model and rigging it with a basic skeleton. Then I imported Mixamo animations and worked on converting them into reusable actions within Blender. This process involved fixing orientation issues and structuring the animation states in a way that would allow for smooth transitions between movements.",
  text2: "There were a lot of tweaks and fine-tuning that I had to do that AI simply couldn't help with, especially when it came to making animations look and feel good. This includes things like adjusting player speed based on the speed of the walk cycle, or making sure that when the character turns, the model doesn't do a full 360 degree spin before facing the new direction. A lot of small details like that really made a big difference in how the movement felt overall. Like in user experience design, when you immerse yourself in a game, you don't notice when something is done right. However, if something is off, you will immediately notice it and it can really harm the experience.",
  text3: "For the stroke issue, I ended up implementing a system where it would preview the stroke as you were drawing it, and bake it onto the wall as soon as you finished the stroke. This made drawing feel a million times more responsive and satisfying.",
  text4: "With the help of Render and some time spent with Codex, I was able to set up something pretty sophisticated. Drawing and movement live-sync across clients in real time, and then came a chat feature that allows you to chat with other players in the game. The chat is pretty basic, but it was a fun addition that made the world feel more alive and interactive."
},
      {
  label: 'Result',
  text: "The result is a fully interactive browser-based 3D experience where users can move through an environment and draw directly onto surfaces in real time. The project demonstrates real-time rendering, animation handling, and interactive design using Three.js.",
  text2: "Multiplayer support allows users to see each other's drawings, movements, and chat in real time, creating a shared creative space.",
  text3: "This project was inspired platforms such as Roblox or many of those social games where the fun comes from what the players do and not from the game itself."
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
  text: 'Music discovery shouldn’t feel like digging through garbage to find one good track. I always listen to underground tracks that I find on Soundcloud. The problem is, their discovery system is bad. For example, a house track on soundcloud can be mellow and chill, but all their algorithm knows about you is that you listened to a House track, so it would also recommend house tracks that are the exact opposite of what you like, as well as songs that are well-known and popular. Crates is built to give you the whole shaabang. It uses YouTube data to surface tracks that are underground using simple filters, and allows you to use more specific filters to find tracks that are similar to what you like.',
},
{
  label: 'Challenge',
  text: 'The hardest problem wasn’t finding underground tracks, it was filtering out junk and non music related content. Initially, the algorithm was picking up on YouTube shorts and Minecraft Lets Play videos, so I had to figure out how to actually filter them out. Then I remembered the \'topic\' feature on YouTube, which are auto-generated channels that host official audio releases with clean metadata. They essentially act like a structured music layer inside YouTube, which made them a strong signal for real tracks.',
  text2: 'Another problem was that balancing the gem score system. What is the difference between a track with a high gem score and a low gem score?'
  
},
{
  label: 'Solution',
  text: 'I initially had the plan to  use the SoundCloud API, but I quickly realized that their API is gated to users who have an Artist Pro plan. I already have a Go+ subscription, so I didn\'t really want to pay extra just to get access to the API. So I switched to YouTube. Completely free, with limits that are pretty generous.',
 text2: 'Crates uses Youtube Topic channels as a strong quality signal. Filtering for topic-only channels got rid of a lot of junk and non-music content. Every track also has metadata that gives the algorithm more to work with, such as views, likes, comments, genre tags, release date, and miscellaneous information like record labels or related artists/composers. Without these, it would be difficult to differentiate a house track from a country song.',
 text3: 'Using helper functions, I grabbed a few reference tracks that I liked that are underground (less than 1000 views) and ran them through the system to see what gem scores they got. Then over time, I tweaked the weights of different signals and filters to make sure that those reference tracks consistently got high gem scores.'
},
{
  label: 'Result',
  text: 'The result is a music discovery app that genuinely feels like digging through a decently curated record bin. Users can swipe through tracks using swipe mode, save tracks that they like, and skip ones that they do not. Even though the app is not perfect, it consistently surfaces music that feels underground, intentional and worth listening to.',
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
