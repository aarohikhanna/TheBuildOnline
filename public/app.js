// "The Build Story" Podcast Website Logic - Founder-Console Tech Noir Redesign

// Season 1 Coming Soon Episode Lineup
const episodes = [
  {
    id: "ep-01",
    number: "Episode 01",
    title: "Title Reveal Soon",
    guest: "Founder @ Antimttr",
    guestRole: "Antimttr",
    guestBio: "",
    guestImage: "",
    description: "The story behind Antimttr — how it started, what it took, and the decisions that defined it. Episode title dropping soon.",
    audioUrl: "",
    duration: "30–45 min",
    stage: "Startup",
    tags: ["Scaling", "Bootstrapping", "AI"],
    takeaways: [],
    chapters: [],
    resources: []
  },
  {
    id: "ep-02",
    number: "Episode 02",
    title: "Title Reveal Soon",
    guest: "Founder @ Vyb Trip",
    guestRole: "Vyb Trip",
    guestBio: "",
    guestImage: "",
    description: "Inside the build at Vyb Trip — the origin story, the market, and what it's really like to build in this space. Episode title dropping soon.",
    audioUrl: "",
    duration: "30–45 min",
    stage: "Startup",
    tags: ["Bootstrapping", "SaaS", "Funding"],
    takeaways: [],
    chapters: [],
    resources: []
  },
  {
    id: "ep-03",
    number: "Episode 03",
    title: "Name & Title Reveal Soon",
    guest: "Guest TBA",
    guestRole: "Reveal coming soon",
    guestBio: "",
    guestImage: "",
    description: "A founder story worth waiting for. Name and episode title dropping soon — subscribe to be the first to know.",
    audioUrl: "",
    duration: "30–45 min",
    stage: "Startup",
    tags: ["Scaling", "Funding", "AI"],
    takeaways: [],
    chapters: [],
    resources: []
  },
  {
    id: "ep-04",
    number: "Episode 04",
    title: "Name & Title Reveal Soon",
    guest: "Guest TBA",
    guestRole: "Reveal coming soon",
    guestBio: "",
    guestImage: "",
    description: "Another conversation you won't want to miss. Full details dropping soon — subscribe below to get notified first.",
    audioUrl: "",
    duration: "30–45 min",
    stage: "Startup",
    tags: ["Hardware", "Bootstrapping", "Scaling"],
    takeaways: [],
    chapters: [],
    resources: []
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
  setupPitchTabs();
  setupForms();
  handleUrlHash();
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
    document.body.classList.remove("modal-open");
  };
  
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
}

// 5b. Pitch Interactive Tabs Console
function setupPitchTabs() {
  const tabBtns = document.querySelectorAll(".pitch-tab-btn");
  const tabContents = document.querySelectorAll(".pitch-content");
  
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      
      btn.classList.add("active");
      const targetId = `pitch-${btn.getAttribute("data-pitch")}`;
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add("active");
    });
  });
  
  // Connect CTA buttons inside pitch tabs
  const guestBtn = document.getElementById("pitch-open-guest-modal");
  const sponsorBtn = document.getElementById("pitch-open-sponsor-modal");
  
  const guestOverlay = document.getElementById("guest-modal-overlay");
  const guestForm = document.getElementById("guest-form");
  const guestSuccess = document.getElementById("guest-success");
  
  const sponsorOverlay = document.getElementById("sponsor-modal-overlay");
  const sponsorForm = document.getElementById("sponsor-form");
  const sponsorSuccess = document.getElementById("sponsor-success");
  
  if (guestBtn && guestOverlay) {
    guestBtn.addEventListener("click", () => {
      guestOverlay.classList.add("active");
      guestForm.style.display = "block";
      guestSuccess.style.display = "none";
      document.body.classList.add("modal-open");
    });
  }
  
  if (sponsorBtn && sponsorOverlay) {
    sponsorBtn.addEventListener("click", () => {
      sponsorOverlay.classList.add("active");
      sponsorForm.style.display = "block";
      sponsorSuccess.style.display = "none";
      document.body.classList.add("modal-open");
    });
  }
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
  document.body.classList.add("modal-open");
}

// 6. Form submissions (Newsletter, Sponsor, Guest Application)

// Google Apps Script endpoint — replace with your deployed URL after setup
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbze6-OkVup8AlocY522cxEhuNP1C9DzblXLPjXr9hD-XnG1QqjHX79PSM98OkXT9_e6hg/exec"; // e.g. "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"

async function submitToGoogleSheets(data) {
  if (!GOOGLE_SHEETS_URL) {
    console.log("Google Sheets URL not configured. Form data:", data);
    return true; // Simulate success for now
  }
  
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return true;
  } catch (err) {
    console.error("Submission error:", err);
    return false;
  }
}

function setupForms() {
  // ── Request an Invite Form ──
  const inviteForm = document.getElementById("terminal-invite-form");
  if (inviteForm) {
    inviteForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("invite-email");
      const submitBtn = inviteForm.querySelector("button[type='submit']");
      submitBtn.disabled = true;
      submitBtn.textContent = "Requesting...";
      
      await submitToGoogleSheets({
        type: "invite_request",
        email: emailInput.value,
        timestamp: new Date().toISOString()
      });
      
      inviteForm.innerHTML = `
        <div style="color: #10B981; font-weight: 700; font-size: 11px; text-align: center; border: 1px dashed #10B981; padding: 10px; margin-top: 5px; line-height: 1.4;">
          ✓ Request received! Check your email for an invite link.
        </div>
      `;
    });
  }

  // ── Newsletter ──
  const newsletterForm = document.getElementById("terminal-newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      const submitBtn = newsletterForm.querySelector("button");
      submitBtn.disabled = true;
      submitBtn.textContent = "Subscribing...";
      
      await submitToGoogleSheets({
        type: "newsletter",
        email: emailInput.value,
        timestamp: new Date().toISOString()
      });
      
      newsletterForm.innerHTML = `
        <div style="color: #10B981; font-weight: 700; font-size: 11px; text-align: center; border: 1px dashed #10B981; padding: 10px 0;">
          ✓ You're in! We'll send you weekly episode summaries.
        </div>
      `;
    });
  }
  
  // ── Sponsor Modal ──
  const openSponsorBtn = document.getElementById("open-sponsor-modal");
  const sponsorOverlay = document.getElementById("sponsor-modal-overlay");
  const closeSponsorBtn = document.getElementById("sponsor-modal-close");
  const sponsorForm = document.getElementById("sponsor-form");
  const sponsorSuccess = document.getElementById("sponsor-success");
  
  const openSponsorModal = () => {
    sponsorOverlay.classList.add("active");
    sponsorForm.style.display = "block";
    sponsorSuccess.style.display = "none";
    document.body.classList.add("modal-open");
  };
  
  const closeSponsorModal = () => {
    sponsorOverlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  };
  
  if (openSponsorBtn) openSponsorBtn.addEventListener("click", openSponsorModal);
  if (closeSponsorBtn) closeSponsorBtn.addEventListener("click", closeSponsorModal);
  if (sponsorOverlay) {
    sponsorOverlay.addEventListener("click", (e) => {
      if (e.target === sponsorOverlay) closeSponsorModal();
    });
  }
  
  if (sponsorForm) {
    sponsorForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = sponsorForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
      
      await submitToGoogleSheets({
        type: "sponsor",
        name: document.getElementById("sponsor-name").value,
        email: document.getElementById("sponsor-email").value,
        company: document.getElementById("sponsor-company").value,
        message: document.getElementById("sponsor-message").value,
        timestamp: new Date().toISOString()
      });
      
      sponsorForm.style.display = "none";
      sponsorSuccess.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  }
  
  // ── Guest Application Modal ──
  const openGuestBtn = document.getElementById("open-guest-modal");
  const guestOverlay = document.getElementById("guest-modal-overlay");
  const closeGuestBtn = document.getElementById("guest-modal-close");
  const guestForm = document.getElementById("guest-form");
  const guestSuccess = document.getElementById("guest-success");
  
  const openGuestModal = () => {
    guestOverlay.classList.add("active");
    guestForm.style.display = "block";
    guestSuccess.style.display = "none";
    document.body.classList.add("modal-open");
  };
  
  const closeGuestModal = () => {
    guestOverlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  };
  
  if (openGuestBtn) openGuestBtn.addEventListener("click", openGuestModal);
  if (closeGuestBtn) closeGuestBtn.addEventListener("click", closeGuestModal);
  if (guestOverlay) {
    guestOverlay.addEventListener("click", (e) => {
      if (e.target === guestOverlay) closeGuestModal();
    });
  }
  
  if (guestForm) {
    guestForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = guestForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
      
      await submitToGoogleSheets({
        type: "guest_application",
        fullName: document.getElementById("guest-fullname").value,
        email: document.getElementById("guest-email").value,
        linkedin: document.getElementById("guest-linkedin").value,
        company: document.getElementById("guest-company").value,
        role: document.getElementById("guest-role").value,
        stage: document.getElementById("guest-stage").value,
        story: document.getElementById("guest-story").value,
        topic: document.getElementById("guest-topic").value,
        referral: document.getElementById("guest-referral").value,
        timestamp: new Date().toISOString()
      });
      
      guestForm.style.display = "none";
      guestSuccess.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  }
}

// 7. Hash-based direct link navigation
function handleUrlHash() {
  const hash = window.location.hash.toLowerCase();
  if (hash === "#be-a-guest" || hash === "#apply-guest" || hash === "#apply-to-be-a-guest") {
    setTimeout(() => {
      const openGuestBtn = document.getElementById("open-guest-modal") || document.getElementById("pitch-open-guest-modal");
      if (openGuestBtn) openGuestBtn.click();
    }, 300);
  } else if (hash === "#sponsor" || hash === "#become-sponsor" || hash === "#sponsor-the-show") {
    setTimeout(() => {
      const openSponsorBtn = document.getElementById("open-sponsor-modal") || document.getElementById("pitch-open-sponsor-modal");
      if (openSponsorBtn) openSponsorBtn.click();
    }, 300);
  }
}

window.addEventListener("hashchange", handleUrlHash);
