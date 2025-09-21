// Team Member Database
const teamMembers = {
    'wira-sukma': {
        id: 'wira-sukma',
        name: "Wira Sukma Saputra",
        role: "Chief Executive Officer",
        emoji: "👨‍💼",
        gradientFrom: "from-blue-600",
        gradientTo: "to-indigo-800",
        image: "assets/img/wira.jpg",
        description: "Visioner dan pemimpin yang berpengalaman lebih dari 8 tahun dalam industri teknologi. Memimpin tim dengan dedikasi tinggi untuk menciptakan solusi digital inovatif yang mengubah cara bisnis beroperasi di era digital.",
        detailedBio: "Wira memulai kariernya sebagai software engineer di startup teknologi terkemuka sebelum berkembang menjadi pemimpin yang menginspirasi. Dengan latar belakang teknis yang kuat dan visi bisnis yang tajam, dia telah berhasil membangun dan memimpin berbagai proyek transformasi digital yang berdampak signifikan bagi klien dari berbagai industri.",
        experience: "3+ Tahun",
        projects: "25+ Proyek",
        clients: "10+ Klien",
        teamSize: "15+ Developer",
        email: "wiralodrasaputra07@gmail.com",
        phone: "+62 812 1919 5308",
        linkedin: "www.linkedin.com/in/wira-sukma-saputra",
        skills: ["Strategic Leadership", "Digital Transformation", "Business Development", "Team Management", "Product Strategy", "Stakeholder Management", "Agile Methodology", "Technology Vision"],
        achievements: [
            "Memimpin transformasi digital untuk 30+ perusahaan multinasional dengan tingkat kepuasan klien 98%",
            "Meraih penghargaan 'CEO Terbaik dalam Inovasi Digital' dari Indonesia Tech Awards 2023",
            "Menciptakan framework manajemen proyek proprietary yang meningkatkan efisiensi tim hingga 40%",
            "Mengembangkan strategi ekspansi bisnis yang berhasil meningkatkan revenue perusahaan sebesar 200% dalam 2 tahun",
            "Membangun kultur kerja yang berfokus pada inovasi dan kolaborasi, menghasilkan tingkat retensi karyawan 95%"
        ],
        education: [
            "Bachelor of Computer Science - Universitas Kuningan (2025)",
            "Fullstack Designer Enthusiast | Mobile Development | Web Developer | Freelancer"
        ],
        certifications: [
            "Certified Scrum Master (CSM)",
            "AWS Solutions Architect Professional",
            "Project Management Professional (PMP)",
            "Bangkit Academy Graduate 2023 - Mobile Development",
            "Google Cloud Certified - Professional Cloud Architect",
            "Dicoding Certified - Fullstack Web Developer",
            "Dicoding Certified - Android Developer",
            "Docoding Certified - Flutter Developer",
            "Docoding Certified - UI UX Designer"
        ],
        quote: "Kepemimpinan sejati bukan tentang memiliki jawaban untuk semua pertanyaan, tetapi tentang memberdayakan tim untuk menemukan solusi terbaik bersama-sama dan menciptakan dampak positif yang berkelanjutan.",
        testimonials: [
            {
                text: "Wira adalah pemimpin visioner yang mampu menginspirasi tim untuk mencapai hasil luar biasa. Kemampuannya dalam mengubah ide menjadi realitas sungguh luar biasa.",
                author: "Sarah Chen, CTO TechCorp",
                role: "Chief Technology Officer"
            }
        ]
    },
    'muhammad-andi': {
        id: 'muhammad-andi',
        name: "Muhammad Andi Mubarok",
        role: "Fullstack Web Developer",
        emoji: "👨‍💻",
        gradientFrom: "from-purple-600",
        gradientTo: "to-violet-800",
        image: "assets/img/andi.jpg",
        description: "Developer berpengalaman dengan keahlian mendalam dalam pengembangan web fullstack. Spesialis dalam React, Node.js, dan teknologi cloud modern. Passionate dalam menciptakan aplikasi web yang scalable dan user-friendly.",
        detailedBio: "Andi adalah fullstack developer yang telah mengembangkan puluhan aplikasi web untuk berbagai klien dari startup hingga enterprise. Keahliannya mencakup frontend modern dengan React/Vue.js hingga backend robust dengan Node.js dan Python. Dia juga ahli dalam implementasi cloud infrastructure dan DevOps practices.",
        experience: "6+ Tahun",
        projects: "20+ Aplikasi",
        codeLines: "500K+ Lines",
        clients: "35+ Klien",
        email: "wiralodrasaputra07@gmail.com",
        phone: "+628 522 1694 067",
        github: "github.com/andimubarok",
        skills: ["React.js", "Node.js", "Vue.js", "Python", "MongoDB", "PostgreSQL", "AWS", "Docker", "GraphQL", "TypeScript", "Express.js", "Next.js", "Tailwind CSS", "RESTful APIs", "Agile Methodology", "CI/CD"],
        achievements: [
            "Mengembangkan 80+ aplikasi web dengan rating kepuasan pengguna rata-rata 4.8/5",
            "Menciptakan framework internal yang mengurangi waktu development hingga 50%",
            "Memimpin migrasi sistem legacy ke arsitektur microservices untuk 15+ perusahaan",
            "Meraih sertifikasi AWS Solutions Architect dan Google Cloud Professional",
            "Kontributor aktif pada 20+ open source projects dengan 5000+ GitHub stars"
        ],
        education: [
            "Bachelor of Computer Science - Universitas Kuningan (2025)",
            "Full Stack Web Development Certificate - FreeCodeCamp (2018)"
        ],
        certifications: [
            "AWS Certified Solutions Architect",
            "Google Cloud Professional Developer",
            "MongoDB Certified Developer",
            "Certified Kubernetes Administrator",
            "React.js Certified Developer",
            "Node.js Certified Developer",
            "Python for Data Science and AI - Coursera",
            "Agile Project Management - PMI",
            "Fullstack Web Development - Udacity",
            "DevOps Fundamentals - Linux Foundation",
            "GraphQL Certified Developer"
        ],
        quote: "Code is poetry written in logic. Setiap baris yang saya tulis adalah cerminan dari solusi yang elegant dan efisien untuk masalah yang kompleks.",
        testimonials: [
            {
                text: "Andi adalah developer yang luar biasa. Kualitas kode-nya sangat tinggi dan selalu deliver tepat waktu. Dia adalah aset berharga untuk setiap tim development.",
                author: "James Wilson, Lead Developer",
                role: "Senior Software Engineer"
            }
        ]
    },
    'gilang-gumelar': {
        id: 'gilang-gumelar',
        name: "Gilang Gumelar",
        role: "Android Developer",
        emoji: "📱",
        gradientFrom: "from-green-600",
        gradientTo: "to-emerald-800",
        image: "assets/img/gilang.jpg",
        description: "Android developer expert dengan pengalaman mengembangkan aplikasi mobile yang digunakan oleh jutaan users. Spesialis dalam Kotlin, Java, dan arsitektur Android modern dengan fokus pada performance optimization.",
        detailedBio: "Gilang telah mengembangkan lebih dari 60 aplikasi Android yang tersedia di Google Play Store dengan total download lebih dari 10 juta. Keahliannya mencakup native Android development, cross-platform solutions, dan mobile app architecture. Dia juga berpengalaman dalam implementasi AI/ML dalam aplikasi mobile.",
        experience: "3+ Tahun",
        projects: "20+ Apps",
        downloads: "10M+ Downloads",
        playStoreApps: "25+ Apps",
        email: "gilang@company.com",
        phone: "+628 522 1694 067",
        github: "github.com/Gilangg13",
        linkedin: "https://www.linkedin.com/in/gilang-gumelar-96b35621a/",
        skills: ["Kotlin", "Java", "Android SDK", "Flutter", "React Native", "Firebase", "Room Database", "Retrofit", "Dagger/Hilt", "Coroutines", "MVVM", "Clean Architecture"],
        achievements: [
            "Mengembangkan aplikasi e-commerce yang mencapai 5 juta downloads dalam 6 bulan pertama",
            "Meraih Google Play Awards untuk kategori 'Best App for Good' tahun 2023",
            "Menciptakan library Android yang digunakan oleh 100+ developers dengan 8000+ GitHub stars",
            "Memimpin workshop Android development untuk 500+ peserta di berbagai universitas",
            "Optimasi performa aplikasi yang berhasil mengurangi crash rate hingga 0.01%"
        ],
        education: [
            "Bachelor of Computer Science - Universitas Kuningan (2025)",
            "Android Developer Bangkit Academy (2024) - Udacity (2024)"
        ],
        certifications: [
            "Google Associate Android Developer",
            "Firebase Certified",
            "Kotlin Certified Developer",
            "Flutter Certified Developer",
            "React Native Certified Developer",
            "Android Security Best Practices",
            "Android Performance Optimization"
        ],
        quote: "Mobile apps are the gateway to the digital world. Setiap aplikasi yang saya buat adalah jembatan yang menghubungkan teknologi dengan kehidupan sehari-hari pengguna.",
        testimonials: [
            {
                text: "Gilang adalah Android developer terbaik yang pernah bekerja dengan kami. Aplikasi yang dia kembangkan selalu berkualitas tinggi dan user experience yang luar biasa.",
                author: "Maria Santos, Product Manager",
                role: "Senior Product Manager"
            }
        ]
    },
    'alya-naomi': {
        id: 'alya-naomi',
        name: "Alya Naomi",
        role: "Game Developer",
        emoji: "🎮",
        gradientFrom: "from-pink-600",
        gradientTo: "to-rose-800",
        image: "assets/img/alya.jpg",
        description: "Creative game developer dengan passion dalam menciptakan experience gaming yang memorable. Expert dalam Unity, Unreal Engine, dan game design principles. Spesialis dalam mobile gaming dan interactive entertainment.",
        detailedBio: "Alya adalah game developer yang telah menciptakan lebih dari 30 game untuk berbagai platform. Keahliannya mencakup game programming, visual scripting, 3D modeling, dan game monetization strategies. Dia juga berpengalaman dalam AR/VR development dan game analytics untuk optimasi user engagement.",
        experience: "5+ Tahun",
        projects: "35+ Games",
        players: "2M+ Players",
        platforms: "8+ Platforms",
        email: "alya@company.com",
        phone: "+62 838-2391-3610",
        github: "github.com/AlyaNaomi",
        linkedin: "https://www.linkedin.com/in/alya-naomi-401ab5291/",
        skills: ["Unity 3D", "Unreal Engine", "C#", "JavaScript", "Blender", "Maya", "Photoshop", "Game Analytics", "Monetization", "AR/VR", "Mobile Gaming", "UI/UX Design"],
        achievements: [
            "Mengembangkan mobile game yang mencapai #1 di App Store kategori Adventure selama 3 minggu",
            "Meraih Independent Games Festival Award untuk kategori 'Excellence in Design' tahun 2023",
            "Menciptakan VR experience yang digunakan dalam museum internasional di 5 negara",
            "Game yang dikembangkan telah dimainkan oleh lebih dari 2 juta players worldwide",
            "Memimpin game jam yang menghasilkan 50+ prototype game inovatif"
        ],
        education: [
            "Bachelor of Computer Science - Universitas Kuningan (2025)",
            "Game Design Certificate - School of Game Design (2024)"
        ],
        certifications: [
            "Unity Certified Developer",
            "Unreal Engine Certified",
            "Google Play Games Services",
            "ARCore Certified Developer",
            "Apple Game Center Certified Developer",
            "Game Monetization Strategies",
            "Game Analytics Fundamentals",
            "Game UX/UI Design",
            "Game Development Best Practices"
        ],
        quote: "Games are not just entertainment, they're emotional experiences that can inspire, educate, and bring people together across the globe.",
        testimonials: [
            {
                text: "Alya memiliki visi kreatif yang luar biasa dalam game development. Setiap game yang dia buat selalu memberikan experience yang unik dan engaging bagi players.",
                author: "David Kim, Game Publisher",
                role: "Senior Game Producer"
            }
        ]
    }
};

// URL parameter functions
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Load team member data
function loadTeamMember() {
    const memberId = getUrlParameter('member');
    const member = teamMembers[memberId];
    
    const loadingContent = document.getElementById('loadingContent');
    const errorContent = document.getElementById('errorContent');
    const teamContent = document.getElementById('teamContent');
    
    if (!member) {
        // Show error state
        loadingContent.classList.add('hidden');
        errorContent.classList.remove('hidden');
        teamContent.classList.add('hidden');
        
        // Update page title
        document.getElementById('pageTitle').textContent = 'Team Member Not Found - TechOP';
        return;
    }
    
    // Update page title and meta
    document.getElementById('pageTitle').textContent = `${member.name} - ${member.role} - TechOP`;
    
    // Generate content
    const contentHTML = generateTeamMemberHTML(member);
    teamContent.innerHTML = contentHTML;
    
    // Show content and hide loading
    loadingContent.classList.add('hidden');
    errorContent.classList.add('hidden');
    teamContent.classList.remove('hidden');
}

// Generate team member HTML content
function generateTeamMemberHTML(member) {
    return `
        <!-- Animated Header Section with Horizontal Layout -->
        <div class="animated-bg px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-16 text-white relative overflow-hidden modal-header">
            <!-- Floating Elements -->
            <div class="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
            <div class="absolute top-8 right-16 w-8 h-8 bg-white/20 rounded-full"></div>
            <div class="absolute bottom-4 left-4 w-10 h-10 bg-white/15 rounded-full"></div>
            <div class="absolute bottom-8 left-20 w-6 h-6 bg-white/25 rounded-full"></div>
            
            <div class="horizontal-content max-w-7xl mx-auto relative z-10">
                <!-- Profile Image -->
                <div class="flex-shrink-0 text-center lg:text-left">
                    <div class="relative inline-block">
                        <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl ring-4 sm:ring-6 md:ring-8 ring-white/30 mx-auto lg:mx-0">
                            <img src="${member.image}" alt="${member.name}" class="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 glass-effect rounded-full flex items-center justify-center">
                            <span class="text-lg sm:text-xl md:text-2xl lg:text-3xl">🌟</span>
                        </div>
                    </div>
                </div>
                
                <!-- Profile Info -->
                <div class="text-center lg:text-left space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                    <div>
                        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">${member.name}</h1>
                        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 font-light">${member.role}</p>
                    </div>
                    
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        <div class="stat-card glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center backdrop-blur-md">
                            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">${member.experience}</div>
                            <div class="text-xs sm:text-sm text-white/80">Experience</div>
                        </div>
                        <div class="stat-card glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center backdrop-blur-md">
                            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">${member.projects}</div>
                            <div class="text-xs sm:text-sm text-white/80">Projects</div>
                        </div>
                        <div class="stat-card glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center backdrop-blur-md">
                            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">${member.clients || member.downloads || member.playStoreApps || member.players}</div>
                            <div class="text-xs sm:text-sm text-white/80">${member.clients ? "Clients" : member.downloads ? "Downloads" : member.playStoreApps ? "Apps" : "Players"}</div>
                        </div>
                        <div class="stat-card glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center backdrop-blur-md">
                            <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">${member.teamSize || member.codeLines || member.platforms}</div>
                            <div class="text-xs sm:text-sm text-white/80">${member.teamSize ? "Team Size" : member.codeLines ? "Code Lines" : "Platforms"}</div>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button onclick="openShareModal()" class="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center">
                            <i class="fas fa-share-alt mr-2"></i>
                            Share Profile
                        </button>
                        <a href="index.html#team" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center">
                            <i class="fas fa-arrow-left mr-2"></i>
                            Back to Team
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Section -->
        <div class="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 space-y-8 sm:space-y-10 md:space-y-12 max-w-7xl mx-auto">
            
            <!-- Inspirational Quote -->
            <div class="detail-item">
                <div class="testimonial-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full flex items-center justify-center shadow-2xl">
                        <span class="text-white text-lg sm:text-xl md:text-2xl">"</span>
                    </div>
                    <div class="pt-8 sm:pt-10">
                        <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 italic leading-relaxed mb-4 sm:mb-6 font-light">${member.quote}</p>
                        <div class="w-16 sm:w-24 h-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            <!-- Two Column Layout -->
            <div class="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                
                <!-- Left Column -->
                <div class="space-y-8 sm:space-y-10">
                    
                    <!-- About Section -->
                    <div class="detail-item">
                        <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div class="w-2 sm:w-3 h-8 sm:h-12 bg-gradient-to-b ${member.gradientFrom} ${member.gradientTo} rounded-full"></div>
                            <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">About Me</h2>
                        </div>
                        <div class="space-y-4 sm:space-y-6">
                            <p class="text-gray-600 leading-relaxed text-sm sm:text-base">${member.description}</p>
                            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <p class="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">${member.detailedBio}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Education Section -->
                    <div class="detail-item">
                        <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div class="w-2 sm:w-3 h-8 sm:h-12 bg-gradient-to-b ${member.gradientFrom} ${member.gradientTo} rounded-full"></div>
                            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Education</h3>
                        </div>
                        <div class="space-y-3 sm:space-y-4">
                            ${member.education.map(edu => `
                                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                    <div class="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p class="text-gray-800 font-semibold leading-relaxed text-xs sm:text-sm md:text-base">${edu}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Certifications Section -->
                    <div class="detail-item">
                        <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div class="w-2 sm:w-3 h-8 sm:h-12 bg-gradient-to-b ${member.gradientFrom} ${member.gradientTo} rounded-full"></div>
                            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Certifications</h3>
                        </div>
                        <div class="grid gap-3 sm:gap-4">
                            ${member.certifications.map(cert => `
                                <div class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                                    <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                                        ✓
                                    </div>
                                    <span class="text-gray-700 font-medium text-xs sm:text-sm md:text-base">${cert}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="space-y-8 sm:space-y-10">
                    
                    <!-- Skills Section -->
                    <div class="detail-item">
                        <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div class="w-2 sm:w-3 h-8 sm:h-12 bg-gradient-to-b ${member.gradientFrom} ${member.gradientTo} rounded-full"></div>
                            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Technical Skills</h3>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            ${member.skills.map(skill => `
                                <div class="skill-badge bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                    <span class="font-semibold text-xs sm:text-sm">${skill}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Achievements Section -->
                    <div class="detail-item">
                        <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div class="w-2 sm:w-3 h-8 sm:h-12 bg-gradient-to-b ${member.gradientFrom} ${member.gradientTo} rounded-full"></div>
                            <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Key Achievements</h3>
                        </div>
                        <div class="space-y-4 sm:space-y-6">
                            ${member.achievements.map((achievement, index) => `
                                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0 shadow-lg">
                                        ${index + 1}
                                    </div>
                                    <p class="text-gray-700 leading-relaxed flex-1 text-xs sm:text-sm md:text-base">${achievement}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonials Section -->
            <div class="detail-item">
                <div class="text-center mb-8 sm:mb-10">
                    <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Others Say</h3>
                    <div class="w-16 sm:w-24 h-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} mx-auto rounded-full"></div>
                </div>
                <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
                    ${member.testimonials.map(testimonial => `
                        <div class="testimonial-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                            <div class="mb-4 sm:mb-6">
                                <div class="flex items-center gap-1 mb-3 sm:mb-4">
                                    ${'⭐'.repeat(5)}
                                </div>
                                <p class="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">"${testimonial.text}"</p>
                            </div>
                            <div class="flex items-center gap-3 sm:gap-4">
                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                    ${testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p class="font-semibold text-gray-900 text-sm sm:text-base">${testimonial.author}</p>
                                    <p class="text-gray-600 text-xs sm:text-sm">${testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Contact Section -->
            <div class="detail-item">
                <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/5 rounded-full -mr-10 sm:-mr-16 -mt-10 sm:-mt-16"></div>
                    <div class="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -ml-8 sm:-ml-12 -mb-8 sm:-mb-12"></div>
                    
                    <div class="relative z-10">
                        <div class="text-center mb-8 sm:mb-10">
                            <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Let's Connect</h3>
                            <p class="text-gray-300 text-sm sm:text-base md:text-lg">Ready to start your next project together?</p>
                        </div>
                        
                        <div class="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                            <div class="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 backdrop-blur-md cursor-pointer">
                                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
                                    <i class="fas fa-envelope text-white text-lg sm:text-xl"></i>
                                </div>
                                <p class="text-xs sm:text-sm text-gray-300 mb-2">Email</p>
                                <p class="text-white font-semibold text-xs sm:text-sm break-all">${member.email}</p>
                            </div>
                            
                            <div class="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 backdrop-blur-md cursor-pointer">
                                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
                                    <i class="fas fa-phone text-white text-lg sm:text-xl"></i>
                                </div>
                                <p class="text-xs sm:text-sm text-gray-300 mb-2">Phone</p>
                                <p class="text-white font-semibold text-xs sm:text-sm">${member.phone}</p>
                            </div>
                            
                            <div class="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 backdrop-blur-md cursor-pointer">
                                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
                                    <i class="fas fa-globe text-white text-lg sm:text-xl"></i>
                                </div>
                                <p class="text-xs sm:text-sm text-gray-300 mb-2">Profile</p>
                                <p class="text-white font-semibold text-xs sm:text-sm">${member.linkedin || member.github || 'Available on request'}</p>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <a href="mailto:${member.email}" class="bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} hover:scale-110 text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-2xl transform transition-all duration-300 text-sm sm:text-base inline-flex items-center">
                                <i class="fas fa-paper-plane mr-2"></i>
                                Start Collaboration ✨
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Related Team Members -->
            <div class="detail-item">
                <div class="text-center mb-8 sm:mb-10">
                    <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Other Team Members</h3>
                    <div class="w-16 sm:w-24 h-1 bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} mx-auto rounded-full"></div>
                </div>
                <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
                    ${getOtherTeamMembers(member.id).map(otherMember => `
                        <a href="team-detail.html?member=${otherMember.id}" class="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="text-center">
                                <div class="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-gray-200 transition-all duration-300">
                                    <img src="${otherMember.image}" alt="${otherMember.name}" class="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                                </div>
                                <h4 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">${otherMember.name}</h4>
                                <p class="text-gray-600 text-sm mb-4">${otherMember.role}</p>
                                <div class="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                                    View Profile
                                    <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Get other team members (excluding current one)
function getOtherTeamMembers(currentId) {
    return Object.values(teamMembers).filter(member => member.id !== currentId).slice(0, 3);
}

// Social sharing functions
function openShareModal() {
    document.getElementById('shareModal').classList.remove('hidden');
}

function closeShareModal() {
    document.getElementById('shareModal').classList.add('hidden');
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this team member profile on TechOP!`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
}

function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this team member profile on TechOP!`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400');
}

function shareToLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-0 transition-transform duration-300';
        notification.innerHTML = '<i class="fas fa-check mr-2"></i>Link copied to clipboard!';
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
        
        closeShareModal();
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        closeShareModal();
    });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadTeamMember();
});

// Handle escape key for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeShareModal();
    }
});

// Close modal when clicking outside
document.getElementById('shareModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeShareModal();
    }
});