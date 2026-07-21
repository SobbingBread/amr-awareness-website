import type { Content } from "./types";

export const id: Content = {
  meta: {
    title: "Merebut Kembali Bumi yang Kita Garap | Kesadaran AMR",
    description:
      "Bagaimana pencemaran antibiotik pertanian di Sungai Citarum, Indonesia, mendorong resistensi antimikroba — dan enam solusi terbukti yang dapat membalikkannya.",
  },
  nav: {
    home: "Beranda",
    problem: "Masalah",
    science: "Ilmu Pengetahuan",
    solutions: "Solusi",
    takeAction: "Ambil Tindakan",
    about: "Tentang Kami",
    resources: "Sumber",
    menu: "Menu",
  },
  common: {
    scrollHint: "Gulir",
    readMore: "Baca selengkapnya",
    close: "Tutup",
    download: "Unduh",
    share: "Bagikan",
    learnMore: "Pelajari lebih lanjut",
    tapToExpand: "Ketuk untuk membuka",
  },
  hero: {
    kicker: "Sungai Citarum, Jawa Barat, Indonesia",
    quote: "Dulu Sungai Citarum itu indah sekali.",
    quoteAuthor: "Ibu Edah",
    quoteMeta: "warga bantaran Sungai Citarum sejak 1968",
    headline: "Ancaman paling berbahaya tidak dapat dilihat, dicium, atau dirasakan.",
    subhead:
      "Residu antibiotik dari pertanian, rumah sakit, dan pabrik diam-diam melatih bakteri untuk melawan hampir semua obat yang kita miliki. Ini adalah kisah satu sungai — dan 28 juta jiwa yang masa depannya bergantung pada apa yang terjadi padanya.",
    statValue: 28,
    statLabel: "jiwa bergantung pada daerah aliran sungai yang diam-diam direkayasa ulang oleh resistensi obat",
    cta: "Mulai Perjalanan",
    beforeLabel: "Dahulu",
    afterLabel: "Kini",
    beforeYear: "Cukup bersih untuk mandi",
    afterYear: "Secara biologis mati di beberapa titik",
    sliderHint: "Geser untuk membandingkan",
  },
  problem: {
    kicker: "Bagian 2 — Masalah",
    title: "Sebuah Sungai, Sebuah Resistensi, dan Darurat Global",
    intro:
      "Kini sungai ini dipenuhi zat pewarna tekstil, kental oleh limbah, dan tersumbat sampah. Namun ancaman yang paling berbahaya justru tidak terlihat: residu antibiotik yang melatih bakteri menjadi tidak dapat diobati.",
    riverTitle: "Sungai Citarum",
    riverLength: "≈300 km membelah jantung Jawa Barat",
    riverStats: [
      { value: "80%", label: "air minum Jakarta" },
      { value: "400.000 ha", label: "sawah yang diairi" },
      { value: "2.000+", label: "pabrik yang membuang limbah ke sungai" },
      { value: "280.000 ton", label: "limbah domestik tak terolah per tahun" },
      { value: "20.000 ton", label: "sampah plastik per tahun" },
    ],
    oxygenLabel: "Oksigen terlarut di titik-titik terparah",
    oxygenNote:
      "Begitu rendah hingga pemerintah Indonesia menyatakan sebagian sungai ini secara biologis mati.",
    amrKicker: "Bagian 2.2",
    amrTitle: "Memahami AMR: Dari Sungai ke Ranjang Rumah Sakit",
    amrIntro:
      "Untuk memahami apa yang terjadi ketika bakteri resisten memasuki tubuh manusia, simak kisah Pak Ahmad.",
    steps: [
      {
        title: "Rutinitas seorang petani",
        text: "Pak Ahmad, seorang petani padi, kakinya terluka oleh besi berkarat saat bekerja di sawah yang telah ia garap selama puluhan tahun.",
      },
      {
        title: "Luka menjadi infeksi",
        text: "Cedera biasa — jenis yang selama ini bisa diobati dengan aman selama beberapa generasi.",
      },
      {
        title: "Amoxicillin diresepkan",
        text: "Pengobatan lini pertama standar. Selama ini selalu berhasil.",
      },
      {
        title: "Tidak terjadi apa-apa",
        text: "Infeksi tidak merespons. Bakteri ini sudah pernah 'bertemu' obat ini — di sungai.",
      },
      {
        title: "Infeksi menyebar",
        text: "Saat Pak Ahmad tiba di rumah sakit di Bandung, infeksi telah menyebar ke tulangnya. Antibiotik demi antibiotik dicoba. Tidak ada yang berhasil.",
      },
      {
        title: "Luka yang dulunya bisa diobati kini mematikan",
        text: "Pak Ahmad meninggal dua minggu kemudian akibat luka yang seharusnya sembuh dengan penisilin satu generasi lalu — dibentuk oleh sungai tempat ia bertani dan mandi.",
      },
    ],
    keysTitle: "Antibiotik sebagai kunci molekuler",
    keysNote:
      "Antibiotik berfungsi seperti kunci molekuler yang dirancang untuk membuka gembok bakteri tertentu. Paparan berulang pada konsentrasi rendah dan sub-mematikan memungkinkan bakteri mengubah gembok tersebut — melalui mutasi gen atau menyerap gen resistensi dari organisme di sekitarnya (transfer gen horizontal) — hingga tidak ada kunci yang lagi cocok.",
    genesTitle: "Gen resistensi yang terdeteksi di sedimen Citarum",
    genes: [
      { code: "blaCTX-M", name: "Resistensi sefalosporin", resistance: "Memberikan resistensi terhadap sefalosporin spektrum luas, salah satu kelas antibiotik utama." },
      { code: "mcr-1", name: "Resistensi kolistin", resistance: "Memberikan resistensi terhadap kolistin — antibiotik pilihan terakhir saat obat lain gagal." },
      { code: "tetA", name: "Resistensi tetrasiklin", resistance: "Salah satu dari tiga gen resistensi tetrasiklin yang ditemukan di sedimen Citarum, umum pada limbah ternak." },
      { code: "tetB", name: "Resistensi tetrasiklin", resistance: "Memungkinkan bakteri memompa tetrasiklin keluar dari selnya sebelum obat sempat bekerja." },
      { code: "tetM", name: "Resistensi tetrasiklin", resistance: "Melindungi ribosom bakteri secara langsung, memblokir titik kerja antibiotik." },
    ],
    globalKicker: "Bagian 2.3",
    globalTitle: "Taruhan Global",
    directDeaths: "1,27 Jt",
    directDeathsLabel: "kematian langsung akibat AMR setiap tahun",
    associatedDeaths: "4,95 Jt",
    associatedDeathsLabel: "kematian tahunan yang berkaitan dengan AMR — lebih dari 3.500 jiwa setiap harinya",
    perDayLabel: "jiwa hilang per hari",
    timelineTitle: "Proyeksi kematian, 2026 → 2050",
    timelineNote:
      "Pada 2050, kematian akibat AMR diproyeksikan mencapai 10 juta per tahun — melampaui angka kematian kanker saat ini — dengan perkiraan biaya ekonomi kumulatif sebesar $100 triliun.",
    economicImpact: "$100 T",
    economicLabel: "proyeksi biaya ekonomi kumulatif hingga 2050",
    bridgeText:
      "Ini bukan kekhawatiran ilmiah yang jauh. Ini adalah krisis global yang mendesak, berakar pada satu praktik yang sangat lokal dan sangat bisa diperbaiki: bagaimana kita menggunakan antibiotik dalam pertanian.",
  },
  science: {
    kicker: "Bagian 3 — Ilmu Pengetahuan",
    title: "Citarum sebagai Inkubator Resistensi",
    intro:
      "Pencemaran antibiotik di Citarum berasal dari tiga sumber yang saling terkait — dan pertanian adalah pendorong terbesar yang paling sering diabaikan.",
    sourcesTitle: "Tiga Sumber Pencemaran Antibiotik",
    sourcesIntro: "Ketuk setiap sumber untuk melihat buktinya.",
    sources: [
      {
        name: "Pabrik Farmasi",
        stat: "45.000 orang/hari",
        detail:
          "Limbah produksi obat dalam jumlah besar dapat melepaskan antibiotik aktif yang setara untuk mengobati 45.000 orang setiap harinya ke saluran air sekitarnya (Lübbert et al., 2017).",
      },
      {
        name: "Rumah Sakit & Klinik",
        stat: "70% dikeluarkan utuh",
        detail:
          "Hingga 70% dari setiap dosis antibiotik keluar dari tubuh manusia tanpa berubah dan masuk ke sistem limbah yang tidak diolah.",
      },
      {
        name: "Pertanian",
        stat: "73% konsumsi global",
        detail:
          "Pertanian secara global adalah sumber penggunaan antibiotik terbesar dan paling diabaikan, bertanggung jawab atas 73% seluruh konsumsi antibiotik dunia (Van Boeckel et al., 2019).",
      },
    ],
    agricultureTitle: "Pertanian: Pendorong Utama",
    agricultureIntro:
      "Petani memberikan antibiotik pada pakan unggas, babi, dan ikan untuk mempercepat pertumbuhan dan mencegah penyakit di kondisi peternakan yang padat.",
    pathway: [
      "Antibiotik ditambahkan ke pakan unggas, babi & ikan",
      "50–70% dari setiap dosis dikeluarkan utuh melalui kotoran",
      "Kotoran mentah disebar ke sawah sebagai pupuk",
      "Air hujan membawa antibiotik & bakteri resisten ke anak sungai",
      "Anak sungai bermuara ke Sungai Citarum",
    ],
    findingsTitle: "Apa kata data",
    findings: [
      "BRIN (2021) mendeteksi residu amoxicillin di setiap sampel air yang diambil dari Citarum Hulu.",
      "Ciprofloxacin ditemukan hingga 50 µg/L di sungai-sungai Asia Selatan — sekitar 500× ambang batas aman pemicu resistensi.",
      "Kadar tetrasiklin dalam limbah cair peternakan di Jawa Barat mencapai 140–380 µg/L, cukup untuk secara aktif memicu resistensi.",
      "Gen mcr-1 teridentifikasi pada E. coli dari peternakan unggas di sekitar Citarum.",
      "Penanda resistensi terdeteksi di sedimen sungai hingga 10⁸ salinan gen per gram.",
    ],
    cycleKicker: "Bagian 4",
    cycleTitle: "Siklus Eskalasi AMR",
    cycleIntro:
      "AMR tidak menghasilkan tingkat risiko yang konstan — ia mendorong eskalasi yang memperkuat dirinya sendiri. Ketuk setiap tahap untuk melihat bagaimana ia memicu tahap berikutnya.",
    stages: [
      { title: "Emisi antibiotik", detail: "Antibiotik aktif memasuki sungai dari pertanian, rumah sakit, dan pabrik." },
      { title: "Bakteri resisten terseleksi", detail: "Konsentrasi sub-mematikan tidak membunuh bakteri — justru menyeleksi yang bertahan." },
      { title: "Kegagalan pengobatan", detail: "Antibiotik lini pertama standar seperti amoxicillin berhenti bekerja." },
      { title: "Obat yang lebih kuat digunakan", detail: "Dokter terpaksa menggunakan antibiotik pilihan terakhir." },
      { title: "Obat yang lebih persisten dilepaskan", detail: "Obat-obat yang lebih kuat ini lebih persisten di lingkungan, kembali memasuki sungai." },
      { title: "Resistensi terhadap obat itu muncul", detail: "Siklus berulang pada tingkat yang lebih tinggi dan lebih berbahaya." },
      { title: "Tidak ada pilihan terapi tersisa", detail: "Untuk sebagian infeksi, seluruh antibiotik yang tersedia gagal." },
    ],
    warning: "Pencemaran genetik tidak dapat dibalik dalam skala waktu manusia.",
    consequencesTitle: "Konsekuensi lingkungan yang saling memperparah",
    consequences: [
      "Hilangnya kesuburan tanah",
      "Meningkatnya biaya pengolahan air",
      "Bakteri resisten menumpuk di jaringan ikan",
      "Pencemaran memasuki tanaman pangan melalui air irigasi",
      "Matinya komunitas mikroba yang memberi sungai kemampuan membersihkan dirinya sendiri",
    ],
    bridgeText:
      "Gen resistensi dapat bertahan di sedimen selama puluhan hingga ratusan tahun — bahkan jika seluruh penggunaan antibiotik dihentikan hari ini, bakteri di masa depan tetap bisa mewarisi resistensi dari leluhur yang tidak pernah bertemu satu pun molekul antibiotik. Sifat permanen inilah yang menjadikan pencegahan — bukan pemulihan — sebagai satu-satunya strategi yang masuk akal. Dan pencegahan itu mungkin dilakukan.",
  },
  solutions: {
    kicker: "Bagian 5 — Solusi",
    title: "Strategi Satu Kesehatan yang Terpadu",
    intro:
      "WHO, FAO, dan Organisasi Kesehatan Hewan Dunia sama-sama mendukung kerangka Satu Kesehatan: kesehatan manusia, hewan, dan lingkungan membentuk satu sistem yang tak terpisahkan. Karena AMR muncul di persimpangan ketiganya, tidak ada intervensi satu sektor saja yang cukup.",
    oneHealthTitle: "Kerangka Satu Kesehatan",
    oneHealthHuman: "Kesehatan Manusia",
    oneHealthAnimal: "Kesehatan Hewan",
    oneHealthEnvironment: "Kesehatan Lingkungan",
    oneHealthResult: "Satu Kesehatan",
    oneHealthDescription:
      "AMR muncul di persimpangan ketiga domain ini — sehingga solusi harus menangani praktik pertanian, pencemaran lingkungan, dan kesehatan manusia secara bersamaan.",
    counterTitle: "Menjawab argumen tandingan",
    counterarguments: [
      {
        q: "\"Tapi kita butuh antibiotik demi ketahanan pangan!\"",
        a: "Ketika Uni Eropa melarang antibiotik pemacu pertumbuhan pada 2006, penggunaan antibiotik pada ternak turun 50% tanpa penurunan produksi daging. Produksi babi Denmark justru meningkat setelah larangan itu, karena peternak beralih ke kebersihan dan vaksinasi yang lebih baik.",
      },
      {
        q: "\"Tapi alternatifnya terlalu mahal!\"",
        a: "Produksi biochar dari sekam padi hanya berbiaya sekitar $0,05 per liter limbah yang diolah. Jika dibiarkan, AMR dapat mendorong 28 juta orang ke jurang kemiskinan pada 2050. Subsidi fasilitas pengomposan dan pelatihan petani adalah investasi infrastruktur kesehatan publik, bukan pengeluaran yang harus dihindari.",
      },
    ],
    solutionsTitle: "Enam Solusi Berbasis Bukti",
    solutionsIntro: "Enam intervensi terkoordinasi membentuk respons kebijakan yang komprehensif.",
    items: [
      {
        title: "Menegakkan Permentan No. 14/2017",
        detail: "Melarang antibiotik pemacu pertumbuhan dalam pakan melalui inspeksi rutin, sanksi yang berarti, dan subsidi transisi bagi petani kecil.",
        evidence: "Undang-undang Indonesia yang sudah ada — penegakan, bukan regulasi baru, yang menjadi celah.",
      },
      {
        title: "Mandat Pengomposan 60 Hari",
        detail: "Mewajibkan pengomposan kotoran ternak minimal 60 hari sebelum diaplikasikan ke lahan, melalui fasilitas komunitas bersubsidi.",
        evidence: "Menghancurkan 90–99% bakteri resisten sebelum kotoran mencapai tanah.",
      },
      {
        title: "Filter Biochar dari Sekam Padi",
        detail: "Menerapkan filter biochar berbiaya rendah dari sekam padi yang melimpah secara lokal, di tingkat peternakan.",
        evidence: "Menghilangkan 94% Pseudomonas aeruginosa, 88% klaritromisin (Xiang et al., 2022).",
      },
      {
        title: "Pelatihan Petani",
        detail: "Melatih petani dalam kebersihan, vaksinasi, dan pengomposan sebagai alternatif penggunaan antibiotik rutin.",
        evidence: "Menurunkan penggunaan antibiotik hingga 40% pada peternakan unggas Thailand dalam dua tahun — dapat langsung direplikasi di Indonesia (FAO, 2019).",
      },
      {
        title: "Pengolahan Air Limbah Canggih",
        detail: "Mewajibkan ozonasi, filtrasi karbon aktif, dan bioreaktor membran untuk seluruh pabrik dan rumah sakit di DAS Citarum.",
        evidence: "Ozonasi: 99% penghilangan bakteri. Karbon aktif: 90–95% penghilangan antibiotik. Bioreaktor membran: 99,9% penghilangan bakteri.",
      },
      {
        title: "Bakteriofag & Probiotik",
        detail: "Menggantikan penggunaan antibiotik rutin pada ternak dengan terapi bakteriofag dan suplementasi probiotik.",
        evidence: "Menurunkan infeksi Salmonella pada unggas sebesar 70% tanpa memicu resistensi.",
      },
    ],
    leadersTitle: "Peran Pemimpin Masa Depan",
    leadersIntro:
      "Krisis sistemik sebesar ini pada akhirnya diselesaikan oleh generasi yang mewarisinya. Pilih satu jalur untuk melihat maknanya dalam praktik.",
    roles: [
      {
        name: "Advokat",
        tagline: "Menuntut penegakan hukum, berorganisasi, dan meminta pertanggungjawaban.",
        actions: [
          "Menuntut penegakan regulasi yang sudah ada seperti Permentan No. 14/2017",
          "Mengorganisasi kampanye publik berbasis bukti",
          "Meminta pertanggungjawaban pemerintah dan korporasi",
        ],
      },
      {
        name: "Inovator",
        tagline: "Membangun solusi teknis lokal yang murah dan tepat guna.",
        actions: [
          "Merancang filter biochar berbiaya rendah untuk petani kecil",
          "Membangun sistem bergerak untuk memantau residu antibiotik di perairan",
          "Membuat prototipe dan menguji solusi bersama komunitas petani lokal",
        ],
      },
      {
        name: "Penghubung",
        tagline: "Mengubah bukti ilmiah menjadi narasi yang menggerakkan orang.",
        actions: [
          "Menerjemahkan data AMR yang kompleks menjadi kisah yang mudah dipahami",
          "Menjembatani kesenjangan antara bukti dan tindakan kebijakan",
          "Mendorong perubahan lintas sektor dan komunitas",
        ],
      },
    ],
    actionsTitle: "Tindakan Individu yang Berarti",
    actionsIntro: "Reformasi kebijakan dan perilaku individu saling memperkuat, bukan saling bersaing.",
    actions: [
      "Jangan pernah membeli antibiotik tanpa resep",
      "Selalu habiskan dosis yang diresepkan",
      "Tanyakan pada dokter apakah antibiotik benar-benar diperlukan",
      "Pilih daging dan telur bebas antibiotik untuk mendukung pertanian berkelanjutan",
      "Dukung produsen lokal dan pasar tani",
      "Bagikan pengetahuan tentang AMR — kesadaran adalah langkah pertama",
    ],
  },
  takeAction: {
    kicker: "Bagian 6 — Ambil Tindakan",
    title: "Bergabunglah dengan Gerakan Ini",
    intro:
      "Pengetahuannya sudah ada. Solusinya sudah terbukti. Pertanyaannya adalah apakah generasi berikutnya akan bertindak sebelum jendela kesempatan tertutup.",
    pledgeTitle: "Buat komitmen",
    pledgeText:
      "Berkomitmenlah pada setidaknya satu tindakan berbasis bukti dari halaman ini — dan bergabunglah dengan mereka yang sudah melakukannya.",
    pledgeCta: "Saya berkomitmen bertindak",
    pledgeDone: "Terima kasih — Anda sudah tercatat.",
    pledgeCountLabel: "orang telah berkomitmen untuk bertindak",
    shareTitle: "Bagikan fakta ini",
    shareIntro: "Kesadaran adalah langkah pertama menuju perubahan kebijakan dan perilaku pribadi.",
    shareStat: "Amoxicillin ditemukan di setiap sampel air yang diuji di Citarum Hulu. Resistensi antimikroba adalah salah satu dari 10 ancaman kesehatan global teratas menurut WHO.",
    resourcesTitle: "Sumber yang Dapat Diunduh",
    essayCta: "Unduh esai lengkap (PDF)",
    newsletterTitle: "Tetap terinformasi",
    newsletterText: "Dapatkan pembaruan berkala tentang kemajuan kebijakan AMR di Indonesia.",
    newsletterPlaceholder: "anda@contoh.com",
    newsletterCta: "Daftar",
    newsletterSuccess: "Anda sudah terdaftar — terima kasih.",
  },
  about: {
    kicker: "1.1 Tim Kami",
    title: "Tentang",
    titleAccent: "Kami",
    intro:
      "Lima siswa dari SMA Ibnu Hajar Boarding School meneliti, menulis, dan membangun proyek ini agar resistensi antimikroba tidak lagi bisa diabaikan.",
    missionTitle: "Misi Kami",
    mission:
      "Menerjemahkan sains yang ketat tentang Sungai Citarum dan resistensi antimikroba menjadi kisah yang menggerakkan orang untuk bertindak — membuktikan bahwa generasi pemimpin berikutnya sudah mulai bekerja.",
    institutionName: "SMA Ibnu Hajar Boarding School",
    institutionLocation: "Depok, Jawa Barat, Indonesia",
    institutionYear: "2026",
    contactTitle: "Hubungi tim",
  },
  resources: {
    kicker: "Bagian 7 — Sumber",
    title: "Pelajari Lebih Dalam",
    intro: "Setiap angka di situs ini diambil dari sumber-sumber berikut.",
    essayTitle: "Esai Lengkap",
    essayText:
      "\"Reclaiming the Earth We Farm: Sustainable Agriculture and Environmental Action as a Global Strategy Against Antimicrobial Resistance\" — esai akademik lengkap yang menjadi dasar situs web ini.",
    essayDownload: "Unduh PDF",
    essayRead: "Baca daring",
    posterTitle: "Poster Kami",
    posterText:
      "Infografis kompetisi kami — keseluruhan kisah AMR dan Sungai Citarum, dirangkum dalam satu visual. Ketuk untuk melihat ukuran penuh.",
    posterView: "Lihat ukuran penuh",
    posterDownload: "Unduh poster",
    referencesTitle: "Referensi",
    referencesIntro: "Seluruh 16 sumber yang dikutip dalam esai, dalam gaya APA.",
    glossaryTitle: "Glosarium",
    glossary: [
      { term: "Resistensi Antimikroba (AMR)", def: "Kemampuan mikroorganisme (bakteri, virus, jamur, parasit) untuk bertahan dari obat yang dulunya dapat membunuh atau menghentikan pertumbuhannya." },
      { term: "Satu Kesehatan (One Health)", def: "Kerangka yang mengakui bahwa kesehatan manusia, hewan, dan lingkungan saling terkait dan harus ditangani bersama." },
      { term: "Transfer Gen Horizontal (HGT)", def: "Perpindahan materi genetik — termasuk gen resistensi — antar organisme di luar proses reproduksi." },
      { term: "Pemacu Pertumbuhan", def: "Antibiotik yang diberikan pada ternak dalam dosis rendah bukan untuk mengobati penyakit, tetapi untuk mempercepat pertumbuhan dan berat badan." },
      { term: "Biochar", def: "Material menyerupai arang yang dihasilkan dari bahan organik (misalnya sekam padi) yang dapat menyaring pencemar dari air." },
      { term: "Oksigen Terlarut", def: "Jumlah oksigen dalam air, penting bagi kehidupan akuatik; kadar yang sangat rendah menandakan pencemaran parah." },
      { term: "Bakteriofag", def: "Virus yang menginfeksi dan membunuh bakteri tertentu, dapat digunakan sebagai alternatif antibiotik yang tertarget." },
    ],
    linksTitle: "Sumber Eksternal",
    links: [
      { label: "World Health Organization — Resistensi Antimikroba", url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance" },
      { label: "BRIN — Badan Riset dan Inovasi Nasional", url: "https://www.brin.go.id/" },
      { label: "FAO — One Health", url: "https://www.fao.org/one-health/en" },
    ],
  },
  footer: {
    tagline: "Sebuah investigasi tentang Sungai Citarum, resistensi antimikroba, dan jalan kembali.",
    quickLinksTitle: "Tautan Cepat",
    credits: "Dibangun untuk Kompetisi Kesadaran AMR oleh SMA Ibnu Hajar Boarding School.",
    copyright: "SMA Ibnu Hajar Boarding School. Seluruh hak cipta dilindungi.",
  },
};
