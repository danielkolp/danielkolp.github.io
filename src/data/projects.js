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
import councilImg1 from '../assets/images/councilgallery/councilimg1.png'
import councilImg2 from '../assets/images/councilgallery/councilimg2.png'
import councilImg3 from '../assets/images/councilgallery/councilimg3.png'

export const projectsData = {
  '06': {
    id: '06',
    title: 'Council',
    subtitle: 'A multi-persona AI debate app where characters challenge an idea from conflicting perspectives.',
    description: 'Council is an AI debate simulator where users enter a prompt and choose AI personalities to argue over it instead of receiving one polished answer.',
    fullDescription: 'Council started as a funny idea: what if AI personas argued with each other instead of politely agreeing?',
    overviewParagraphs: [
      'I\'ve seen videos on Instagram where someone takes two phones, ChatGPT Voice on one phone, and Gemini on the other, and the two AI\'s were basically just talking to each other. That kind of had me thinking: what if we just remove the part where you need to phones? Council started as a pretty funny idea: what if AI personas talked to each other, and had biases based on their world views, backgrounds, and experiences?',
      'For example, if you ask the group of AI personas "should make a web development project on music discovery?", one persona might say "yeah, no. terrible idea .." and they explain why. Another persona might say "wait, not so fast, that\'s a great idea if you execute it right", then they go back and forth, and you get a debate.',
      'The point of this is not to get a perfectly polished answer that you can simply get from ChatGPT. The point is to get different perspectives from wildly different personalities, so you can see the strengths and weaknesses of an idea from different angles. It\'s more of a pressure test and perspective tool than a source of truth. The characters are messy, chaotic, and opinionated, all on purpose.',
      'Technically, Council is built around multi-step AI generation rather than a single request. The app uses character-specific prompting, compressed debate context, structured JSON responses, local model testing through LM Studio and Qwen, and a Groq-backed production path. A simple debate can turn into multiple model calls very quickly, so the project became just as much about optimization, usability, conversational pacing, as it was about personality.'
    ],
    technologies: ['REACT', 'VITE', 'EXPRESS', 'TAILWIND CSS', 'GROQ', 'LM STUDIO', 'QWEN'],
    year: '2026',
    role: 'Product Developer',
    link: 'https://danielkolp.github.io/thecouncil/',
    image: councilImg1,
    detailImage: councilImg2,
    gallery: [councilImg1, councilImg2, councilImg3],
    featureSections: [
      {
        title: 'Personality System',
        text: 'The personality system ended up being the most important part of the app. This was what I spent most of my time on. This project was really less about building an AI app, and more about how to make AI to feel how I wanted it to feel. The characters were pretty much the heart and soul of the experience, so I had to get them right.',
        text2: 'I started by giving each character a domain bias. Ray sees the world through systems, scalability, and technical feasibility. Victor thinks in markets, leverage, ROI, and whether the upside is real. Ava pushes momentum and emotional ambition. Nina focuses on how the user feels, whether the idea is polished, and whether the experience has enough care behind it. Marcus attacks weak logic. Samson is just there to cause a ruckus.',
        text3: 'Then I had to shape their speech rhythm. Marcus needed to sound blunt and skeptical without becoming boring. Ava needed more momentum and confidence without sounding blindly positive. Ray needed practical technical objections. Victor needed to feel strategic and slightly dismissive. Nina needed emotional intelligence and polish. Samson needed fragmented thoughts, sudden pivots, overreactions, and emotional logic.',
        text4: 'The conflict hooks are what made the council start to feel alive. Marcus hates weak reasoning, Victor dismisses emotional thinking, Ava pushes back against excessive caution, Ray attacks unrealistic systems, Nina defends the user experience, and Samson misunderstands things confidently enough to try to expose weird truths. Once those hooks were in place, the characters had reasons to collide without manually scripting every disagreement.',
        text5: 'Samson became the clearest example of how specific the character writing had to be. Pure randomness was funny for about five seconds, then it became a little too much. He worked better when he said dumb but emotionally understandable things, derailed the conversation, overreacted, and occasionally made a valid point by accident. That was the difference between nonsense and a character who actually added something to the debate.',
      },
      {
        title: 'Prompt Architecture',
        text: 'The biggest technical challenge was avoiding what I started thinking of as AI agreement syndrome. Most large language models naturally try to be helpful, sound composed, and avoid conflict. That is useful in a lot of products, but it completely destroys the premise of Council. The app needed more chaos, disagreement, stubbornness, contradiction, emotional bias, ego, and flawed reasoning without making the output unreadable.',
        text2: 'To solve that, I separated the character worldview from the debate mode. The character controls how the response thinks and sounds, while the debate mode controls the type of situation the council is reacting to. A startup idea, life decision, definition fight, thought experiment, and Absolute Chaos debate should all feel different, but Marcus still needs to feel like Marcus in every mode.',
        text3: 'The other important piece was compressed debate context. Passing full transcripts into every generation call costs a LOT of tokens. Instead, I summarize previous arguments into short neutral points. That gives the next persona enough meaning to react to without forcing them to mimic the style of the previous response.',
        text4: 'I also learned that long AI responses really killed the pacing. Shorter responses felt smarter, interruptions improved realism, and concise emotional attacks were usually more entertaining than detailed essays. This mattered most in Absolute Chaos mode, Definition Fights, and Thought Experiments, where the whole experience depends on the characters staying reactive and punchy.',
        text5: 'The backend handles structured JSON generation, response cleanup, prompt-injection guardrails, cooldowns, rate limiting, token usage logging, and production-safe provider settings. Those pieces are not flashy, but they are what make the app closer to a real deployable product instead of a prompt demo.',
      },
      {
        title: 'The Interface',
        text: 'The UI is meant to feel warm and a little rustic, kind of like a courtroom or a council chamber. I wanted to keep a modern serif font for a bit of elegance and use a warm colour palette to make it feel inviting and a little theatrical in a way.',
        text2: 'The goal was to make the interface feel inviting, simple, and interactive. The user flow indicates the user to type a discussion topic, choose a debate mode to set the tone, choose which characters to include, and then generate the debate.',
        text3: 'You can also view saved debates, trigger rebuttal rounds, view verdict summaries, confidence scoring, copy and share tools, and choose between dark/light themes. Those features made the product feel less like a novelty and more like an actual tool with repeatable workflows.',
        text4: 'The Council Verdict became an important anchor for the experience. It\'s kind of meant to feel like a character itself, like the most level-headed member of the council who summarizes everything and gives a final recommendation. It also gives the user a sense of closure and a takeaway from the debate. Without it, it could be hard to walk away with any insight.',
      },
      {
        title: 'Local Testing',
        text: 'LM Studio was a crucial part of the project because it let me iterate quickly without burning API credits. Running AI locally on your computer is very resource intensive. Luckily, I have a PC capable of comfortably handling that load. I tested locally with Qwen models (specifically the Qwen 3.5 9B parameter model) and used that setup to tweak persona prompts, compare character behavior, test emotional modes, and refine system instructions before moving toward Groq for the live version.',
        text2: 'This phase made it obvious how quickly token usage explodes in multi-persona systems. One user message becomes the system prompt, persona instructions, debate mode instructions, previous context, output formatting rules, optional rebuttal context, and verdict generation. Something that feels like a simple debate can become several thousand tokens very quickly.',
        text3: 'Different models also behaved very differently. Some models collapsed into agreement, lost personality after one round, repeated themselves, became too formal, or ignored emotional instructions. Others roleplayed aggressively, maintained conflict, improvised naturally, and stayed emotionally distinct. I started realizing that for entertainment-focused AI apps, model personality can matter almost as much as raw intelligence.',
        text4: 'That shaped the architecture of the app. The user can enter a local server URL and API model identifier in settings, which makes it easier to test locally before relying on a hosted model. For a project where tone and character behavior matter so much, that fast feedback loop was essential.',
      },
      {
        title: 'Emotional Modes',
        text: 'The emotional modes are there to influence the tone and dynamics of the debate, rather than judging how the characters are behaving. Calm, Heated, Divided, and Absolute Disaster do not change the whole app, but they change the emotional weather of the debate. They affect how aggressive the responses are, how they perceive each other, how certain they sound, and how volatile the council feels.',
        text2: 'This added replayability without changing the core architecture. A practical startup idea can feel measured in Calm mode, tense in Heated mode, fractured in Divided mode, and completely unstable in Absolute Disaster. The same prompt can produce a very different experience depending on the mood of the room.',
        text3: 'It also helped clarify what Council actually is. It\'s not only a decision tool, and it\'s not trying to be a perfectly objective source of truth. It\'s a perspective and entertainment tool. Once I accepted that, the characters became funnier, more human, and more memorable.',
      },
    ],
    details: [],
  },
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
    featureSections: [
      {
        title: 'The Algorithm',
        text: 'The idea of a seeding system came to me early on. It was important to me that results seemed truly randomized and not fixed. So I fine-tuned a system where the app generates a seed based on an 8-16 digit number that controls what kind of music the app looks for, what search terms it uses, what year range it looks for, and how the results are ordered. The seed doesn\'t necessarily store the exact results, but it\'s meant to store the instructions of how to find the results.',
        text2: 'When a seed is generated, the app uses that number to make choices. For example, the seed could decide to look for songs based on a certain genre or style, such as "rap" or "house". It also chooses search parameters, such as "official audio" or "vinyl rip". These terms are used because YouTube is full of random junk, and a normal search can return Shorts or gaming videos. The goal of a seeding system is to craft a search path that feels random, but somewhat controlled. It does this by building a seedProfile with a style, format, context, year, and upload window from the numeric seed.',
        text3: 'A decent way to explain it is that each seed builds a sort of personality. One seed might lean more towards one style or genre, while another might lean towards a different style. A single seed might not be strict to show you the same results every time, but it\'s meant to show you results of the same "type" of music.',
        text4: 'After the seed profile is built, the app builds a plan to find tracks. Instead of making six music searches immediately, it builds a search plan based on the seed profile. So one seed might create searches like "underground house vinyl rip, provided to YouTube by topic release, 2-step garage". The app does not run all of those at once. Instead, it only runs the first one, and then the next one, etc. Essentially, it lazy-loads searches. Why? Because YouTube search is really expensive. The quota limit for the YouTube data API is 10,000 units per day. Running "search.list" is 100 units. So instead of running 6 youtube searches immediately, the app runs one YouTube search for around 100 units and only loads more if the user needs more tracks.',
        text5: 'Once the app builds a query plan, it sends one planned search to YouTube. YouTube then gives back a basic list of videos, but that first response doesn\'t have enough information to actually tell the app whether the search was a good search. So it takes the video IDs from that search and asks youtube for the video details for those specific videos. This search gives things like the title of the video, description. tags, view count, like count, comment count, duration, etc. These are needed because the app needs that information to determine the quality of the tracks in the search results.',
        text6: 'The app then normalizes these videos into a format that it can work with and display in the front-end. Then it runs the videos through a quality filter to weed out non-music content based on clues given in the metadata.',
        text7: 'However, tracks don\'t always describe themselves well in the metadata. So it was important to find a balance between filtering out garbage and allowing lazily described tracks to still show up.',
      },
      {
        title: 'So what did I do?',
        text: 'The app doesn\'t truly know whether a "rap" track is actually rap. This was a major constraint for the project. That\'s why there\'s a confidence system. It basically rates confidence on three levels: weak, medium and high. A track with high confidence would typically have metadata that strongly indicates it\'s a rap track, such as having "rap" in the tags or somewhere in the metadata. A track with medium confidence might have some remote clues that it\'s a rap track, but can\'t be sure. For example, a rap track with medium confidence can have "hip-hop, freestyle, drill, boom bap" in the tags, but not "rap". A track with low confidence literally means nothing in the metadata indicates that it\'s a rap track, however, YouTube returned it from a search that was rap-focused.',
        text2: 'I\'ve implemented a gem score system that gives each track a score from 1 to 10 based on metadata quality. There is also a hidden score that is separate from the gem score. The hidden score has the sole purpose of ensuring the app could keep results varied without repeating the same artist in the same search.',
      }
    ],
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
