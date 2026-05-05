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
import promptEngine1 from '../assets/images/promptenginegallery/promptengine1.png'
import promptEngine2 from '../assets/images/promptenginegallery/promptengine2.png'
import promptEngine3 from '../assets/images/promptenginegallery/promptengine3.png'

export const projectsData = {
  '05': {
    id: '05',
    title: 'Prompt Engine',
    subtitle: 'A fast, AI powered prompt-building tool.',
    description: 'An AI powered tool that helps you build better prompts for AI.',
    fullDescription: 'Prompt Engine is a prompt-building tool for turning rough AI requests into structured, reusable instructions. It focuses on clarifying context, constraints, tone, and output format so users can move from an idea to a stronger working prompt faster.',
    overviewParagraphs: [
      'I\'ve always had a love/hate relationship with prompt engineering (mostly hate). Sometimes, I wish ChatGPT or Claude would just understand what I meant without me having to spend 15 minutes trying to figure out how to explain every single detail. That\'s the problem with having a vague, but powerful idea in your head. My personal workflow consists of starting with a rough prompt or idea, feed it to ChatGPT and then put the refined prompt into Codex along with a wireframe of what I want to build.',
      'That\'s where my idea of a prompt-building tool came in. An AI that helps you work with AI better. The tool is meant to help you break up your intent into pills, such as "goals", "restraints", "output style", and "format". So instead of dumping all your instructions into a big old text box, you can break it up into smaller components, and then the system generates a refined prompt that leads to higher-quality AI outputs.',
      'The app uses Groq and Meta LLama 70B Versatile to power the prompt refinement.'
    ],
    technologies: ['REACT', 'AI', 'PROMPT SYSTEMS', 'UX DESIGN'],
    year: '2026',
    role: 'Product Developer',
    link: 'https://danielkolp.github.io/promptengine/',
    image: promptEngine1,
    detailImage: promptEngine2,
    gallery: [promptEngine1, promptEngine2, promptEngine3],
    details: [
      {
        label: 'Challenge',
        text: 'What I had trouble with initially wasn\'t actually the implementation of the AI, it was configuring the system prompt in a way where the AI could come out of its shell a little bit. If the system prompt is too basic, the output is going to be basic. It also had to be structured in a JSON format so that the app could actually grab the different components and display them in the UI. For example, A JSON field that the AI could receive would be something like "goals" = "I want to make a website", "constraints" = "i dont wanna code". The AI would then read that and be like "ok, the user wants to make a website, and they dont wanna code", and then it would generate a prompt based on that information. So the challenge was really telling the AI "here\'s information, give me a good prompt based on that information".'
      },
      {
        label: 'Solution',
        text: 'I structured the system prompt to clearly define the expected input and output format. I had to experiment with different constraints and instructions to find a proper balance that would guide the AI to produce useful and structured prompts. I gave it a hard word limit, told it to avoid generic phrases, and told it how to think about the user\'s input. This helps it convert vague instructions made by lazy humans into something more specific and structured.',
      },
      {
        label: 'Result',
        text: 'The result is a really straight-forward tool where you can input different components of a prompt, and it generates a refined prompt that you can paste into your AI of choice. The tool is meant to help create a pipeline for users to go from a vague idea into a finished product without having to spend a lot of time prompting AI and tweaking prompts. This has been a really fun experiment for me, and I think it has some potential to be a useful tool for people who want to work with AI but find prompt engineering to be a barrier.',
      },
    ],
  },
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
      'Let’s be real. Finding new music sucks. Sure, you have Soundcloud where you could browse playlists to find new songs, or Spotify’s DJ feature, but on one hand, you have to dig through a bunch of trash, and on the other, Spotify has this weird guy talking to you while you’re trying to listen to new songs. These platforms constantly feed you mainstream music while you’re just trying to find something you genuinely like. It all just seems pretty unintuitive. ',
      'I’ve dealt with this issue first-hand. I personally listen to lots of UK Garage, oldschool house music, deep house, etc. These algorithms would constantly feed me very mainstream, boring music that sounds like every other song.',
      'That’s where my idea came in. An app that dumbs it down for you with an algorithm that’s specifically meant to feed you music you’ve never heard before. Tinder, but for music.'
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
  text: 'I built an app using the Youtube API that helps you look for underground music. The algorithm is meant to give you tracks that you’ve likely never heard before, just like you’re digging through crates of records at the back of a thrift shop. Just like Tinder, the app has a swiping feature that lets you quickly like or dislike tracks, or even mark a track as a “gem” if you really like a track.',

text2: 'There are quick-action buttons you can press to search a song on various streaming platforms for you to save them to your personal library, as well as a playlist feature that saves to your local browser in case you wanted to organize your liked songs.',

text3: 'The app rates tracks with a “Gem Score”, which is a ranking system that is meant to quantify quality. The score is weighted on track engagement, staying power (how well a track continues to perform over time), and other various indicators provided by the track’s metadata.'

},
{
  label: 'Challenge',
  text: 'The main issue was filtering out noise. In the app’s early stages, it would output YouTube shorts or Minecraft Let’s Play videos, so I had to figure out a way to have the track only provide music. Another problem was balancing the gem score system, and figuring out a meaning behind it. The main point of the gem score system is to find tracks that have good metadata. I had to build a robust system that not only filters out trash, but somehow quantify YouTube metadata in a way where it determines whether a track is actually music, and whether the track is worth listening to despite its low exposure.',
  text2: 'So essentially, it comes down to: filtering out obvious garbage (YouTube shorts, gaming videos, etc.), building something that determines the likelihood that a video is actually music, and putting it all through a system that generates a one out of ten score on: how many views a track has (lower = more underground), engagement (likes and comments relative to views), how recent it is, whether it comes from a reliable source, and how strong the “this is actually music” signal is.'
  
},
{
  label: 'Solution',
  text: 'Crates uses Youtube Topic channels as a strong quality signal. Filtering for topic-only channels got rid of a lot of junk and non-music content. Every track also has metadata that gives the algorithm more to work with, such as views, likes, comments, genre tags, release date, and miscellaneous information like record labels or related artists/composers',
 text2: 'Without these, it would be difficult to differentiate a house track from a country song. Using helper functions, I grabbed a few reference tracks that I liked that are underground (less than 1000 views) and ran them through the system to see what gem scores they got. Then over time, I tweaked the weights of different signals and filters to make sure that those reference tracks consistently got decently high gem scores.',

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
