// "The Build Story" Podcast Website Logic - Founder-Console Tech Noir Redesign

// Mock Podcast Episodes Data with Tech Noir console metrics
const episodes = [
  {
    id: "ep-04",
    number: "Episode 04",
    title: "Zero to $100M ARR: The Art of Scaling Under Extreme Pressure",
    guest: "Elena Vance",
    guestRole: "Founder & CEO, ApexScale",
    guestBio: "Elena Vance is a veteran software engineer who founded ApexScale in 2021. Under her leadership, the company grew from a bedroom project to a leading cloud infrastructure provider servicing over 10,000 corporate clients globally, reaching $100M ARR in record time.",
    guestImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    description: "Elena Vance pulls back the curtain on how ApexScale survived hypergrowth. She shares the exact mental models used to triage system failures, restructure executive teams, and pivot their GTM model in the middle of market shifts.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: "52:14",
    frequency: "44.1 kHz",
    bitrate: "320 kbps",
    listenCount: "4,822",
    published: "Jun 26, 2026",
    stage: "Scaling",
    tags: ["Scaling", "SaaS", "Funding"],
    takeaways: [
      "The 3x Rule: Systems break every time you triple in size. Design architecture for 10x but build for 3x.",
      "Hire for the next 18 months, not the next 5 years. Startups change too fast for 5-year executive hires.",
      "The 'Weekly Triage': Spend Mondays writing down the three biggest fires. Ignore everything else until they are out."
    ],
    chapters: [
      { time: "00:00", seconds: 0, title: "ApexScale Origins" },
      { time: "12:15", seconds: 735, title: "Surviving Hypergrowth Fires" },
      { time: "25:40", seconds: 1540, title: "Hiring Executive Operators" },
      { time: "42:10", seconds: 2530, title: "Direct Advice to Builders" }
    ],
    resources: [
      { label: "ApexScale Official Site", url: "#" },
      { label: "Book: High Output Management", url: "#" },
      { label: "Vance Essay: Scaling the Messy Middle", url: "#" }
    ]
  },
  {
    id: "ep-03",
    number: "Episode 03",
    title: "Bootstrapping to $10M ARR: The Power of Ruthless Focus",
    guest: "Marcus Chen",
    guestRole: "Co-Founder, FlowDraft",
    guestBio: "Marcus Chen is a serial bootstrapper. Before FlowDraft, he created three micro-SaaS products. FlowDraft was built with a team of five and zero VC funding, relying purely on customer revenue.",
    guestImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    description: "How do you build a product that customers gladly pay for on Day 1? Marcus outlines how he built FlowDraft to $10M ARR without taking a single dollar of venture capital.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: "41:05",
    frequency: "48.0 kHz",
    bitrate: "320 kbps",
    listenCount: "9,255",
    published: "Jun 18, 2026",
    stage: "Bootstrapped",
    tags: ["Bootstrapping", "SaaS", "Productivity"],
    takeaways: [
      "Charging from Day 1 is the ultimate validation metric. If they won't pay, it's not a real problem.",
      "The 'Anti-Roadmap' strategy: Build what users are complaining about today, not what you think they want next year.",
      "Why profitability gives you the ultimate startup superpower: Time."
    ],
    chapters: [
      { time: "00:00", seconds: 0, title: "Bootstrap vs VC Funding" },
      { time: "08:30", seconds: 510, title: "Securing Your First 100 Paying Customers" },
      { time: "18:45", seconds: 1125, title: "Running a Tiny Team at Scale" },
      { time: "32:10", seconds: 1930, title: "The Math of $10M ARR Self-Funded" }
    ],
    resources: [
      { label: "FlowDraft Product", url: "#" },
      { label: "Chen Newsletter: Bootstrapped Blueprints", url: "#" }
    ]
  },
  {
    id: "ep-02",
    number: "Episode 02",
    title: "The Hardest Pivot: Navigating a Dying Market",
    guest: "Sarah Jenkins",
    guestRole: "Co-Founder, Retrace AI",
    guestBio: "Sarah Jenkins holds a PhD in Machine Learning from Stanford. She co-founded Retrace AI, navigating a successful pivot from web scraping tools to enterprise agentic systems.",
    guestImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    description: "Sometimes the market changes beneath you. Sarah discusses the emotional and operational challenges of pivoting her entire team, returning capital to some investors, and building a new engine.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    duration: "38:40",
    frequency: "44.1 kHz",
    bitrate: "256 kbps",
    listenCount: "3,110",
    published: "Jun 10, 2026",
    stage: "Pivot",
    tags: ["Pivot", "AI", "Funding"],
    takeaways: [
      "A pivot is not a failure; staying in a dying market is.",
      "How to have transparent conversations with your team during pivot periods.",
      "Re-engaging investors: Translating lessons from the old model to energy for the new one."
    ],
    chapters: [
      { time: "00:00", seconds: 0, title: "Signs of Market Decay" },
      { time: "10:15", seconds: 615, title: "Making the Pivot Decision" },
      { time: "22:50", seconds: 1370, title: "Rebuilding Around AI" },
      { time: "33:00", seconds: 1980, title: "Post-Pivot Growth" }
    ],
    resources: [
      { label: "Retrace AI Platform", url: "#" },
      { label: "Jenkins Essay: When to Shift Stack", url: "#" }
    ]
  },
  {
    id: "ep-01",
    number: "Episode 01",
    title: "Building in Hardware: Capital Efficiency in a Physical World",
    guest: "David Kovacs",
    guestRole: "Founder, LightSpeed Robotics",
    guestBio: "David Kovacs has over 15 years of experience in industrial design. He founded LightSpeed Robotics to automate warehousing, innovating in rapid prototyping and local manufacturing.",
    guestImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    description: "Hardware is hard, but it doesn't have to be capital inefficient. David outlines how LightSpeed Robotics built their MVP robots with minimal capital and secured hardware pre-sales.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    duration: "45:22",
    frequency: "48.0 kHz",
    bitrate: "320 kbps",
    listenCount: "1,940",
    published: "Jun 1, 2026",
    stage: "Hardware",
    tags: ["Hardware", "Funding", "Operations"],
    takeaways: [
      "Simulation first: Invest heavily in virtual modeling before cutting metal.",
      "The 'Staged Pre-Sale' method to secure customer capital early.",
      "Setting up supply chains that are resilient to international logistics friction."
    ],
    chapters: [
      { time: "00:00", seconds: 0, title: "Avoiding Capital-Heavy Hardware Traps" },
      { time: "11:20", seconds: 680, title: "Building an MVP Under $20k" },
      { time: "24:45", seconds: 1485, title: "Securing Retailer Commitments" },
      { time: "38:10", seconds: 2290, title: "Rapid Prototyping Lessons" }
    ],
    resources: [
      { label: "LightSpeed Robotics", url: "#" },
      { label: "Kovacs Course: Lean Hardware Systems", url: "#" }
    ]
  }
];

// Application State
let activeEpisode = episodes[0]; // Default active episode
let activeTagFilter = "All";
let searchQuery = "";
let playbackSpeed = 1;

// Audio Instance
const audio = new Audio();
let isPlaying = false;

// DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderEpisodes();
  setupAudioPlayer();
  setupSearchAndFilters();
  setupDrawer();
  setupForms();
});

// 1. Theme Configuration (Cyber Light / Carbon Dark)
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;
  
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
  
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// 2. Render Grid Catalog (Console Card style)
function renderEpisodes() {
  const grid = document.getElementById("episodes-grid");
  if (!grid) return;
  
  // Filter episodes
  const filtered = episodes.filter(ep => {
    const matchesSearch = ep.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ep.guest.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ep.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = activeTagFilter === "All" || ep.tags.includes(activeTagFilter);
    
    return matchesSearch && matchesTag;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; border: 1px dashed var(--border-color); color: var(--text-muted);">
        <p>No episodes match your search.</p>
        <p style="font-size: 12px; margin-top: 4px;">Try a different filter or check back soon.</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = filtered.map(ep => {
    return `
      <div class="episode-card coming-soon-card" data-id="${ep.id}">
        <div class="coming-soon-badge">Coming Soon</div>
        <div>
          <div class="card-tech-meta">
            <span>${ep.number}</span>
            <span class="tag-pill">${ep.stage}</span>
          </div>
          
          <div class="card-body-details">
            <h3>${ep.title}</h3>
            
            <div class="card-guest-row">
              <div class="card-guest-avatar-blur"></div>
              <span class="card-guest-txt">${ep.guest} &bull; ${ep.guestRole}</span>
            </div>
            
            <p class="card-desc-mono">${ep.description}</p>
          </div>
        </div>
        
        <div class="card-tech-footer">
          <span class="notify-cta" onclick="document.querySelector('.terminal-input').focus(); document.querySelector('.terminal-input').scrollIntoView({behavior:'smooth'}); event.stopPropagation();">🔔 Notify me</span>
          <span style="color: var(--text-muted); font-size: 11px;">Episode dropping soon</span>
        </div>
      </div>
    `;
  }).join('');
  
  // Cards are coming soon — clicking scrolls to newsletter instead of opening drawer
  document.querySelectorAll(".coming-soon-card").forEach(card => {
    card.addEventListener("click", () => {
      const input = document.querySelector('.terminal-input');
      if (input) {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => input.focus(), 400);
      }
    });
  });
}

// 3. Audio Player Logic
function setupAudioPlayer() {
  const playPauseBtns = document.querySelectorAll(".play-pause-trigger");
  const speedBtn = document.getElementById("player-speed");
  const progressBarContainer = document.getElementById("progress-bar-container");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const currentTimeLabel = document.getElementById("current-time");
  const durationTimeLabel = document.getElementById("duration-time");
  
  // Set initial track
  audio.src = activeEpisode.audioUrl;
  
  // Sync state changes in Audio element
  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      if (progressBarFill) progressBarFill.style.width = `${pct}%`;
      if (currentTimeLabel) currentTimeLabel.textContent = formatTime(audio.currentTime);
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    if (durationTimeLabel) durationTimeLabel.textContent = formatTime(audio.duration);
    if (currentTimeLabel) currentTimeLabel.textContent = formatTime(audio.currentTime);
  });
  
  audio.addEventListener("ended", () => {
    isPlaying = false;
    updatePlayerUI();
  });
  
  // Play Pause actions
  playPauseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      togglePlaybackState();
    });
  });
  
  // Speed Adjustment
  if (speedBtn) {
    speedBtn.addEventListener("click", () => {
      if (playbackSpeed === 1) playbackSpeed = 1.25;
      else if (playbackSpeed === 1.25) playbackSpeed = 1.5;
      else if (playbackSpeed === 1.5) playbackSpeed = 2;
      else playbackSpeed = 1;
      
      audio.playbackRate = playbackSpeed;
      speedBtn.textContent = `${playbackSpeed}x`;
    });
  }
  
  // Progress Bar Seek
  if (progressBarContainer) {
    progressBarContainer.addEventListener("click", (e) => {
      const rect = progressBarContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const pct = clickX / width;
      
      if (audio.duration) {
        audio.currentTime = pct * audio.duration;
      }
    });
  }
}

// Play specified episode
function toggleEpisodePlayback(epId) {
  const targetEp = episodes.find(e => e.id === epId);
  if (!targetEp) return;
  
  if (activeEpisode.id === targetEp.id) {
    togglePlaybackState();
  } else {
    // Switch episode
    activeEpisode = targetEp;
    audio.src = activeEpisode.audioUrl;
    audio.load();
    
    // Update console details display
    document.getElementById("console-featured-num").textContent = activeEpisode.number;
    document.getElementById("console-featured-title").textContent = activeEpisode.title;
    document.getElementById("console-desc-txt").textContent = activeEpisode.description;
    
    // Update guest console details
    document.getElementById("console-avatar").src = activeEpisode.guestImage;
    document.getElementById("console-guest-name").textContent = activeEpisode.guest;
    document.getElementById("console-guest-role").textContent = activeEpisode.guestRole;
    
    // Update console audio logs metadata
    document.getElementById("console-log-frequency").textContent = activeEpisode.frequency;
    document.getElementById("console-log-bitrate").textContent = activeEpisode.bitrate;
    document.getElementById("console-log-stage").textContent = activeEpisode.stage;
    document.getElementById("console-log-listens").textContent = activeEpisode.listenCount;
    document.getElementById("console-log-date").textContent = activeEpisode.published;
    
    isPlaying = false; // Reset to play from start
    togglePlaybackState();
  }
}

let wavePhase = 0;
function animateOscilloscope() {
  const path = document.getElementById("oscilloscope-wave-path");
  if (!path) return;
  
  if (!isPlaying) {
    // Flatten wave to a smooth line
    path.setAttribute("d", "M 0,30 Q 20,30 40,30 T 80,30 T 120,30 T 160,30 T 200,30 T 240,30 T 280,30 T 320,30 T 360,30 T 400,30");
    return;
  }
  
  wavePhase += 0.18;
  let points = [];
  for (let x = 0; x <= 400; x += 10) {
    // Math model: combine sine harmonics with a phase shift
    let y = 30 + Math.sin(x * 0.04 + wavePhase) * 14 * Math.sin(x * 0.012 + wavePhase * 0.4);
    points.push(`${x},${y}`);
  }
  path.setAttribute("d", `M ${points.join(" L ")}`);
  
  requestAnimationFrame(animateOscilloscope);
}

function togglePlaybackState() {
  const playerDeck = document.getElementById("oscilloscope-player");
  
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    if (playerDeck) playerDeck.classList.remove("playing");
  } else {
    audio.play().then(() => {
      isPlaying = true;
      if (playerDeck) playerDeck.classList.add("playing");
      updatePlayerUI();
      animateOscilloscope();
    }).catch(err => {
      console.error("Playback failed to start:", err);
    });
  }
  updatePlayerUI();
  animateOscilloscope();
}

function updatePlayerUI() {
  const playIcons = document.querySelectorAll(".play-icon");
  const pauseIcons = document.querySelectorAll(".pause-icon");
  
  if (isPlaying) {
    playIcons.forEach(i => i.style.display = "none");
    pauseIcons.forEach(i => i.style.display = "block");
  } else {
    playIcons.forEach(i => i.style.display = "block");
    pauseIcons.forEach(i => i.style.display = "none");
  }
  
  updateDrawerPlayBtn();
}

function updateDrawerPlayBtn() {
  const drawerPlayBtn = document.getElementById("drawer-play-btn");
  if (!drawerPlayBtn) return;
  
  const drawerPlayIcon = drawerPlayBtn.querySelector(".drawer-play-icon");
  const drawerPauseIcon = drawerPlayBtn.querySelector(".drawer-pause-icon");
  const drawerPlayText = document.getElementById("drawer-play-text");
  
  const isDrawerEpActive = document.getElementById("drawer").getAttribute("data-active-id") === activeEpisode.id;
  
  if (isDrawerEpActive && isPlaying) {
    if (drawerPlayIcon) drawerPlayIcon.style.display = "none";
    if (drawerPauseIcon) drawerPauseIcon.style.display = "block";
    if (drawerPlayText) drawerPlayText.textContent = "HALT_TRACK";
  } else {
    if (drawerPlayIcon) drawerPlayIcon.style.display = "block";
    if (drawerPauseIcon) drawerPauseIcon.style.display = "none";
    if (drawerPlayText) drawerPlayText.textContent = "RUN_TRACK";
  }
}

// Format mm:ss
function formatTime(secondsValue) {
  if (isNaN(secondsValue)) return "00:00";
  const mins = Math.floor(secondsValue / 60);
  const secs = Math.floor(secondsValue % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// 4. Search and Filters Logic (Console search)
function setupSearchAndFilters() {
  const consoleSearchInput = document.getElementById("console-search-input");
  const searchForm = document.getElementById("console-search-form");
  const tabButtons = document.querySelectorAll(".tab-btn");
  
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      searchQuery = consoleSearchInput.value;
      renderEpisodes();
      document.getElementById("catalog-tabs-anchor").scrollIntoView({ behavior: "smooth" });
    });
  }
  
  if (consoleSearchInput) {
    consoleSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderEpisodes();
    });
  }
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      activeTagFilter = btn.getAttribute("data-tag");
      renderEpisodes();
    });
  });
}

// 5. Drawer Operations
function setupDrawer() {
  const overlay = document.getElementById("drawer-overlay");
  const drawer = document.getElementById("drawer");
  const closeBtn = document.getElementById("drawer-close");
  
  const closeDrawer = () => {
    overlay.classList.remove("active");
    drawer.classList.remove("active");
  };
  
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
}

function openEpisodeDrawer(epId) {
  const ep = episodes.find(e => e.id === epId);
  if (!ep) return;
  
  const overlay = document.getElementById("drawer-overlay");
  const drawer = document.getElementById("drawer");
  
  drawer.setAttribute("data-active-id", ep.id);
  
  // Set contents
  document.getElementById("drawer-title").textContent = ep.title;
  document.getElementById("drawer-desc").textContent = ep.description;
  
  // Bio card info
  document.getElementById("drawer-guest-img").src = ep.guestImage;
  document.getElementById("drawer-guest-name").textContent = ep.guest;
  document.getElementById("drawer-guest-role").textContent = ep.guestRole;
  document.getElementById("drawer-guest-bio").textContent = ep.guestBio;
  
  // Takeaways list
  const takeawaysList = document.getElementById("drawer-takeaways");
  takeawaysList.innerHTML = ep.takeaways.map(t => `<li>${t}</li>`).join('');
  
  // Chapters list
  const chaptersList = document.getElementById("drawer-chapters");
  chaptersList.innerHTML = ep.chapters.map(c => `
    <div class="chapter-row" data-seconds="${c.seconds}">
      <div class="chapter-title-info">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M8 5v14l11-7z"/></svg>
        <span>${c.title}</span>
      </div>
      <span class="chapter-time-stamp">// ${c.time}</span>
    </div>
  `).join('');
  
  // Resources
  const resourcesList = document.getElementById("drawer-resources");
  resourcesList.innerHTML = ep.resources.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.label}</a></li>`).join('');
  
  // Attach chapter seeks
  document.querySelectorAll(".chapter-row").forEach(item => {
    item.addEventListener("click", () => {
      const secs = parseInt(item.getAttribute("data-seconds"));
      
      // Load current episode if not loaded
      if (activeEpisode.id !== ep.id) {
        toggleEpisodePlayback(ep.id);
      }
      
      audio.currentTime = secs;
      if (!isPlaying) {
        togglePlaybackState();
      }
    });
  });
  
  // Bind Drawer Play Button
  const drawerPlayBtn = document.getElementById("drawer-play-btn");
  if (drawerPlayBtn) {
    const clonePlayBtn = drawerPlayBtn.cloneNode(true);
    drawerPlayBtn.parentNode.replaceChild(clonePlayBtn, drawerPlayBtn);
    
    clonePlayBtn.addEventListener("click", () => {
      toggleEpisodePlayback(ep.id);
    });
  }
  
  updateDrawerPlayBtn();
  
  overlay.classList.add("active");
  drawer.classList.add("active");
}

// 6. Form submissions (Newsletter and Sponsor modal popups)
function setupForms() {
  // Sidebar sub
  const newsletterForm = document.getElementById("terminal-newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = newsletterForm.querySelector("button");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "[ INITIALIZING_UPLINK... ]";
      
      setTimeout(() => {
        newsletterForm.innerHTML = `
          <div style="color: #10B981; font-weight: 700; font-size: 11px; text-align: center; border: 1px dashed #10B981; padding: 10px 0;">
            [ UPLINK SECURED: WEEKLY_BLUEPRINT_SYNC_ON ]
          </div>
        `;
      }, 1200);
    });
  }
  
  // Sponsor Modal Popup
  const openSponsorBtn = document.getElementById("open-sponsor-modal");
  const sponsorOverlay = document.getElementById("sponsor-modal-overlay");
  const closeSponsorBtn = document.getElementById("sponsor-modal-close");
  const sponsorForm = document.getElementById("sponsor-form");
  const sponsorSuccess = document.getElementById("sponsor-success");
  
  const openModal = () => {
    sponsorOverlay.classList.add("active");
    sponsorForm.style.display = "block";
    sponsorSuccess.style.display = "none";
  };
  
  const closeModal = () => {
    sponsorOverlay.classList.remove("active");
  };
  
  if (openSponsorBtn) openSponsorBtn.addEventListener("click", openModal);
  if (closeSponsorBtn) closeSponsorBtn.addEventListener("click", closeModal);
  if (sponsorOverlay) {
    sponsorOverlay.addEventListener("click", (e) => {
      if (e.target === sponsorOverlay) closeModal();
    });
  }
  
  if (sponsorForm) {
    sponsorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = sponsorForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "[ SENDING_UPLINK... ]";
      
      setTimeout(() => {
        sponsorForm.style.display = "none";
        sponsorSuccess.style.display = "block";
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1200);
    });
  }
}
