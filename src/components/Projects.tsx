import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Sparkles, Zap, Eye, X, BookOpen, MoreHorizontal } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'major' | 'minor' | 'blogs'>('major');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const projects = [
    {
      id: 1,
      title: 'Devops Automation using Python',
      description: 'Built a Python-based tool that automates cloning a GitHub repo, building a Docker image, pushing it to Docker Hub, and deploying it to Kubernetes—all in one click. Speeds up the CI/CD pipeline and reduces manual work.',
      technologies: ['Docker', 'GitHub', 'Kubernetes', 'Jenkins'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_devops-python-automation-activity-7354242636498546688-zh0N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/pymenu-',
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      delay: 0,
      type: 'minor',
    },
    {
      id: 2,
      title: 'Senso AI',
      description: 'Developed an interactive emotional support chatbot using Python, OpenAI\'s Gemini API, and Gradio. The app responds to user feelings in natural language, styled with custom CSS and designed to offer a comforting user experience. Focused on mental well-being, it allows users to express emotions and receive AI-generated supportive replies in real time.',
      technologies: ['Python', 'Streamlit', 'GeminiAPI', 'Gradio'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-ai-llm-activity-7345169501778341889-49fz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/senso',
      gradient: 'from-green-400 via-blue-500 to-purple-600',
      delay: 200,
      type: 'minor',
    },
    {
      id: 3,
      title: 'Python Email Sender',
      description: 'Built a lightweight Python tool that uses smtplib and MIME to send Gmail messages securely over TLS. The script prompts for subject and body at runtime, logs in with an app‑specific password, and delivers email in one click—perfect for quick notifications or transactional mail.',
      technologies: ['smtplib', 'MIMEText', 'MIMEMultipart'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-automation-smtp-activity-7347314438112219136-RNXn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/mail',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      delay: 400,
      type: 'minor',
    },
    {
      id: 4,
      title: 'CI/CD Pipeline',
      description: 'To enhance my DevOps skills and streamline development workflows, I designed and implemented a CI/CD pipeline using Jenkins — a powerful open-source automation server. This pipeline helps me deliver applications faster and more reliably by automating the entire software delivery process from code commit to production deployment.',
      technologies: ['Git & GitHub', 'Jenkins', 'Docker', 'DockerHub','	Kubernetes'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_jenkins-redhat-linux-activity-7349869236627886083-VoOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/CI-CD',
      gradient: 'from-orange-400 via-red-500 to-pink-500',
      delay: 600,
      type: 'major',
    },
    {
      id: 5,
      title: 'Google Search Engine-Intelio',
      description: "Intelio is a clean, privacy-first search engine interface built using Python and Streamlit. It fetches search results from DuckDuckGo and presents them in a modern, Google-style UI. The app supports searching the web, news, and images — all from one place. It's lightweight, fast, and doesn't track users. Perfect for anyone who wants a personal search dashboard without the clutter.",
      technologies: ['Python', '	Streamlit (for UI)', '	DuckDuckGo HTML scraping','	requests'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_ai-searchengine-streamlit-activity-7354265376236457984-zQBj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/Search_Google',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      delay: 800,
      type: 'major',
    },
    {
      id: 6,
      title: 'Dockerized Linear Regression',
      description: 'This project demonstrates how to build and run a Linear Regression model using Python inside a Docker container. The main goal is to show how machine learning code can be packaged, deployed, and executed in a consistent environment — regardless of the underlying operating system. By containerizing the Linear Regression model, you ensure that all dependencies are installed, versions are fixed, and your code runs the same way everywhere — making it ideal for testing, deployment, or sharing your ML work.',
      technologies: ['	Python3', 'numpy, pandas, sklearn, matplotlib', '	Docker','	Dockerfile','Linear Regression (from scikit-learn)'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_machinelearning-docker-python-activity-7351300513096794112-Jw4W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/Linear-Regression-Model',
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      delay: 1000,
      type: 'major',
    },
    {
      id: 7,
      title: 'GUI programs in Linux',
      description: 'To improve the graphical and terminal experience on Linux systems, I implemented a multi-environment setup by installing advanced terminal emulators and lightweight desktop environments. This setup is especially useful for developers and sysadmins who prefer a customizable, multi-terminal workflow and responsive GUIs.',
      technologies: ['Tilix', 'KDE Plasma', 'Xfce Desktop'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_linux-opensource-sysadmin-activity-7348470953049280514-taLZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/-terminals_GUI_interfaces_Linux',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      delay: 1200,
      type: 'minor',
    },
    {
      id: 8,
      title: 'Change the logo or icon in Linux',
      description: 'Linux applications use .desktop files to define how they appear in menus and launchers. I modified these files to replace default app icons with custom PNG images, giving a clean, personalized look to my GUI.This involved editing .desktop files (like appname.desktop) and updating the Icon path to point to my preferred image. The change reflects immediately across the desktop environment.',
      technologies: ['nano', '	.desktop files in /usr/share/applications/', '.png, .svg'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_linux-opensource-customization-activity-7348750305032892418-HtW3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/change_icon_linux_app',
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      delay: 1400,
      type: 'minor',
    },
    {
      id: 9,
      title: 'Menu Driven Python Project',
      description: 'SocialComm Automator – Unified Python CLI for Communication Developed a Python-based terminal app that automates email, SMS, WhatsApp, and social media communication through a single menu-driven interface. Modular, secure, and API-ready architecture allows integration with Twilio, Gmail, and major social platforms.',
      technologies: ['Python', 'input(), print(), if-elif structure', 'Twilio API'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-automation-100daysofcode-activity-7348455845015232512-9f-t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/menu-driven-Python-project-',
      gradient: 'from-rose-400 via-pink-500 to-purple-600',
      delay: 1600,
      type: 'minor',
    },
    {
      id: 10,
      title: 'WhatsApp Message Using Python',
      description: 'This project demonstrates how to send WhatsApp messages programmatically using Python and the Twilio API. By leveraging Twilio\'s official Python SDK, I built a simple script that authenticates with Twilio\'s messaging service and sends a WhatsApp message to a verified phone number. This solution is ideal for automated messaging systems, chatbots, notification services, or real-time alerts in enterprise and personal projects.',
      technologies: ['	Twilio Programmable Messaging API', 'Python', '	twilio'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-whatsappapi-twilio-activity-7348448300619976704-u3M-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/automate-WhatsApp-',
      gradient: 'from-indigo-400 via-purple-500 to-pink-600',
      delay: 1800,
      type: 'minor',
    },
    {
      id: 15,
      title: 'Automate Instagram ',
      description: 'This project demonstrates how to automate Instagram content posting using Python and the official Meta (Facebook) Graph API. It allows uploading and publishing an image along with a caption directly to an Instagram Business account — all programmatically, without using the mobile app. By using a two-step process (media creation + publishing) and a long-lived access token, the script offers a scalable way to post branded content, scheduled campaigns, or automate marketing workflows via Instagram.',
      technologies: ['Python', '	requests module', '	Meta Graph API v20.0', '	Long-Lived Instagram Access Token','	Publicly accessible image URL','time.sleep() to wait before publish'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-instagramapi-automation-activity-7348440767712935936-y9kQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/automate-Instagram',
      gradient: 'from-blue-400 via-cyan-500 to-teal-600',
      delay: 2000,
      type: 'minor',
    },
    {
      id: 16,
      title: ' Send real-time SMS Messages using Python ',
      description: 'This project demonstrates how to send real-time SMS messages using Python and the Twilio API. By securely authenticating with Twilio using your Account SID and Auth Token, the script allows a user to enter a custom message in the terminal and send it instantly to any mobile number. This solution is ideal for alert systems, 2FA (two-factor authentication), automated reminders, or customer communication pipelines.',
      technologies: ['Python', 'Twilio Programmable SMS API', 'account_sid, auth_token (Twilio)', '	input() function (for message body)','	twilio.rest.Client'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-twilio-apis-activity-7348404118127788034-pf8I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/sms',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      delay: 2200,
      type: 'minor',
    },
    {
      id: 17,
      title: 'Make a Phone Call Using Python & Twilio',
      description: 'This Python project demonstrates how to initiate a phone call programmatically using the Twilio Voice API. With just a few lines of code, the script authenticates using Twilio credentials, dials a recipient’s phone number, and plays back audio using TwiML instructions hosted at a public URL. This functionality is ideal for automated voice notifications, appointment reminders, emergency alerts, or IVR (interactive voice response) systems.',
      technologies: ['Python', 'Twilio Programmable Voice API', 'account_sid, auth_token', 'TwiML (Twilio Markup Language) via URL'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-twilio-voiceapi-activity-7348410570083090432-R8vS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/PhoneCall',
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      delay: 2400,
      type: 'minor',
    },
    {
      id: 18,
      title: 'LinkedIn automation script using Python',
      description: 'Developed a Python application that uses OAuth 2.0 with a Flask callback server to retrieve access tokens for LinkedIn. This is the foundation for building social posting bots or integrating user content publishing features into custom platforms.',
      technologies: ['Python', '	Flask (for handling OAuth callback)', 'LinkedIn REST API', 'requests module'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-linkedinapi-automation-activity-7348418095968866304-2JZj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/automate-linkedin-post',
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
      delay: 2600,
      type: 'minor',
    },
    {
      id: 19,
      title: 'Automated Twitter Posting with Python',
      description: 'This project demonstrates how to automate tweeting on Twitter (X) using Python and the Tweepy library, which is a Python wrapper for the Twitter API. The script authenticates using the OAuth 1.0a protocol and posts a tweet containing text and hashtags. This can be used for automated social media bots, daily updates, news broadcasters, or developer portfolio integrations.',
      technologies: ['Python', 'Tweepy (Twitter API Wrapper)', '	Twitter API v1.1 (OAuth 1.0a)', '	api.update_status(tweet)'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-twitterapi-api-activity-7348425647771308032-3veK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/automate-Twitter-X-',
      gradient: 'from-pink-400 via-rose-500 to-red-600',
      delay: 2800,
      type: 'minor',
    },
    {
      id: 20,
      title: 'Facebook Automation with Python',
      description: 'This Python project demonstrates how to automatically post content to a Facebook Page using the Meta (Facebook) Graph API. With a valid Page Access Token, the script sends a POST request to the Facebook API to publish a custom message directly to the Page’s feed. This is ideal for businesses, marketers, or developers building content automation systems, scheduled publishing tools, or social media dashboards.',
      technologies: ['Python', 'requests', 'Meta Graph API', '	Facebook Page Access Token'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-facebookapi-graphapi-activity-7348433195589128192-Hsj-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/automate-Facebook',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      delay: 3000,
      type: 'minor',
    },
    {
      id: 21,
      title: '  SnapShot – Camera Photo Capture & Save App',
      description: "SnapShot is a simple and elegant web app that lets users capture photos using their device's camera directly from the browser — no installation needed. With a click, the app shows a live camera preview, takes a snapshot, and lets the user download the photo as a PNG file. It’s ideal for quick demos, ID photos, selfie stations, or adding image capture functionality to any website.",
      technologies: ['	HTML5 + CSS3', 'JavaScript '],
      liveUrl: 'https://raghavtiwari974.github.io/Photo_JavaScript/',
      githubUrl: 'https://github.com/raghavtiwari974/Photo_JavaScript',
      gradient: 'from-lime-400 via-green-500 to-emerald-600',
      delay: 3200,
      type: 'minor',
    },
    {
      id: 22,
      title: 'EasyMail – Contact Form with EmailJS',
      description: "EasyMail is a clean, modern, and fully functional email contact form that sends messages directly to your inbox — without needing a backend server! It's powered by EmailJS, a service that connects frontend forms to email using secure APIs. This is perfect for portfolios, business sites, feedback forms, or any project where you need users to contact you — without setting up Node.js, PHP, or databases.",
      technologies: ['	HTML5, CSS3', 'JavaScript ', '	EmailJS'],
      liveUrl: 'https://raghavtiwari974.github.io/Auto_reply_mail/',
      githubUrl: 'https://github.com/raghavtiwari974/Auto_reply_mail',
      gradient: 'from-red-400 via-pink-500 to-purple-600',
      delay: 3400,
      type: 'minor',
    },
    {
      id: 23,
      title: ' Capture & Send Photo via Email',
      description: 'This is a simple web app that allows users to capture a photo using their webcam and send it via email directly from the browser—no backend required. It uses HTML, CSS, JavaScript, the Canvas API for capturing the image, and EmailJS to send the captured photo as an embedded image in an email. When the user opens the app, it accesses their webcam, lets them capture a frame, and sends it using a pre-defined email template. The UI is clean, modern, and mobile-friendly. This project is ideal for quick photo feedback, online verification, or attendance with proof—perfect for learning frontend APIs and integrating third-party services without needing a server.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'EmailJS'],
      liveUrl: 'https://raghavtiwari974.github.io/auto-mail-photo/',
      githubUrl: 'https://github.com/raghavtiwari974/auto-mail-photo',
      gradient: 'from-teal-400 via-cyan-500 to-blue-600',
      delay: 3600,
      type: 'minor',
    },
    {
      id: 24,
      title: 'AI Medical Report Analyzer',
      description: 'The AI Medical Report Analyzer is a Streamlit-based web application that allows users to upload their medical reports (PDF or TXT), and interact with them through an intelligent chatbot. Powered by Google Gemini and LangChain, the app reads, processes, vectorizes, and understands the content — enabling users to ask natural language questions and get meaningful answers based on the contents of their report. This tool is especially helpful for patients, caregivers, or even doctors who want quick and accessible interpretations of clinical documents.',
      technologies: ['langchain_google_genai', 'GoogleGenerativeAIEmbeddings ', 'fitz'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_ai-langchain-streamlit-activity-7354284258309390336-n9li?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/medical-report-AI',
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      delay: 3800,
      type: 'major',
    },
    {
      id: 25,
      title: 'Record & Send Video via Email',
      description: "This web-based application allows users to record a video directly from their webcam, preview it, and then send the recorded video via email — all from within a browser. It's a lightweight, no-install tool perfect for quick video messages, feedback submissions, or even asynchronous team updates. Using the browser's media capabilities and EmailJS integration, it captures video and audio, encodes it into WebM format, and sends it via email without any backend server — keeping the architecture clean and fast to deploy.",
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://raghavtiwari974.github.io/video-mail/',
      githubUrl: 'https://github.com/raghavtiwari974/video-mail',
      gradient: 'from-pink-400 via-purple-500 to-indigo-600',
      delay: 4000,
      type: 'minor',
    },
    {
      id: 26,
      title: 'Send WhatsApp Message Instantly from Your Browser',
      description: "This is a simple yet powerful web-based tool that allows users to send WhatsApp messages directly from a browser without saving the number. Whether you're reaching out to customers, sending reminders, or just messaging friends, this app lets you do it faster and smoother. You just type the recipient’s phone number (with country code) and your message, hit the button, and it opens WhatsApp with your message ready to send.It's a perfect lightweight tool for freelancers, marketers, or customer support agents who need a quick way to initiate WhatsApp chats.",
      technologies: ['JavaScript', 'HTML', 'CSS', 'WhatsApp API'],
      liveUrl: 'https://raghavtiwari974.github.io/whatsapp-msg-java/',
      githubUrl: 'https://github.com/raghavtiwari974/whatsapp-msg-java',
      gradient: 'from-green-400 via-blue-500 to-purple-600',
      delay: 4200,
      type: 'minor',
    },
    {
      id: 27,
      title: 'Smart Map App',
      description: `The Smart Map App is a responsive, browser-based mini web application that integrates Google Maps and Geolocation API to offer three main features:\n\n📍 Show My Location: Detects the user’s current geographical coordinates using the browser’s geolocation and displays the location in an embedded Google Map.\n\n🧭 Show Route: Accepts a destination from the user and opens a Google Maps route from the user's current location to the destination in a new tab. A static preview of the destination is also shown in the iframe.\n\n🔍 Search Nearby: Lets users search for nearby places (like ATMs, cafes, gyms) based on their current location. The search results open in a new Google Maps tab with a fallback preview inside the app.\n\nThis app is ideal for lightweight travel, delivery, or local discovery needs. It demonstrates how simple HTML, CSS, and JavaScript can integrate powerful mapping services in a user-friendly UI.`,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://raghavtiwari974.github.io/geo-store-location/',
      githubUrl: 'https://github.com/raghavtiwari974/geo-store-location',
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      delay: 4400,
      type: 'minor',
    },
    {
      id: 28,
      title: ' Smart Product Recommender',
      description: "The Smart Product Recommender is a lightweight web-based application that intelligently tracks a user's product interactions and suggests relevant items based on their clicks. It mimics a basic recommender system commonly used in e-commerce platforms like Amazon or Flipkart.",
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: ' https://raghavtiwari974.github.io/viewcard/',
      githubUrl: 'https://github.com/raghavtiwari974/viewcard',
      gradient: 'from-blue-400 via-cyan-500 to-indigo-600',
      delay: 4600,
      type: 'minor',
    },
    {
      id: 29,
      title: 'Expense Tracker',
      description: 'Track your daily expenses with this simple app. Add, edit, and delete transactions. Data is stored in local storage for persistence.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-rose-400 via-pink-500 to-purple-600',
      delay: 4800,
      type: 'minor',
    },
   
    {
      id: 30,
      title: ' IP & Location Finder Web App',
      description: "The IP & Location Finder is a simple, interactive web tool that helps users instantly discover their public IP address and geographical location (city, region, and country) with just one click. This user-friendly application fetches real-time location data using an external API and displays it in a clean, minimal interface. It's perfect for quick IP lookups or educational demonstrations of how client-side JavaScript can work with public APIs. When the user clicks the 'Get IP & Location' button, the app sends a request to the ipapi.co service and displays the response details in a visually styled result box. The app handles both successful lookups and error scenarios gracefully.",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://raghavtiwari974.github.io/IP_finder-location/',
      githubUrl: 'https://github.com/raghavtiwari974/IP_finder-location',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      delay: 5000,
      type: 'minor',
    },
     {
      id: 11,
      title: 'Firefox in Docker ',
      description: 'I deployed Mozilla Firefox inside a Docker container to enable GUI-based browser access in isolated, containerized environments. This setup is useful for secure web testing, automation tasks, or running browsers on headless servers. I used noVNC to access the Firefox interface directly from a web browser without installing any GUI on the host. The container exposes the Firefox desktop through a virtual display and VNC server, making it accessible via http://localhost:5800. Media files, downloads, and browser settings are mounted as volumes to ensure persistence and host-container integration.',
      technologies: ['Docker', 'Firefox', 'RHEL'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_docker-firefox-devops-activity-7354210695804076037-Mxes?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/firefox-docker',
      gradient: 'from-orange-400 via-yellow-500 to-red-600',
      delay: 2000,
      type: 'major',
    },
    {
      id: 12,
      title: 'Docker-in-Docker (DIND)',
      description: 'Docker-in-Docker (DIND) is a technique that allows you to run Docker containers inside another Docker container. I implemented DIND to enable containerized CI/CD environments where pipelines can build, test, and deploy applications without needing Docker installed on the host. This setup is especially useful in automated DevOps workflows, allowing complete isolation and reproducibility of builds. DIND was used in Jenkins pipelines, allowing each job to spin up its own containerized Docker daemon for building and pushing images securely.',
      technologies: ['Docker', 'Docker:dind', 'Jenkins / GitHub Actions', 'RHEL'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_docker-dind-redhat-activity-7354202154993139712-t_10?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/docker-in-docker',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      delay: 2200,
      type: 'major',
    },
    {
      id: 13,
      title: 'Flask Inside Docker',
      description: 'I containerized a Flask web application using Docker to ensure consistent deployment across environments. By running Flask inside Docker, I created a portable, isolated backend service that could be easily integrated into microservices or full-stack projects. This setup supports local development, testing, and production deployment, using Docker volumes, exposed ports, and environment variables for configuration. The Flask app listens on port 5000 inside the container and maps to a host port for external access.',
      technologies: ['Flask (Python)', 'Docker', 'Python3'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-flask-docker-activity-7351942694329384960-lYj3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/flask-docker',
      gradient: 'from-pink-400 via-rose-500 to-red-600',
      delay: 2400,
      type: 'major',
    },
    {
      id: 14,
      title: 'Menu-Based Project in Docker',
      description: 'I created a menu-driven command-line project, containerized using Docker for portability and platform independence. The menu allows users to perform multiple automated tasks — such as launching EC2 instances, running local/remote scripts, managing files, or configuring services — all through a simple terminal interface. The entire app runs inside a Docker container with all dependencies pre-installed, ensuring it works seamlessly across different systems. This setup is ideal for DevOps automation, infrastructure demos, or teaching tools.',
      technologies: ['Python', 'Docker', 'Dockerfile', 'RHEL'],
      liveUrl: 'https://www.linkedin.com/posts/theraghavtiwari973_python-docker-activity-7351904100420145153-YNnV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
      githubUrl: 'https://github.com/raghavtiwari974/menu-docker',
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      delay: 2600,
      type: 'major',
    },
  ];

  // Sort projects so that those with a real liveUrl (not '#' and not a LinkedIn post) appear first
  const sortedProjects = [
    ...projects.filter(p => p.liveUrl && p.liveUrl !== '#' && !p.liveUrl.includes('linkedin.com/posts/theraghavtiwari973')),
    ...projects.filter(p => !p.liveUrl || p.liveUrl === '#' || p.liveUrl.includes('linkedin.com/posts/theraghavtiwari973')),
  ];

  // Sample blogs array for the Blogs tab
  const blogs = [
    {
      id: 1,
      title: 'Why Linux Powers Google, NASA & the Future of Tech ',
      description: 'From Google to NASA, top organizations rely on Linux for its cost-efficiency, unmatched security, customizability, and rock-solid performance. Whether managing data centers or powering rockets, Linux scales with the future.',
      url: 'https://www.linkedin.com/posts/theraghavtiwari973_raghavtiwari974-activity-7348463398738718722-3yT-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
    },
    {
      id: 2,
      title: 'LLaMA 3 vs DeepSeek V2: Real-World LLM Battle Tested ',
      description: 'I compared Meta’s LLaMA 3 and Alibaba’s DeepSeek V2 on cloud (AWS & Alibaba Cloud) across real-world topics like CRISPR, edge AI, and ISRO. LLaMA impressed with deep reasoning, while DeepSeek excelled in speed and summaries. Both were run with vLLM for optimized inference.',
      url: 'https://www.linkedin.com/posts/theraghavtiwari973_llama-vs-deepseek-llm-activity-7350758674010689537-l5NG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
    },
    {
      id: 3,
      title: 'LLaMA 3 vs DeepSeek V2 – Real-World LLM Face-Off!',
      description: 'I compared Meta’s LLaMA 3 and Alibaba’s DeepSeek V2 on real-world prompts (like edge AI, philosophy, and ISRO) using cloud GPUs and vLLM. LLaMA 3 shined in reasoning, while DeepSeek delivered fast, clear answers. Dive into my full blog for insights, comparisons, and real outputs.',
      url: 'https://www.linkedin.com/posts/theraghavtiwari973_deploy-both-models-activity-7350766103784026112-m8WL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA',
    },
    {
      id: 4,
      title: ' LLaMA 3 vs DeepSeek — Which LLM Truly Understands Topics Better?',
      description: 'I put Meta’s LLaMA 3 and Alibaba’s DeepSeek V2 head-to-head on real-world topics — from AI and philosophy to tech news. Both ran on cloud GPUs with vLLM for speed. LLaMA 3 stood out for deep, structured answers. DeepSeek delivered faster, concise summaries. Full results in the blog!',
      url: 'https://www.linkedin.com/posts/theraghavtiwari973_raghavtiwari974-activity-7350773634543595521-clj1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5_Q10BfGfpFq_Z0Vm1pXSwxJ7evCazSIA'
    },
     
  ];

  const Tabs = () => (
    <div className="w-full">
      <div className="flex justify-center gap-8 mt-6 mb-8">
        <button
          className={`relative px-6 py-2 text-lg font-bold transition-all duration-300 focus:outline-none border-2 rounded-full flex items-center gap-2 
          ${activeTab === 'major' ? 'text-purple-400 scale-110 border-yellow-400 shadow-[0_0_12px_2px_rgba(255,215,0,0.4)] bg-gray-900' : 'text-gray-400 border-yellow-300 bg-gray-800'} animate-bounce`}
          onClick={() => setActiveTab('major')}
        >
          <span className="relative z-10 flex items-center gap-1">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            Major Projects
          </span>
        </button>
        <button
          className={`relative px-6 py-2 text-lg font-bold transition-all duration-300 focus:outline-none border-2 rounded-full flex items-center gap-2 
          ${activeTab === 'minor' ? 'text-cyan-400 scale-110 border-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.4)] bg-gray-900' : 'text-gray-400 border-cyan-300 bg-gray-800'} animate-bounce`}
          onClick={() => setActiveTab('minor')}
        >
          <span className="relative z-10 flex items-center gap-1">
            <Zap className="w-5 h-5 text-cyan-300" />
            Minor Projects
          </span>
        </button>
        <button
          className={`relative px-6 py-2 text-lg font-bold transition-all duration-300 focus:outline-none border-2 rounded-full flex items-center gap-2 
          ${activeTab === 'blogs' ? 'text-white scale-110 border-white shadow-[0_0_12px_2px_rgba(255,255,255,0.4)] bg-gray-900' : 'text-gray-400 border-white/40 bg-gray-800'} animate-bounce`}
          onClick={() => setActiveTab('blogs')}
        >
          <span className="relative z-10 flex items-center gap-1">
            <span className="w-5 h-5 text-pink-300 font-bold">📝</span>
            Blogs
          </span>
        </button>
      </div>
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] relative z-10">
        {activeTab === 'major' ? (
          <div className="mb-12 max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedProjects.filter(p => p.type === 'major').map((project) => (
                <div key={project.id} className="flex flex-col h-full group relative bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden hover:bg-gray-900/90 transition-all duration-500 transform hover:scale-105 border border-yellow-300 shadow-[0_0_16px_4px_rgba(255,215,0,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:shadow-[0_0_32px_12px_rgba(255,215,0,0.18)] before:animate-pulse after:content-[''] after:absolute after:inset-0 after:rounded-xl after:pointer-events-none after:shadow-[inset_0_2px_24px_0_rgba(255,255,255,0.08)] p-4">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          className="p-1 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110"
                        >
                          <ExternalLink className="w-3 h-3 text-cyan-400" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-1 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110"
                        >
                          <Github className="w-3 h-3 text-cyan-400" />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-600 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-sm">
                          <ExternalLink className="w-3 h-3" />
                          {project.liveUrl === '#' || project.liveUrl.includes('linkedin.com/posts/theraghavtiwari973') ? 'Linkedin Post' : 'Live'}
                        </button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full border-2 border-cyan-500 text-cyan-500 px-3 py-2 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-sm">
                          <Github className="w-3 h-3" />
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === 'minor' ? (
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedProjects.filter(p => p.type === 'minor').map((project) => (
                <div key={project.id} className="flex flex-col h-full group relative bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden hover:bg-gray-900/90 transition-all duration-500 transform hover:scale-105 border-2 border-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.2)] p-4 animate-slide-in-up">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex gap-1">
                        <a
                          href={project.liveUrl}
                          className="p-1 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110"
                        >
                          <ExternalLink className="w-3 h-3 text-cyan-400" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-1 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 group-hover:scale-110"
                        >
                          <Github className="w-3 h-3 text-cyan-400" />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-2 text-xs leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-600 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs">
                          <ExternalLink className="w-3 h-3" />
                          {project.liveUrl === '#' || project.liveUrl.includes('linkedin.com/posts/theraghavtiwari973') ? 'Linkedin Post' : 'Live'}
                        </button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full border-2 border-cyan-500 text-cyan-500 px-2 py-1 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs">
                          <Github className="w-3 h-3" />
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto mb-10">
              {blogs.map(blog => (
                <div
                  key={blog.id}
                  className="flex h-full group relative bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden hover:bg-gray-900/90 transition-all duration-500 transform hover:scale-105 border border-white shadow-[0_0_16px_4px_rgba(255,255,255,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:shadow-[0_0_32px_12px_rgba(255,255,255,0.18)] before:animate-pulse after:content-[''] after:absolute after:inset-0 after:rounded-xl after:pointer-events-none after:shadow-[inset_0_2px_24px_0_rgba(255,255,255,0.08)] p-4 cursor-pointer text-left"
                  onClick={() => window.open(blog.url, '_blank', 'noopener,noreferrer')}
                  tabIndex={0}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter') window.open(blog.url, '_blank', 'noopener,noreferrer'); }}
                >
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="p-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-5 h-5 text-white" />
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {blog.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{blog.description}</p>
                  </div>
                  <div className="flex items-center ml-6">
                    <button
                      className="px-4 py-2 border border-white rounded-full text-white text-xs font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
                      onClick={e => { e.stopPropagation(); window.open(blog.url, '_blank', 'noopener,noreferrer'); }}
                    >
                      Read Blog →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Bottom Spacing */}
      <div className="h-8 bg-gray-800/95 backdrop-blur-md"></div>
    </div>
  );

  return (
    <section id="projects-section" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            📁 Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover my latest work and creative solutions to complex problems
          </p>
        </div>

        {/* Two-column layout: Major (3/5) and Minor (2/5) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Major Projects - 3/5 width */}
          <div className="flex flex-col gap-8 md:col-span-3">
            {sortedProjects.filter(p => p.type === 'major').slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 md:p-10 hover:bg-gray-800/90 transition-all duration-500 transform hover:scale-105 border-2 border-yellow-300 shadow-[0_0_16px_4px_rgba(255,215,0,0.3)] max-w-full w-full self-start md:self-end animate-slide-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-2 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 lg:w-auto lg:flex-none">
                      <button className="w-full lg:w-32 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-sm">
                        <ExternalLink className="w-3 h-3" />
                        {project.liveUrl === '#' || project.liveUrl.includes('linkedin.com/posts/theraghavtiwari973') ? 'Linkedin Post' : 'Live'}
                      </button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 lg:w-auto lg:flex-none">
                      <button className="w-full lg:w-32 border-2 border-cyan-500 text-cyan-500 px-3 py-2 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-sm">
                        <Github className="w-3 h-3" />
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              </div>
            ))}
          </div>

          {/* Minor Projects - 2/5 width */}
          <div className="flex flex-col gap-6 h-full justify-between items-end md:col-span-2">
            {sortedProjects.filter(p => p.type === 'minor').slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 md:p-10 transition-all duration-500 shadow-[0_0_32px_8px_rgba(0,255,255,0.15)] w-full animate-slide-in-up animate-float`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-4 bg-gradient-to-r ${project.gradient}`}>
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-700 text-cyan-200 rounded-full text-xs font-medium hover:bg-gray-600 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs">
                        <ExternalLink className="w-3 h-3" />
                        {project.liveUrl === '#' || project.liveUrl.includes('linkedin.com/posts/theraghavtiwari973') ? 'Linkedin Post' : 'Live'}
                      </button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full border-2 border-cyan-500 text-cyan-500 px-2 py-1 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 text-xs">
                        <Github className="w-3 h-3" />
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Modal for all projects (unchanged) */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
            <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700 relative z-[99999]">
              <div className="sticky top-0 bg-gray-800/95 backdrop-blur-md p-6 border-b border-gray-700 flex justify-between items-center z-10">
                <h3 className="text-2xl font-bold text-white">All Projects</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              {/* Tabs for Major and Minor Projects */}
              <Tabs />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;