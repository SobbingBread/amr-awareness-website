import type { CategoryId, Difficulty } from "./challengeCategories";

interface Answer {
  tldr: string;
  body: string;
  take: string;
}

export interface QAItem {
  id: number;
  category: CategoryId;
  difficulty: Difficulty;
  q: { en: string; id: string };
  a: { en: Answer; id: Answer };
}

export const qaItems: QAItem[] = [
  // ── CATEGORY 1: WHAT IS AMR? (basics) ─────────────────────────────
  {
    id: 1,
    category: "basics",
    difficulty: "easy",
    q: {
      en: "What exactly is antimicrobial resistance (AMR) in simple terms?",
      id: "Apa sebenarnya resistensi antimikroba (AMR) dalam istilah sederhana?",
    },
    a: {
      en: {
        tldr: "AMR is when the germs that make us sick stop responding to the medicines meant to kill them.",
        body: "Antibiotics normally kill bacteria or stop them growing. When bacteria meet those drugs over and over — especially at low doses — the survivors adapt, and eventually the medicine stops working. An infection that used to be easy to cure becomes hard or impossible to treat.",
        take: "The WHO ranks AMR among the top 10 global public health threats.",
      },
      id: {
        tldr: "AMR (Antimicrobial Resistance / Resistensi Antimikroba) adalah ketika kuman penyebab penyakit tidak lagi merespons obat yang seharusnya membunuhnya.",
        body: "Antibiotik biasanya membunuh bakteri atau menghentikan pertumbuhannya. Ketika bakteri berulang kali terpapar obat tersebut — terutama pada dosis rendah — yang bertahan hidup akan beradaptasi, dan akhirnya obat itu tidak lagi bekerja. Infeksi yang dulu mudah disembuhkan menjadi sulit atau tidak dapat diobati.",
        take: "WHO menempatkan AMR di antara 10 ancaman kesehatan global teratas.",
      },
    },
  },
  {
    id: 2,
    category: "basics",
    difficulty: "easy",
    q: {
      en: "How is AMR different from normal bacteria?",
      id: "Apa bedanya AMR dengan bakteri biasa?",
    },
    a: {
      en: {
        tldr: "Normal bacteria die when you take the right antibiotic; resistant bacteria survive it.",
        body: "Most bacteria are harmless or easily treated. Resistant bacteria carry genetic \"tricks\" that let them survive drugs that would kill ordinary germs. So the same infection, caused by a resistant strain, no longer responds to standard treatment.",
        take: "Think of antibiotics as keys and bacteria as locks — resistant bacteria changed the lock so the key no longer fits.",
      },
      id: {
        tldr: "Bakteri biasa mati ketika diberi antibiotik yang tepat; bakteri resisten tetap bertahan hidup.",
        body: "Sebagian besar bakteri tidak berbahaya atau mudah diobati. Bakteri resisten memiliki \"trik\" genetik yang membuatnya bertahan dari obat yang seharusnya membunuh kuman biasa. Jadi infeksi yang sama, jika disebabkan strain resisten, tidak lagi merespons pengobatan standar.",
        take: "Bayangkan antibiotik sebagai kunci dan bakteri sebagai gembok — bakteri resisten mengubah gemboknya sehingga kunci tak lagi cocok.",
      },
    },
  },
  {
    id: 3,
    category: "basics",
    difficulty: "medium",
    q: {
      en: "Why is AMR called a \"silent pandemic\"?",
      id: "Mengapa AMR disebut \"pandemi senyap\"?",
    },
    a: {
      en: {
        tldr: "It kills millions quietly, without the alarm of an outbreak like COVID.",
        body: "There's no single dramatic event — just individual infections that slowly stop responding to treatment, in hospitals and homes worldwide. AMR is already linked to nearly 5 million deaths a year, yet most people have never heard of it.",
        take: "4.95M deaths are associated with AMR every year — over 3,500 lives a day (Murray et al., Lancet 2022).",
      },
      id: {
        tldr: "Ia membunuh jutaan orang secara diam-diam, tanpa alarm wabah seperti COVID.",
        body: "Tidak ada satu peristiwa dramatis — hanya infeksi-infeksi individual yang perlahan berhenti merespons pengobatan, di rumah sakit dan rumah di seluruh dunia. AMR sudah dikaitkan dengan hampir 5 juta kematian per tahun, namun kebanyakan orang belum pernah mendengarnya.",
        take: "4,95 juta kematian dikaitkan dengan AMR setiap tahun — lebih dari 3.500 jiwa per hari (Murray dkk., Lancet 2022).",
      },
    },
  },
  {
    id: 4,
    category: "basics",
    difficulty: "medium",
    q: {
      en: "Can you explain \"horizontal gene transfer\" simply?",
      id: "Bisakah Anda menjelaskan \"transfer gen horizontal\" secara sederhana?",
    },
    a: {
      en: {
        tldr: "It's how bacteria \"share\" resistance with each other, like passing notes in class.",
        body: "Instead of only inheriting genes from a parent, bacteria can hand resistance genes directly to their neighbours — even to different species. This means resistance can spread through a whole bacterial community without the bacteria even having to reproduce.",
        take: "This is why a resistance gene in river bacteria can end up in bacteria that infect humans.",
      },
      id: {
        tldr: "Ini cara bakteri \"berbagi\" resistensi satu sama lain, seperti mengoper catatan di kelas.",
        body: "Alih-alih hanya mewarisi gen dari induk, bakteri dapat memberikan gen resistensi langsung ke tetangganya — bahkan ke spesies berbeda. Artinya resistensi bisa menyebar ke seluruh komunitas bakteri tanpa bakteri itu perlu berkembang biak.",
        take: "Inilah sebabnya gen resistensi di bakteri sungai bisa berakhir di bakteri yang menginfeksi manusia.",
      },
    },
  },
  {
    id: 5,
    category: "basics",
    difficulty: "hard",
    q: {
      en: "What do blaCTX-M, mcr-1, and tet genes actually do?",
      id: "Apa sebenarnya fungsi gen blaCTX-M, mcr-1, dan tet?",
    },
    a: {
      en: {
        tldr: "They're the specific genes that make bacteria resistant to key antibiotics — and all three were found in the Citarum.",
        body: "blaCTX-M defeats cephalosporins (a major hospital antibiotic class); mcr-1 defeats colistin, a last-resort drug used when nothing else works; and tetA/tetB/tetM defeat tetracyclines, common in livestock. Finding mcr-1 is especially alarming because colistin is the medicine of last resort.",
        take: "All of these were detected in Citarum sediment — at up to 10⁸ gene copies per gram.",
      },
      id: {
        tldr: "Itulah gen-gen spesifik yang membuat bakteri resisten terhadap antibiotik penting — dan ketiganya ditemukan di Citarum.",
        body: "blaCTX-M mengalahkan sefalosporin (kelas antibiotik utama rumah sakit); mcr-1 mengalahkan kolistin, obat pilihan terakhir saat obat lain gagal; dan tetA/tetB/tetM mengalahkan tetrasiklin yang umum pada ternak. Ditemukannya mcr-1 sangat mengkhawatirkan karena kolistin adalah obat pamungkas.",
        take: "Semua ini terdeteksi di sedimen Citarum — hingga 10⁸ salinan gen per gram.",
      },
    },
  },
  {
    id: 6,
    category: "basics",
    difficulty: "easy",
    q: {
      en: "Is AMR only about bacteria, or does it include viruses and fungi too?",
      id: "Apakah AMR hanya soal bakteri, atau termasuk virus dan jamur juga?",
    },
    a: {
      en: {
        tldr: "No — it also covers resistant viruses, fungi, and parasites, but bacteria are the biggest concern here.",
        body: "\"Antimicrobial\" is the umbrella term; antibiotic resistance in bacteria is the part driving the Citarum crisis. Our essay focuses on bacteria because they're what antibiotic pollution in the river selects for.",
        take: "AMR = all microbes; antibiotic resistance is the bacterial subset we focus on.",
      },
      id: {
        tldr: "Tidak — ia juga mencakup virus, jamur, dan parasit yang resisten, tetapi bakteri adalah perhatian terbesar di sini.",
        body: "\"Antimikroba\" adalah istilah payung; resistensi antibiotik pada bakteri adalah bagian yang mendorong krisis Citarum. Esai kami fokus pada bakteri karena itulah yang diseleksi oleh pencemaran antibiotik di sungai.",
        take: "AMR = seluruh mikroba; resistensi antibiotik adalah bagian bakteri yang kami soroti.",
      },
    },
  },
  {
    id: 7,
    category: "basics",
    difficulty: "medium",
    q: {
      en: "How long does it take for bacteria to become resistant?",
      id: "Berapa lama waktu yang dibutuhkan bakteri untuk menjadi resisten?",
    },
    a: {
      en: {
        tldr: "Sometimes just days — bacteria reproduce every 20 minutes, so evolution is fast.",
        body: "Under constant low-dose antibiotic pressure, resistant survivors can dominate a population within days to weeks. In a river continuously fed with antibiotics, that pressure never stops.",
        take: "Continuous sub-lethal exposure is worse than one big dose — it steadily selects for resistance.",
      },
      id: {
        tldr: "Kadang hanya beberapa hari — bakteri berkembang biak setiap 20 menit, jadi evolusinya cepat.",
        body: "Di bawah tekanan antibiotik dosis rendah yang terus-menerus, bakteri resisten yang bertahan bisa mendominasi populasi dalam hitungan hari hingga minggu. Di sungai yang terus dialiri antibiotik, tekanan itu tak pernah berhenti.",
        take: "Paparan sub-mematikan yang terus-menerus lebih buruk daripada satu dosis besar — ia perlahan menyeleksi resistensi.",
      },
    },
  },
  {
    id: 8,
    category: "basics",
    difficulty: "hard",
    q: {
      en: "Can AMR be reversed once it develops?",
      id: "Bisakah AMR dibalik setelah terbentuk?",
    },
    a: {
      en: {
        tldr: "Not really — on human timescales, genetic pollution is essentially permanent.",
        body: "Resistance genes can persist in river sediment for decades or even centuries. Even if all antibiotic use stopped today, future bacteria could still inherit resistance from ancestors. That's why prevention beats cleanup.",
        take: "Unlike plastic, you can't \"remove\" resistance genes once they're in the environment.",
      },
      id: {
        tldr: "Tidak juga — dalam skala waktu manusia, pencemaran genetik pada dasarnya permanen.",
        body: "Gen resistensi dapat bertahan di sedimen sungai selama puluhan bahkan ratusan tahun. Bahkan jika seluruh penggunaan antibiotik dihentikan hari ini, bakteri masa depan tetap bisa mewarisi resistensi dari leluhurnya. Itulah mengapa pencegahan mengalahkan pemulihan.",
        take: "Berbeda dengan plastik, Anda tidak bisa \"membuang\" gen resistensi setelah ada di lingkungan.",
      },
    },
  },

  // ── CATEGORY 2: THE CITARUM RIVER (citarum) ───────────────────────
  {
    id: 9,
    category: "citarum",
    difficulty: "easy",
    q: {
      en: "Why did you choose the Citarum River as your case study?",
      id: "Mengapa Anda memilih Sungai Citarum sebagai studi kasus?",
    },
    a: {
      en: {
        tldr: "It's a local river with global lessons — and 28 million lives depend on it.",
        body: "The Citarum supplies 80% of Jakarta's drinking water and irrigates 400,000 hectares of rice, yet it's one of the world's most polluted rivers. It lets us show a global problem (AMR) through a place we know intimately.",
        take: "Local expertise + global stakes = a story judges can't ignore.",
      },
      id: {
        tldr: "Ini sungai lokal dengan pelajaran global — dan 28 juta jiwa bergantung padanya.",
        body: "Citarum memasok 80% air minum Jakarta dan mengairi 400.000 hektar sawah, namun menjadi salah satu sungai paling tercemar di dunia. Sungai ini memungkinkan kami menunjukkan masalah global (AMR) melalui tempat yang kami kenal betul.",
        take: "Keahlian lokal + taruhan global = kisah yang tak bisa diabaikan juri.",
      },
    },
  },
  {
    id: 10,
    category: "citarum",
    difficulty: "medium",
    q: {
      en: "How polluted is the Citarum compared to other world rivers?",
      id: "Seberapa tercemar Citarum dibandingkan sungai-sungai dunia lainnya?",
    },
    a: {
      en: {
        tldr: "It's regularly ranked among the most polluted rivers on Earth.",
        body: "It receives discharge from 2,000+ factories, roughly 280,000 tons of untreated sewage and about 20,000 tons of plastic a year. In some stretches oxygen is so low the government has declared it biologically dead.",
        take: "The invisible antibiotic pollution is even more dangerous than the visible waste.",
      },
      id: {
        tldr: "Ia secara rutin masuk daftar sungai paling tercemar di Bumi.",
        body: "Ia menerima limbah dari 2.000+ pabrik, sekitar 280.000 ton limbah domestik tak terolah dan sekitar 20.000 ton plastik per tahun. Di beberapa titik, oksigennya begitu rendah hingga pemerintah menyatakannya mati secara biologis.",
        take: "Pencemaran antibiotik yang tak terlihat bahkan lebih berbahaya daripada sampah yang terlihat.",
      },
    },
  },
  {
    id: 11,
    category: "citarum",
    difficulty: "hard",
    q: {
      en: "What does BRIN's 2021 study specifically tell us about the Citarum?",
      id: "Apa yang secara spesifik dikatakan studi BRIN 2021 tentang Citarum?",
    },
    a: {
      en: {
        tldr: "Amoxicillin was found in every single water sample from the Upper Citarum.",
        body: "Indonesia's National Research and Innovation Agency (BRIN) tested Upper Citarum water in 2021 and detected amoxicillin residues in 100% of samples. That means the whole upstream watershed is under constant antibiotic pressure.",
        take: "\"Every sample\" is the finding that makes judges pay attention.",
      },
      id: {
        tldr: "Amoxicillin ditemukan di setiap sampel air dari Citarum Hulu.",
        body: "Badan Riset dan Inovasi Nasional (BRIN) menguji air Citarum Hulu pada 2021 dan mendeteksi residu amoxicillin di 100% sampel. Artinya seluruh daerah aliran sungai bagian hulu berada di bawah tekanan antibiotik yang terus-menerus.",
        take: "\"Setiap sampel\" adalah temuan yang membuat juri menaruh perhatian.",
      },
    },
  },
  {
    id: 12,
    category: "citarum",
    difficulty: "medium",
    q: {
      en: "How does the Citarum supply water to 28 million people if it's so polluted?",
      id: "Bagaimana Citarum memasok air ke 28 juta orang jika begitu tercemar?",
    },
    a: {
      en: {
        tldr: "The water is treated before drinking — but treatment doesn't remove resistance genes.",
        body: "Conventional treatment removes visible dirt and many pathogens, but standard plants aren't designed to remove antibiotic residues or resistance genes. So the invisible threat can pass straight through.",
        take: "This is exactly why we call for advanced treatment like ozonation and activated carbon.",
      },
      id: {
        tldr: "Airnya diolah sebelum diminum — tetapi pengolahan tidak menghilangkan gen resistensi.",
        body: "Pengolahan konvensional menghilangkan kotoran kasat mata dan banyak patogen, tetapi instalasi standar tidak dirancang untuk menghilangkan residu antibiotik atau gen resistensi. Jadi ancaman tak terlihat itu bisa lolos begitu saja.",
        take: "Inilah alasan kami menyerukan pengolahan canggih seperti ozonasi dan karbon aktif.",
      },
    },
  },
  {
    id: 13,
    category: "citarum",
    difficulty: "medium",
    q: {
      en: "What is the Indonesian government currently doing about Citarum pollution?",
      id: "Apa yang sedang dilakukan pemerintah Indonesia terhadap pencemaran Citarum?",
    },
    a: {
      en: {
        tldr: "The \"Citarum Harum\" program (since 2018) is a major military-led cleanup — but it targets visible pollution.",
        body: "Presidential Regulation 15/2018 launched a seven-year plan that improved waste collection and factory monitoring. However, it wasn't designed around antibiotic residues or AMR specifically.",
        take: "Our proposal adds the missing \"invisible pollution\" layer to existing efforts.",
      },
      id: {
        tldr: "Program \"Citarum Harum\" (sejak 2018) adalah pembersihan besar yang dipimpin militer — tetapi menyasar pencemaran yang terlihat.",
        body: "Peraturan Presiden 15/2018 meluncurkan rencana tujuh tahun yang memperbaiki pengelolaan sampah dan pemantauan pabrik. Namun program itu tidak dirancang khusus untuk residu antibiotik atau AMR.",
        take: "Usulan kami menambahkan lapisan \"pencemaran tak terlihat\" yang hilang dari upaya yang ada.",
      },
    },
  },
  {
    id: 14,
    category: "citarum",
    difficulty: "medium",
    q: {
      en: "Are there successful river restoration projects we can learn from?",
      id: "Adakah proyek restorasi sungai yang berhasil yang bisa kita pelajari?",
    },
    a: {
      en: {
        tldr: "Yes — Citarum Harum itself shows cleanup is possible with political will.",
        body: "Oxygen levels and waste collection have improved in monitored stretches, proving change is achievable. Internationally, London's Thames went from \"biologically dead\" in the 1950s to healthy through sustained regulation.",
        take: "Rivers can recover — but only if we act before genetic pollution locks in.",
      },
      id: {
        tldr: "Ya — Citarum Harum sendiri menunjukkan pembersihan mungkin dilakukan dengan kemauan politik.",
        body: "Kadar oksigen dan pengumpulan sampah membaik di ruas-ruas yang dipantau, membuktikan perubahan bisa dicapai. Secara internasional, Sungai Thames di London berubah dari \"mati secara biologis\" pada 1950-an menjadi sehat melalui regulasi yang konsisten.",
        take: "Sungai bisa pulih — tetapi hanya jika kita bertindak sebelum pencemaran genetik mengunci.",
      },
    },
  },
  {
    id: 15,
    category: "citarum",
    difficulty: "hard",
    q: {
      en: "How do textile factories contribute to AMR in the Citarum specifically?",
      id: "Bagaimana pabrik tekstil secara spesifik berkontribusi pada AMR di Citarum?",
    },
    a: {
      en: {
        tldr: "Their untreated discharge adds both antibiotics and the chemical stress that speeds resistance.",
        body: "Beyond dyes, factory effluent can carry pharmaceutical and antibacterial compounds, plus heavy metals that co-select for resistance genes. Mixed with farm runoff, it turns the river into an ideal breeding ground.",
        take: "Pollution sources combine — agriculture is the biggest driver, but industry amplifies it.",
      },
      id: {
        tldr: "Limbah tak terolahnya menambah antibiotik sekaligus tekanan kimia yang mempercepat resistensi.",
        body: "Selain pewarna, limbah pabrik dapat membawa senyawa farmasi dan antibakteri, ditambah logam berat yang ikut menyeleksi gen resistensi. Bercampur dengan limpasan pertanian, ia mengubah sungai menjadi tempat berkembang biak yang ideal.",
        take: "Sumber pencemaran saling bergabung — pertanian pendorong terbesar, tetapi industri memperkuatnya.",
      },
    },
  },
  {
    id: 16,
    category: "citarum",
    difficulty: "medium",
    q: {
      en: "What happens to fish and crops grown with Citarum water?",
      id: "Apa yang terjadi pada ikan dan tanaman yang dibesarkan dengan air Citarum?",
    },
    a: {
      en: {
        tldr: "Resistant bacteria and residues accumulate in fish tissue and enter crops through irrigation.",
        body: "Rice paddies irrigated with Citarum water can take up contamination, and fish living in it carry resistant bacteria. That puts resistance directly into the food chain people eat.",
        take: "The river doesn't just carry AMR — it delivers it to your dinner plate.",
      },
      id: {
        tldr: "Bakteri resisten dan residu menumpuk di jaringan ikan dan masuk ke tanaman melalui irigasi.",
        body: "Sawah yang diairi air Citarum dapat menyerap kontaminasi, dan ikan yang hidup di dalamnya membawa bakteri resisten. Itu menempatkan resistensi langsung ke rantai makanan yang dikonsumsi manusia.",
        take: "Sungai tak hanya membawa AMR — ia mengantarkannya ke piring makan Anda.",
      },
    },
  },

  // ── CATEGORY 3: AGRICULTURE & FARMING (agriculture) ───────────────
  {
    id: 17,
    category: "agriculture",
    difficulty: "easy",
    q: {
      en: "Why do farmers use antibiotics in animal feed in the first place?",
      id: "Mengapa peternak menggunakan antibiotik dalam pakan ternak sejak awal?",
    },
    a: {
      en: {
        tldr: "To make animals grow faster and prevent disease in crowded farms — not to treat sick animals.",
        body: "In dense factory-farm conditions, low-dose antibiotics boost growth and prevent outbreaks cheaply. It's an economic shortcut, not a medical necessity.",
        take: "Agriculture uses 73% of all antibiotics consumed globally (Van Boeckel et al., 2019).",
      },
      id: {
        tldr: "Untuk mempercepat pertumbuhan hewan dan mencegah penyakit di peternakan padat — bukan untuk mengobati hewan sakit.",
        body: "Dalam kondisi peternakan padat, antibiotik dosis rendah mendongkrak pertumbuhan dan mencegah wabah dengan murah. Ini jalan pintas ekonomi, bukan kebutuhan medis.",
        take: "Pertanian menggunakan 73% seluruh antibiotik yang dikonsumsi dunia (Van Boeckel dkk., 2019).",
      },
    },
  },
  {
    id: 18,
    category: "agriculture",
    difficulty: "medium",
    q: {
      en: "What percentage of antibiotics given to animals end up in the environment?",
      id: "Berapa persen antibiotik yang diberikan ke hewan berakhir di lingkungan?",
    },
    a: {
      en: {
        tldr: "Between 50% and 70% of every dose leaves the animal unchanged.",
        body: "Animals don't fully metabolise antibiotics, so most of each dose passes out in manure, still biologically active. When that manure hits fields and rain, it flows into rivers.",
        take: "The drug doesn't disappear inside the animal — it moves into the environment.",
      },
      id: {
        tldr: "Antara 50% dan 70% dari setiap dosis keluar dari hewan tanpa berubah.",
        body: "Hewan tidak sepenuhnya memetabolisme antibiotik, jadi sebagian besar dosis keluar melalui kotoran, masih aktif secara biologis. Ketika kotoran itu mengenai lahan dan hujan, ia mengalir ke sungai.",
        take: "Obat itu tidak lenyap di dalam hewan — ia berpindah ke lingkungan.",
      },
    },
  },
  {
    id: 19,
    category: "agriculture",
    difficulty: "medium",
    q: {
      en: "How does raw manure spread antibiotic resistance?",
      id: "Bagaimana kotoran mentah menyebarkan resistensi antibiotik?",
    },
    a: {
      en: {
        tldr: "It carries both live resistant bacteria and active antibiotics straight onto fields.",
        body: "Farmers spread raw manure as fertilizer; rain then washes the resistant bacteria and leftover drugs into streams that feed the Citarum. The bacteria keep breeding and sharing resistance genes along the way.",
        take: "This is why 60-day composting before spreading is one of our key solutions.",
      },
      id: {
        tldr: "Ia membawa bakteri resisten hidup sekaligus antibiotik aktif langsung ke lahan.",
        body: "Peternak menyebar kotoran mentah sebagai pupuk; hujan lalu membawa bakteri resisten dan sisa obat ke anak sungai yang mengalir ke Citarum. Bakteri terus berkembang biak dan berbagi gen resistensi sepanjang jalan.",
        take: "Inilah mengapa pengomposan 60 hari sebelum penyebaran menjadi salah satu solusi utama kami.",
      },
    },
  },
  {
    id: 20,
    category: "agriculture",
    difficulty: "medium",
    q: {
      en: "What are \"growth-promoting antibiotics\" and why are they banned in the EU?",
      id: "Apa itu \"antibiotik pemacu pertumbuhan\" dan mengapa dilarang di Uni Eropa?",
    },
    a: {
      en: {
        tldr: "Low-dose antibiotics used purely to fatten animals — the EU banned them in 2006.",
        body: "They provide no medical benefit but constantly expose bacteria to drugs, breeding resistance. After the ban, EU livestock antibiotic use fell by 50% with no collapse in meat production.",
        take: "Danish pig production actually increased after the ban (EMA, 2017).",
      },
      id: {
        tldr: "Antibiotik dosis rendah yang dipakai murni untuk menggemukkan hewan — Uni Eropa melarangnya pada 2006.",
        body: "Ia tak memberi manfaat medis tetapi terus memaparkan bakteri pada obat, menumbuhkan resistensi. Setelah larangan, penggunaan antibiotik ternak Uni Eropa turun 50% tanpa keruntuhan produksi daging.",
        take: "Produksi babi Denmark justru meningkat setelah larangan (EMA, 2017).",
      },
    },
  },
  {
    id: 21,
    category: "agriculture",
    difficulty: "hard",
    q: {
      en: "Is organic farming a realistic solution for Indonesia?",
      id: "Apakah pertanian organik solusi realistis untuk Indonesia?",
    },
    a: {
      en: {
        tldr: "Full organic isn't required — better hygiene, vaccination and composting are enough.",
        body: "We're not asking every farm to go organic overnight; we're asking them to stop routine antibiotics and adopt proven alternatives. Thailand cut poultry antibiotic use 40% in two years this way.",
        take: "The goal is smarter farming, not a return to the past (FAO, 2019).",
      },
      id: {
        tldr: "Organik penuh tidak wajib — kebersihan lebih baik, vaksinasi, dan pengomposan sudah cukup.",
        body: "Kami tidak meminta setiap peternakan menjadi organik dalam semalam; kami meminta mereka menghentikan antibiotik rutin dan mengadopsi alternatif yang terbukti. Thailand memangkas penggunaan antibiotik unggas 40% dalam dua tahun dengan cara ini.",
        take: "Tujuannya bertani lebih cerdas, bukan kembali ke masa lalu (FAO, 2019).",
      },
    },
  },
  {
    id: 22,
    category: "agriculture",
    difficulty: "medium",
    q: {
      en: "How do biochar filters actually work?",
      id: "Bagaimana sebenarnya filter biochar bekerja?",
    },
    a: {
      en: {
        tldr: "Biochar is charcoal made from rice husks that acts like a sponge for antibiotics.",
        body: "Its huge internal surface area traps antibiotic molecules and bacteria as water passes through, pulling them out before the water reaches the river. It's cheap because rice husks are farm waste.",
        take: "94% removal of Pseudomonas and 88% of clarithromycin (Xiang et al., 2022).",
      },
      id: {
        tldr: "Biochar adalah arang dari sekam padi yang berfungsi seperti spons untuk antibiotik.",
        body: "Luas permukaan internalnya yang besar menjebak molekul antibiotik dan bakteri saat air melewatinya, menariknya keluar sebelum air mencapai sungai. Ia murah karena sekam padi adalah limbah pertanian.",
        take: "Menghilangkan 94% Pseudomonas dan 88% klaritromisin (Xiang dkk., 2022).",
      },
    },
  },
  {
    id: 23,
    category: "agriculture",
    difficulty: "medium",
    q: {
      en: "What is manure composting and why does it need 60 days?",
      id: "Apa itu pengomposan kotoran dan mengapa butuh 60 hari?",
    },
    a: {
      en: {
        tldr: "Letting manure decompose for 60 days lets natural heat destroy resistant bacteria.",
        body: "As manure composts, temperatures rise and time passes, killing 90-99% of resistant bacteria before it's spread on fields. Sixty days is the tested minimum for reliable kill.",
        take: "A simple, low-tech step that breaks the farm-to-river chain (Manyi-Loh et al., 2018).",
      },
      id: {
        tldr: "Membiarkan kotoran terurai selama 60 hari memungkinkan panas alami menghancurkan bakteri resisten.",
        body: "Saat kotoran mengompos, suhu naik dan waktu berjalan, membunuh 90-99% bakteri resisten sebelum disebar ke lahan. Enam puluh hari adalah minimum teruji untuk pembasmian yang andal.",
        take: "Langkah sederhana berteknologi rendah yang memutus rantai peternakan-ke-sungai (Manyi-Loh dkk., 2018).",
      },
    },
  },
  {
    id: 24,
    category: "agriculture",
    difficulty: "hard",
    q: {
      en: "Can farmers still make a profit without using antibiotics?",
      id: "Bisakah peternak tetap untung tanpa menggunakan antibiotik?",
    },
    a: {
      en: {
        tldr: "Yes — Denmark and Thailand both stayed profitable after cutting antibiotics.",
        body: "Better hygiene and vaccination reduce disease losses, offsetting the loss of growth promoters. With transition subsidies for smallholders, Indonesian farmers can make the switch without going broke.",
        take: "Danish pig output rose after the EU ban — proof profit and responsibility coexist.",
      },
      id: {
        tldr: "Ya — Denmark dan Thailand sama-sama tetap untung setelah memangkas antibiotik.",
        body: "Kebersihan dan vaksinasi yang lebih baik mengurangi kerugian akibat penyakit, mengimbangi hilangnya pemacu pertumbuhan. Dengan subsidi transisi bagi petani kecil, peternak Indonesia bisa beralih tanpa bangkrut.",
        take: "Produksi babi Denmark naik setelah larangan Uni Eropa — bukti untung dan tanggung jawab bisa berjalan bersama.",
      },
    },
  },
  {
    id: 25,
    category: "agriculture",
    difficulty: "hard",
    q: {
      en: "What are bacteriophages and why aren't they used more?",
      id: "Apa itu bakteriofag dan mengapa belum banyak digunakan?",
    },
    a: {
      en: {
        tldr: "Phages are viruses that kill specific bacteria — precise, but under-used due to regulation and awareness.",
        body: "They target harmful bacteria without breeding broad resistance, and cut Salmonella in poultry by 70% in trials. They're not widespread yet because they need approval frameworks and are less familiar than antibiotics.",
        take: "A promising antibiotic alternative that doesn't fuel resistance (Kutter et al., 2019).",
      },
      id: {
        tldr: "Fag adalah virus yang membunuh bakteri tertentu — presisi, tetapi kurang dipakai karena regulasi dan kesadaran.",
        body: "Mereka menyasar bakteri berbahaya tanpa menumbuhkan resistensi luas, dan memangkas Salmonella pada unggas sebesar 70% dalam uji coba. Belum meluas karena butuh kerangka persetujuan dan kurang familier dibanding antibiotik.",
        take: "Alternatif antibiotik menjanjikan yang tidak memicu resistensi (Kutter dkk., 2019).",
      },
    },
  },
  {
    id: 26,
    category: "agriculture",
    difficulty: "medium",
    q: {
      en: "How does rice husk biochar remove antibiotics from water?",
      id: "Bagaimana biochar sekam padi menghilangkan antibiotik dari air?",
    },
    a: {
      en: {
        tldr: "Through adsorption — molecules stick to biochar's porous surface.",
        body: "When rice husks are heated without oxygen, they become carbon full of tiny pores. Antibiotic molecules bind to those pores as water flows through, so cleaner water comes out the other side.",
        take: "Turns agricultural waste into a water-cleaning tool for about $0.05 per litre treated.",
      },
      id: {
        tldr: "Melalui adsorpsi — molekul menempel pada permukaan berpori biochar.",
        body: "Ketika sekam padi dipanaskan tanpa oksigen, ia menjadi karbon penuh pori-pori kecil. Molekul antibiotik terikat pada pori itu saat air mengalir, sehingga air yang keluar lebih bersih.",
        take: "Mengubah limbah pertanian menjadi alat pembersih air seharga sekitar $0,05 per liter yang diolah.",
      },
    },
  },

  // ── CATEGORY 4: POLICY & LAW (policy) ─────────────────────────────
  {
    id: 27,
    category: "policy",
    difficulty: "hard",
    q: {
      en: "What is Permentan No.14/2017 and why hasn't it been enforced?",
      id: "Apa itu Permentan No.14/2017 dan mengapa belum ditegakkan?",
    },
    a: {
      en: {
        tldr: "It's Indonesia's regulation banning antibiotic growth promoters in feed — but enforcement is weak.",
        body: "The rule already exists on paper; the gap is inspections, penalties, and support for farmers to comply. Without enforcement, the ban has little effect on the ground.",
        take: "We don't need a new law — we need the existing one enforced.",
      },
      id: {
        tldr: "Ini regulasi Indonesia yang melarang antibiotik pemacu pertumbuhan dalam pakan — tetapi penegakannya lemah.",
        body: "Aturan sudah ada di atas kertas; celahnya ada pada inspeksi, sanksi, dan dukungan agar peternak patuh. Tanpa penegakan, larangan itu nyaris tak berdampak di lapangan.",
        take: "Kita tidak butuh undang-undang baru — kita butuh yang sudah ada ditegakkan.",
      },
    },
  },
  {
    id: 28,
    category: "policy",
    difficulty: "medium",
    q: {
      en: "How did the EU ban on growth-promoting antibiotics work out?",
      id: "Bagaimana hasil larangan Uni Eropa atas antibiotik pemacu pertumbuhan?",
    },
    a: {
      en: {
        tldr: "It worked — antibiotic use halved without wrecking food production.",
        body: "After 2006, EU livestock antibiotic use dropped 50% as farmers switched to hygiene and vaccination. Danish pork output even rose, disproving the \"we'll lose our food\" fear.",
        take: "The EU is living proof our proposal is realistic (EMA, 2017).",
      },
      id: {
        tldr: "Berhasil — penggunaan antibiotik separuh tanpa menghancurkan produksi pangan.",
        body: "Setelah 2006, penggunaan antibiotik ternak Uni Eropa turun 50% saat peternak beralih ke kebersihan dan vaksinasi. Produksi babi Denmark bahkan naik, membantah ketakutan \"pangan kita akan hilang\".",
        take: "Uni Eropa adalah bukti hidup usulan kami realistis (EMA, 2017).",
      },
    },
  },
  {
    id: 29,
    category: "policy",
    difficulty: "hard",
    q: {
      en: "What policies does Indonesia need that it doesn't currently have?",
      id: "Kebijakan apa yang dibutuhkan Indonesia yang belum dimilikinya?",
    },
    a: {
      en: {
        tldr: "Enforcement muscle, mandatory advanced wastewater treatment, and antibiotic-residue monitoring.",
        body: "Beyond enforcing Permentan No.14/2017, Indonesia needs required treatment for factory and hospital effluent and routine testing of rivers for antibiotics. Right now the invisible pollution isn't systematically tracked.",
        take: "You can't manage what you don't measure.",
      },
      id: {
        tldr: "Kekuatan penegakan, kewajiban pengolahan air limbah canggih, dan pemantauan residu antibiotik.",
        body: "Selain menegakkan Permentan No.14/2017, Indonesia perlu mewajibkan pengolahan limbah pabrik dan rumah sakit serta pengujian rutin sungai untuk antibiotik. Saat ini pencemaran tak terlihat itu tidak dipantau secara sistematis.",
        take: "Anda tidak bisa mengelola apa yang tidak Anda ukur.",
      },
    },
  },
  {
    id: 30,
    category: "policy",
    difficulty: "medium",
    q: {
      en: "Who should be responsible for regulating antibiotic use — government or industry?",
      id: "Siapa yang harus bertanggung jawab mengatur penggunaan antibiotik — pemerintah atau industri?",
    },
    a: {
      en: {
        tldr: "Both — government sets and enforces the rules; industry must comply and pay for treatment.",
        body: "Government provides regulation, monitoring and penalties; farms and factories provide the on-the-ground changes and funding. Neither can solve AMR alone.",
        take: "Shared responsibility under the One Health umbrella.",
      },
      id: {
        tldr: "Keduanya — pemerintah menetapkan dan menegakkan aturan; industri harus patuh dan membiayai pengolahan.",
        body: "Pemerintah menyediakan regulasi, pemantauan, dan sanksi; peternakan dan pabrik menyediakan perubahan di lapangan dan pendanaan. Tidak ada yang bisa menyelesaikan AMR sendirian.",
        take: "Tanggung jawab bersama di bawah payung Satu Kesehatan.",
      },
    },
  },
  {
    id: 31,
    category: "policy",
    difficulty: "medium",
    q: {
      en: "What are the penalties for factories dumping antibiotics into rivers?",
      id: "Apa sanksi bagi pabrik yang membuang antibiotik ke sungai?",
    },
    a: {
      en: {
        tldr: "They exist in environmental law but are inconsistently applied.",
        body: "Indonesia has environmental penalties for illegal discharge, but weak monitoring means many violations go undetected. Stronger, consistent penalties — plus real testing — are needed.",
        take: "A penalty only works if violations are actually caught.",
      },
      id: {
        tldr: "Ada dalam hukum lingkungan tetapi diterapkan tidak konsisten.",
        body: "Indonesia memiliki sanksi lingkungan untuk pembuangan ilegal, tetapi pemantauan yang lemah membuat banyak pelanggaran tak terdeteksi. Dibutuhkan sanksi yang lebih kuat dan konsisten — ditambah pengujian nyata.",
        take: "Sanksi hanya berfungsi jika pelanggaran benar-benar tertangkap.",
      },
    },
  },
  {
    id: 32,
    category: "policy",
    difficulty: "hard",
    q: {
      en: "How can international law help solve a local river problem?",
      id: "Bagaimana hukum internasional bisa membantu menyelesaikan masalah sungai lokal?",
    },
    a: {
      en: {
        tldr: "Through shared standards, funding, and pressure — AMR crosses borders.",
        body: "Resistant genes travel globally via trade, travel and water, so bodies like the WHO and FAO set common targets and fund action. International frameworks give local reforms both money and legitimacy.",
        take: "A local river problem is also a global health problem.",
      },
      id: {
        tldr: "Melalui standar bersama, pendanaan, dan tekanan — AMR melintasi batas negara.",
        body: "Gen resistensi berpindah secara global lewat perdagangan, perjalanan, dan air, sehingga lembaga seperti WHO dan FAO menetapkan target bersama dan mendanai aksi. Kerangka internasional memberi reformasi lokal dana sekaligus legitimasi.",
        take: "Masalah sungai lokal juga masalah kesehatan global.",
      },
    },
  },
  {
    id: 33,
    category: "policy",
    difficulty: "medium",
    q: {
      en: "What role should local communities play in enforcement?",
      id: "Peran apa yang harus dimainkan masyarakat lokal dalam penegakan?",
    },
    a: {
      en: {
        tldr: "They're the eyes on the ground — monitoring, reporting, and adopting change.",
        body: "Communities living on the Citarum see pollution first and can report violations, join composting schemes, and demand accountability. Enforcement works best when locals are empowered partners.",
        take: "Bottom-up pressure makes top-down rules actually stick.",
      },
      id: {
        tldr: "Mereka adalah mata di lapangan — memantau, melaporkan, dan mengadopsi perubahan.",
        body: "Masyarakat di bantaran Citarum melihat pencemaran lebih dulu dan bisa melaporkan pelanggaran, ikut skema pengomposan, dan menuntut pertanggungjawaban. Penegakan paling efektif ketika warga menjadi mitra yang diberdayakan.",
        take: "Tekanan dari bawah membuat aturan dari atas benar-benar berjalan.",
      },
    },
  },

  // ── CATEGORY 5: ONE HEALTH (onehealth) ────────────────────────────
  {
    id: 34,
    category: "onehealth",
    difficulty: "easy",
    q: {
      en: "What is the One Health approach and why is it important for AMR?",
      id: "Apa itu pendekatan Satu Kesehatan dan mengapa penting bagi AMR?",
    },
    a: {
      en: {
        tldr: "One Health means human, animal, and environmental health are one connected system.",
        body: "AMR is born where all three meet — a farm animal, its waste, the river, and the person who drinks from it. So you can't fix it by working in just one sector.",
        take: "Endorsed by the WHO, FAO, and the World Organisation for Animal Health.",
      },
      id: {
        tldr: "Satu Kesehatan (One Health) berarti kesehatan manusia, hewan, dan lingkungan adalah satu sistem yang terhubung.",
        body: "AMR lahir di titik pertemuan ketiganya — hewan ternak, kotorannya, sungai, dan orang yang meminum airnya. Jadi Anda tidak bisa memperbaikinya hanya dengan bekerja di satu sektor.",
        take: "Didukung oleh WHO, FAO, dan Organisasi Kesehatan Hewan Dunia.",
      },
    },
  },
  {
    id: 35,
    category: "onehealth",
    difficulty: "medium",
    q: {
      en: "How are human health, animal health, and environmental health connected?",
      id: "Bagaimana kesehatan manusia, hewan, dan lingkungan saling terhubung?",
    },
    a: {
      en: {
        tldr: "Antibiotics in animals become resistance in the environment that ends up in humans.",
        body: "Drugs given to livestock pass into manure, into rivers, into crops and fish, and finally into people. Health flows through the whole chain, so a problem anywhere becomes a problem everywhere.",
        take: "The Citarum is a textbook One Health pathway in action.",
      },
      id: {
        tldr: "Antibiotik pada hewan menjadi resistensi di lingkungan yang berakhir pada manusia.",
        body: "Obat yang diberikan ke ternak berpindah ke kotoran, ke sungai, ke tanaman dan ikan, dan akhirnya ke manusia. Kesehatan mengalir melalui seluruh rantai, sehingga masalah di mana pun menjadi masalah di mana-mana.",
        take: "Citarum adalah contoh nyata jalur Satu Kesehatan yang seperti di buku teks.",
      },
    },
  },
  {
    id: 36,
    category: "onehealth",
    difficulty: "medium",
    q: {
      en: "Why can't we solve AMR by only focusing on hospitals?",
      id: "Mengapa kita tidak bisa mengatasi AMR hanya dengan fokus pada rumah sakit?",
    },
    a: {
      en: {
        tldr: "Because most antibiotics — 73% — are used in agriculture, not hospitals.",
        body: "Fixing hospital prescribing helps, but it ignores the biggest source. If the river keeps breeding resistance, hospital efforts get overwhelmed.",
        take: "You can't drain a tub with the tap still running.",
      },
      id: {
        tldr: "Karena sebagian besar antibiotik — 73% — dipakai di pertanian, bukan rumah sakit.",
        body: "Memperbaiki peresepan rumah sakit membantu, tetapi mengabaikan sumber terbesar. Jika sungai terus menumbuhkan resistensi, upaya rumah sakit akan kewalahan.",
        take: "Anda tidak bisa mengeringkan bak jika kerannya masih mengalir.",
      },
    },
  },
  {
    id: 37,
    category: "onehealth",
    difficulty: "hard",
    q: {
      en: "What does \"One Health\" look like in practice for the Citarum?",
      id: "Seperti apa \"Satu Kesehatan\" dalam praktik untuk Citarum?",
    },
    a: {
      en: {
        tldr: "Farmers, factories, regulators, and doctors all acting together on one watershed.",
        body: "It means composting and biochar on farms, treatment on factories, enforcement by government, and careful prescribing in clinics — all coordinated. Each fix supports the others.",
        take: "Our six solutions are deliberately spread across all three domains.",
      },
      id: {
        tldr: "Peternak, pabrik, regulator, dan dokter bertindak bersama di satu daerah aliran sungai.",
        body: "Artinya pengomposan dan biochar di peternakan, pengolahan di pabrik, penegakan oleh pemerintah, dan peresepan yang cermat di klinik — semuanya terkoordinasi. Setiap perbaikan menopang yang lain.",
        take: "Enam solusi kami sengaja disebar ke ketiga domain.",
      },
    },
  },
  {
    id: 38,
    category: "onehealth",
    difficulty: "medium",
    q: {
      en: "Are there countries successfully using the One Health approach?",
      id: "Adakah negara yang berhasil menggunakan pendekatan Satu Kesehatan?",
    },
    a: {
      en: {
        tldr: "Yes — the EU and Denmark are leading examples.",
        body: "Denmark linked farm, environment, and health policy to cut antibiotics while growing pork output. The EU-wide ban shows coordinated cross-sector action works.",
        take: "One Health isn't just theory — it's already delivering results.",
      },
      id: {
        tldr: "Ya — Uni Eropa dan Denmark adalah contoh terdepan.",
        body: "Denmark menghubungkan kebijakan peternakan, lingkungan, dan kesehatan untuk memangkas antibiotik sambil menaikkan produksi babi. Larangan tingkat Uni Eropa menunjukkan aksi lintas sektor yang terkoordinasi berhasil.",
        take: "Satu Kesehatan bukan sekadar teori — ia sudah memberi hasil.",
      },
    },
  },

  // ── CATEGORY 6: SOLUTIONS & ACTION (solutions) ────────────────────
  {
    id: 39,
    category: "solutions",
    difficulty: "hard",
    q: {
      en: "What are your six proposed solutions, and which is most urgent?",
      id: "Apa enam solusi yang Anda usulkan, dan mana yang paling mendesak?",
    },
    a: {
      en: {
        tldr: "Enforce Permentan 14/2017, 60-day composting, biochar filters, farmer training, advanced wastewater treatment, and phages/probiotics — enforcement is most urgent.",
        body: "The fastest win is enforcing the growth-promoter ban we already have, because it stops pollution at the source with no new law needed. The others build environmental and farming defences around it.",
        take: "Start where the law already exists — just enforce it.",
      },
      id: {
        tldr: "Tegakkan Permentan 14/2017, pengomposan 60 hari, filter biochar, pelatihan peternak, pengolahan air limbah canggih, dan fag/probiotik — penegakan paling mendesak.",
        body: "Kemenangan tercepat adalah menegakkan larangan pemacu pertumbuhan yang sudah ada, karena ia menghentikan pencemaran di sumbernya tanpa perlu undang-undang baru. Solusi lain membangun pertahanan lingkungan dan peternakan di sekelilingnya.",
        take: "Mulai dari tempat hukumnya sudah ada — tinggal ditegakkan.",
      },
    },
  },
  {
    id: 40,
    category: "solutions",
    difficulty: "hard",
    q: {
      en: "How much would it cost to implement all your solutions?",
      id: "Berapa biaya untuk menerapkan semua solusi Anda?",
    },
    a: {
      en: {
        tldr: "Far less than the cost of inaction — biochar treats water at about $0.05 per litre.",
        body: "The solutions use cheap local materials (rice husks) and existing laws, and much of the cost is offset by avoided healthcare and lost-productivity spending. Unchecked AMR could push 28 million people into poverty by 2050.",
        take: "Prevention is an investment, not an expense (World Bank, 2017).",
      },
      id: {
        tldr: "Jauh lebih murah daripada biaya kelambanan — biochar mengolah air sekitar $0,05 per liter.",
        body: "Solusi ini memakai bahan lokal murah (sekam padi) dan hukum yang sudah ada, dan sebagian besar biaya terimbangi oleh penghematan biaya kesehatan dan produktivitas yang hilang. AMR yang dibiarkan bisa mendorong 28 juta orang ke kemiskinan pada 2050.",
        take: "Pencegahan adalah investasi, bukan pengeluaran (World Bank, 2017).",
      },
    },
  },
  {
    id: 41,
    category: "solutions",
    difficulty: "medium",
    q: {
      en: "Which solution has the strongest scientific evidence?",
      id: "Solusi mana yang memiliki bukti ilmiah terkuat?",
    },
    a: {
      en: {
        tldr: "Advanced wastewater treatment — the removal rates are measured and high.",
        body: "Ozonation removes about 99% of bacteria, activated carbon 90-95% of antibiotics, and membrane bioreactors 99.9%. These are proven engineering numbers, not estimates.",
        take: "The technology to clean the water already exists (Sundin et al., 2021).",
      },
      id: {
        tldr: "Pengolahan air limbah canggih — tingkat penghilangannya terukur dan tinggi.",
        body: "Ozonasi menghilangkan sekitar 99% bakteri, karbon aktif 90-95% antibiotik, dan bioreaktor membran 99,9%. Ini angka rekayasa yang terbukti, bukan perkiraan.",
        take: "Teknologi untuk membersihkan air sudah ada (Sundin dkk., 2021).",
      },
    },
  },
  {
    id: 42,
    category: "solutions",
    difficulty: "medium",
    q: {
      en: "How long would it take to see results if Indonesia adopted your plan?",
      id: "Berapa lama untuk melihat hasil jika Indonesia mengadopsi rencana Anda?",
    },
    a: {
      en: {
        tldr: "Farming and treatment changes can cut pollution within a few years.",
        body: "Thailand cut poultry antibiotic use 40% in two years; composting and biochar act as soon as they're deployed. Genetic pollution won't vanish, but new inputs can fall fast.",
        take: "We can't undo the past, but we can stop making it worse — quickly.",
      },
      id: {
        tldr: "Perubahan peternakan dan pengolahan dapat memangkas pencemaran dalam beberapa tahun.",
        body: "Thailand memangkas penggunaan antibiotik unggas 40% dalam dua tahun; pengomposan dan biochar bekerja segera setelah diterapkan. Pencemaran genetik tak akan lenyap, tetapi masukan baru bisa turun cepat.",
        take: "Kita tak bisa menghapus masa lalu, tetapi bisa berhenti memperburuknya — dengan cepat.",
      },
    },
  },
  {
    id: 43,
    category: "solutions",
    difficulty: "easy",
    q: {
      en: "What can ordinary people do to fight AMR?",
      id: "Apa yang bisa dilakukan orang awam untuk melawan AMR?",
    },
    a: {
      en: {
        tldr: "Use antibiotics responsibly and support antibiotic-free food.",
        body: "Never buy antibiotics without a prescription, finish the full course, and choose antibiotic-free meat and eggs. These choices create market pressure for cleaner farming.",
        take: "Individual choices and policy reform reinforce each other.",
      },
      id: {
        tldr: "Gunakan antibiotik secara bertanggung jawab dan dukung pangan bebas antibiotik.",
        body: "Jangan pernah membeli antibiotik tanpa resep, habiskan dosis penuh, dan pilih daging serta telur bebas antibiotik. Pilihan ini menciptakan tekanan pasar untuk peternakan yang lebih bersih.",
        take: "Pilihan individu dan reformasi kebijakan saling memperkuat.",
      },
    },
  },
  {
    id: 44,
    category: "solutions",
    difficulty: "medium",
    q: {
      en: "How effective is ozonation for removing antibiotics from wastewater?",
      id: "Seberapa efektif ozonasi untuk menghilangkan antibiotik dari air limbah?",
    },
    a: {
      en: {
        tldr: "Very — it removes about 99% of bacteria from wastewater.",
        body: "Ozone is a powerful disinfectant that breaks down bacteria and many drug residues before water is released. Paired with activated carbon, it tackles both germs and chemicals.",
        take: "A proven tool for factory and hospital effluent (Sundin et al., 2021).",
      },
      id: {
        tldr: "Sangat — ia menghilangkan sekitar 99% bakteri dari air limbah.",
        body: "Ozon adalah disinfektan kuat yang mengurai bakteri dan banyak residu obat sebelum air dilepaskan. Dipadu karbon aktif, ia mengatasi kuman sekaligus bahan kimia.",
        take: "Alat teruji untuk limbah pabrik dan rumah sakit (Sundin dkk., 2021).",
      },
    },
  },
  {
    id: 45,
    category: "solutions",
    difficulty: "hard",
    q: {
      en: "What are the biggest obstacles to implementing your solutions?",
      id: "Apa hambatan terbesar dalam menerapkan solusi Anda?",
    },
    a: {
      en: {
        tldr: "Weak enforcement, upfront costs, and low public awareness.",
        body: "The science and laws exist; the barriers are political will, funding for smallholders, and the fact that most people have never heard of AMR. That's exactly why we built this site.",
        take: "Awareness is the first domino — it's why this project exists.",
      },
      id: {
        tldr: "Penegakan lemah, biaya awal, dan rendahnya kesadaran publik.",
        body: "Ilmu dan hukumnya sudah ada; hambatannya adalah kemauan politik, pendanaan bagi petani kecil, dan kenyataan bahwa kebanyakan orang belum pernah mendengar AMR. Itulah alasan kami membangun situs ini.",
        take: "Kesadaran adalah domino pertama — itulah alasan proyek ini ada.",
      },
    },
  },
  {
    id: 46,
    category: "solutions",
    difficulty: "medium",
    q: {
      en: "How do your solutions compare to what other countries are doing?",
      id: "Bagaimana solusi Anda dibandingkan dengan yang dilakukan negara lain?",
    },
    a: {
      en: {
        tldr: "They adapt proven international measures to Indonesian conditions.",
        body: "We borrow the EU's ban, Thailand's farmer training, and standard wastewater technology, then localise them with rice-husk biochar and community composting. Nothing here is unproven.",
        take: "Tested elsewhere, tailored for the Citarum.",
      },
      id: {
        tldr: "Solusi kami mengadaptasi langkah internasional yang terbukti ke kondisi Indonesia.",
        body: "Kami meminjam larangan Uni Eropa, pelatihan peternak Thailand, dan teknologi pengolahan air limbah standar, lalu melokalkannya dengan biochar sekam padi dan pengomposan komunitas. Tidak ada yang belum terbukti di sini.",
        take: "Teruji di tempat lain, disesuaikan untuk Citarum.",
      },
    },
  },

  // ── CATEGORY 7: GLOBAL IMPACT & FUTURE (global) ───────────────────
  {
    id: 47,
    category: "global",
    difficulty: "easy",
    q: {
      en: "How many people die from AMR annually worldwide?",
      id: "Berapa banyak orang meninggal akibat AMR setiap tahun di seluruh dunia?",
    },
    a: {
      en: {
        tldr: "About 1.27 million directly, and 4.95 million associated deaths a year.",
        body: "That's more than 3,500 lives lost every single day worldwide. It already rivals major killers like HIV and malaria.",
        take: "4.95M associated deaths a year (Murray et al., Lancet 2022).",
      },
      id: {
        tldr: "Sekitar 1,27 juta secara langsung, dan 4,95 juta kematian terkait per tahun.",
        body: "Itu lebih dari 3.500 jiwa yang hilang setiap hari di seluruh dunia. Angkanya sudah menyaingi pembunuh besar seperti HIV dan malaria.",
        take: "4,95 juta kematian terkait per tahun (Murray dkk., Lancet 2022).",
      },
    },
  },
  {
    id: 48,
    category: "global",
    difficulty: "medium",
    q: {
      en: "What will happen by 2050 if AMR continues unchecked?",
      id: "Apa yang akan terjadi pada 2050 jika AMR dibiarkan?",
    },
    a: {
      en: {
        tldr: "AMR could kill 10 million people a year — more than cancer does today.",
        body: "On the current path, deaths rise steeply and the economic cost reaches an estimated $100 trillion. It would make routine surgery and childbirth dangerous again.",
        take: "10M deaths a year by 2050 if we don't act.",
      },
      id: {
        tldr: "AMR bisa membunuh 10 juta orang per tahun — lebih banyak daripada kanker saat ini.",
        body: "Pada jalur saat ini, kematian meningkat tajam dan biaya ekonomi mencapai perkiraan $100 triliun. Ia akan membuat operasi rutin dan persalinan kembali berbahaya.",
        take: "10 juta kematian per tahun pada 2050 jika kita tidak bertindak.",
      },
    },
  },
  {
    id: 49,
    category: "global",
    difficulty: "medium",
    q: {
      en: "How does AMR affect cancer treatment and surgery?",
      id: "Bagaimana AMR memengaruhi pengobatan kanker dan operasi?",
    },
    a: {
      en: {
        tldr: "It makes them far riskier by removing the infection safety net.",
        body: "Chemotherapy and surgery rely on antibiotics to prevent and treat infections. Without working antibiotics, routine operations and cancer care become life-threatening.",
        take: "Modern medicine quietly depends on antibiotics working.",
      },
      id: {
        tldr: "Ia membuat keduanya jauh lebih berisiko dengan menghilangkan jaring pengaman infeksi.",
        body: "Kemoterapi dan operasi bergantung pada antibiotik untuk mencegah dan mengobati infeksi. Tanpa antibiotik yang bekerja, operasi rutin dan perawatan kanker menjadi mengancam jiwa.",
        take: "Kedokteran modern diam-diam bergantung pada antibiotik yang bekerja.",
      },
    },
  },
  {
    id: 50,
    category: "global",
    difficulty: "hard",
    q: {
      en: "Could AMR cause another global pandemic?",
      id: "Bisakah AMR menyebabkan pandemi global lain?",
    },
    a: {
      en: {
        tldr: "It's already a slow-motion pandemic — just without a single dramatic outbreak.",
        body: "A resistant \"superbug\" could spread globally, but even without one dramatic event, AMR is killing millions steadily. That's why the WHO calls it a top global threat.",
        take: "The pandemic is already here — it's just quiet.",
      },
      id: {
        tldr: "Ia sudah menjadi pandemi gerak-lambat — hanya saja tanpa satu wabah dramatis.",
        body: "\"Superbug\" resisten bisa menyebar global, tetapi bahkan tanpa satu peristiwa dramatis, AMR membunuh jutaan secara stabil. Itulah mengapa WHO menyebutnya ancaman global teratas.",
        take: "Pandeminya sudah ada di sini — hanya saja senyap.",
      },
    },
  },
  {
    id: 51,
    category: "global",
    difficulty: "hard",
    q: {
      en: "How does AMR impact developing countries differently from rich countries?",
      id: "Bagaimana AMR berdampak berbeda pada negara berkembang dibanding negara kaya?",
    },
    a: {
      en: {
        tldr: "Developing countries are hit hardest — more exposure, fewer resources.",
        body: "Places like the Citarum basin face heavy pollution plus limited treatment infrastructure and healthcare access. So the same resistance causes more deaths where defences are weakest.",
        take: "AMR deepens global health inequality.",
      },
      id: {
        tldr: "Negara berkembang paling terpukul — lebih banyak paparan, lebih sedikit sumber daya.",
        body: "Tempat seperti cekungan Citarum menghadapi pencemaran berat plus terbatasnya infrastruktur pengolahan dan akses layanan kesehatan. Jadi resistensi yang sama menyebabkan lebih banyak kematian di tempat pertahanannya paling lemah.",
        take: "AMR memperdalam ketimpangan kesehatan global.",
      },
    },
  },
  {
    id: 52,
    category: "global",
    difficulty: "medium",
    q: {
      en: "What is the economic cost of AMR globally?",
      id: "Berapa biaya ekonomi AMR secara global?",
    },
    a: {
      en: {
        tldr: "Up to $100 trillion in cumulative cost by 2050.",
        body: "That comes from lost productivity, longer hospital stays, and failed treatments. It could also push 28 million people into poverty.",
        take: "AMR is an economic threat, not just a medical one (World Bank, 2017).",
      },
      id: {
        tldr: "Hingga $100 triliun biaya kumulatif pada 2050.",
        body: "Itu berasal dari produktivitas yang hilang, rawat inap yang lebih lama, dan pengobatan yang gagal. Ia juga bisa mendorong 28 juta orang ke kemiskinan.",
        take: "AMR adalah ancaman ekonomi, bukan hanya medis (World Bank, 2017).",
      },
    },
  },
  {
    id: 53,
    category: "global",
    difficulty: "hard",
    q: {
      en: "Are there any new antibiotics being developed?",
      id: "Apakah ada antibiotik baru yang sedang dikembangkan?",
    },
    a: {
      en: {
        tldr: "Very few — the pipeline is nearly dry.",
        body: "Developing new antibiotics is slow and unprofitable, so few companies invest, and bacteria eventually resist whatever we make. We can't out-invent evolution forever.",
        take: "Prevention matters because new drugs won't rescue us.",
      },
      id: {
        tldr: "Sangat sedikit — jalur pengembangannya nyaris kering.",
        body: "Mengembangkan antibiotik baru lambat dan tidak menguntungkan, sehingga sedikit perusahaan yang berinvestasi, dan bakteri pada akhirnya resisten terhadap apa pun yang kita buat. Kita tak bisa terus mengungguli evolusi.",
        take: "Pencegahan penting karena obat baru tak akan menyelamatkan kita.",
      },
    },
  },
  {
    id: 54,
    category: "global",
    difficulty: "hard",
    q: {
      en: "How does climate change make AMR worse?",
      id: "Bagaimana perubahan iklim memperburuk AMR?",
    },
    a: {
      en: {
        tldr: "Heat and flooding help resistant bacteria spread faster.",
        body: "Warmer temperatures speed bacterial growth and gene transfer, while floods wash contaminated water and manure across wider areas. Climate stress and AMR amplify each other.",
        take: "Two crises that feed one another.",
      },
      id: {
        tldr: "Panas dan banjir membantu bakteri resisten menyebar lebih cepat.",
        body: "Suhu yang lebih hangat mempercepat pertumbuhan bakteri dan transfer gen, sementara banjir menyebarkan air dan kotoran tercemar ke area lebih luas. Tekanan iklim dan AMR saling memperkuat.",
        take: "Dua krisis yang saling memberi makan.",
      },
    },
  },

  // ── CATEGORY 8: OUR TEAM, METHOD & ESSAY (team) ───────────────────
  {
    id: 55,
    category: "team",
    difficulty: "easy",
    q: {
      en: "How did your team research this topic?",
      id: "Bagaimana tim Anda meneliti topik ini?",
    },
    a: {
      en: {
        tldr: "We combined peer-reviewed science with local Citarum evidence and a field interview.",
        body: "We drew on the WHO, the Lancet, and BRIN's 2021 study, then grounded it in the Citarum by speaking with a riverside resident, Ibu Edah. That mix of hard data and human story shaped our essay.",
        take: "Global science + local voice = credible, relatable research.",
      },
      id: {
        tldr: "Kami memadukan sains yang ditinjau sejawat dengan bukti lokal Citarum dan wawancara lapangan.",
        body: "Kami merujuk WHO, Lancet, dan studi BRIN 2021, lalu membumikannya di Citarum dengan mewawancarai warga bantaran, Ibu Edah. Perpaduan data keras dan kisah manusia itulah yang membentuk esai kami.",
        take: "Sains global + suara lokal = riset yang kredibel dan mudah direlasikan.",
      },
    },
  },
  {
    id: 56,
    category: "team",
    difficulty: "medium",
    q: {
      en: "What sources did you use and how did you verify them?",
      id: "Sumber apa yang Anda gunakan dan bagaimana Anda memverifikasinya?",
    },
    a: {
      en: {
        tldr: "16 references — the WHO, Lancet, BRIN, World Bank, FAO, and peer-reviewed journals.",
        body: "We prioritised peer-reviewed and institutional sources and cross-checked figures across multiple studies. Every statistic on this site traces back to a listed reference.",
        take: "See our full References section — all 16 are public.",
      },
      id: {
        tldr: "16 referensi — WHO, Lancet, BRIN, World Bank, FAO, dan jurnal yang ditinjau sejawat.",
        body: "Kami memprioritaskan sumber yang ditinjau sejawat dan institusional serta memeriksa silang angka di berbagai studi. Setiap statistik di situs ini dapat ditelusuri ke referensi yang tercantum.",
        take: "Lihat bagian Referensi lengkap kami — seluruh 16 sumbernya publik.",
      },
    },
  },
  {
    id: 57,
    category: "team",
    difficulty: "easy",
    q: {
      en: "Why should young students care about AMR?",
      id: "Mengapa pelajar muda harus peduli tentang AMR?",
    },
    a: {
      en: {
        tldr: "Because we'll inherit this crisis — and we're the best-placed to fix it.",
        body: "AMR's worst years are ahead, within our lifetimes, and students living on the Citarum see it firsthand. We can be advocates, innovators, and bridge-builders between science and action.",
        take: "The window to prevent is closing — our generation decides.",
      },
      id: {
        tldr: "Karena kami akan mewarisi krisis ini — dan kami paling siap untuk memperbaikinya.",
        body: "Tahun-tahun terburuk AMR ada di depan, dalam masa hidup kami, dan pelajar yang tinggal di bantaran Citarum melihatnya langsung. Kami bisa menjadi advokat, inovator, dan penghubung antara sains dan aksi.",
        take: "Jendela untuk mencegah sedang menutup — generasi kami yang menentukan.",
      },
    },
  },
  {
    id: 58,
    category: "team",
    difficulty: "medium",
    q: {
      en: "What makes your essay different from other AMR research?",
      id: "Apa yang membedakan esai Anda dari riset AMR lainnya?",
    },
    a: {
      en: {
        tldr: "We frame AMR as an environmental problem rooted in one specific river.",
        body: "Most AMR discussion focuses on hospitals; we trace it to agriculture and the Citarum, backed by BRIN's local data. It's global science told through a place we know.",
        take: "Local specificity is our credibility.",
      },
      id: {
        tldr: "Kami membingkai AMR sebagai masalah lingkungan yang berakar pada satu sungai spesifik.",
        body: "Kebanyakan pembahasan AMR fokus pada rumah sakit; kami menelusurinya ke pertanian dan Citarum, didukung data lokal BRIN. Ini sains global yang dikisahkan melalui tempat yang kami kenal.",
        take: "Kekhususan lokal adalah kredibilitas kami.",
      },
    },
  },
  {
    id: 59,
    category: "team",
    difficulty: "medium",
    q: {
      en: "How can students like you actually influence policy?",
      id: "Bagaimana pelajar seperti Anda benar-benar bisa memengaruhi kebijakan?",
    },
    a: {
      en: {
        tldr: "By raising awareness, pressuring leaders, and building local solutions.",
        body: "Students can campaign, demand enforcement of existing laws, and prototype fixes like low-cost biochar filters. Awareness itself shifts what voters and officials prioritise.",
        take: "Communication is leadership — and it's where we can act right now.",
      },
      id: {
        tldr: "Dengan meningkatkan kesadaran, menekan pemimpin, dan membangun solusi lokal.",
        body: "Pelajar bisa berkampanye, menuntut penegakan hukum yang ada, dan membuat purwarupa solusi seperti filter biochar berbiaya rendah. Kesadaran itu sendiri menggeser prioritas pemilih dan pejabat.",
        take: "Komunikasi adalah kepemimpinan — dan di sanalah kami bisa bertindak sekarang.",
      },
    },
  },
  {
    id: 60,
    category: "team",
    difficulty: "easy",
    q: {
      en: "What was the most surprising thing you learned while researching?",
      id: "Apa hal paling mengejutkan yang Anda pelajari saat meneliti?",
    },
    a: {
      en: {
        tldr: "That the deadliest pollution in the Citarum is completely invisible.",
        body: "Everyone sees the plastic and dye, but the antibiotic residues — the real long-term danger — can't be seen, smelled, or tasted. That gap between visible and invisible risk shocked us.",
        take: "The most dangerous threat is the one no one notices.",
      },
      id: {
        tldr: "Bahwa pencemaran paling mematikan di Citarum justru sepenuhnya tak terlihat.",
        body: "Semua orang melihat plastik dan pewarna, tetapi residu antibiotik — bahaya jangka panjang yang sebenarnya — tak bisa dilihat, dicium, atau dirasakan. Kesenjangan antara risiko yang terlihat dan tak terlihat itu mengejutkan kami.",
        take: "Ancaman paling berbahaya adalah yang tak disadari siapa pun.",
      },
    },
  },
  {
    id: 61,
    category: "team",
    difficulty: "medium",
    q: {
      en: "If you could present one message to world leaders about AMR, what would it be?",
      id: "Jika bisa menyampaikan satu pesan kepada pemimpin dunia tentang AMR, apa itu?",
    },
    a: {
      en: {
        tldr: "\"Genetic pollution is irreversible — prevent it now, because cleanup won't be an option.\"",
        body: "The knowledge and solutions already exist; what's missing is action before the window closes. Every year of delay locks more resistance into the environment permanently.",
        take: "The knowledge exists. The solutions are proven. Now act.",
      },
      id: {
        tldr: "\"Pencemaran genetik tidak dapat dibalik — cegah sekarang, karena pemulihan takkan menjadi pilihan.\"",
        body: "Pengetahuan dan solusinya sudah ada; yang hilang adalah tindakan sebelum jendela menutup. Setiap tahun penundaan mengunci lebih banyak resistensi ke lingkungan secara permanen.",
        take: "Pengetahuannya ada. Solusinya terbukti. Sekarang bertindak.",
      },
    },
  },
  {
    id: 62,
    category: "team",
    difficulty: "hard",
    q: {
      en: "What are the limitations of your study?",
      id: "Apa keterbatasan studi Anda?",
    },
    a: {
      en: {
        tldr: "We rely on existing data and didn't run our own lab tests.",
        body: "As students, we synthesised published research rather than generating new field measurements, and some Citarum-specific data is limited. That's a gap future monitoring should fill.",
        take: "Being honest about limits is why we call for systematic river testing.",
      },
      id: {
        tldr: "Kami mengandalkan data yang ada dan tidak menjalankan uji laboratorium sendiri.",
        body: "Sebagai pelajar, kami menyintesis riset yang telah dipublikasikan alih-alih menghasilkan pengukuran lapangan baru, dan sebagian data khusus Citarum masih terbatas. Itu celah yang harus diisi pemantauan masa depan.",
        take: "Jujur tentang keterbatasan itulah alasan kami menyerukan pengujian sungai yang sistematis.",
      },
    },
  },
  {
    id: 63,
    category: "team",
    difficulty: "hard",
    q: {
      en: "How would you measure the success of your proposed solutions?",
      id: "Bagaimana Anda mengukur keberhasilan solusi yang Anda usulkan?",
    },
    a: {
      en: {
        tldr: "Falling antibiotic levels in the river and rising farm compliance.",
        body: "Success looks like BRIN detecting fewer residues over time, more farms composting and skipping growth promoters, and treatment plants coming online. These are measurable indicators.",
        take: "What gets measured gets managed.",
      },
      id: {
        tldr: "Turunnya kadar antibiotik di sungai dan meningkatnya kepatuhan peternakan.",
        body: "Keberhasilan tampak seperti BRIN mendeteksi lebih sedikit residu dari waktu ke waktu, lebih banyak peternakan mengompos dan meninggalkan pemacu pertumbuhan, dan instalasi pengolahan beroperasi. Ini indikator yang terukur.",
        take: "Apa yang diukur akan terkelola.",
      },
    },
  },
  {
    id: 64,
    category: "team",
    difficulty: "medium",
    q: {
      en: "What would you do differently if you had more time or resources?",
      id: "Apa yang akan Anda lakukan berbeda jika punya lebih banyak waktu atau sumber daya?",
    },
    a: {
      en: {
        tldr: "Run our own Citarum sampling and pilot a biochar filter with local farmers.",
        body: "We'd generate fresh local data and test a real low-cost filter in the field, plus expand the awareness campaign. That would turn our proposal into a working demonstration.",
        take: "From essay to pilot project — that's the next step.",
      },
      id: {
        tldr: "Melakukan pengambilan sampel Citarum sendiri dan mempercontohkan filter biochar bersama peternak lokal.",
        body: "Kami akan menghasilkan data lokal baru dan menguji filter berbiaya rendah yang nyata di lapangan, plus memperluas kampanye kesadaran. Itu akan mengubah usulan kami menjadi demonstrasi yang berfungsi.",
        take: "Dari esai ke proyek percontohan — itulah langkah berikutnya.",
      },
    },
  },
];
