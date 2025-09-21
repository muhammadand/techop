// Blog Detail JavaScript
const blogArticles = {
    "featured-article": {
        id: "featured-article",
        title: "5 Tren Teknologi yang Akan Mengubah Bisnis di 2025",
        category: "Teknologi",
        categoryColor: "blue",
        excerpt: "Pelajari bagaimana AI, IoT, dan teknologi emerging lainnya akan membentuk landscape bisnis digital.",
        author: "TechOp Team",
        date: "15 Des 2024",
        readTime: "8 min",
        views: "2,450",
        likes: "89",
        tags: ["AI", "IoT", "Digital Transformation", "Business Technology"],
        content: `
        <p class="text-lg text-gray-700 mb-6 font-medium">Dunia teknologi bergerak dengan kecepatan yang mencengangkan. Setiap tahunnya, inovasi-inovasi baru bermunculan dan mengubah cara kita bekerja, berbisnis, dan menjalani kehidupan sehari-hari.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Artificial Intelligence (AI) Menjadi Mainstream</h2>
        <p class="text-gray-700 mb-4">Kecerdasan buatan tidak lagi menjadi teknologi masa depan, melainkan sudah menjadi kebutuhan saat ini. Dari chatbot customer service hingga sistem prediksi yang kompleks, AI mengoptimalkan berbagai aspek operasional bisnis.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p class="text-blue-800"><strong>Pro Tip:</strong> Mulailah dengan mengimplementasikan AI dalam proses yang repetitif dan data-driven di perusahaan Anda.</p>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Internet of Things (IoT) Ekspansi Masif</h2>
        <p class="text-gray-700 mb-4">IoT akan mengubah cara kita berinteraksi dengan lingkungan sekitar. Smart cities, smart homes, dan industrial IoT akan menjadi standar baru dalam efisiensi operasional.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Cloud Computing & Edge Computing</h2>
        <p class="text-gray-700 mb-4">Kombinasi cloud dan edge computing memberikan fleksibilitas dan kecepatan yang dibutuhkan bisnis modern. Data processing yang lebih cepat dan efisien akan menjadi competitive advantage.</p>
        `
    },
    "mobile-optimization": {
        id: "mobile-optimization",
        title: "Mengoptimalkan Performa Aplikasi Mobile",
        category: "Tips & Tricks",
        categoryColor: "green",
        excerpt: "Strategi komprehensif untuk meningkatkan performa aplikasi mobile Anda.",
        author: "Andi Dev",
        date: "12 Des 2024",
        readTime: "6 min",
        views: "1,876",
        likes: "45",
        tags: ["Mobile Development", "Performance", "UX"],
        content: `
        <p class="text-lg text-gray-700 mb-6 font-medium">Performa aplikasi mobile yang optimal adalah kunci kepuasan pengguna. Aplikasi yang lambat atau tidak responsif dapat mengakibatkan pengguna beralih ke kompetitor.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Optimasi Loading Time</h2>
        <p class="text-gray-700 mb-4">Loading time yang cepat adalah fundamental. Pengguna mengharapkan aplikasi terbuka dalam 2-3 detik maksimal.</p>
        
        <ul class="text-gray-700 mb-4 pl-6 list-disc">
            <li>Kompres gambar dan aset multimedia</li>
            <li>Gunakan lazy loading untuk konten</li>
            <li>Implementasi caching strategy yang efektif</li>
            <li>Minifikasi code JavaScript dan CSS</li>
        </ul>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p class="text-green-800"><strong>Best Practice:</strong> Selalu test aplikasi di berbagai device dengan spesifikasi berbeda untuk memastikan performa optimal.</p>
        </div>
        `
    },
    "ui-ux-tips": {
        id: "ui-ux-tips",
        title: "10 Tips UI/UX Design untuk Meningkatkan User Engagement",
        category: "Tips & Tricks",
        categoryColor: "purple",
        excerpt: "Strategi desain yang terbukti efektif untuk menciptakan pengalaman pengguna yang engaging dan meningkatkan konversi.",
        author: "Sarah Designer",
        date: "10 Des 2024",
        readTime: "4 min",
        views: "1,876",
        likes: "67",
        tags: ["UI Design", "UX Design", "User Experience", "Design Tips"],
        content: `
        <p class="text-lg text-gray-700 mb-6 font-medium">User experience yang baik adalah kunci kesuksesan setiap produk digital. Design yang user-centered tidak hanya terlihat menarik, tetapi juga functional dan intuitive.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Keep It Simple and Clean</h2>
        <p class="text-gray-700 mb-4">Kesederhanaan adalah kunci. Hindari clutter dan fokus pada elemen yang benar-benar penting. White space adalah teman Anda dalam menciptakan design yang breathable.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Consistency is Key</h2>
        <p class="text-gray-700 mb-4">Gunakan design system yang consistent. Dari typography, warna, hingga spacing harus mengikuti pattern yang sama di seluruh aplikasi.</p>
        
        <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
            <p class="text-purple-800"><strong>Design Tip:</strong> Buat style guide yang comprehensive sebagai panduan untuk seluruh tim.</p>
        </div>
        `
    },
    "ecommerce-ai": {
        id: "ecommerce-ai",
        title: "Implementasi AI dalam E-commerce: Meningkatkan Penjualan hingga 40%",
        category: "Tren Digital",
        categoryColor: "orange",
        excerpt: "Bagaimana artificial intelligence mengubah landscape e-commerce dan strategi implementasinya untuk bisnis Anda.",
        author: "Data Scientist Team",
        date: "8 Des 2024",
        readTime: "7 min",
        views: "2,134",
        likes: "78",
        tags: ["AI", "E-commerce", "Machine Learning", "Sales Optimization"],
        content: `
        <p class="text-lg text-gray-700 mb-6 font-medium">Artificial Intelligence telah mengubah cara bisnis e-commerce beroperasi. Dari personalisasi produk hingga chatbot customer service, AI memberikan competitive advantage yang signifikan.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Sistem Rekomendasi Produk</h2>
        <p class="text-gray-700 mb-4">AI dapat menganalisis behavior pengguna dan memberikan rekomendasi produk yang akurat, meningkatkan conversion rate hingga 35%.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Dynamic Pricing</h2>
        <p class="text-gray-700 mb-4">Algoritma AI dapat menyesuaikan harga secara real-time berdasarkan demand, kompetitor, dan inventory level.</p>
        
        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
            <p class="text-orange-800"><strong>Case Study:</strong> Sebuah toko online fashion meningkatkan penjualan 42% setelah implementasi AI recommendation system.</p>
        </div>
        `
    },
    "case-study-umkm": {
        id: "case-study-umkm",
        title: "Case Study: Transformasi Digital UMKM dengan Teknologi Cloud",
        category: "Case Study",
        categoryColor: "indigo",
        excerpt: "Bagaimana sebuah UMKM tradisional berhasil meningkatkan omzet 300% melalui implementasi solusi cloud computing.",
        author: "Business Analyst",
        date: "5 Des 2024",
        readTime: "5 min",
        views: "1,567",
        likes: "54",
        tags: ["Case Study", "Cloud Computing", "Digital Transformation", "UMKM"],
        content: `
        <p class="text-lg text-gray-700 mb-6 font-medium">Studi kasus transformasi digital pada UMKM "Batik Nusantara" yang berhasil meningkatkan penjualan secara dramatis melalui adopsi teknologi cloud.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Background</h2>
        <p class="text-gray-700 mb-4">Batik Nusantara adalah UMKM keluarga yang telah beroperasi selama 20 tahun dengan sistem manual. Pandemi COVID-19 memaksa mereka untuk beradaptasi dengan era digital.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Solusi yang Diimplementasi</h2>
        <p class="text-gray-700 mb-4">Tim TechOp mengimplementasikan solusi cloud-based ERP yang mencakup inventory management, e-commerce integration, dan business analytics.</p>
        
        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6">
            <p class="text-indigo-800"><strong>Hasil:</strong> Dalam 6 bulan, omzet meningkat 300%, efficiency operasional naik 250%, dan customer satisfaction mencapai 95%.</p>
        </div>
        `
    },
    "database-security": {
        id: "database-security",
        title: "Best Practices Database Security: Melindungi Data Bisnis Anda",
        category: "Teknologi",
        categoryColor: "teal",
        excerpt: "Panduan komprehensif untuk mengamankan database dari berbagai ancaman cyber. Strategi defense-in-depth untuk data protection.",
        author: "Security Expert",
        date: "3 Des 2024",
        readTime: "6 min",
        views: "1,567",
        likes: "78",
        tags: ["Database Security", "Cybersecurity", "Data Protection", "Best Practices"],
        content: `
        <p class="text-lg text-gray-700 mb-6 font-medium">Keamanan database adalah fundamental dalam melindungi aset digital perusahaan. Data breach dapat mengakibatkan kerugian finansial dan reputasi yang signifikan.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Authentication & Authorization</h2>
        <p class="text-gray-700 mb-4">Implementasi multi-factor authentication dan principle of least privilege untuk kontrol akses yang ketat.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Encryption</h2>
        <p class="text-gray-700 mb-4">Enkripsi data at rest dan in transit menggunakan algoritma yang kuat seperti AES-256.</p>
        
        <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-6">
            <p class="text-teal-800"><strong>Critical:</strong> Backup dan disaster recovery plan adalah essential. Test recovery procedures secara regular.</p>
        </div>
        `
    },
    "clean-code": {
        id: "clean-code",
        title: "Clean Code Principles: Menulis Kode yang Maintainable dan Scalable",
        category: "Tips & Tricks",
        categoryColor: "pink",
        excerpt: "Panduan praktis untuk menulis clean code yang mudah dipahami, di-maintain, dan dikembangkan oleh tim developer.",
        author: "Senior Developer",
        date: "1 Des 2024",
        readTime: "5 min",
        views: "2,045",
        likes: "89",
        tags: ["Clean Code", "Best Practices", "Software Development", "Code Quality"],
        content: `
        <p class="text-lg text-gray-700 mb-6 font-medium">Clean code bukan hanya tentang functionality, tetapi juga readability dan maintainability. Code yang bersih menghemat waktu dan effort dalam jangka panjang.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Meaningful Names</h2>
        <p class="text-gray-700 mb-4">Gunakan nama variable, function, dan class yang descriptive dan mudah dipahami.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Functions Should Do One Thing</h2>
        <p class="text-gray-700 mb-4">Single Responsibility Principle - setiap function harus memiliki satu tanggung jawab yang jelas.</p>
        
        <div class="bg-pink-50 border-l-4 border-pink-500 p-4 my-6">
            <p class="text-pink-800"><strong>Quote:</strong> "Clean code always looks like it was written by someone who cares." - Robert C. Martin</p>
        </div>
        `
    }
};

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getCategoryColorClasses(color) {
    const colorMap = {
        blue: "bg-blue-500",
        green: "bg-green-500", 
        purple: "bg-purple-500",
        orange: "bg-orange-500",
        indigo: "bg-indigo-500",
        teal: "bg-teal-500",
        pink: "bg-pink-500",
        red: "bg-red-500"
    };
    return colorMap[color] || "bg-blue-500";
}

function loadArticle() {
    const articleId = getUrlParameter('id');
    
    if (!articleId) {
        document.getElementById('articleTitle').textContent = 'Artikel tidak ditemukan';
        return;
    }

    const article = blogArticles[articleId];
    
    if (!article) {
        document.getElementById('articleTitle').textContent = 'Artikel tidak ditemukan';
        return;
    }

    document.getElementById('pageTitle').textContent = article.title + ' - TechOp Blog';
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleCategory').textContent = article.category;
    document.getElementById('articleCategory').className = "text-white text-xs font-semibold px-3 py-1 rounded-full " + getCategoryColorClasses(article.categoryColor);
    document.getElementById('articleReadTime').innerHTML = "<i class=\"fas fa-clock mr-1\"></i> " + article.readTime + " read";
    document.getElementById('articleAuthor').textContent = article.author;
    document.getElementById('articleDate').textContent = article.date;
    document.getElementById('articleViews').innerHTML = "<i class=\"fas fa-eye mr-1\"></i> " + article.views + " views";
    document.getElementById('articleLikes').innerHTML = "<i class=\"fas fa-heart mr-1\"></i> " + article.likes + " likes";
    document.getElementById('articleContent').innerHTML = article.content;
    
    const tagsContainer = document.getElementById('articleTags');
    tagsContainer.innerHTML = article.tags.map(tag => 
        "<span class=\"inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium\">#" + tag + "</span>"
    ).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    loadArticle();
});
