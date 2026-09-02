(function () {
  'use strict';
  // INITIAL SEED EVENTS DATASET
  // INITIAL SEED EVENTS DATASET — SRUJAL EVENT MANAGER
  const INITIAL_EVENTS = [
    {
      id: 'sem-evt-101',
      title: 'Royal Heritage Destination Wedding & Sangeet Gala',
      tagline: 'A majestic royal celebration curated with bespoke gold floral mandap decor, live symphony, and grand feast.',
      category: 'Weddings & Ceremonies',
      date: '2026-10-14T17:00',
      dateFormatted: 'Oct 14, 2026 • 05:00 PM',
      location: 'Royal Pavilion Palace & Lawns, Kurnool, AP',
      price: 2499,
      capacity: 600,
      ticketsSold: 485,
      bannerTheme: 'gradient-gold',
      bannerImage: 'images/royal_wedding.jpg',
      description: 'Experience an unforgettable royal wedding production presented by Srujal Event Manager. Featuring opulent floral canopy design, traditional Nadaswaram ensemble, cinematic 4K camera coverage, and a 108-item royal feast.',
      agenda: [
        { time: '05:00 PM', desc: 'Grand Baraat Procession & Welcome Ceremony' },
        { time: '07:30 PM', desc: 'Royal Varmala & Floral Canopy Mandap Rituals' },
        { time: '09:00 PM', desc: 'Musical Sangeet Performance & Drone Light Show' },
        { time: '10:30 PM', desc: 'Royal Banquet & Celebrity Musical Gala' }
      ],
      speakers: ['Srujal Event Management Production Crew', 'Pandit V. Sharma', 'Chef Ranveer Brar']
    },
    {
      id: 'sem-evt-102',
      title: 'National AI & Enterprise Tech Summit 2026',
      tagline: 'Connecting India\'s top AI founders, robotics visionaries, and enterprise technology leaders.',
      category: 'Tech & Corporate',
      date: '2026-09-24T09:00',
      dateFormatted: 'Sep 24, 2026 • 09:00 AM',
      location: 'HITEX International Convention Centre, Hyderabad',
      price: 1499,
      capacity: 1000,
      ticketsSold: 840,
      bannerTheme: 'gradient-cyber',
      bannerImage: 'images/tech_ai_summit.jpg',
      description: 'Join over 1,500 enterprise tech executives, AI researchers, and startup founders. Featuring keynote addresses by top visionaries in generative AI models, industrial robotics, and cloud infrastructure.',
      agenda: [
        { time: '09:00 AM', desc: 'Opening Keynote: India\'s Frontier AI & Robotics Roadmap' },
        { time: '11:30 AM', desc: 'C-Suite Panel: Scaling Enterprise AI Solutions' },
        { time: '02:30 PM', desc: 'Live Product Launches & VC Pitch Showcase' }
      ],
      speakers: ['Dr. Ananya Rao (Chief AI Scientist)', 'Vikramaditya Verma (Tech Founder)', 'Srujal Production Crew']
    },
    {
      id: 'sem-evt-103',
      title: 'Srujal Musical Beats & Star DJ Concert Gala',
      tagline: 'Immersive soundscapes, 3D laser stage art, and world-class live singers & DJs.',
      category: 'Music & Concerts',
      date: '2026-09-20T18:00',
      dateFormatted: 'Sep 20, 2026 • 06:00 PM',
      location: 'Gachibowli Outdoor Arena, Hyderabad, TS',
      price: 899,
      capacity: 2500,
      ticketsSold: 2180,
      bannerTheme: 'gradient-sunset',
      bannerImage: 'images/concert_stage.jpg',
      description: 'An electrifying music spectacle engineered by Srujal Event Manager featuring 100kW Line Array Sound, 3D hologram projections, pyrotechnic laser fountains, and top Bollywood and EDM performers.',
      agenda: [
        { time: '06:00 PM', desc: 'Gates Open & Opening Acoustic Sets' },
        { time: '08:30 PM', desc: 'Star Singer Live Performance' },
        { time: '11:00 PM', desc: 'Midnight Laser & Pyro EDM Finale' }
      ],
      speakers: ['Armaan Malik (Live Vocalist)', 'DJ Cipher (Producer)', 'Srujal Stage & Lighting Crew']
    },
    {
      id: 'sem-evt-104',
      title: 'Global C-Suite Executive & Business Leadership Forum',
      tagline: 'Connecting industry titans, venture capitalists, and global trade leaders.',
      category: 'Business & Corporate',
      date: '2026-11-12T08:30',
      dateFormatted: 'Nov 12, 2026 • 08:30 AM',
      location: 'Taj Falaknuma Palace, Hyderabad',
      price: 4999,
      capacity: 300,
      ticketsSold: 245,
      bannerTheme: 'gradient-royal',
      bannerImage: 'images/corporate_summit.png',
      description: 'An exclusive leadership gathering focusing on macroeconomic trends, AI enterprise transformation, and strategic venture investment strategies.',
      agenda: [
        { time: '08:30 AM', desc: 'Executive Breakfast & Private Networking' },
        { time: '10:00 AM', desc: 'Macroeconomics & India Growth Outlook 2030' },
        { time: '02:00 PM', desc: 'Venture Capital Pitch Finale' }
      ],
      speakers: ['Victoria Thorne (Managing Partner)', 'Rajeshwar Reddy (CEO)']
    },
    {
      id: 'sem-evt-105',
      title: 'Luxury Birthday & Jubilee Celebration Gala',
      tagline: 'Extravagant theme birthday party featuring drone light show, live orchestra, and celebrity hosts.',
      category: 'Galas & Celebrations',
      date: '2026-10-02T19:00',
      dateFormatted: 'Oct 02, 2026 • 07:00 PM',
      location: 'Grand Jubilee Hall, Kurnool, AP',
      price: 1199,
      capacity: 400,
      ticketsSold: 360,
      bannerTheme: 'gradient-ruby',
      bannerImage: 'images/birthday_gala.jpg',
      description: 'A benchmark private birthday celebration designed by Srujal Event Manager. Includes custom stage decor, live saxophone performance, 4K video booth, and royal dinner catering.',
      agenda: [
        { time: '07:00 PM', desc: 'Red Carpet Guest Reception & Mocktails' },
        { time: '08:15 PM', desc: 'Grand Cake Cutting & Pyrotechnic Fountain' },
        { time: '09:30 PM', desc: 'Live DJ & Dance Floor Gala' }
      ],
      speakers: ['Srujal Celebrations Team', 'MC Rohit', 'Chef Sanjeev Kapoor']
    },
    {
      id: 'sem-evt-106',
      title: 'Srujal Stage Lighting & Live Sound Production Expo',
      tagline: 'Hands-on masterclass on 4K cinema cameras, concert sound engineering, and stage lighting.',
      category: 'Production & Expos',
      date: '2026-11-28T09:30',
      dateFormatted: 'Nov 28, 2026 • 09:30 AM',
      location: 'Kurnool Convention Center, Andhra Pradesh',
      price: 499,
      capacity: 350,
      ticketsSold: 280,
      bannerTheme: 'gradient-emerald',
      bannerImage: 'images/tech_expo.jpg',
      description: 'A technical workshop and hands-on expo demonstrating state-of-the-art concert sound systems, DMX stage lighting design, drone cinematography, and instant QR event ticketing.',
      agenda: [
        { time: '09:30 AM', desc: 'Concert Line Array Audio Setup Workshop' },
        { time: '01:30 PM', desc: 'DMX Stage Lighting & Laser Calibration' },
        { time: '04:00 PM', desc: 'Cinematic 4K Camera & Drone Flight Demo' }
      ],
      speakers: ['Srujal Audio-Visual Engineers', 'Kiran Kumar (Lighting Director)']
    },
    {
      id: 'sem-evt-107',
      title: 'National 48-Hour Developer Hackathon & AI Marathon',
      tagline: 'India\'s premier developer hackathon with $50,000 in prizes and live VC demo day.',
      category: 'Hackathons & Tech',
      date: '2026-10-20T09:00',
      dateFormatted: 'Oct 20, 2026 • 09:00 AM',
      location: 'Innovate Tech Park Arena, Hyderabad',
      price: 299,
      capacity: 800,
      ticketsSold: 710,
      bannerTheme: 'gradient-cyber',
      bannerImage: 'images/hackathon.jpg',
      description: 'A 48-hour continuous coding marathon featuring 800 top software engineers, AI builders, and UI designers. Includes mentor code reviews, 24/7 catering, and live pitch demos.',
      agenda: [
        { time: '09:00 AM', desc: 'Hackathon Opening Ceremony & Problem Statements' },
        { time: '02:00 PM', desc: '48-Hour Coding Sprint & AI Mentor Check-ins' },
        { time: '04:00 PM', desc: 'Grand Pitch Finale & $50,000 Prize Ceremony' }
      ],
      speakers: ['Srujal Tech Mentors', 'Dr. Rahul Sharma (AI Evangelist)', 'Sneha Kapadia (Venture Partner)']
    },
    {
      id: 'sem-evt-108',
      title: 'Apex Gaming & Esports Arena Championship Finals',
      tagline: 'The ultimate battle royale arena showdown for the ₹25,00,000 grand prize.',
      category: 'Gaming & Esports',
      date: '2026-11-05T14:00',
      dateFormatted: 'Nov 05, 2026 • 02:00 PM',
      location: 'Indoor Stadium Arena, Hyderabad, TS',
      price: 699,
      capacity: 1800,
      ticketsSold: 1650,
      bannerTheme: 'gradient-royal',
      bannerImage: 'images/esports_arena.jpg',
      description: 'Watch 20 professional battle royale esports squads compete live across 6 intense matches in an arena equipped with massive 4K LED screens and surround sound audio.',
      agenda: [
        { time: '02:00 PM', desc: 'Opening Ceremony & Team Introductions' },
        { time: '03:30 PM', desc: 'Matches 1-3 Arena Battle' },
        { time: '08:00 PM', desc: 'Final Match & Trophy Presentation' }
      ],
      speakers: ['Esports Host Shroud', 'Caster GoldenBoy', 'Srujal Arena Production Team']
    }
  ];
  // CENTRAL APPLICATION STATE
  const state = {
    events: [],
    userTickets: [],
    currentView: 'explorer',
    filterCategory: 'All',
    searchQuery: '',
    sortBy: 'date-asc',
    viewMode: 'grid',
    selectedEvent: null,
    checkoutDraft: null,
    calendarDate: new Date(2026, 8, 1) // September 2026 default
  };
  // INITIALIZE STATE PERSISTENCE
  function initState() {
    const storedEvents = localStorage.getItem('srujalem_events');
    if (storedEvents) {
      try {
        const parsed = JSON.parse(storedEvents);
        // Force upgrade if dataset is from legacy structure
        if (parsed.length > 0 && parsed[0].id && parsed[0].id.startsWith('ep-evt')) {
          state.events = INITIAL_EVENTS;
          saveEventsState();
        } else {
          state.events = parsed;
        }
      } catch (e) {
        state.events = INITIAL_EVENTS;
        saveEventsState();
      }
    } else {
      state.events = INITIAL_EVENTS;
      saveEventsState();
    }
    const storedTickets = localStorage.getItem('srujalem_tickets');
    if (storedTickets) {
      try {
        state.userTickets = JSON.parse(storedTickets);
      } catch (e) {
        state.userTickets = [];
      }
    }
    const savedTheme = localStorage.getItem('srujalem_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateTicketsBadge();
  }
  function saveEventsState() {
    localStorage.setItem('srujalem_events', JSON.stringify(state.events));
  }
  function saveTicketsState() {
    localStorage.setItem('srujalem_tickets', JSON.stringify(state.userTickets));
    updateTicketsBadge();
  }
  function updateTicketsBadge() {
    const badge = document.getElementById('tickets-count-badge');
    if (badge) {
      badge.textContent = state.userTickets.length;
    }
  }
  // TOAST NOTIFICATION SYSTEM
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }
  // SVG QR CODE GENERATOR (2D Matrix graphic)
  function generateSvgQrCode(dataString) {
    const size = 160;
    const modules = 15;
    const cellSize = size / modules;
    let rects = '';
    // Generate deterministic pattern based on hash of input text
    let hash = 0;
    for (let i = 0; i < dataString.length; i++) {
      hash = (hash << 5) - hash + dataString.charCodeAt(i);
      hash |= 0;
    }
    for (let r = 0; r < modules; r++) {
      for (let c = 0; c < modules; c++) {
        // Reserved corner position detection patterns
        const isCorner1 = (r < 4 && c < 4);
        const isCorner2 = (r < 4 && c >= modules - 4);
        const isCorner3 = (r >= modules - 4 && c < 4);
        if (isCorner1 || isCorner2 || isCorner3) {
          const isOuter = (r === 0 || r === 3 || c === 0 || c === 3 || r === modules - 1 || r === modules - 4 || c === modules - 1 || c === modules - 4);
          const isCenter = (r >= 1 && r <= 2 && c >= 1 && c <= 2) ||
                           (r >= 1 && r <= 2 && c >= modules - 3 && c <= modules - 2) ||
                           (r >= modules - 3 && r <= modules - 2 && c >= 1 && c <= 2);
          if (isOuter || isCenter) {
            rects += `<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize}" height="${cellSize}" fill="#0f172a"/>`;
          }
        } else {
          // Pseudorandom grid module pattern
          const val = Math.abs(Math.sin((r * 31 + c * 17 + hash) * 9999));
          if (val > 0.45) {
            rects += `<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize - 0.5}" height="${cellSize - 0.5}" rx="1" fill="#0f172a"/>`;
          }
        }
      }
    }
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="#ffffff"/>
        ${rects}
      </svg>
    `;
  }
  // ROUTER & VIEW SWITCHER
  function switchView(viewName) {
    state.currentView = viewName;
    // Update Nav buttons
    document.querySelectorAll('.main-nav .nav-link').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });
    // Update view sections
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });
    const targetSection = document.getElementById(`${viewName}-view`);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    // Trigger section re-renders
    if (viewName === 'explorer') renderEventsGrid();
    if (viewName === 'calendar') renderCalendar();
    if (viewName === 'dashboard') renderDashboard();
    if (viewName === 'tickets') renderUserTickets();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // EXPLORER VIEW RENDERER
  function renderEventsGrid() {
    const gridContainer = document.getElementById('events-grid-container');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');
    const totalEventsStat = document.getElementById('stat-total-events');
    if (totalEventsStat) totalEventsStat.textContent = `${state.events.length}+`;
    // Filter Logic
    let filtered = state.events.filter(evt => {
      const matchCategory = state.filterCategory === 'All' || evt.category === state.filterCategory;
      const q = state.searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        evt.title.toLowerCase().includes(q) ||
        evt.location.toLowerCase().includes(q) ||
        evt.category.toLowerCase().includes(q) ||
        evt.description.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
    // Sort Logic
    filtered.sort((a, b) => {
      if (state.sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
      if (state.sortBy === 'popular') return b.ticketsSold - a.ticketsSold;
      if (state.sortBy === 'price-low') return a.price - b.price;
      if (state.sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
    if (resultsCount) resultsCount.textContent = filtered.length;
    if (filtered.length === 0) {
      gridContainer.innerHTML = '';
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;
    gridContainer.className = `events-grid ${state.viewMode === 'list' ? 'list-view' : ''}`;
    gridContainer.innerHTML = filtered.map(evt => {
      const soldPct = Math.min(100, Math.round((evt.ticketsSold / evt.capacity) * 100));
      const isSoldOut = evt.ticketsSold >= evt.capacity;
      const formattedPrice = evt.price === 0 ? 'FREE' : `$${evt.price}`;
      const bannerBgStyle = evt.bannerImage 
        ? `background: url('${evt.bannerImage}') center/cover no-repeat;`
        : `background: var(--${evt.bannerTheme || 'gradient-cyber'});`;
      return `
        <article class="event-card reveal-on-scroll" data-id="${evt.id}">
          <div class="card-banner" style="${bannerBgStyle}">
            <div class="card-banner-overlay"></div>
            <span class="category-tag">${escapeHtml(evt.category)}</span>
            <span class="price-tag ${evt.price === 0 ? 'free' : ''}">${formattedPrice}</span>
          </div>
          <div class="card-content">
            <div class="card-date-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>${escapeHtml(evt.dateFormatted)}</span>
            </div>
            <h3 class="card-title">${escapeHtml(evt.title)}</h3>
            <div class="card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${escapeHtml(evt.location)}</span>
            </div>
            <div class="card-footer">
              <div class="capacity-progress">
                <span>${evt.capacity - evt.ticketsSold} seats remaining</span>
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" style="width: ${soldPct}%;"></div>
                </div>
              </div>
              <button class="btn btn-sm ${isSoldOut ? 'btn-secondary' : 'btn-primary'} open-detail-trigger" data-id="${evt.id}">
                ${isSoldOut ? 'Sold Out' : 'View & Book'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
    // Attach click triggers to cards
    gridContainer.querySelectorAll('.open-detail-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openEventDetailModal(btn.getAttribute('data-id'));
      });
    });
    gridContainer.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => {
        openEventDetailModal(card.getAttribute('data-id'));
      });
    });
  }
  // EVENT DETAIL MODAL MANAGER
  function openEventDetailModal(eventId) {
    const evt = state.events.find(e => e.id === eventId);
    if (!evt) return;
    state.selectedEvent = evt;
    document.getElementById('modal-event-title').textContent = evt.title;
    document.getElementById('modal-event-category').textContent = evt.category;
    document.getElementById('modal-event-tagline').textContent = evt.tagline || 'Experience an unforgettable event.';
    document.getElementById('modal-event-datetime').textContent = evt.dateFormatted;
    document.getElementById('modal-event-location').textContent = evt.location;
    document.getElementById('modal-event-seats').textContent = `${evt.capacity - evt.ticketsSold} / ${evt.capacity} available`;
    document.getElementById('modal-event-description').textContent = evt.description;
    // Set Hero Background Style
    const hero = document.getElementById('modal-event-hero');
    hero.style.background = `var(--${evt.bannerTheme || 'gradient-cyber'})`;
    // Tier prices
    document.getElementById('modal-price-general').textContent = evt.price === 0 ? 'FREE' : `$${evt.price}`;
    document.getElementById('modal-price-vip').textContent = evt.price === 0 ? 'FREE' : `$${Math.round(evt.price * 2.2)}`;
    // Agenda rendering
    const agendaContainer = document.getElementById('modal-event-agenda');
    if (evt.agenda && evt.agenda.length) {
      agendaContainer.innerHTML = evt.agenda.map(item => `
        <div class="agenda-item">
          <span class="agenda-time">${escapeHtml(item.time)}</span>
          <span class="agenda-desc">${escapeHtml(item.desc)}</span>
        </div>
      `).join('');
    } else {
      agendaContainer.innerHTML = '<p class="text-muted">Detailed schedule will be published 48 hours prior to start.</p>';
    }
    // Speakers rendering
    const speakersContainer = document.getElementById('modal-event-speakers');
    if (evt.speakers && evt.speakers.length) {
      speakersContainer.innerHTML = evt.speakers.map(spk => `
        <div class="meta-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>
          <div>
            <span class="meta-val">${escapeHtml(spk)}</span>
            <span class="meta-label">Featured Speaker</span>
          </div>
        </div>
      `).join('');
    } else {
      speakersContainer.innerHTML = '<p class="text-muted">Keynote speakers announcement coming soon.</p>';
    }
    // Reset Qty & Tier
    state.checkoutDraft = {
      tier: 'general',
      qty: 1,
      basePrice: evt.price,
      unitPrice: evt.price,
      totalPrice: evt.price
    };
    updateModalPriceCalc();
    document.getElementById('detail-modal-backdrop').hidden = false;
  }
  function updateModalPriceCalc() {
    if (!state.checkoutDraft || !state.selectedEvent) return;
    const qtyDisplay = document.getElementById('qty-display-val');
    const totalDisplay = document.getElementById('modal-calc-total');
    qtyDisplay.textContent = state.checkoutDraft.qty;
    const modifier = state.checkoutDraft.tier === 'vip' ? 2.2 : 1.0;
    state.checkoutDraft.unitPrice = Math.round(state.selectedEvent.price * modifier);
    state.checkoutDraft.totalPrice = state.checkoutDraft.unitPrice * state.checkoutDraft.qty;
    totalDisplay.textContent = state.checkoutDraft.totalPrice === 0 ? 'FREE' : `$${state.checkoutDraft.totalPrice.toFixed(2)}`;
  }
  // CHECKOUT & BOOKING FLOW
  function openCheckoutModal() {
    if (!state.selectedEvent || !state.checkoutDraft) return;
    // Check availability
    if (state.selectedEvent.ticketsSold + state.checkoutDraft.qty > state.selectedEvent.capacity) {
      showToast('Requested ticket quantity exceeds remaining venue seats!', 'info');
      return;
    }
    document.getElementById('detail-modal-backdrop').hidden = true;
    document.getElementById('chk-event-title').textContent = state.selectedEvent.title;
    document.getElementById('chk-tier-qty').textContent = `${state.checkoutDraft.qty}x ${state.checkoutDraft.tier.toUpperCase()} Pass`;
    document.getElementById('chk-total-amount').textContent = state.checkoutDraft.totalPrice === 0 ? 'FREE' : `$${state.checkoutDraft.totalPrice.toFixed(2)}`;
    document.getElementById('checkout-modal-backdrop').hidden = false;
  }
  function handleCheckoutSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('chk-name').value.trim();
    const email = document.getElementById('chk-email').value.trim();
    const phone = document.getElementById('chk-phone').value.trim();
    if (!name || !email) return;
    const ticketId = `EP-${Math.floor(10000 + Math.random() * 90000)}-${state.selectedEvent.category.substring(0, 2).toUpperCase()}`;
    const seatCode = `SEC-${String.fromCharCode(65 + Math.floor(Math.random() * 6))} / ROW ${Math.floor(1 + Math.random() * 12)} / #${Math.floor(1 + Math.random() * 40)}`;
    const newTicket = {
      ticketId,
      eventId: state.selectedEvent.id,
      eventTitle: state.selectedEvent.title,
      category: state.selectedEvent.category,
      dateFormatted: state.selectedEvent.dateFormatted,
      location: state.selectedEvent.location,
      attendeeName: name,
      attendeeEmail: email,
      attendeePhone: phone,
      tier: state.checkoutDraft.tier.toUpperCase(),
      qty: state.checkoutDraft.qty,
      totalPaid: state.checkoutDraft.totalPrice,
      seatCode,
      bookedAt: new Date().toISOString()
    };
    // Update Event capacity in state
    state.selectedEvent.ticketsSold += state.checkoutDraft.qty;
    saveEventsState();
    // Store Ticket in state
    state.userTickets.unshift(newTicket);
    saveTicketsState();
    document.getElementById('checkout-modal-backdrop').hidden = true;
    // Open Digital Ticket Pass modal
    showDigitalTicketPass(newTicket);
    showToast('🎉 Reservation confirmed! Digital ticket pass generated.');
  }
  // DIGITAL TICKET PASS DISPLAY
  function showDigitalTicketPass(ticket) {
    document.getElementById('pass-event-title').textContent = ticket.eventTitle;
    document.getElementById('pass-event-category').textContent = ticket.category;
    document.getElementById('pass-attendee-name').textContent = ticket.attendeeName;
    document.getElementById('pass-tier-name').textContent = `${ticket.tier} Pass (${ticket.qty}x)`;
    document.getElementById('pass-date-time').textContent = ticket.dateFormatted;
    document.getElementById('pass-venue').textContent = ticket.location;
    document.getElementById('pass-seat-code').textContent = ticket.seatCode;
    document.getElementById('pass-ticket-id').textContent = ticket.ticketId;
    // Inject SVG QR Code
    const qrContainer = document.getElementById('pass-qr-container');
    qrContainer.innerHTML = generateSvgQrCode(`${ticket.ticketId}|${ticket.attendeeEmail}`);
    document.getElementById('ticket-pass-modal-backdrop').hidden = false;
  }
  // AUTOMATIC DYNAMIC TICKET PRICE CALCULATOR
  function calculateAutoTicketPrice() {
    const category = document.getElementById('host-category')?.value || 'Weddings & Ceremonies';
    const capacityVal = document.getElementById('host-capacity')?.value;
    const capacity = parseInt(capacityVal, 10) || 250;
    const priceInput = document.getElementById('host-price');
    const noteEl = document.getElementById('host-price-calc-note');
    if (!priceInput) return;

    let categoryBasePrice = 49;

    switch (category) {
      case 'Weddings & Ceremonies':
        categoryBasePrice = 150;
        break;
      case 'Business & Corporate':
        categoryBasePrice = 120;
        break;
      case 'Tech & Corporate':
        categoryBasePrice = 99;
        break;
      case 'Galas & Celebrations':
        categoryBasePrice = 85;
        break;
      case 'Music & Concerts':
        categoryBasePrice = 65;
        break;
      case 'Gaming & Esports':
        categoryBasePrice = 55;
        break;
      case 'Production & Expos':
        categoryBasePrice = 45;
        break;
      case 'Hackathons & Tech':
        categoryBasePrice = 35;
        break;
      default:
        categoryBasePrice = 49;
    }

    let capacityFactor = 1.0;
    if (capacity <= 50) {
      capacityFactor = 1.6;
    } else if (capacity <= 150) {
      capacityFactor = 1.3;
    } else if (capacity <= 300) {
      capacityFactor = 1.0;
    } else if (capacity <= 600) {
      capacityFactor = 0.85;
    } else if (capacity <= 1200) {
      capacityFactor = 0.72;
    } else {
      capacityFactor = 0.6;
    }

    const calculatedPrice = Math.max(10, Math.round(categoryBasePrice * capacityFactor));
    priceInput.value = calculatedPrice;

    if (noteEl) {
      noteEl.textContent = `⚡ Auto-calculated: $${calculatedPrice} / ticket (${category} • ${capacity} capacity)`;
    }
  }

  // HOST EVENT WIZARD HANDLER
  function handlePublishEvent(e) {
    e.preventDefault();
    const title = document.getElementById('host-title').value.trim();
    const category = document.getElementById('host-category').value;
    const price = parseFloat(document.getElementById('host-price').value) || 0;
    const rawDate = document.getElementById('host-date').value;
    const capacity = parseInt(document.getElementById('host-capacity').value, 10) || 100;
    const location = document.getElementById('host-location').value.trim();
    const bannerTheme = document.getElementById('host-banner-theme').value;
    const description = document.getElementById('host-description').value.trim();
    if (!title || !rawDate || !location || !description) return;
    // Format date string
    const dateObj = new Date(rawDate);
    const dateFormatted = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }) + ' • ' + dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    const newEvent = {
      id: `ep-evt-${Date.now()}`,
      title,
      tagline: 'Hosted on Srujal Event Management',
      category,
      date: rawDate,
      dateFormatted,
      location,
      price,
      capacity,
      ticketsSold: 0,
      bannerTheme,
      description,
      agenda: [
        { time: 'Opening', desc: 'Welcome address & registration check-in' },
        { time: 'Main Session', desc: 'Core presentations and interactive session' }
      ],
      speakers: ['Host Speaker']
    };
    state.events.unshift(newEvent);
    saveEventsState();
    document.getElementById('host-event-form').reset();
    document.getElementById('host-modal-backdrop').hidden = true;
    showToast('✨ Event published live to discovery deck!');
    switchView('explorer');
  }
  // CALENDAR VIEW RENDERER
  function renderCalendar() {
    const grid = document.getElementById('calendar-days-grid');
    const monthTitle = document.getElementById('cal-month-title');
    const year = state.calendarDate.getFullYear();
    const month = state.calendarDate.getMonth();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    monthTitle.textContent = `${monthNames[month]} ${year}`;
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDaysInMonth = new Date(year, month, 0).getDate();
    let cellsHtml = '';
    // Prev Month Days
    for (let x = firstDayIndex; x > 0; x--) {
      cellsHtml += `<div class="cal-day-cell other-month"><span class="cal-day-num">${prevDaysInMonth - x + 1}</span></div>`;
    }
    // Current Month Days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
      const cellDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      // Events on this day
      const dayEvents = state.events.filter(e => e.date && e.date.startsWith(cellDateStr));
      let eventsHtml = '';
      if (dayEvents.length) {
        eventsHtml = `<div class="cal-events-list">` +
          dayEvents.map(e => `
            <div class="cal-event-chip" data-id="${e.id}" title="${escapeHtml(e.title)}">
              ${escapeHtml(e.title)}
            </div>
          `).join('') +
          `</div>`;
      }
      cellsHtml += `
        <div class="cal-day-cell ${isToday ? 'today' : ''}">
          <span class="cal-day-num">${day}</span>
          ${eventsHtml}
        </div>
      `;
    }
    // Next Month Days padding
    const totalCells = firstDayIndex + daysInMonth;
    const nextDays = (7 - (totalCells % 7)) % 7;
    for (let z = 1; z <= nextDays; z++) {
      cellsHtml += `<div class="cal-day-cell other-month"><span class="cal-day-num">${z}</span></div>`;
    }
    grid.innerHTML = cellsHtml;
    // Attach click triggers to calendar event chips
    grid.querySelectorAll('.cal-event-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        openEventDetailModal(chip.getAttribute('data-id'));
      });
    });
  }
  // ORGANIZER DASHBOARD RENDERER
  function renderDashboard() {
    let totalRevenue = 0;
    let totalTickets = 0;
    let categoryRevenue = {};
    state.events.forEach(evt => {
      const rev = evt.ticketsSold * evt.price;
      totalRevenue += rev;
      totalTickets += evt.ticketsSold;
      categoryRevenue[evt.category] = (categoryRevenue[evt.category] || 0) + rev;
    });
    document.getElementById('dash-total-revenue').textContent = `$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    document.getElementById('dash-tickets-sold').textContent = totalTickets.toLocaleString();
    document.getElementById('dash-active-events').textContent = state.events.length;
    // Category Bars
    const catBarsContainer = document.getElementById('category-chart-bars');
    const categories = Object.keys(categoryRevenue);
    if (categories.length === 0) {
      catBarsContainer.innerHTML = '<p class="text-muted">No sales data recorded yet.</p>';
    } else {
      catBarsContainer.innerHTML = categories.map(cat => {
        const amt = categoryRevenue[cat];
        const pct = totalRevenue > 0 ? Math.round((amt / totalRevenue) * 100) : 0;
        return `
          <div class="cat-bar-item">
            <div class="cat-bar-label">
              <span>${escapeHtml(cat)}</span>
              <strong>$${amt.toLocaleString()} (${pct}%)</strong>
            </div>
            <div class="cat-bar-track">
              <div class="cat-bar-fill" style="width: ${Math.max(5, pct)}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }
    // Capacity Gauge Render
    const capacityGauge = document.getElementById('capacity-gauge-container');
    const totalCapacity = state.events.reduce((acc, curr) => acc + curr.capacity, 0);
    const overallOccupancyPct = totalCapacity > 0 ? Math.round((totalTickets / totalCapacity) * 100) : 0;
    capacityGauge.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 0;">
        <div style="font-size: 3rem; font-family: var(--font-heading); font-weight: 800; color: var(--accent-cyan);">
          ${overallOccupancyPct}%
        </div>
        <p class="text-muted" style="font-size: 0.9rem;">
          Total Seats Filled (${totalTickets.toLocaleString()} / ${totalCapacity.toLocaleString()})
        </p>
      </div>
    `;
    // Managed Table Render
    renderDashboardTable();
  }
  function renderDashboardTable(filterQuery = '') {
    const tbody = document.getElementById('dash-events-tbody');
    let list = state.events;
    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      list = list.filter(e => e.title.toLowerCase().includes(q) || e.category.toLowerCase().includes(q));
    }
    tbody.innerHTML = list.map(evt => `
      <tr>
        <td><strong>${escapeHtml(evt.title)}</strong></td>
        <td><span class="category-tag">${escapeHtml(evt.category)}</span></td>
        <td>${escapeHtml(evt.dateFormatted)}</td>
        <td><strong>${evt.price === 0 ? 'FREE' : `$${evt.price}`}</strong></td>
        <td>${evt.ticketsSold} / ${evt.capacity}</td>
        <td><span class="table-status active">Active</span></td>
        <td>
          <button class="btn btn-sm btn-danger delete-evt-btn" data-id="${evt.id}" title="Delete Event">Delete</button>
        </td>
      </tr>
    `).join('');
    tbody.querySelectorAll('.delete-evt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const evtId = btn.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this event listing?')) {
          state.events = state.events.filter(e => e.id !== evtId);
          saveEventsState();
          renderDashboard();
          showToast('Event deleted from roster.');
        }
      });
    });
  }
  function exportAttendeeCsv() {
    let csvContent = "data:text/csv;charset=utf-8,Ticket ID,Event Title,Attendee Name,Attendee Email,Pass Tier,Total Paid\n";
    if (state.userTickets.length === 0) {
      showToast('No booking records to export yet!', 'info');
      return;
    }
    state.userTickets.forEach(t => {
      csvContent += `"${t.ticketId}","${t.eventTitle.replace(/"/g, '""')}","${t.attendeeName.replace(/"/g, '""')}","${t.attendeeEmail}","${t.tier}","$${t.totalPaid}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Srujal_Event_Management_Attendee_Roster_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('📁 CSV Attendee Roster downloaded successfully!');
  }
  // USER TICKETS WALLET RENDERER
  function renderUserTickets() {
    const container = document.getElementById('user-tickets-container');
    if (state.userTickets.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🎟️</div>
          <h3>Your Ticket Wallet is Empty</h3>
          <p>Explore upcoming events and book your passes to see digital QR tickets here.</p>
          <button class="btn btn-primary" id="wallet-explore-btn">Browse Events</button>
        </div>
      `;
      const browseBtn = document.getElementById('wallet-explore-btn');
      if (browseBtn) browseBtn.addEventListener('click', () => switchView('explorer'));
      return;
    }
    container.innerHTML = state.userTickets.map(t => `
      <div class="user-ticket-card">
        <div class="user-ticket-header">
          <div>
            <h3 class="user-ticket-title">${escapeHtml(t.eventTitle)}</h3>
            <span class="category-tag">${escapeHtml(t.category)}</span>
          </div>
          <span class="pass-status-badge">CONFIRMED</span>
        </div>
        <div class="user-ticket-body">
          <div>
            <span class="pass-label">Attendee</span>
            <strong>${escapeHtml(t.attendeeName)}</strong>
          </div>
          <div>
            <span class="pass-label">Pass Tier</span>
            <strong>${t.tier} (${t.qty}x)</strong>
          </div>
          <div>
            <span class="pass-label">Date & Time</span>
            <span>${escapeHtml(t.dateFormatted)}</span>
          </div>
          <div>
            <span class="pass-label">Seat Code</span>
            <strong>${escapeHtml(t.seatCode)}</strong>
          </div>
        </div>
        <div class="user-ticket-footer">
          <code>${t.ticketId}</code>
          <button class="btn btn-sm btn-secondary view-qr-pass-btn" data-id="${t.ticketId}">
            View QR Pass
          </button>
        </div>
      </div>
    `).join('');
    container.querySelectorAll('.view-qr-pass-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ticketId = btn.getAttribute('data-id');
        const ticket = state.userTickets.find(t => t.ticketId === ticketId);
        if (ticket) showDigitalTicketPass(ticket);
      });
    });
  }
  // EVENT LISTENERS BINDING
  function bindEvents() {
    // Navigation Routing (for any element with data-view attribute)
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (view) {
          switchView(view);
        }
      });
    });

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('srujalem_theme', next);
        showToast(`Theme switched to ${next} mode`);
      });
    }

    // Search Input
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (clearSearchBtn) clearSearchBtn.hidden = !e.target.value;
        renderEventsGrid();
      });
    }
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.hidden = true;
        renderEventsGrid();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderEventsGrid();
      });
    }

    // View Mode Grid/List
    const viewGrid = document.getElementById('view-mode-grid');
    const viewList = document.getElementById('view-mode-list');
    if (viewGrid) {
      viewGrid.addEventListener('click', () => {
        state.viewMode = 'grid';
        viewGrid.classList.add('active');
        if (viewList) viewList.classList.remove('active');
        renderEventsGrid();
      });
    }
    if (viewList) {
      viewList.addEventListener('click', () => {
        state.viewMode = 'list';
        viewList.classList.add('active');
        if (viewGrid) viewGrid.classList.remove('active');
        renderEventsGrid();
      });
    }

    // Category Filter Pills
    document.querySelectorAll('#category-pills-container .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#category-pills-container .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filterCategory = btn.getAttribute('data-category');
        renderEventsGrid();
      });
    });

    // Reset Filters Button
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.filterCategory = 'All';
        state.searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.hidden = true;
        document.querySelectorAll('#category-pills-container .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-category') === 'All');
        });
        renderEventsGrid();
      });
    }

    // Featured Hero Quick Book
    const featuredBtn = document.getElementById('featured-event-btn');
    if (featuredBtn) {
      featuredBtn.addEventListener('click', () => {
        openEventDetailModal('sem-evt-102');
      });
    }

    // Calendar Controls
    const calPrev = document.getElementById('cal-prev-btn');
    if (calPrev) {
      calPrev.addEventListener('click', () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
        renderCalendar();
      });
    }
    const calNext = document.getElementById('cal-next-btn');
    if (calNext) {
      calNext.addEventListener('click', () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
        renderCalendar();
      });
    }
    const calToday = document.getElementById('cal-today-btn');
    if (calToday) {
      calToday.addEventListener('click', () => {
        state.calendarDate = new Date();
        renderCalendar();
      });
    }

    // Modals Close Actions
    const closeDetail = document.getElementById('close-detail-modal-btn');
    if (closeDetail) closeDetail.addEventListener('click', () => { document.getElementById('detail-modal-backdrop').hidden = true; });

    const closeChk = document.getElementById('close-checkout-modal-btn');
    if (closeChk) closeChk.addEventListener('click', () => { document.getElementById('checkout-modal-backdrop').hidden = true; });

    const cancelChk = document.getElementById('cancel-checkout-btn');
    if (cancelChk) cancelChk.addEventListener('click', () => { document.getElementById('checkout-modal-backdrop').hidden = true; });

    const closePass = document.getElementById('close-pass-modal-btn');
    if (closePass) closePass.addEventListener('click', () => { document.getElementById('ticket-pass-modal-backdrop').hidden = true; });

    const closeHost = document.getElementById('close-host-modal-btn');
    if (closeHost) closeHost.addEventListener('click', () => { document.getElementById('host-modal-backdrop').hidden = true; });

    const cancelHost = document.getElementById('cancel-host-btn');
    if (cancelHost) cancelHost.addEventListener('click', () => { document.getElementById('host-modal-backdrop').hidden = true; });

    // Host Event Modal Triggers & Dynamic Price Calculator
    const openHostBtn = document.getElementById('open-host-modal-btn');
    if (openHostBtn) {
      openHostBtn.addEventListener('click', () => {
        document.getElementById('host-modal-backdrop').hidden = false;
        calculateAutoTicketPrice();
      });
    }
    const dashCreateBtn = document.getElementById('dash-create-btn');
    if (dashCreateBtn) {
      dashCreateBtn.addEventListener('click', () => {
        document.getElementById('host-modal-backdrop').hidden = false;
        calculateAutoTicketPrice();
      });
    }
    const heroHostBtn = document.getElementById('hero-host-btn');
    if (heroHostBtn) {
      heroHostBtn.addEventListener('click', () => {
        document.getElementById('host-modal-backdrop').hidden = false;
        calculateAutoTicketPrice();
      });
    }

    // Auto-calculate ticket price on category or capacity change
    const hostCatSelect = document.getElementById('host-category');
    const hostCapInput = document.getElementById('host-capacity');
    if (hostCatSelect) hostCatSelect.addEventListener('change', calculateAutoTicketPrice);
    if (hostCapInput) {
      hostCapInput.addEventListener('input', calculateAutoTicketPrice);
      hostCapInput.addEventListener('change', calculateAutoTicketPrice);
    }

    // Host Event Form Submit
    const hostForm = document.getElementById('host-event-form');
    if (hostForm) {
      hostForm.addEventListener('submit', handlePublishEvent);
    }

    // Quantity Stepper logic
    const qtyMinus = document.getElementById('qty-minus-btn');
    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        if (state.checkoutDraft && state.checkoutDraft.qty > 1) {
          state.checkoutDraft.qty--;
          updateModalPriceCalc();
        }
      });
    }
    const qtyPlus = document.getElementById('qty-plus-btn');
    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        if (state.checkoutDraft && state.checkoutDraft.qty < 10) {
          state.checkoutDraft.qty++;
          updateModalPriceCalc();
        }
      });
    }

    // Tier Radio Group Selection
    document.querySelectorAll('.tier-option').forEach(option => {
      option.addEventListener('click', () => {
        document.querySelectorAll('.tier-option').forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        const radio = option.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          if (state.checkoutDraft) state.checkoutDraft.tier = radio.value;
          updateModalPriceCalc();
        }
      });
    });

    // Proceed to Checkout
    const proceedBtn = document.getElementById('proceed-checkout-btn');
    if (proceedBtn) proceedBtn.addEventListener('click', openCheckoutModal);

    // Checkout Form Submit
    const chkForm = document.getElementById('checkout-form');
    if (chkForm) chkForm.addEventListener('submit', handleCheckoutSubmit);

    // Go to My Tickets Wallet from ticket pass modal
    const viewMyTicketsBtn = document.getElementById('view-my-tickets-btn');
    if (viewMyTicketsBtn) {
      viewMyTicketsBtn.addEventListener('click', () => {
        const passBackdrop = document.getElementById('ticket-pass-modal-backdrop');
        if (passBackdrop) passBackdrop.hidden = true;
        if (window.location.pathname.includes('events.html')) {
          switchView('tickets');
        } else {
          window.location.href = 'events.html?view=tickets';
        }
      });
    }

    // Download/Print Ticket Pass
    const dlPassBtn = document.getElementById('download-pass-btn');
    if (dlPassBtn) dlPassBtn.addEventListener('click', () => { window.print(); });

    // Dashboard Search Input
    const dashSearchTable = document.getElementById('dash-search-table');
    if (dashSearchTable) {
      dashSearchTable.addEventListener('input', (e) => {
        renderDashboardTable(e.target.value);
      });
    }

    // Export CSV Attendees
    const exportCsvBtn = document.getElementById('export-csv-btn');
    if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportAttendeeCsv);
  }

  // GLOBAL UI HELPERS (Scroll Reveal, Mobile Drawer, URL Params)
  function initGlobalUi() {

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
    if (mobileBtn && mobileDrawer && mobileBackdrop) {
      const toggleDrawer = (show) => {
        mobileDrawer.classList.toggle('open', show);
        mobileBackdrop.classList.toggle('open', show);
      };
      mobileBtn.addEventListener('click', () => toggleDrawer(!mobileDrawer.classList.contains('open')));
      mobileBackdrop.addEventListener('click', () => toggleDrawer(false));
    }

    // 3. Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });
      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('active'));
    }

    // 4. URL Parameter Handling (e.g. ?cat=Weddings or ?view=calendar)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    const viewParam = urlParams.get('view');
    if (catParam) {
      const pillMatch = Array.from(document.querySelectorAll('.pill-btn')).find(b => b.getAttribute('data-category')?.toLowerCase().includes(catParam.toLowerCase()));
      if (pillMatch) pillMatch.click();
    }
    if (viewParam && ['explorer', 'calendar', 'dashboard', 'tickets'].includes(viewParam)) {
      switchView(viewParam);
    }
  }

  // APP INITIALIZATION ENTRY POINT
  document.addEventListener('DOMContentLoaded', () => {
    initState();
    bindEvents();
    renderEventsGrid();
    initGlobalUi();
  });
})();