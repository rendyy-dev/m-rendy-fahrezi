/**
 * Components Loader - Embedded Version (No Fetch)
 * Langsung memasukkan konten komponen ke dalam halaman
 */

class ComponentLoader {
    constructor() {
        this.init();
    }

    init() {
        // Load navbar
        this.loadNavbar();
        
        // Load footer
        this.loadFooter();
        
        // Initialize after components are loaded
        setTimeout(() => {
            this.initializeComponents();
            this.preventHorizontalScroll();
        }, 100);
    }

    loadNavbar() {
        const navbarContainer = document.getElementById('navbar');
        if (!navbarContainer) return;

        // Navbar HTML langsung di-embed
        navbarContainer.innerHTML = `
            <nav class="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                <div class="glassmorphism">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between h-16">
                            <!-- Logo -->
                            <a href="index.html" class="flex items-center gap-2 group z-50">
                                <span class="text-2xl font-display font-bold">
                                    <span class="text-slate-100">Rendy</span>
                                    <span class="text-emerald-400">.</span>
                                </span>
                                <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform"></div>
                            </a>

                            <!-- Desktop Navigation -->
                            <div class="hidden md:flex items-center space-x-1">
                                <a href="index.html" class="nav-link" data-page="index">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                    </svg>
                                    <span>Beranda</span>
                                </a>
                                <a href="about.html" class="nav-link" data-page="about">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                    </svg>
                                    <span>Tentang</span>
                                </a>
                                <a href="portofolio.html" class="nav-link" data-page="portofolio">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                    </svg>
                                    <span>Portofolio</span>
                                </a>
                                <a href="services.html" class="nav-link" data-page="services">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span>Layanan</span>
                                </a>
                                <a href="contact.html" class="nav-link" data-page="contact">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span>Kontak</span>
                                </a>
                            </div>

                            <!-- Right Side - Contact Button (Desktop) -->
                            <div class="hidden md:flex items-center">
                                <a href="contact.html" class="btn-nav">
                                    <span>Hubungi Saya</span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                    </svg>
                                </a>
                            </div>

                            <!-- Mobile Menu Button - Hamburger Icon -->
                            <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-emerald-500/10 transition-colors focus:outline-none z-50" aria-label="Menu">
                                <svg id="hamburger-icon" class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu - Hidden by default -->
                <div id="mobile-menu" class="hidden md:hidden fixed inset-x-0 top-16 bg-slate-900/95 backdrop-blur-lg border-t border-b border-slate-800/50 shadow-xl" style="z-index: 40;">
                    <div class="max-w-7xl mx-auto px-4 py-4 space-y-1">
                        <a href="index.html" class="mobile-nav-link" data-page="index">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                            <span>Beranda</span>
                        </a>
                        <a href="about.html" class="mobile-nav-link" data-page="about">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                            <span>Tentang</span>
                        </a>
                        <a href="portofolio.html" class="mobile-nav-link" data-page="portofolio">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                            <span>Portofolio</span>
                        </a>
                        <a href="services.html" class="mobile-nav-link" data-page="services">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>Layanan</span>
                        </a>
                        <a href="contact.html" class="mobile-nav-link" data-page="contact">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>Kontak</span>
                        </a>
                    </div>
                </div>
            </nav>
            <div class="h-16"></div>
        `;

        // Inisialisasi mobile menu setelah navbar dimuat
        this.initMobileMenu();
    }

    loadFooter() {
        const footerContainer = document.getElementById('footer');
        if (!footerContainer) return;

        // Footer HTML dengan Tech Stack lengkap dan UI/UX Design dihapus
        footerContainer.innerHTML = `
            <footer class="relative border-t border-slate-800/30 bg-slate-950/50">
                <!-- Decorative Gradient Line -->
                <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
                
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <!-- Main Footer Content -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                        
                        <!-- Brand Column -->
                        <div class="lg:col-span-4">
                            <a href="index.html" class="inline-flex items-center gap-2 group mb-4">
                                <span class="text-2xl font-display font-bold">
                                    <span class="text-slate-100">Rendy</span>
                                    <span class="text-emerald-400">.</span>
                                </span>
                                <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform"></div>
                            </a>
                            <p class="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                                Digital Craftsman yang fokus menciptakan website modern, responsif, dan berkinerja tinggi. 
                                Siswa RPL yang terus berkembang dan belajar.
                            </p>
                            <div class="flex items-center gap-2 text-sm text-slate-500">
                                <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                <span>Tersedia untuk kolaborasi</span>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div class="lg:col-span-2">
                            <h3 class="font-display text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Navigasi</h3>
                            <ul class="space-y-2">
                                <li><a href="index.html" class="footer-link"><span>Beranda</span></a></li>
                                <li><a href="about.html" class="footer-link"><span>Tentang</span></a></li>
                                <li><a href="portofolio.html" class="footer-link"><span>Portofolio</span></a></li>
                                <li><a href="services.html" class="footer-link"><span>Layanan</span></a></li>
                                <li><a href="contact.html" class="footer-link"><span>Kontak</span></a></li>
                            </ul>
                        </div>
                        
                        <!-- Services (UI/UX Design dihapus) -->
                        <div class="lg:col-span-3">
                            <h3 class="font-display text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Layanan</h3>
                            <ul class="space-y-2">
                                <li><a href="services.html" class="footer-link"><span>Website Development</span></a></li>
                                <li><a href="services.html" class="footer-link"><span>Maintenance VPS</span></a></li>
                                <li><a href="services.html" class="footer-link"><span>Landing Page</span></a></li>
                                <li><a href="services.html" class="footer-link"><span>Web Application</span></a></li>
                                <li><a href="services.html" class="footer-link"><span>AI Tools Integration</span></a></li>
                            </ul>
                        </div>
                        
                        <!-- Tech Stack (Lengkap dari index.html) -->
                        <div class="lg:col-span-3">
                            <h3 class="font-display text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Tech Stack</h3>
                            <div class="flex flex-wrap gap-2">
                                <span class="tech-badge">HTML5</span>
                                <span class="tech-badge">CSS3</span>
                                <span class="tech-badge">JavaScript</span>
                                <span class="tech-badge">PHP</span>
                                <span class="tech-badge">React</span>
                                <span class="tech-badge">Next.js</span>
                                <span class="tech-badge">Laravel</span>
                                <span class="tech-badge">Tailwind CSS</span>
                                <span class="tech-badge">Bootstrap</span>
                                <span class="tech-badge">Ubuntu</span>
                                <span class="tech-badge">VPS Management</span>
                                <span class="tech-badge">AI Tools</span>
                                <span class="tech-badge">Git</span>
                                <span class="tech-badge">Github</span>
                                <span class="tech-badge">Apache</span>
                                <span class="tech-badge">MySQL</span>
                                <span class="tech-badge">Supabase</span>
                                <span class="tech-badge">VS Code</span>
                                <span class="tech-badge">XAMPP</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bottom Bar -->
                    <div class="mt-12 pt-8 border-t border-slate-800/30">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                            <!-- Copyright -->
                            <div class="text-slate-500 text-sm">
                                © 2024 Muhammad Rendy Fahrezi. All rights reserved.
                            </div>
                            
                            <!-- Social Links -->
                            <div class="flex items-center gap-3">
                                <!-- Instagram -->
                                <a href="https://www.instagram.com/renn.dyy02" class="social-btn group" target="_blank" rel="noopener noreferrer">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.89 4.89 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.89 4.89 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.89 4.89 0 011.153-1.772A4.89 4.89 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                                    </svg>
                                </a>
                                
                                <!-- GitHub -->
                                <a href="https://github.com/rendyy-dev" class="social-btn group" target="_blank" rel="noopener noreferrer">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                    </svg>
                                </a>
                                
                                <!-- LinkedIn -->
                                <a href="https://www.linkedin.com/in/m-rendy-fahrezi-7968b7364/" class="social-btn group" target="_blank" rel="noopener noreferrer">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                
                                <!-- TikTok -->
                                <a href="https://tiktok.com/@muhammadrendyfahrezi_" class="social-btn group" target="_blank" rel="noopener noreferrer">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    initMobileMenu() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        
        if (mobileMenuBtn && mobileMenu) {
            // Toggle menu on button click
            mobileMenuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.remove('hidden');
                    if (hamburgerIcon) {
                        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
                    }
                } else {
                    mobileMenu.classList.add('hidden');
                    if (hamburgerIcon) {
                        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                    }
                }
            });

            // Close menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    if (hamburgerIcon) {
                        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                    }
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    if (hamburgerIcon) {
                        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                    }
                }
            });

            // Close menu on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768) {
                    mobileMenu.classList.add('hidden');
                    if (hamburgerIcon) {
                        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
                    }
                }
            });
        }

        // Highlight active page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    initializeComponents() {
        // Initialize reveal animations
        this.initRevealAnimations();
        
        // Initialize navbar scroll effect
        this.initNavbarScroll();
    }

    initRevealAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    preventHorizontalScroll() {
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ComponentLoader());
} else {
    new ComponentLoader();
}