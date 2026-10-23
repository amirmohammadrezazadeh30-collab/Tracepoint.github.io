const cars = [
  { id:"bmw-m3-g80", brand:"BMW", model:"M3 Competition", year:2024, priceUSD:85000, power:503, engine:"3.0L Twin-Turbo I6", body:"Sedan", fuel:"Gasoline", transmission:"8-speed automatic", acceleration:"3.8 s", topSpeed:"290 km/h", origin:"Germany", image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85", enSummary:"A high-performance sports sedan combining everyday usability with track-ready dynamics.", faSummary:"سدان اسپرت قدرتمند با ترکیبی از استفاده روزمره و عملکرد نزدیک به خودروهای پیست." },
  { id:"porsche-911", brand:"Porsche", model:"911 Carrera GTS", year:2024, power:532, engine:"3.0L Twin-Turbo Flat-6", body:"Coupe", fuel:"Gasoline", transmission:"8-speed PDK", acceleration:"2.9 s", topSpeed:"312 km/h", origin:"Germany", image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85", enSummary:"An iconic rear-engine sports car known for precision, balance and a long motorsport heritage.", faSummary:"خودروی اسپرت موتورعقب و نمادین که به دقت، تعادل و میراث مسابقه‌ای شهرت دارد." },
  { id:"mercedes-amg-gt", brand:"Mercedes-AMG", model:"AMG GT 63", year:2024, power:577, engine:"4.0L Twin-Turbo V8", body:"Coupe", fuel:"Gasoline", transmission:"9-speed automatic", acceleration:"3.1 s", topSpeed:"315 km/h", origin:"Germany", image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85", enSummary:"A grand-touring performance machine with muscular V8 power and a refined cabin.", faSummary:"خودروی گرندتورر پرقدرت با موتور V8 و کابینی لوکس و پیشرفته." },
  { id:"audi-r8", brand:"Audi", model:"R8 V10 Performance", year:2023, power:602, engine:"5.2L Naturally Aspirated V10", body:"Coupe", fuel:"Gasoline", transmission:"7-speed S tronic", acceleration:"3.1 s", topSpeed:"331 km/h", origin:"Germany", image:"https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=85", enSummary:"A mid-engine supercar celebrated for its naturally aspirated V10 and unmistakable soundtrack.", faSummary:"سوپراسپرت موتوروسط که به موتور V10 تنفس طبیعی و صدای خاصش شناخته می‌شود." },
  { id:"ferrari-296", brand:"Ferrari", model:"296 GTB", year:2024, power:819, engine:"3.0L Twin-Turbo V6 Hybrid", body:"Coupe", fuel:"Plug-in hybrid", transmission:"8-speed DCT", acceleration:"2.9 s", topSpeed:"330 km/h", origin:"Italy", image:"https://images.unsplash.com/photo-1592198084033-aç9c5b3e0f?auto=format&fit=crop&w=1000&q=85", enSummary:"A compact hybrid berlinetta blending a turbocharged V6 with electric performance.", faSummary:"برلینتای هیبریدی جمع‌وجور با ترکیب موتور V6 توربو و نیروی الکتریکی." },
  { id:"lamborghini-huracan", brand:"Lamborghini", model:"Huracán EVO", year:2023, power:631, engine:"5.2L Naturally Aspirated V10", body:"Coupe", fuel:"Gasoline", transmission:"7-speed dual-clutch", acceleration:"2.9 s", topSpeed:"325 km/h", origin:"Italy", image:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=85", enSummary:"A dramatic naturally aspirated V10 supercar with sharp styling and all-wheel-drive grip.", faSummary:"سوپراسپرت V10 با طراحی جسورانه، موتور تنفس طبیعی و چسبندگی چهارچرخ." },
  { id:"toyota-supra", brand:"Toyota", model:"GR Supra 3.0", year:2024, power:382, engine:"3.0L Turbocharged I6", body:"Coupe", fuel:"Gasoline", transmission:"6-speed manual / 8-speed auto", acceleration:"3.9 s", topSpeed:"250 km/h", origin:"Japan", image:"https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&w=1000&q=85", enSummary:"A rear-wheel-drive sports coupe developed around balance, agility and driver engagement.", faSummary:"کوپه اسپرت دیفرانسیل عقب با تمرکز بر تعادل، چابکی و ارتباط راننده با خودرو." },
  { id:"nissan-gt-r", brand:"Nissan", model:"GT-R Nismo", year:2024, power:600, engine:"3.8L Twin-Turbo V6", body:"Coupe", fuel:"Gasoline", transmission:"6-speed dual-clutch", acceleration:"2.7 s", topSpeed:"315 km/h", origin:"Japan", image:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85", enSummary:"A technology-focused performance icon with advanced all-wheel drive and turbocharged power.", faSummary:"نماد عملکرد و فناوری با سامانه چهارچرخ محرک پیشرفته و موتور توربوشارژ." },
  { id:"tesla-model-s", brand:"Tesla", model:"Model S Plaid", year:2024, power:1020, engine:"Tri-motor electric", body:"Liftback", fuel:"Electric", transmission:"Single-speed", acceleration:"2.1 s", topSpeed:"322 km/h", origin:"United States", image:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=85", enSummary:"An electric performance liftback known for instant torque, high acceleration and long range.", faSummary:"لیفت‌بک برقی پرفورمنس با گشتاور آنی، شتاب بسیار بالا و برد قابل توجه." },
  { id:"ford-mustang", brand:"Ford", model:"Mustang Dark Horse", year:2024, power:500, engine:"5.0L Naturally Aspirated V8", body:"Coupe", fuel:"Gasoline", transmission:"6-speed manual / 10-speed auto", acceleration:"4.1 s", topSpeed:"267 km/h", origin:"United States", image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85", enSummary:"A modern muscle coupe that keeps a naturally aspirated V8 at the heart of the experience.", faSummary:"کوپه ماسل مدرن که موتور V8 تنفس طبیعی را در مرکز تجربه رانندگی نگه می‌دارد." },
  { id:"bugatti-chiron", brand:"Bugatti", model:"Chiron Super Sport", year:2022, power:1578, engine:"8.0L Quad-Turbo W16", body:"Coupe", fuel:"Gasoline", transmission:"7-speed dual-clutch", acceleration:"2.4 s", topSpeed:"440 km/h*", origin:"France", image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=85", enSummary:"An engineering showcase built around immense W16 power, luxury and extreme high-speed capability.", faSummary:"نمایشی از مهندسی خودرو با موتور W16 عظیم، تجمل و توانایی سرعت بسیار بالا." },
  { id:"mazda-mx5", brand:"Mazda", model:"MX-5 Miata", year:2024, power:181, engine:"2.0L Naturally Aspirated I4", body:"Roadster", fuel:"Gasoline", transmission:"6-speed manual / automatic", acceleration:"5.7 s", topSpeed:"219 km/h", origin:"Japan", image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=85", enSummary:"A lightweight roadster focused on simplicity, balance and the joy of open-top driving.", faSummary:"رودستر سبک‌وزن با تمرکز بر سادگی، تعادل و لذت رانندگی روباز." }
];

// Demo-only price placeholders (USD). Replace with verified values when the data source is ready.
cars.forEach((car, index) => { if (!car.priceUSD) car.priceUSD = [125000,165000,142000,210000,95000,115000,58000,220000,52000,3900000,29000][index % 11]; });
const galleryImages = car => [car.image, car.image, car.image]; // Replace repeated placeholders with real gallery photos later.

const translations = {
  fa: {
    tagline:"دانشنامه خودرو", searchButton:"جست‌وجو", login:"ورود / ثبت‌نام", compare:"مقایسه با خودرو دیگر", chooseCar:"انتخاب خودرو برای مقایسه", compareButton:"مقایسه", countryPrice:"قیمت در کشورهای مختلف", countryPlaceholder:"نام کشور را جست‌وجو کن...", findPrice:"نمایش قیمت", descriptionTitle:"درباره این خودرو", makerTitle:"سازنده و اطلاعات تولید", maker:"سازنده", modelFamily:"خانواده / نسل", production:"دوره تولید", awards:"جوایز و افتخارات", priceLabel:"قیمت پایه نمایشی", priceDisclaimer:"قیمت‌ها صرفاً نمونه‌اند و واقعی نیستند.", navCatalog:"کاتالوگ خودروها", navAbout:"درباره پروژه", explore:"کاوش خودروها",
    eyebrow:"دانشنامه‌ای برای عاشقان خودرو", heroTitle:'', heroDescription:"",
    statCars:"خودروی نمونه", statBrands:"برند منتخب", statLanguages:"زبان", collectionKicker:"THE COLLECTION", collectionTitle:"کاوش در دنیای خودرو",
    collectionSubtitle:"مدل موردعلاقه‌ات را پیدا کن و مشخصاتش را بررسی کن.", searchPlaceholder:"جست‌وجوی برند یا مدل...", brandFilter:"برند", allBrands:"همه برندها",
    sortLabel:"ترتیب", sortFeatured:"پیشنهادی", sortName:"نام خودرو", sortYear:"سال تولید", sortPower:"قدرت موتور",
    emptyTitle:"خودرویی پیدا نشد", emptyText:"عبارت جست‌وجو یا فیلتر برند را تغییر بده.", resetFilters:"پاک کردن فیلترها",
    aboutKicker:"BUILT FOR CURIOSITY", aboutTitle:"نه برای خرید؛ برای شناختن.", aboutText:"A.R.M یک نمونه اولیه از دانشنامه خودرو است. داده‌ها فعلاً نمایشی‌اند و در مراحل بعدی با اطلاعات دقیق و منابع معتبر گسترش پیدا می‌کنند.",
    backToCatalog:"بازگشت به کاتالوگ ↗", footerText:"یک پروژه دمو؛ ساخته‌شده برای کنجکاوی‌های خودرویی.",
    hp:"اسب‌بخار", year:"سال", details:"مشاهده مشخصات", body:"بدنه", engine:"موتور", transmission:"گیربکس", fuel:"سوخت", acceleration:"شتاب ۰ تا ۱۰۰", topSpeed:"حداکثر سرعت", origin:"کشور سازنده",
    overview:"معرفی خودرو", technical:"مشخصات فنی", sampleNote:"اطلاعات این نسخه صرفاً برای نمایش ساختار سایت وارد شده‌اند. مشخصات را پیش از استفاده به‌عنوان مرجع، با منابع معتبر بررسی کنید.",
    back:"بازگشت به کاتالوگ", notFound:"خودرو پیدا نشد", notFoundText:"این شناسه خودرو در داده‌های نمونه وجود ندارد.", previous:"قبلی", next:"بعدی", pageOf:"صفحه"
  },
  en: {
    tagline:"Automotive Reference", searchButton:"Search", login:"Sign in / Register", compare:"Compare with another car", chooseCar:"Choose a car to compare", compareButton:"Compare", countryPrice:"Prices by country", countryPlaceholder:"Search a country...", findPrice:"Show price", descriptionTitle:"About this vehicle", makerTitle:"Manufacturer & production", maker:"Manufacturer", modelFamily:"Family / generation", production:"Production period", awards:"Awards & recognition", priceLabel:"Sample base price", priceDisclaimer:"Prices are placeholders, not verified market prices.", navCatalog:"Car catalogue", navAbout:"About", explore:"Explore cars",
    eyebrow:"AN ENCYCLOPEDIA FOR CAR ENTHUSIASTS", heroTitle:'', heroDescription:"",
    statCars:"sample vehicles", statBrands:"featured brands", statLanguages:"languages", collectionKicker:"THE COLLECTION", collectionTitle:"Explore the automotive world",
    collectionSubtitle:"Find a model and explore its key specifications.", searchPlaceholder:"Search make or model...", brandFilter:"Make", allBrands:"All makes",
    sortLabel:"Sort", sortFeatured:"Featured", sortName:"Model name", sortYear:"Production year", sortPower:"Engine power",
    emptyTitle:"No cars found", emptyText:"Try another search term or make filter.", resetFilters:"Clear filters",
    aboutKicker:"BUILT FOR CURIOSITY", aboutTitle:"Not for buying. For understanding.", aboutText:"A.R.M is a prototype automotive encyclopedia. These records are demo data and will be expanded with verified information and reliable sources later.",
    backToCatalog:"Back to catalogue ↗", footerText:"A demo project built for automotive curiosity.",
    hp:"hp", year:"Year", details:"View details", body:"Body style", engine:"Engine", transmission:"Transmission", fuel:"Fuel", acceleration:"0–100 km/h", topSpeed:"Top speed", origin:"Built in",
    overview:"Overview", technical:"Technical specifications", sampleNote:"This version uses sample content to demonstrate the site structure. Verify all specifications against reliable sources before treating them as reference data.",
    back:"Back to catalogue", notFound:"Vehicle not found", notFoundText:"This vehicle ID is not present in the sample data.", previous:"Previous", next:"Next", pageOf:"Page"
  }
};

let currentLang = localStorage.getItem("arm-language") || "fa";
let currentPage = 1;
const pageSize = 8;
let searchTerm = "";
let selectedBrand = "all";
let sortMode = "featured";

const $ = (selector) => document.querySelector(selector);
const params = new URLSearchParams(window.location.search);
const detailId = params.get("car");

function t(key) { return translations[currentLang][key] || key; }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
}
function carName(car) { return `${car.brand} ${car.model}`; }
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("arm-language", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.dir = "rtl";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
  const toggle = $("#languageToggle");
  if (toggle) toggle.textContent = lang === "fa" ? "EN" : "fa";
  if (detailId) renderDetailPage();
  else {
    fillBrandFilter();
    renderCars();
  }
}
function fillBrandFilter() {
  const select = $("#brandFilter");
  if (!select) return;
  const previous = selectedBrand;
  const brands = [...new Set(cars.map(car => car.brand))].sort();
  select.innerHTML = `<option value="all">${t("allBrands")}</option>` + brands.map(brand => `<option value="${escapeHTML(brand)}">${escapeHTML(brand)}</option>`).join("");
  select.value = brands.includes(previous) ? previous : "all";
}
function filteredCars() {
  let list = cars.filter(car => {
    const query = searchTerm.trim().toLocaleLowerCase();
    const matchesSearch = !query || [car.brand, car.model, car.year, car.engine, car.body, car.fuel].join(" ").toLocaleLowerCase().includes(query);
    return matchesSearch && (selectedBrand === "all" || car.brand === selectedBrand);
  });
  if (sortMode === "name") list.sort((a,b) => carName(a).localeCompare(carName(b)));
  if (sortMode === "year") list.sort((a,b) => b.year - a.year);
  if (sortMode === "power") list.sort((a,b) => b.power - a.power);
  return list;
}
function renderCars() {
  const grid = $("#carGrid");
  if (!grid) return;
  const list = filteredCars();
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageCars = list.slice(start, start + pageSize);
  $("#totalCars").textContent = String(cars.length).padStart(2, "0");
  $("#resultCount").textContent = currentLang === "fa" ? `${list.length} خودرو` : `${list.length} vehicles`;
  $("#emptyState").classList.toggle("hidden", list.length !== 0);
  grid.classList.toggle("hidden", list.length === 0);
  $("#pagination").classList.toggle("hidden", list.length === 0);
  grid.innerHTML = pageCars.map(car => `
    <article class="car-card">
      <a href="index.html?car=${encodeURIComponent(car.id)}" aria-label="${escapeHTML(t("details"))}: ${escapeHTML(carName(car))}">
        <div class="car-image-wrap">
          <img class="car-image" src="${escapeHTML(car.image)}" alt="${escapeHTML(carName(car))}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/900x560/141b26/9fcaff?text=Car+Image';">
          <span class="car-year">${car.year}</span>
        </div>
      </a>
      <div class="car-body">
        <div class="car-brand">${escapeHTML(car.brand)}</div>
        <h3 class="car-name">${escapeHTML(car.model)}</h3>
        <p class="car-summary">${escapeHTML(currentLang === "fa" ? car.faSummary : car.enSummary)}</p>
        <div class="car-price">$${Number(car.priceUSD).toLocaleString("en-US")} <small>USD · ${t("priceLabel")}</small></div>
        <div class="spec-pills">
          <span class="spec-pill">${car.power} ${t("hp")}</span>
          <span class="spec-pill">0–100: ${escapeHTML(car.acceleration)}</span>
          <span class="spec-pill">${escapeHTML(car.body)}</span>
          <span class="spec-pill">${car.year}</span>
        </div>
        <div class="card-bottom">
          <span class="card-category">${escapeHTML(car.origin)}</span>
          <a class="details-link" href="index.html?car=${encodeURIComponent(car.id)}">${t("details")} ↗</a>
        </div>
      </div>
    </article>`).join("");
  renderPagination(totalPages);
}
function renderPagination(totalPages) {
  const pagination = $("#pagination");
  if (!pagination) return;
  let html = `<button class="page-button" data-page="${currentPage-1}" ${currentPage===1?"disabled":""}>‹ ${t("previous")}</button>`;
  for (let page = 1; page <= totalPages; page++) {
    html += `<button class="page-button ${page===currentPage?"current":""}" data-page="${page}" ${page===currentPage?'aria-current="page"':""}>${page}</button>`;
  }
  html += `<button class="page-button" data-page="${currentPage+1}" ${currentPage===totalPages?"disabled":""}>${t("next")} ›</button>`;
  pagination.innerHTML = html;
}
function renderDetailPage() {
  const car = cars.find(item => item.id === detailId);
  const app = $("#app");
  if (!app) return;
  if (!car) { app.innerHTML = `<section class="detail-page"><a class="back-link" href="index.html">← ${t("back")}</a><div class="info-panel"><h1>${t("notFound")}</h1><p>${t("notFoundText")}</p></div></section>`; return; }
  const specs = [[t("year"),car.year],[t("engine"),car.engine],[t("body"),car.body],[t("fuel"),car.fuel],[t("transmission"),car.transmission],[t("acceleration"),car.acceleration],[t("topSpeed"),car.topSpeed],[t("origin"),car.origin],[t("maker"),car.brand],[t("modelFamily"),car.model],[t("production"),`${car.year-2}–${car.year}`]];
  const gallery = galleryImages(car);
  const options = cars.filter(item => item.id !== car.id).map(item => `<option value="${item.id}">${escapeHTML(carName(item))}</option>`).join("");
  app.innerHTML = `
    <section class="detail-page">
      <a class="back-link" href="index.html">← ${t("back")}</a>
      <div class="detail-hero">
        <div class="detail-gallery"><div class="gallery-main"><img id="galleryImage" src="${escapeHTML(gallery[0])}" alt="${escapeHTML(carName(car))}" onerror="this.onerror=null;this.src='https://placehold.co/1200x800/141b26/9fcaff?text=Car+Image';"></div><div class="gallery-dots">${gallery.map((_,i)=>`<button class="gallery-dot ${i===0?'active':''}" data-slide="${i}" aria-label="Photo ${i+1}"></button>`).join("")}</div></div>
        <div class="detail-heading"><div class="car-brand">${escapeHTML(car.brand)}</div><h1>${escapeHTML(car.model)}</h1><p>${escapeHTML(currentLang === "fa" ? car.faSummary : car.enSummary)}</p><div class="detail-badges"><span class="detail-badge">${car.year}</span><span class="detail-badge">${car.power} ${t("hp")}</span><span class="detail-badge">${escapeHTML(car.body)}</span></div><div class="car-price">$${Number(car.priceUSD).toLocaleString("en-US")} <small>USD</small></div><p class="detail-note">${t("priceDisclaimer")}</p></div>
      </div>
      <div class="detail-sections">
        <section class="info-panel"><h2>${t("technical")}</h2>${specs.map(([label,value])=>`<div class="spec-row"><span>${escapeHTML(label)}</span><span>${escapeHTML(value)}</span></div>`).join("")}</section>
        <section class="info-panel"><h2>${t("makerTitle")}</h2><div class="spec-row"><span>${t("maker")}</span><span>${escapeHTML(car.brand)}</span></div><div class="spec-row"><span>${t("modelFamily")}</span><span>${escapeHTML(car.model)}</span></div><div class="spec-row"><span>${t("production")}</span><span>${car.year-2}–${car.year}</span></div><div class="spec-row"><span>${t("awards")}</span><span>—</span></div><p class="detail-note">${t("sampleNote")}</p></section>
        <section class="info-panel"><h2>${t("descriptionTitle")}</h2><p>${escapeHTML(currentLang === "fa" ? car.faSummary : car.enSummary)}</p><p>${escapeHTML(currentLang === "fa" ? car.faSummary : car.enSummary)} ${escapeHTML(currentLang === "fa" ? "این متن نمونه است و در نسخه نهایی با تاریخچه دقیق، نسل‌ها، فناوری‌ها و منابع معتبر تکمیل می‌شود." : "This placeholder will later be expanded with verified history, generations, engineering details and reliable sources.")}</p><p class="detail-note">${t("sampleNote")}</p></section>
        <section class="info-panel"><h2>${t("countryPrice")}</h2><p class="detail-note">${t("priceDisclaimer")}</p><div class="price-tools"><input id="countryInput" list="countryOptions" placeholder="${t("countryPlaceholder")}" aria-label="Country"><datalist id="countryOptions"><option value="United States"><option value="Germany"><option value="United Kingdom"><option value="Japan"><option value="United Arab Emirates"><option value="Iran"><option value="Canada"><option value="France"></datalist><button id="countryPriceButton">${t("findPrice")}</button></div><div id="countryPriceResult" class="country-price"></div></section>
        <section class="info-panel"><h2>${t("compare")}</h2><div class="compare-controls"><select id="compareCarSelect" aria-label="${t("chooseCar")}"><option value="">${t("chooseCar")}</option>${options}</select><button id="compareButton">${t("compareButton")}</button></div><div id="compareResult"></div></section>
      </div>
    </section>`;
  let slide = 0;
  const img = $("#galleryImage");
  const dots = [...document.querySelectorAll(".gallery-dot")];
  const showSlide = n => { slide = n; img.src = gallery[slide]; dots.forEach((dot,i)=>dot.classList.toggle("active",i===slide)); };
  dots.forEach(dot=>dot.addEventListener("click",()=>showSlide(Number(dot.dataset.slide))));
  // Auto-advance the gallery. The interval is cleared by the browser when the page is left.
  window.setInterval(()=>{ if (!document.hidden && document.querySelector("#galleryImage")) showSlide((slide+1)%gallery.length); }, 4000);
  $("#countryPriceButton").addEventListener("click",()=>{
    const country = $("#countryInput").value.trim();
    $("#countryPriceResult").textContent = country ? `${country}: $${Number(car.priceUSD).toLocaleString("en-US")} USD*` : t("countryPlaceholder");
  });
  $("#compareButton").addEventListener("click",()=>{
    const other = cars.find(item=>item.id === $("#compareCarSelect").value);
    const target = $("#compareResult");
    if (!other) { target.innerHTML = `<p class="detail-note">${t("chooseCar")}</p>`; return; }
    const rows = [[t("year"),car.year,other.year],[t("engine"),car.engine,other.engine],[t("hp"),car.power,other.power],[t("priceLabel"),`$${Number(car.priceUSD).toLocaleString("en-US")}`,`$${Number(other.priceUSD).toLocaleString("en-US")}`],[t("acceleration"),car.acceleration,other.acceleration],[t("topSpeed"),car.topSpeed,other.topSpeed]];
    target.innerHTML = `<table class="compare-table"><thead><tr><th></th><th>${escapeHTML(carName(car))}</th><th>${escapeHTML(carName(other))}</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(value=>`<td>${escapeHTML(value)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  });
}

function init() {
  $("#yearNow").textContent = new Date().getFullYear();
  $("#languageToggle")?.addEventListener("click", () => setLanguage(currentLang === "fa" ? "en" : "fa"));
  $("#headerSearchForm")?.addEventListener("submit", event => { event.preventDefault(); const value = $("#headerSearchInput").value; if (detailId) { window.location.href = `index.html?q=${encodeURIComponent(value)}`; return; } searchTerm = value; if ($("#searchInput")) $("#searchInput").value = value; currentPage = 1; renderCars(); $("#catalog")?.scrollIntoView({behavior:"smooth"}); });
  const queryFromUrl = new URLSearchParams(location.search).get("q");
  if (queryFromUrl && !detailId) { searchTerm = queryFromUrl; if ($("#headerSearchInput")) $("#headerSearchInput").value = queryFromUrl; if ($("#searchInput")) $("#searchInput").value = queryFromUrl; }
  $("#searchInput")?.addEventListener("input", event => { searchTerm = event.target.value; currentPage = 1; renderCars(); });
  $("#brandFilter")?.addEventListener("change", event => { selectedBrand = event.target.value; currentPage = 1; renderCars(); });
  $("#sortSelect")?.addEventListener("change", event => { sortMode = event.target.value; currentPage = 1; renderCars(); });
  $("#pagination")?.addEventListener("click", event => {
    const button = event.target.closest("button[data-page]");
    if (!button || button.disabled) return;
    currentPage = Number(button.dataset.page);
    renderCars();
    $("#catalog")?.scrollIntoView({ behavior:"smooth", block:"start" });
  });
  $("#resetFilters")?.addEventListener("click", () => {
    searchTerm = ""; selectedBrand = "all"; sortMode = "featured"; currentPage = 1;
    if ($("#searchInput")) $("#searchInput").value = "";
    if ($("#brandFilter")) $("#brandFilter").value = "all";
    if ($("#sortSelect")) $("#sortSelect").value = "featured";
    renderCars();
  });
  // Header brand links and category chips filter the existing catalog rather than acting as decorative controls.
  document.querySelectorAll("[data-brand]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault(); const brand = link.dataset.brand; searchTerm = ""; selectedBrand = brand; currentPage = 1;
    if ($("#searchInput")) $("#searchInput").value = "";
    if ($("#brandFilter")) { fillBrandFilter(); $("#brandFilter").value = [...new Set(cars.map(car => car.brand))].includes(brand) ? brand : "all"; selectedBrand = $("#brandFilter").value; }
    renderCars(); $("#catalog")?.scrollIntoView({behavior:"smooth"});
  }));
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("selected", item === button));
    const category = button.dataset.category; selectedBrand = "all"; currentPage = 1;
    searchTerm = category === "all" ? "" : category === "track" ? "" : category === "desert" ? "" : category;
    if (category === "track") searchTerm = "Coupe";
    if (category === "desert") searchTerm = "Roadster";
    if ($("#searchInput")) $("#searchInput").value = searchTerm;
    if ($("#brandFilter")) $("#brandFilter").value = "all"; renderCars(); $("#catalog")?.scrollIntoView({behavior:"smooth"});
  }));
  const slides = [...document.querySelectorAll(".feature-slide")]; let activeSlide = 0;
  const showFeature = n => { if (!slides.length) return; activeSlide = (n + slides.length) % slides.length; slides.forEach((slide,i)=>slide.classList.toggle("active",i===activeSlide)); document.querySelectorAll("[data-feature-slide]").forEach((dot,i)=>dot.classList.toggle("active",i===activeSlide)); };
  document.querySelectorAll("[data-feature-slide]").forEach(dot=>dot.addEventListener("click",()=>showFeature(Number(dot.dataset.featureSlide))));
  document.querySelector("[data-feature-prev]")?.addEventListener("click",()=>showFeature(activeSlide-1));
  document.querySelector("[data-feature-next]")?.addEventListener("click",()=>showFeature(activeSlide+1));
  if (slides.length) window.setInterval(()=>{ if (!document.hidden) showFeature(activeSlide+1); },6500);
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); $("#searchInput")?.focus();
    }
  });
  setLanguage(currentLang);
}
document.addEventListener("DOMContentLoaded", init);

// Demo authentication UI: this only validates the form in the browser; it does NOT create accounts or securely sign users in.
if (location.pathname.endsWith("auth.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    let mode = "login";
    const form = document.querySelector("#authForm");
    const title = document.querySelector("#authTitle");
    const submit = document.querySelector("#authSubmit");
    const message = document.querySelector("#authMessage");
    const nameField = document.querySelector("#nameField");
    const loginTab = document.querySelector("#loginTab");
    const signupTab = document.querySelector("#signupTab");
    const setMode = next => { mode=next; nameField.classList.toggle("hidden",mode==="login"); title.textContent=mode==="login"?(currentLang==="fa"?"ورود به A.R.M":"Sign in to A.R.M"):(currentLang==="fa"?"ساخت حساب کاربری":"Create your account"); submit.textContent=mode==="login"?(currentLang==="fa"?"ورود نمایشی":"Demo sign in"):(currentLang==="fa"?"ثبت‌نام نمایشی":"Demo register"); loginTab.classList.toggle("active",mode==="login"); signupTab.classList.toggle("active",mode==="signup"); message.textContent=""; };
    loginTab.addEventListener("click",()=>setMode("login")); signupTab.addEventListener("click",()=>setMode("signup"));
    form.addEventListener("submit",event=>{ event.preventDefault(); message.textContent=currentLang==="fa"?"این فقط فرم نمایشی است؛ برای ورود واقعی باید بک‌اند و سیستم احراز هویت امن اضافه شود.":"This is a UI demo only. Real authentication requires a backend and secure auth system."; });
    setMode("login");
  });
}


// Homepage interactions: rotating feature slider, theme, brand shortcuts and driving categories.
document.addEventListener("DOMContentLoaded", () => {
  const slides=[...document.querySelectorAll(".feature-slide")], dots=[...document.querySelectorAll(".feature-dots button")]; let active=0;
  function showSlide(n){if(!slides.length)return;active=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle("active",i===active));dots.forEach((d,i)=>d.classList.toggle("active",i===active));}
  dots.forEach((d,i)=>d.addEventListener("click",()=>showSlide(i)));document.querySelector("#featurePrev")?.addEventListener("click",()=>showSlide(active-1));document.querySelector("#featureNext")?.addEventListener("click",()=>showSlide(active+1));if(slides.length)setInterval(()=>showSlide(active+1),6500);
  const actions=document.querySelector(".header-actions");if(actions&&!document.querySelector(".theme-toggle")){const b=document.createElement("button");b.className="theme-toggle";b.type="button";b.title="تغییر پوسته";b.setAttribute("aria-label","تغییر حالت روشن و تاریک");b.textContent=document.body.classList.contains("dark-mode")?"☀":"☾";actions.prepend(b);const saved=localStorage.getItem("arm-theme");if(saved==="dark")document.body.classList.add("dark-mode");b.textContent=document.body.classList.contains("dark-mode")?"☀":"☾";b.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");localStorage.setItem("arm-theme",document.body.classList.contains("dark-mode")?"dark":"light");b.textContent=document.body.classList.contains("dark-mode")?"☀":"☾";});}
  function applyBrand(brand){const select=document.querySelector("#brandFilter");if(!select)return;const option=[...select.options].find(o=>o.value.toLowerCase()===brand.toLowerCase()||o.textContent.toLowerCase()===brand.toLowerCase());if(option){select.value=option.value;select.dispatchEvent(new Event("change"));document.querySelector("#catalogue")?.scrollIntoView({behavior:"smooth"});}}
  document.querySelectorAll("[data-brand]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();applyBrand(el.dataset.brand);}));
  document.querySelectorAll(".category-chips button").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".category-chips button").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");const cat=btn.dataset.category;const select=document.querySelector("#brandFilter");if(cat==="all"){if(select){select.value="all";select.dispatchEvent(new Event("change"));}return;}if(cat==="track"||cat==="offroad"){const search=document.querySelector("#searchInput");if(search){search.value=cat==="track"?"GT-R":"";search.dispatchEvent(new Event("input"));}document.querySelector("#catalogue")?.scrollIntoView({behavior:"smooth"});return;}const matching=[...document.querySelectorAll("#brandFilter option")].find(o=>o.value===cat);if(matching){select.value=cat;select.dispatchEvent(new Event("change"));}else{const search=document.querySelector("#searchInput");if(search){search.value=cat==="Electric"?"Tesla":cat;search.dispatchEvent(new Event("input"));}}document.querySelector("#catalogue")?.scrollIntoView({behavior:"smooth"});}));
  document.querySelectorAll(".editorial-card[data-category]").forEach(el=>el.addEventListener("click",()=>{const cat=el.dataset.category;const select=document.querySelector("#brandFilter");if(cat&&select&&[...select.options].some(o=>o.value===cat)){select.value=cat;select.dispatchEvent(new Event("change"));}}));
});
