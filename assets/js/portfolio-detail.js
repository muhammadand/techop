// Portfolio Database dan Functionality
const portfolioProjects = {
    'website-korporat': {
        title: 'Website Korporat',
        subtitle: 'Platform website korporat yang elegan dengan desain modern dan responsif untuk meningkatkan brand awareness perusahaan',
        category: 'Website Development',
        categoryType: 'website',
        image: 'assets/img/web 6.png',
        images: [
            'assets/img/web 6.png',
            'assets/img/web 1.png',
            'assets/img/web 2.png'
        ],
        description: `
            <p>Website korporat yang dirancang khusus untuk meningkatkan brand awareness dan kredibilitas perusahaan. Platform ini dibangun dengan teknologi modern dan menampilkan desain yang elegan serta profesional.</p>
            <p>Fitur-fitur unggulan meliputi sistem manajemen konten yang mudah digunakan, optimasi SEO yang komprehensif, dan desain responsif yang sempurna di semua perangkat.</p>
            <p>Website ini telah terbukti meningkatkan engagement pengunjung hingga 60% dan conversion rate hingga 35% dibandingkan website sebelumnya.</p>
        `,
        technologies: [
            { name: 'HTML5', color: 'bg-orange-100 text-orange-600', icon: 'fab fa-html5' },
            { name: 'CSS3', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-css3-alt' },
            { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-600', icon: 'fab fa-js-square' },
            { name: 'PHP', color: 'bg-purple-100 text-purple-600', icon: 'fab fa-php' },
            { name: 'MySQL', color: 'bg-blue-100 text-blue-600', icon: 'fas fa-database' },
            { name: 'Bootstrap', color: 'bg-purple-100 text-purple-600', icon: 'fab fa-bootstrap' }
        ],
        features: [
            { icon: 'fas fa-mobile-alt', title: 'Responsive Design', description: 'Tampilan optimal di semua perangkat dan ukuran layar' },
            { icon: 'fas fa-search', title: 'SEO Optimized', description: 'Optimasi mesin pencari untuk ranking yang lebih baik' },
            { icon: 'fas fa-tachometer-alt', title: 'Fast Loading', description: 'Kecepatan loading yang optimal dengan optimasi gambar dan kode' },
            { icon: 'fas fa-shield-alt', title: 'Security', description: 'Keamanan tingkat tinggi dengan enkripsi SSL dan proteksi malware' },
            { icon: 'fas fa-edit', title: 'Easy Management', description: 'Panel admin yang user-friendly untuk mengelola konten' },
            { icon: 'fas fa-chart-line', title: 'Analytics', description: 'Integrasi Google Analytics untuk tracking performa website' }
        ],
        projectInfo: {
            client: 'PT. Teknologi Maju',
            duration: '3 Bulan',
            team: '4 Orang',
            platform: 'Web Browser',
            status: 'Completed'
        },
        liveDemo: 'https://demo-website-korporat.techop.id',
        sourceCode: 'https://github.com/techop/website-korporat'
    },
    'bougainville-app': {
        title: 'Bougainville Classification App',
        subtitle: 'Aplikasi mobile untuk klasifikasi tanaman Bougainville menggunakan teknologi AI dan machine learning',
        category: 'Mobile Application',
        categoryType: 'mobile',
        image: 'assets/img/klasifikasi_bougenville.png',
        images: [
            'assets/img/klasifikasi_bougenville.png',
            'assets/img/hp.png'
        ],
        description: `
            <p>Aplikasi mobile inovatif yang menggunakan teknologi kecerdasan buatan untuk mengklasifikasikan berbagai jenis tanaman Bougainville. Aplikasi ini dirancang untuk membantu petani, peneliti, dan pecinta tanaman dalam mengidentifikasi varietas Bougainville dengan akurasi tinggi.</p>
            <p>Dengan menggunakan teknologi computer vision dan deep learning, aplikasi ini dapat menganalisis foto tanaman dan memberikan informasi detail tentang jenis, karakteristik, dan cara perawatan tanaman tersebut.</p>
            <p>Aplikasi ini telah diuji dengan dataset lebih dari 10.000 gambar dan mencapai tingkat akurasi 95% dalam klasifikasi.</p>
        `,
        technologies: [
            { name: 'Flutter', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-flutter' },
            { name: 'Dart', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-dart' },
            { name: 'TensorFlow', color: 'bg-orange-100 text-orange-600', icon: 'fas fa-brain' },
            { name: 'Python', color: 'bg-yellow-100 text-yellow-600', icon: 'fab fa-python' },
            { name: 'Firebase', color: 'bg-orange-100 text-orange-600', icon: 'fas fa-fire' },
            { name: 'Cloud ML', color: 'bg-green-100 text-green-600', icon: 'fas fa-cloud' }
        ],
        features: [
            { icon: 'fas fa-camera', title: 'AI Image Recognition', description: 'Teknologi AI untuk mengenali jenis tanaman dari foto' },
            { icon: 'fas fa-chart-pie', title: 'Accuracy 95%', description: 'Tingkat akurasi klasifikasi mencapai 95%' },
            { icon: 'fas fa-mobile-alt', title: 'Offline Mode', description: 'Dapat berfungsi tanpa koneksi internet' },
            { icon: 'fas fa-book', title: 'Plant Guide', description: 'Panduan lengkap perawatan untuk setiap jenis tanaman' },
            { icon: 'fas fa-history', title: 'Scan History', description: 'Riwayat semua scan yang pernah dilakukan' },
            { icon: 'fas fa-share-alt', title: 'Share Results', description: 'Bagikan hasil identifikasi ke media sosial' }
        ],
        projectInfo: {
            client: 'Universitas Pertanian',
            duration: '6 Bulan',
            team: '5 Orang',
            platform: 'Android & iOS',
            status: 'Completed'
        },
        liveDemo: 'https://play.google.com/store/apps/details?id=com.techop.bougainville',
        sourceCode: 'https://github.com/techop/bougainville-classifier'
    },
    'tomato-prediction': {
        title: 'Tomato Classification System',
        subtitle: 'Sistem klasifikasi tomat berbasis AI untuk membantu petani mengidentifikasi kualitas dan jenis tomat',
        category: 'Mobile Application',
        categoryType: 'mobile',
        image: 'assets/img/klasifikasi_tomat.png',
        images: [
            'assets/img/klasifikasi_tomat.png',
            'assets/img/hp.png'
        ],
        description: `
            <p>Sistem klasifikasi tomat yang menggunakan teknologi machine learning untuk membantu petani dan pedagang dalam menentukan kualitas, tingkat kematangan, dan jenis tomat dengan akurasi tinggi.</p>
            <p>Aplikasi ini dilengkapi dengan algoritma computer vision yang dapat menganalisis warna, tekstur, dan bentuk tomat untuk memberikan informasi yang akurat tentang kondisi buah tersebut.</p>
            <p>Fitur prediksi harga pasar juga terintegrasi untuk membantu petani menentukan waktu panen yang optimal.</p>
        `,
        technologies: [
            { name: 'Flutter', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-flutter' },
            { name: 'TensorFlow Lite', color: 'bg-orange-100 text-orange-600', icon: 'fas fa-brain' },
            { name: 'OpenCV', color: 'bg-green-100 text-green-600', icon: 'fas fa-eye' },
            { name: 'Python', color: 'bg-yellow-100 text-yellow-600', icon: 'fab fa-python' },
            { name: 'Firebase', color: 'bg-orange-100 text-orange-600', icon: 'fas fa-fire' },
            { name: 'SQLite', color: 'bg-blue-100 text-blue-600', icon: 'fas fa-database' }
        ],
        features: [
            { icon: 'fas fa-seedling', title: 'Quality Detection', description: 'Deteksi kualitas tomat berdasarkan tampilan visual' },
            { icon: 'fas fa-clock', title: 'Ripeness Level', description: 'Menentukan tingkat kematangan tomat' },
            { icon: 'fas fa-chart-line', title: 'Price Prediction', description: 'Prediksi harga pasar berdasarkan data historis' },
            { icon: 'fas fa-leaf', title: 'Disease Detection', description: 'Deteksi penyakit pada tanaman tomat' },
            { icon: 'fas fa-calendar', title: 'Harvest Schedule', description: 'Penjadwalan waktu panen optimal' },
            { icon: 'fas fa-map-marker-alt', title: 'Farm Location', description: 'Pencatatan lokasi lahan pertanian' }
        ],
        projectInfo: {
            client: 'Koperasi Petani Nusantara',
            duration: '4 Bulan',
            team: '4 Orang',
            platform: 'Android',
            status: 'Completed'
        },
        liveDemo: 'https://demo-tomato-classifier.techop.id',
        sourceCode: 'https://github.com/techop/tomato-classification'
    },
    'planting-time-prediction': {
        title: 'Smart Farming - Planting Time Prediction',
        subtitle: 'Aplikasi prediksi waktu tanam optimal menggunakan data cuaca dan kondisi tanah',
        category: 'Mobile Application', 
        categoryType: 'mobile',
        image: 'assets/img/prediksi_waktu_tanam.png',
        images: [
            'assets/img/prediksi_waktu_tanam.png',
            'assets/img/hp.png'
        ],
        description: `
            <p>Aplikasi pintar yang membantu petani menentukan waktu tanam yang optimal berdasarkan analisis data cuaca, kondisi tanah, dan pola musim. Menggunakan algoritma machine learning untuk memberikan rekomendasi yang akurat.</p>
            <p>Sistem ini mengintegrasikan data dari berbagai sumber termasuk stasiun cuaca, sensor tanah, dan data historis pertanian untuk memberikan prediksi yang tepat.</p>
            <p>Dengan menggunakan aplikasi ini, petani dapat meningkatkan hasil panen hingga 40% dan mengurangi risiko gagal panen akibat cuaca yang tidak mendukung.</p>
        `,
        technologies: [
            { name: 'Flutter', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-flutter' },
            { name: 'Machine Learning', color: 'bg-green-100 text-green-600', icon: 'fas fa-brain' },
            { name: 'Weather API', color: 'bg-blue-100 text-blue-600', icon: 'fas fa-cloud-sun' },
            { name: 'IoT Sensors', color: 'bg-purple-100 text-purple-600', icon: 'fas fa-microchip' },
            { name: 'Firebase', color: 'bg-orange-100 text-orange-600', icon: 'fas fa-fire' },
            { name: 'Google Maps', color: 'bg-red-100 text-red-600', icon: 'fas fa-map' }
        ],
        features: [
            { icon: 'fas fa-cloud-sun', title: 'Weather Analysis', description: 'Analisis data cuaca real-time dan prediksi jangka panjang' },
            { icon: 'fas fa-thermometer-half', title: 'Soil Monitoring', description: 'Monitoring kondisi tanah seperti kelembaban dan pH' },
            { icon: 'fas fa-calendar-check', title: 'Planting Schedule', description: 'Rekomendasi jadwal tanam yang optimal' },
            { icon: 'fas fa-bell', title: 'Smart Alerts', description: 'Notifikasi pintar untuk aktivitas pertanian' },
            { icon: 'fas fa-chart-area', title: 'Yield Prediction', description: 'Prediksi hasil panen berdasarkan kondisi optimal' },
            { icon: 'fas fa-users', title: 'Community', description: 'Komunitas petani untuk berbagi pengalaman' }
        ],
        projectInfo: {
            client: 'Dinas Pertanian Provinsi',
            duration: '8 Bulan',
            team: '6 Orang',
            platform: 'Android & iOS',
            status: 'Completed'
        },
        liveDemo: 'https://smart-farming.techop.id',
        sourceCode: 'https://github.com/techop/smart-farming'
    },
    'hospital-management': {
        title: 'Hospital Management System',
        subtitle: 'Sistem manajemen rumah sakit terintegrasi untuk meningkatkan efisiensi pelayanan kesehatan',
        category: 'UI/UX Design',
        categoryType: 'uiux',
        image: 'assets/img/rumah_sakit.png',
        images: [
            'assets/img/rumah_sakit.png'
        ],
        description: `
            <p>Desain sistem manajemen rumah sakit yang komprehensif untuk meningkatkan efisiensi operasional dan kualitas pelayanan kesehatan. Sistem ini mencakup manajemen pasien, jadwal dokter, rekam medis, dan billing.</p>
            <p>User interface dirancang dengan pendekatan human-centered design untuk memastikan kemudahan penggunaan bagi staff medis dan pasien.</p>
            <p>Sistem ini telah diimplementasikan di 5 rumah sakit dan terbukti mengurangi waktu tunggu pasien hingga 50%.</p>
        `,
        technologies: [
            { name: 'Figma', color: 'bg-purple-100 text-purple-600', icon: 'fab fa-figma' },
            { name: 'Adobe XD', color: 'bg-pink-100 text-pink-600', icon: 'fab fa-adobe' },
            { name: 'Sketch', color: 'bg-orange-100 text-orange-600', icon: 'fab fa-sketch' },
            { name: 'Principle', color: 'bg-blue-100 text-blue-600', icon: 'fas fa-magic' },
            { name: 'InVision', color: 'bg-red-100 text-red-600', icon: 'fas fa-eye' },
            { name: 'Zeplin', color: 'bg-yellow-100 text-yellow-600', icon: 'fas fa-ruler' }
        ],
        features: [
            { icon: 'fas fa-user-md', title: 'Doctor Dashboard', description: 'Dashboard khusus untuk dokter dengan akses cepat ke data pasien' },
            { icon: 'fas fa-calendar-alt', title: 'Appointment System', description: 'Sistem penjadwalan janji temu yang efisien' },
            { icon: 'fas fa-file-medical', title: 'Medical Records', description: 'Manajemen rekam medis digital yang aman' },
            { icon: 'fas fa-pills', title: 'Pharmacy Integration', description: 'Integrasi dengan sistem farmasi rumah sakit' },
            { icon: 'fas fa-receipt', title: 'Billing System', description: 'Sistem billing terintegrasi dengan asuransi' },
            { icon: 'fas fa-chart-bar', title: 'Analytics', description: 'Dashboard analitik untuk monitoring performa' }
        ],
        projectInfo: {
            client: 'RS. Teknologi Medis',
            duration: '5 Bulan',
            team: '3 Orang',
            platform: 'Web & Mobile',
            status: 'Completed'
        },
        liveDemo: 'https://demo-hospital-ui.techop.id',
        sourceCode: 'https://github.com/techop/hospital-ui-design'
    },
    'mindshield-security': {
        title: 'MindShield Security System',
        subtitle: 'Sistem keamanan berbasis AI untuk proteksi mental health dan cybersecurity',
        category: 'UI/UX Design',
        categoryType: 'uiux', 
        image: 'assets/img/Mindshield.png',
        images: [
            'assets/img/Mindshield.png'
        ],
        description: `
            <p>Desain sistem keamanan inovatif yang menggabungkan teknologi AI untuk melindungi kesehatan mental pengguna dari konten berbahaya di internet serta memberikan proteksi cybersecurity yang komprehensif.</p>
            <p>Interface dirancang dengan pendekatan minimalis dan calming design untuk mengurangi stress pengguna sambil tetap memberikan kontrol penuh atas keamanan digital mereka.</p>
            <p>Sistem ini telah membantu lebih dari 10,000 pengguna meningkatkan kesehatan mental digital mereka.</p>
        `,
        technologies: [
            { name: 'Figma', color: 'bg-purple-100 text-purple-600', icon: 'fab fa-figma' },
            { name: 'React', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-react' },
            { name: 'Node.js', color: 'bg-green-100 text-green-600', icon: 'fab fa-node-js' },
            { name: 'AI/ML', color: 'bg-purple-100 text-purple-600', icon: 'fas fa-brain' },
            { name: 'MongoDB', color: 'bg-green-100 text-green-600', icon: 'fas fa-database' },
            { name: 'WebGL', color: 'bg-red-100 text-red-600', icon: 'fas fa-cube' }
        ],
        features: [
            { icon: 'fas fa-shield-alt', title: 'AI Protection', description: 'Proteksi AI untuk konten berbahaya dan cyberthreat' },
            { icon: 'fas fa-brain', title: 'Mental Health', description: 'Monitoring kesehatan mental dan stress level' },
            { icon: 'fas fa-eye', title: 'Content Filter', description: 'Filter konten berbahaya secara real-time' },
            { icon: 'fas fa-moon', title: 'Dark Mode', description: 'Mode gelap untuk mengurangi eye strain' },
            { icon: 'fas fa-meditation', title: 'Mindfulness', description: 'Fitur mindfulness dan meditation timer' },
            { icon: 'fas fa-chart-line', title: 'Wellness Analytics', description: 'Analitik kesehatan digital dan mental' }
        ],
        projectInfo: {
            client: 'MindShield Technologies',
            duration: '6 Bulan',
            team: '4 Orang',
            platform: 'Web & Mobile',
            status: 'Completed'
        },
        liveDemo: 'https://mindshield-demo.techop.id',
        sourceCode: 'https://github.com/techop/mindshield-ui'
    },
    'learning-alphabet': {
        title: 'Belajar Alfabet Interaktif',
        subtitle: 'Game edukasi interaktif untuk anak-anak belajar alfabet dengan cara yang menyenangkan',
        category: 'Game Development',
        categoryType: 'games',
        image: 'assets/img/Belajar Alfabet.png',
        images: [
            'assets/img/Belajar Alfabet.png'
        ],
        description: `
            <p>Game edukasi interaktif yang dirancang khusus untuk membantu anak-anak usia 3-7 tahun belajar alfabet dengan cara yang menyenangkan dan engaging. Game ini menggunakan pendekatan gamifikasi dengan reward system yang memotivasi anak untuk terus belajar.</p>
            <p>Setiap huruf dilengkapi dengan animasi menarik, suara yang jelas, dan aktivitas interaktif yang membantu anak memahami bentuk dan bunyi setiap huruf.</p>
            <p>Game ini telah diunduh lebih dari 50,000 kali dan mendapat rating 4.8/5 dari para orang tua.</p>
        `,
        technologies: [
            { name: 'Unity 3D', color: 'bg-gray-100 text-gray-600', icon: 'fab fa-unity' },
            { name: 'C#', color: 'bg-purple-100 text-purple-600', icon: 'fas fa-code' },
            { name: 'Adobe Illustrator', color: 'bg-orange-100 text-orange-600', icon: 'fab fa-adobe' },
            { name: 'Spine 2D', color: 'bg-green-100 text-green-600', icon: 'fas fa-bone' },
            { name: 'FMOD', color: 'bg-red-100 text-red-600', icon: 'fas fa-volume-up' },
            { name: 'Google Play', color: 'bg-green-100 text-green-600', icon: 'fab fa-google-play' }
        ],
        features: [
            { icon: 'fas fa-gamepad', title: 'Interactive Learning', description: 'Pembelajaran interaktif dengan touch dan drag & drop' },
            { icon: 'fas fa-star', title: 'Reward System', description: 'Sistem reward untuk memotivasi anak belajar' },
            { icon: 'fas fa-volume-up', title: 'Audio Learning', description: 'Pembelajaran audio dengan pronunciation yang jelas' },
            { icon: 'fas fa-palette', title: 'Colorful Graphics', description: 'Grafis penuh warna yang menarik untuk anak' },
            { icon: 'fas fa-trophy', title: 'Achievement', description: 'Sistem achievement untuk tracking progress' },
            { icon: 'fas fa-users', title: 'Parent Dashboard', description: 'Dashboard untuk orang tua monitoring progress' }
        ],
        projectInfo: {
            client: 'EduKids Interactive',
            duration: '4 Bulan',
            team: '5 Orang',
            platform: 'Android & iOS',
            status: 'Completed'
        },
        liveDemo: 'https://play.google.com/store/apps/details?id=com.techop.alphabet',
        sourceCode: 'https://github.com/techop/learning-alphabet'
    },
    'english-vocabulary': {
        title: 'Kosa Kata Bahasa Inggris',
        subtitle: 'Aplikasi pembelajaran kosa kata bahasa Inggris dengan metode spaced repetition',
        category: 'Game Development',
        categoryType: 'games',
        image: 'assets/img/Kosa Kata Inggris.png',
        images: [
            'assets/img/Kosa Kata Inggris.png'
        ],
        description: `
            <p>Aplikasi pembelajaran kosa kata bahasa Inggris yang menggunakan metode spaced repetition untuk membantu pengguna mengingat vocabulary lebih efektif. Dilengkapi dengan berbagai mini games dan quiz interaktif.</p>
            <p>Sistem adaptif learning yang menyesuaikan tingkat kesulitan berdasarkan kemampuan dan progress masing-masing pengguna.</p>
            <p>Telah membantu lebih dari 100,000 pengguna meningkatkan vocabulary bahasa Inggris mereka dengan retention rate 85%.</p>
        `,
        technologies: [
            { name: 'Unity 3D', color: 'bg-gray-100 text-gray-600', icon: 'fab fa-unity' },
            { name: 'C#', color: 'bg-purple-100 text-purple-600', icon: 'fas fa-code' },
            { name: 'SQLite', color: 'bg-blue-100 text-blue-600', icon: 'fas fa-database' },
            { name: 'Text-to-Speech', color: 'bg-green-100 text-green-600', icon: 'fas fa-microphone' },
            { name: 'Analytics', color: 'bg-yellow-100 text-yellow-600', icon: 'fas fa-chart-bar' },
            { name: 'Firebase', color: 'bg-orange-100 text-orange-600', icon: 'fas fa-fire' }
        ],
        features: [
            { icon: 'fas fa-brain', title: 'Spaced Repetition', description: 'Algoritma spaced repetition untuk retensi optimal' },
            { icon: 'fas fa-microphone', title: 'Speech Recognition', description: 'Latihan pronunciation dengan speech recognition' },
            { icon: 'fas fa-puzzle-piece', title: 'Mini Games', description: 'Berbagai mini games untuk pembelajaran yang fun' },
            { icon: 'fas fa-chart-line', title: 'Progress Tracking', description: 'Tracking progress pembelajaran yang detail' },
            { icon: 'fas fa-book-open', title: 'Dictionary', description: 'Kamus terintegrasi dengan contoh kalimat' },
            { icon: 'fas fa-calendar', title: 'Daily Challenge', description: 'Challenge harian untuk konsistensi belajar' }
        ],
        projectInfo: {
            client: 'English Learning Center',
            duration: '6 Bulan',
            team: '4 Orang',
            platform: 'Android & iOS',
            status: 'Completed'
        },
        liveDemo: 'https://play.google.com/store/apps/details?id=com.techop.englishvocab',
        sourceCode: 'https://github.com/techop/english-vocabulary'
    },
    'hijaiyah-letters': {
        title: 'Mengenal Huruf Hijaiyah',
        subtitle: 'Aplikasi edukasi untuk belajar huruf hijaiyah dengan tajwid yang benar',
        category: 'Game Development',
        categoryType: 'games',
        image: 'assets/img/Mengenal Huruf Hijaiyah.png',
        images: [
            'assets/img/Mengenal Huruf Hijaiyah.png'
        ],
        description: `
            <p>Aplikasi edukasi Islam yang membantu anak-anak dan dewasa belajar huruf hijaiyah dengan tajwid yang benar. Dilengkapi dengan audio dari qari profesional dan metode pembelajaran yang interaktif.</p>
            <p>Setiap huruf dilengkapi dengan cara penulisan yang benar, makharijul huruf, dan latihan membaca dengan berbagai harakat.</p>
            <p>Aplikasi ini telah digunakan di lebih dari 1000 TPQ dan mendapat sertifikasi dari Lembaga Tahfidz Quran Nasional.</p>
        `,
        technologies: [
            { name: 'Unity 3D', color: 'bg-gray-100 text-gray-600', icon: 'fab fa-unity' },
            { name: 'C#', color: 'bg-purple-100 text-purple-600', icon: 'fas fa-code' },
            { name: 'Audio Processing', color: 'bg-red-100 text-red-600', icon: 'fas fa-waveform-path' },
            { name: 'Arabic Typography', color: 'bg-green-100 text-green-600', icon: 'fas fa-font' },
            { name: 'Calligraphy Engine', color: 'bg-blue-100 text-blue-600', icon: 'fas fa-pen-fancy' },
            { name: 'Islamic Design', color: 'bg-yellow-100 text-yellow-600', icon: 'fas fa-moon' }
        ],
        features: [
            { icon: 'fas fa-quran', title: 'Authentic Recitation', description: 'Audio dari qari profesional dengan tajwid yang benar' },
            { icon: 'fas fa-pen', title: 'Writing Practice', description: 'Latihan menulis huruf hijaiyah dengan guide' },
            { icon: 'fas fa-volume-up', title: 'Makharijul Huruf', description: 'Pembelajaran tempat keluarnya huruf yang benar' },
            { icon: 'fas fa-star-and-crescent', title: 'Islamic Theme', description: 'Desain dan tema yang sesuai dengan nilai Islam' },
            { icon: 'fas fa-medal', title: 'Certification', description: 'Sertifikat digital untuk setiap level yang diselesaikan' },
            { icon: 'fas fa-users', title: 'Multi User', description: 'Support multiple user untuk keluarga' }
        ],
        projectInfo: {
            client: 'Yayasan Pendidikan Islam',
            duration: '5 Bulan',
            team: '4 Orang',
            platform: 'Android & iOS',
            status: 'Completed'
        },
        liveDemo: 'https://play.google.com/store/apps/details?id=com.techop.hijaiyah',
        sourceCode: 'https://github.com/techop/hijaiyah-learning'
    },
    'ecommerce-platform': {
        title: 'E-Commerce Platform',
        subtitle: 'Platform e-commerce modern dengan fitur lengkap untuk bisnis online',
        category: 'Website Development',
        categoryType: 'website',
        image: 'assets/img/web 1.png',
        images: [
            'assets/img/web 1.png',
            'assets/img/web 2.png',
            'assets/img/web 3.png',
            'assets/img/web 4.png'
        ],
        description: `
            <p>Platform e-commerce yang komprehensif dengan fitur-fitur modern untuk mendukung bisnis online. Dilengkapi dengan sistem inventory management, payment gateway, dan customer relationship management.</p>
            <p>Platform ini dibangun dengan arsitektur microservices yang scalable dan dapat menangani traffic tinggi dengan performa optimal.</p>
            <p>Telah digunakan oleh lebih dari 500 merchant dengan total transaksi mencapai 10 miliar rupiah per bulan.</p>
        `,
        technologies: [
            { name: 'React.js', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-react' },
            { name: 'Node.js', color: 'bg-green-100 text-green-600', icon: 'fab fa-node-js' },
            { name: 'MongoDB', color: 'bg-green-100 text-green-600', icon: 'fas fa-database' },
            { name: 'Redis', color: 'bg-red-100 text-red-600', icon: 'fas fa-memory' },
            { name: 'Docker', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-docker' },
            { name: 'AWS', color: 'bg-orange-100 text-orange-600', icon: 'fab fa-aws' }
        ],
        features: [
            { icon: 'fas fa-shopping-cart', title: 'Shopping Cart', description: 'Sistem shopping cart yang user-friendly' },
            { icon: 'fas fa-credit-card', title: 'Payment Gateway', description: 'Integrasi dengan multiple payment gateway' },
            { icon: 'fas fa-boxes', title: 'Inventory Management', description: 'Sistem manajemen stok yang real-time' },
            { icon: 'fas fa-truck', title: 'Shipping Integration', description: 'Integrasi dengan kurir untuk ongkir otomatis' },
            { icon: 'fas fa-users', title: 'Multi Vendor', description: 'Support multi vendor dalam satu platform' },
            { icon: 'fas fa-chart-bar', title: 'Analytics Dashboard', description: 'Dashboard analytics untuk merchant' }
        ],
        projectInfo: {
            client: 'TechCommerce Ltd',
            duration: '8 Bulan',
            team: '8 Orang',
            platform: 'Web Browser',
            status: 'Completed'
        },
        liveDemo: 'https://demo-ecommerce.techop.id',
        sourceCode: 'https://github.com/techop/ecommerce-platform'
    },
    'portfolio-website': {
        title: 'Creative Portfolio Website',
        subtitle: 'Website portfolio kreatif dengan desain yang unik dan interactive elements',
        category: 'Website Development',
        categoryType: 'website',
        image: 'assets/img/web 5.png',
        images: [
            'assets/img/web 5.png',
            'assets/img/web 7.png',
            'assets/img/web 8.png'
        ],
        description: `
            <p>Website portfolio kreatif yang dirancang khusus untuk showcasing karya-karya terbaik dengan desain yang unik dan interactive elements. Menggunakan teknologi web modern untuk memberikan experience yang memorable.</p>
            <p>Setiap halaman dilengkapi dengan animasi yang smooth, transisi yang menarik, dan loading yang cepat untuk memberikan impression yang profesional.</p>
            <p>Website ini telah membantu klien meningkatkan inquiries hingga 200% dan mendapat berbagai penghargaan design.</p>
        `,
        technologies: [
            { name: 'Vue.js', color: 'bg-green-100 text-green-600', icon: 'fab fa-vuejs' },
            { name: 'Three.js', color: 'bg-gray-100 text-gray-600', icon: 'fas fa-cube' },
            { name: 'GSAP', color: 'bg-green-100 text-green-600', icon: 'fas fa-magic' },
            { name: 'WebGL', color: 'bg-red-100 text-red-600', icon: 'fas fa-eye' },
            { name: 'Sass', color: 'bg-pink-100 text-pink-600', icon: 'fab fa-sass' },
            { name: 'Webpack', color: 'bg-blue-100 text-blue-600', icon: 'fab fa-js-square' }
        ],
        features: [
            { icon: 'fas fa-magic', title: '3D Animations', description: 'Animasi 3D yang interaktif menggunakan WebGL' },
            { icon: 'fas fa-mobile-alt', title: 'Responsive Design', description: 'Design responsif yang sempurna di semua device' },
            { icon: 'fas fa-rocket', title: 'Fast Loading', description: 'Optimasi performa untuk loading yang super cepat' },
            { icon: 'fas fa-palette', title: 'Custom Animations', description: 'Animasi custom yang unique untuk setiap section' },
            { icon: 'fas fa-search', title: 'SEO Optimized', description: 'Optimasi SEO untuk visibility yang maksimal' },
            { icon: 'fas fa-share-alt', title: 'Social Integration', description: 'Integrasi dengan berbagai platform media sosial' }
        ],
        projectInfo: {
            client: 'Creative Studio Inc',
            duration: '3 Bulan',
            team: '3 Orang',
            platform: 'Web Browser',
            status: 'Completed'
        },
        liveDemo: 'https://creative-portfolio-demo.techop.id',
        sourceCode: 'https://github.com/techop/creative-portfolio'
    }
};

// Function untuk load portfolio detail
function loadPortfolioDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const portfolioId = urlParams.get('id');
    
    const loadingEl = document.getElementById('loading');
    const contentEl = document.getElementById('portfolio-content');
    const errorEl = document.getElementById('error-state');
    
    if (!portfolioId || !portfolioProjects[portfolioId]) {
        loadingEl.classList.add('hidden');
        errorEl.classList.remove('hidden');
        return;
    }
    
    const project = portfolioProjects[portfolioId];
    
    // Update page title dan meta description
    document.title = `${project.title} - Portfolio TechOP`;
    document.querySelector('meta[name="description"]').setAttribute('content', project.subtitle);
    
    // Fill content
    fillProjectContent(project);
    
    // Show content dan hide loading
    setTimeout(() => {
        loadingEl.classList.add('hidden');
        contentEl.classList.remove('hidden');
        
        // Trigger animations
        triggerAnimations();
    }, 1000);
}

// Function untuk fill project content
function fillProjectContent(project) {
    // Hero section
    document.getElementById('portfolio-category').textContent = project.category;
    document.getElementById('portfolio-title').textContent = project.title;
    document.getElementById('portfolio-subtitle').textContent = project.subtitle;
    
    // Buttons
    const liveDemoBtn = document.getElementById('live-demo-btn');
    const sourceCodeBtn = document.getElementById('source-code-btn');
    
    liveDemoBtn.addEventListener('click', () => {
        window.open(project.liveDemo, '_blank');
    });
    
    sourceCodeBtn.addEventListener('click', () => {
        window.open(project.sourceCode, '_blank');
    });
    
    // Project images
    const imagesContainer = document.getElementById('project-images');
    imagesContainer.innerHTML = project.images.map(image => `
        <div class="project-image-container animate-slide-in-up">
            <img src="${image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg">
        </div>
    `).join('');
    
    // Project description
    document.getElementById('project-description').innerHTML = project.description;
    
    // Project info
    const projectInfoContainer = document.getElementById('project-info');
    projectInfoContainer.innerHTML = `
        <div class="bg-gray-50 p-6 rounded-lg space-y-4">
            <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-700">Klien:</span>
                <span class="text-gray-900">${project.projectInfo.client}</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-700">Durasi:</span>
                <span class="text-gray-900">${project.projectInfo.duration}</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-700">Tim:</span>
                <span class="text-gray-900">${project.projectInfo.team}</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-700">Platform:</span>
                <span class="text-gray-900">${project.projectInfo.platform}</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-700">Status:</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">${project.projectInfo.status}</span>
            </div>
        </div>
    `;
    
    // Technologies
    const techContainer = document.getElementById('technologies');
    techContainer.innerHTML = project.technologies.map(tech => `
        <div class="tech-badge ${tech.color} px-4 py-2 rounded-full flex items-center gap-2">
            <i class="${tech.icon}"></i>
            <span class="font-semibold">${tech.name}</span>
        </div>
    `).join('');
    
    // Features
    const featuresContainer = document.getElementById('features');
    featuresContainer.innerHTML = project.features.map(feature => `
        <div class="feature-card p-6 rounded-xl text-center">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="${feature.icon} text-blue-600 text-xl"></i>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">${feature.title}</h3>
            <p class="text-gray-600 text-sm">${feature.description}</p>
        </div>
    `).join('');
    
    // Other projects (random 3 projects, excluding current)
    const otherProjects = Object.entries(portfolioProjects)
        .filter(([id]) => id !== new URLSearchParams(window.location.search).get('id'))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    const otherProjectsContainer = document.getElementById('other-projects');
    otherProjectsContainer.innerHTML = otherProjects.map(([id, project]) => `
        <a href="portfolio-detail.html?id=${id}" class="group">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div class="h-48 overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-6">
                    <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600 mb-2 inline-block">${project.category}</span>
                    <h3 class="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">${project.title}</h3>
                    <p class="text-gray-600 text-sm">${project.subtitle.substring(0, 100)}...</p>
                </div>
            </div>
        </a>
    `).join('');
}

// Function untuk trigger animations
function triggerAnimations() {
    const animatedElements = document.querySelectorAll('.animate-slide-in-up, .animate-fade-in-scale');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px) scale(0.9)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize when DOM loaded
document.addEventListener('DOMContentLoaded', loadPortfolioDetail);