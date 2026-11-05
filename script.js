"use strict";

/* ============================================================
   A.R.M — Automotive Reference
   Single script for index.html (home + car detail) and auth.html
   ============================================================ */

/* ---------- Data (demo content) ---------- */
// Temporary: every car uses one sample photo while we judge the layout. Swap per-car paths in later.
const SAMPLE_CAR_IMAGE = "assets/cars/porsche-911.avif";

const cars = [
  { id:"bmw-m3-g80", brand:"BMW", model:"M3 Competition", year:2024, priceUSD:85000, power:503, engine:"3.0L Twin-Turbo I6", body:"Sedan", fuel:"Gasoline", transmission:"8-speed automatic", acceleration:"3.8 s", topSpeed:"290 km/h", origin:"Germany", tags:["track"], image:SAMPLE_CAR_IMAGE, enSummary:"A high-performance sports sedan combining everyday usability with track-ready dynamics.", faSummary:"یه سدان اسپرت پرقدرت که هم تو شهر و روزمره راحته، هم تو پیست حسابی کار می‌کنه." },
  { id:"porsche-911", brand:"Porsche", model:"911 Carrera GTS", year:2024, priceUSD:165000, power:532, engine:"3.0L Twin-Turbo Flat-6", body:"Coupe", fuel:"Gasoline", transmission:"8-speed PDK", acceleration:"2.9 s", topSpeed:"312 km/h", origin:"Germany", tags:["track"], image:SAMPLE_CAR_IMAGE, enSummary:"An iconic rear-engine sports car known for precision, balance and a long motorsport heritage.", faSummary:"ماشین اسپرت موتورعقب و افسانه‌ای که به دقت، تعادل و سابقهٔ درخشانش تو مسابقه‌ها معروفه." },
  { id:"mercedes-amg-gt", brand:"Mercedes-AMG", model:"AMG GT 63", year:2024, priceUSD:185000, power:577, engine:"4.0L Twin-Turbo V8", body:"Coupe", fuel:"Gasoline", transmission:"9-speed automatic", acceleration:"3.1 s", topSpeed:"315 km/h", origin:"Germany", tags:["track"], image:SAMPLE_CAR_IMAGE, enSummary:"A grand-touring performance machine with muscular V8 power and a refined cabin.", faSummary:"یه گرندتورر پرقدرت با موتور V8 غرّان و کابینی لوکس و شیک." },
  { id:"audi-r8", brand:"Audi", model:"R8 V10 Performance", year:2023, priceUSD:210000, power:602, engine:"5.2L Naturally Aspirated V10", body:"Coupe", fuel:"Gasoline", transmission:"7-speed S tronic", acceleration:"3.1 s", topSpeed:"331 km/h", origin:"Germany", tags:["supercar"], image:SAMPLE_CAR_IMAGE, enSummary:"A mid-engine supercar celebrated for its naturally aspirated V10 and unmistakable soundtrack.", faSummary:"سوپراسپرت موتوروسط که با موتور V10 تنفس‌طبیعی و صدای خاصش شناخته می‌شه." },
  { id:"ferrari-296", brand:"Ferrari", model:"296 GTB", year:2024, priceUSD:340000, power:819, engine:"3.0L Twin-Turbo V6 Hybrid", body:"Coupe", fuel:"Plug-in hybrid", transmission:"8-speed DCT", acceleration:"2.9 s", topSpeed:"330 km/h", origin:"Italy", tags:["supercar","track"], image:SAMPLE_CAR_IMAGE, enSummary:"A compact hybrid berlinetta blending a turbocharged V6 with electric performance.", faSummary:"یه برلینتای هیبریدی جمع‌وجور که موتور V6 توربو رو با قدرت الکتریکی ترکیب کرده." },
  { id:"lamborghini-huracan", brand:"Lamborghini", model:"Huracán EVO", year:2023, priceUSD:260000, power:631, engine:"5.2L Naturally Aspirated V10", body:"Coupe", fuel:"Gasoline", transmission:"7-speed dual-clutch", acceleration:"2.9 s", topSpeed:"325 km/h", origin:"Italy", tags:["supercar","track"], image:SAMPLE_CAR_IMAGE, enSummary:"A dramatic naturally aspirated V10 supercar with sharp styling and all-wheel-drive grip.", faSummary:"سوپراسپرت V10 تنفس‌طبیعی با طراحی تیز و چسبندگی چهارچرخ‌محرک." },
  { id:"toyota-supra", brand:"Toyota", model:"GR Supra 3.0", year:2024, priceUSD:58000, power:382, engine:"3.0L Turbocharged I6", body:"Coupe", fuel:"Gasoline", transmission:"6-speed manual / 8-speed auto", acceleration:"3.9 s", topSpeed:"250 km/h", origin:"Japan", tags:["track"], image:SAMPLE_CAR_IMAGE, enSummary:"A rear-wheel-drive sports coupe developed around balance, agility and driver engagement.", faSummary:"کوپهٔ اسپرت دیفرانسیل‌عقب که همه‌چیزش حول تعادل، چابکی و حس رانندگی ساخته شده." },
  { id:"nissan-gt-r", brand:"Nissan", model:"GT-R Nismo", year:2024, priceUSD:220000, power:600, engine:"3.8L Twin-Turbo V6", body:"Coupe", fuel:"Gasoline", transmission:"6-speed dual-clutch", acceleration:"2.7 s", topSpeed:"315 km/h", origin:"Japan", tags:["track"], image:SAMPLE_CAR_IMAGE, enSummary:"A technology-focused performance icon with advanced all-wheel drive and turbocharged power.", faSummary:"یه نماد پرفورمنس و تکنولوژی با سیستم چهارچرخ‌محرک پیشرفته و موتور توربو." },
  { id:"tesla-model-s", brand:"Tesla", model:"Model S Plaid", year:2024, priceUSD:90000, power:1020, engine:"Tri-motor electric", body:"Liftback", fuel:"Electric", transmission:"Single-speed", acceleration:"2.1 s", topSpeed:"322 km/h", origin:"United States", tags:[], image:SAMPLE_CAR_IMAGE, enSummary:"An electric performance liftback known for instant torque, high acceleration and long range.", faSummary:"لیفت‌بک برقی پرفورمنس با گشتاور آنی، شتاب وحشتناک و بردِ بالا." },
  { id:"ford-mustang", brand:"Ford", model:"Mustang Dark Horse", year:2024, priceUSD:62000, power:500, engine:"5.0L Naturally Aspirated V8", body:"Coupe", fuel:"Gasoline", transmission:"6-speed manual / 10-speed auto", acceleration:"4.1 s", topSpeed:"267 km/h", origin:"United States", tags:[], image:SAMPLE_CAR_IMAGE, enSummary:"A modern muscle coupe that keeps a naturally aspirated V8 at the heart of the experience.", faSummary:"کوپهٔ ماسل مدرن که هنوز موتور V8 تنفس‌طبیعی رو قلب تجربهٔ رانندگیش نگه داشته." },
  { id:"bugatti-chiron", brand:"Bugatti", model:"Chiron Super Sport", year:2022, priceUSD:3900000, power:1578, engine:"8.0L Quad-Turbo W16", body:"Coupe", fuel:"Gasoline", transmission:"7-speed dual-clutch", acceleration:"2.4 s", topSpeed:"440 km/h*", origin:"France", tags:["supercar"], image:SAMPLE_CAR_IMAGE, enSummary:"An engineering showcase built around immense W16 power, luxury and extreme high-speed capability.", faSummary:"یه شاهکار مهندسی با موتور W16 غول‌پیکر، لوکس‌بودن و توانایی سرعت‌های فوق‌العاده بالا." },
  { id:"mazda-mx5", brand:"Mazda", model:"MX-5 Miata", year:2024, priceUSD:30000, power:181, engine:"2.0L Naturally Aspirated I4", body:"Roadster", fuel:"Gasoline", transmission:"6-speed manual / automatic", acceleration:"5.7 s", topSpeed:"219 km/h", origin:"Japan", tags:["track"], image:SAMPLE_CAR_IMAGE, enSummary:"A lightweight roadster focused on simplicity, balance and the joy of open-top driving.", faSummary:"رودستر سبک و ساده که تمرکزش روی تعادل و لذت رانندگی روبازه." }
];

// Demo prices only (USD). Replace with verified values once a real data source exists.
// The gallery only has one photo per car for now; add more URLs here later and the slider/dots appear automatically.
const galleryImages = car => [car.image];

const CATEGORIES = ["all", "Coupe", "Sedan", "Roadster", "Electric", "track", "supercar"];

/* ---------- Translations ---------- */
const translations = {
  fa: {
    login:"ورود / ثبت‌نام", themeToggle:"تغییر حالت روشن و تاریک", profile:"پروفایل", langToggle:"تغییر زبان",
    compare:"مقایسه با یه ماشین دیگه", chooseCar:"یه ماشین برای مقایسه انتخاب کن", compareButton:"مقایسه",
    countryPrice:"قیمت تو کشورهای مختلف", countryPlaceholder:"اسم کشور رو بنویس...", findPrice:"نشون بده",
    descriptionTitle:"دربارهٔ این ماشین", makerTitle:"سازنده و اطلاعات تولید", maker:"سازنده", modelFamily:"خانواده / نسل", production:"دورهٔ تولید", awards:"جایزه‌ها و افتخارها",
    priceLabel:"قیمت پایهٔ نمایشی", priceDisclaimer:"قیمت‌ها فقط برای نمونه‌ست و واقعی نیستن.",
    searchPlaceholder:"جست‌وجوی برند یا مدل...",
    /* nav */
    navCars:"ماشین‌ها", navBrands:"برندها", navTech:"دانشنامهٔ فنی", navCompare:"مقایسهٔ ماشین‌ها", navHistory:"تاریخچه و برندها", navMagazine:"مجلهٔ ماشین", navStatus:"مرجع ماشین‌ها",
    megaCarsTitle:"ماشین بعدیت رو پیدا کن", megaCarsText:"با سبک رانندگی و کلاس ماشین، راهت رو پیدا کن.", megaCarsAll:"دیدن همهٔ ماشین‌ها <span>←</span>",
    catAll:"همهٔ ماشین‌ها", catCoupe:"کوپه و اسپرت", catCoupeSub:"هیجان و هندلینگ", catSedan:"سدان", catSedanSub:"تعادل و راحتی", catRoadster:"رودستر و کروک", catRoadsterSub:"رانندگی زیر آسمون باز",
    catElectric:"ماشین‌های برقی", catElectricSub:"تکنولوژی نسل جدید", catTrack:"مخصوص پیست", catTrackSub:"پرفورمنس خالص", catSupercar:"سوپراسپرت", catSupercarSub:"اوج مهندسی و قدرت",
    megaBrandsTitle:"هر نشان، یه دنیا", megaBrandsText:"با سازنده‌های معروف و فلسفهٔ مهندسی‌شون آشنا شو.", megaBrandsAll:"برو به فهرست برندها <span>←</span>",
    countryGermany:"آلمان", countryItaly:"ایتالیا", countryUSA:"آمریکا",
    megaTechTitle:"زیر پوست ماشین", megaTechText:"تکنولوژی‌هایی که حس رانندگی رو می‌سازن؛ از موتور تا سیستم‌های هوشمند.",
    tech1:"موتور و توربوشارژر", tech1Sub:"قدرت از کجا میاد؟", tech2:"گیربکس و انتقال قدرت", tech2Sub:"مهندسی حرکت", tech3:"ماشین‌های برقی", tech3Sub:"باتری، موتور و آینده", tech4:"فلسفهٔ مهندسی برندها", tech4Sub:"DNA هر سازنده",
    /* slider */
    s1Title:"مهندسی برای <em>لذت رانندگی</em>", s1Text:"از افسانه‌های پیست تا ماشین‌های جاده؛ دنیای ماشین رو دقیق‌تر بشناس.", s1Cta:"دیدن Porsche 911 <span>↗</span>",
    s2Title:"قدرتی با امضای <em>M</em>", s2Text:"تعادل بین یه ماشین روزمره و هیجان رانندگی اسپرت.", s2Cta:"دیدن BMW M3 <span>↗</span>",
    s3Title:"لوکس، با قلبی <em>وحشی</em>", s3Text:"داستان تکنولوژی، طراحی و قدرت تو ماشین‌های پرفورمنس.", s3Cta:"دیدن Mercedes-AMG <span>↗</span>",
    prevSlide:"قبلی", nextSlide:"بعدی",
    ribbonTitle:"برندهای افسانه‌ای", ribbonText:"نشان هر سازنده، یه داستان از مهندسی",
    quickTitle:"از کدوم دنیا خوشت میاد؟",
    /* catalog */
    collectionKicker:"THE COLLECTION", collectionTitle:"ماشین‌ها رو دقیق‌تر بشناس", collectionSubtitle:"مدل مورد علاقه‌ت رو پیدا کن و مشخصاتش رو ببین.",
    brandFilter:"برند", allBrands:"همهٔ برندها", sortLabel:"مرتب‌سازی", sortFeatured:"پیشنهادی", sortName:"اسم ماشین", sortYear:"سال ساخت", sortPower:"قدرت موتور",
    emptyTitle:"ماشینی پیدا نشد", emptyText:"عبارت جست‌وجو یا فیلترها رو عوض کن.", resetFilters:"پاک کردن فیلترها",
    /* editorial / showcase / about / footer */
    edTitle:"بیشتر از یه ماشین", edText:"جاده‌ها، تکنولوژی‌ها و لحظه‌هایی که یه ماشین رو خاص می‌کنن.",
    ed1Title:"فراتر از افق", ed1Text:"ماشین‌های مناسب سفرهای طولانی", ed2Title:"زندگی تو پیست", ed2Text:"وقتی هر ثانیه مهمه", ed3Title:"عصر الکتریکی", ed3Text:"یه نگاه به آیندهٔ پرفورمنس",
    shTitle:"هر برند، یه فلسفه", shText:"از مهندسی دقیق تا هیجان خالص مسابقه.",
    sh1:"پرفورمنس اسپرت با محوریت راننده", sh2:"قدرت و راحتی تو یه تجربه", sh3:"ریشهٔ پیست، تو جاده", sh4:"تکنولوژی و کشش هوشمند", sh5:"هیجان و مهندسی ایتالیایی", sh6:"شتاب الکتریکی و نرم‌افزار",
    aboutStripTitle:"جایی برای کنجکاوی‌های ماشینی", aboutStripText:"این دانشنامه ساخته شده که ماشین‌ها، تکنولوژی‌ها و سازنده‌ها رو بهتر بشناسی؛ نه اینکه ماشین بفروشه.",
    footerMade:"ساخته‌شده برای عاشق‌های ماشین.", footerAbout:"دربارهٔ پروژه",
    /* car cards + detail */
    hp:"اسب‌بخار", year:"سال", details:"دیدن مشخصات", body:"نوع بدنه", engine:"موتور", transmission:"گیربکس", fuel:"سوخت", acceleration:"شتاب ۰ تا ۱۰۰", topSpeed:"حداکثر سرعت", origin:"کشور سازنده",
    technical:"مشخصات فنی", sampleNote:"اطلاعات این نسخه فقط برای نمایش ساختار سایت گذاشته شده. قبل از اینکه به‌عنوان مرجع بهشون تکیه کنی، با منابع معتبر چک‌شون کن.",
    placeholderText:"این متن موقته؛ تو نسخهٔ نهایی با تاریخچهٔ دقیق، نسل‌ها، تکنولوژی‌ها و منابع معتبر کامل می‌شه.",
    back:"برگشت به کاتالوگ", notFound:"ماشین پیدا نشد", notFoundText:"این شناسه تو داده‌های نمونه نیست.", previous:"قبلی", next:"بعدی", pagination:"صفحه‌بندی",
    vehicles:"ماشین",
    /* detail page */
    home:"خانه", power:"قدرت", seconds:"ثانیه", barsNote:"نوارها نسبت به بقیهٔ ماشین‌های همین کاتالوگ‌ان.", unverifiedNote:"* این عدد هنوز با منبع معتبر چک نشده.",
    tabSpecs:"مشخصات", tabAbout:"درباره و سازنده", tabPrice:"قیمت کشورها", tabCompare:"مقایسه", tabSimilar:"مشابه‌ها",
    groupPerf:"عملکرد", groupEngine:"موتور و گیربکس", groupGeneral:"اطلاعات کلی",
    copyLink:"کپی لینک", linkCopied:"لینک کپی شد", zoom:"بزرگ‌نمایی عکس", close:"بستن", features:"ویژگی‌ها",
    compareHint:"یه ماشین انتخاب کن تا کنار این ماشین ببینیشون.", better:"بهتر از اون یکی",
    similarTitle:"ماشین‌های مشابه", similarText:"اگه این ماشین رو دوست داشتی، اینا رو هم ببین.", prevCar:"ماشین قبلی", nextCar:"ماشین بعدی",
    /* auth */
    backSite:"→ بازگشت به سایت", authLead:"نسخهٔ نمایشی صفحهٔ ورود و ثبت‌نام.", tabLogin:"ورود", tabSignup:"ثبت‌نام",
    nameLabel:"اسمت", namePlaceholder:"اسمت رو بنویس", emailLabel:"ایمیل", passLabel:"رمز عبور", passPlaceholder:"حداقل ۸ کاراکتر",
    authTitleLogin:"ورود به A.R.M", authTitleSignup:"ساخت حساب کاربری", submitLogin:"ورود (نمایشی)", submitSignup:"ثبت‌نام (نمایشی)",
    authNote:"این صفحه هنوز ورود واقعی نداره و هیچ اطلاعاتی ذخیره یا فرستاده نمی‌شه.",
    authDemoMsg:"اینجا فقط یه فرم نمایشیه؛ برای ورود واقعی باید بک‌اند و یه سیستم احراز هویت امن اضافه بشه."
  },
  en: {
    login:"Sign in / Register", themeToggle:"Toggle light and dark mode", profile:"Profile", langToggle:"Change language",
    compare:"Compare with another car", chooseCar:"Choose a car to compare", compareButton:"Compare",
    countryPrice:"Prices by country", countryPlaceholder:"Search a country...", findPrice:"Show price",
    descriptionTitle:"About this vehicle", makerTitle:"Manufacturer & production", maker:"Manufacturer", modelFamily:"Family / generation", production:"Production period", awards:"Awards & recognition",
    priceLabel:"Sample base price", priceDisclaimer:"Prices are placeholders, not verified market prices.",
    searchPlaceholder:"Search make or model...",
    navCars:"Cars", navBrands:"Brands", navTech:"Tech encyclopedia", navCompare:"Compare cars", navHistory:"History & brands", navMagazine:"Car magazine", navStatus:"Automotive reference",
    megaCarsTitle:"Your next car to discover", megaCarsText:"Find your path by driving style and vehicle class.", megaCarsAll:"View all cars <span>→</span>",
    catAll:"All cars", catCoupe:"Coupes & sports", catCoupeSub:"Thrills and handling", catSedan:"Sedans", catSedanSub:"Balance and comfort", catRoadster:"Roadsters & open-top", catRoadsterSub:"Open-air driving",
    catElectric:"Electric cars", catElectricSub:"Next-generation tech", catTrack:"Track-focused", catTrackSub:"Unfiltered performance", catSupercar:"Supercars", catSupercarSub:"Peak engineering and power",
    megaBrandsTitle:"Every badge, a world", megaBrandsText:"Meet the key makers and their engineering philosophies.", megaBrandsAll:"Go to the brand list <span>→</span>",
    countryGermany:"Germany", countryItaly:"Italy", countryUSA:"USA",
    megaTechTitle:"Under the skin", megaTechText:"The technologies that shape the driving experience, from engines to smart systems.",
    tech1:"Engines & turbochargers", tech1Sub:"Where does power come from?", tech2:"Gearboxes & drivetrains", tech2Sub:"The engineering of motion", tech3:"Electric cars", tech3Sub:"Battery, motor and the future", tech4:"Brand engineering philosophy", tech4Sub:"Each maker's DNA",
    s1Title:"Engineering for <em>the joy of driving</em>", s1Text:"From track legends to road cars; get to know the automotive world in more detail.", s1Cta:"Discover Porsche 911 <span>↗</span>",
    s2Title:"Power with an <em>M</em> signature", s2Text:"A balance between everyday performance and sporty driving thrills.", s2Cta:"Discover BMW M3 <span>↗</span>",
    s3Title:"Luxurious, with a <em>wild</em> heart", s3Text:"The story of technology, design and power in performance cars.", s3Cta:"Discover Mercedes-AMG <span>↗</span>",
    prevSlide:"Previous", nextSlide:"Next",
    ribbonTitle:"Legendary brands", ribbonText:"Each maker's badge, a story of engineering",
    quickTitle:"Which world do you like?",
    collectionKicker:"THE COLLECTION", collectionTitle:"Explore the automotive world", collectionSubtitle:"Find a model and explore its key specifications.",
    brandFilter:"Make", allBrands:"All makes", sortLabel:"Sort", sortFeatured:"Featured", sortName:"Model name", sortYear:"Production year", sortPower:"Engine power",
    emptyTitle:"No cars found", emptyText:"Try another search term or filter.", resetFilters:"Clear filters",
    edTitle:"More than a machine", edText:"The roads, technologies and moments that make a car special.",
    ed1Title:"Beyond the horizon", ed1Text:"Cars made for long journeys", ed2Title:"Life on the track", ed2Text:"When every second counts", ed3Title:"The electric era", ed3Text:"A look at the future of performance",
    shTitle:"Every brand, a philosophy", shText:"From precise engineering to pure racing excitement.",
    sh1:"Sporty performance focused on the driver", sh2:"Power and comfort in one experience", sh3:"Track heritage on the road", sh4:"Technology and smart traction", sh5:"Italian passion and engineering", sh6:"Electric acceleration and software",
    aboutStripTitle:"A reference for automotive curiosity", aboutStripText:"This encyclopedia is built to understand cars, technologies and makers, not to sell cars.",
    footerMade:"Built for automotive curiosity.", footerAbout:"About the project",
    hp:"hp", year:"Year", details:"View details", body:"Body style", engine:"Engine", transmission:"Transmission", fuel:"Fuel", acceleration:"0–100 km/h", topSpeed:"Top speed", origin:"Built in",
    technical:"Technical specifications", sampleNote:"This version uses sample content to demonstrate the site structure. Verify all specifications against reliable sources before treating them as reference data.",
    placeholderText:"This placeholder will later be expanded with verified history, generations, engineering details and reliable sources.",
    back:"Back to catalog", notFound:"Vehicle not found", notFoundText:"This vehicle ID is not present in the sample data.", previous:"Previous", next:"Next", pagination:"Pagination",
    vehicles:"vehicles",
    /* detail page */
    home:"Home", power:"Power", seconds:"s", barsNote:"Bars are relative to the other cars in this catalog.", unverifiedNote:"* This figure hasn't been checked against a reliable source yet.",
    tabSpecs:"Specs", tabAbout:"About & maker", tabPrice:"Prices", tabCompare:"Compare", tabSimilar:"Similar",
    groupPerf:"Performance", groupEngine:"Engine & drivetrain", groupGeneral:"General",
    copyLink:"Copy link", linkCopied:"Link copied", zoom:"View larger", close:"Close", features:"Highlights",
    compareHint:"Pick a car to see the two side by side.", better:"Better than the other",
    similarTitle:"Similar cars", similarText:"If you like this one, check these out too.", prevCar:"Previous car", nextCar:"Next car",
    backSite:"← Back to site", authLead:"A demo of the sign-in and registration interface.", tabLogin:"Sign in", tabSignup:"Register",
    nameLabel:"Display name", namePlaceholder:"Your name", emailLabel:"Email", passLabel:"Password", passPlaceholder:"At least 8 characters",
    authTitleLogin:"Sign in to A.R.M", authTitleSignup:"Create your account", submitLogin:"Demo sign in", submitSignup:"Demo register",
    authNote:"This page has no real authentication yet; nothing is stored or sent.",
    authDemoMsg:"This is a UI demo only. Real authentication requires a backend and secure auth system."
  }
};

/* ---------- State ---------- */
function storageGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function storageSet(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } }

let currentLang = storageGet("arm-language") === "en" ? "en" : "fa";
let currentPage = 1;
const pageSize = 8;
let searchTerm = "";
let selectedBrand = "all";
let selectedCategory = "all";
let sortMode = "featured";
let authMode = "login";
let galleryTimer = null;
let featureTimer = null;
let activeFeature = 0;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const params = new URLSearchParams(window.location.search);
const detailId = params.get("car");

function t(key) { const v = translations[currentLang][key]; return v === undefined ? key : v; }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
}
// "Back" arrows point toward the start of the line: → in RTL (Persian), ← in LTR (English)
function backArrow() { return currentLang === "fa" ? "→" : "←"; }
function carName(car) { return `${car.brand} ${car.model}`; }
function money(value) { return `$${Number(value).toLocaleString("en-US")}`; }
/* ---------- Localized catalog values: the Persian UI shows Persian words ---------- */
const VALUE_FA = {
  body: { Coupe: "کوپه", Sedan: "سدان", Roadster: "رودستر", Liftback: "لیفت‌بک" },
  fuel: { Gasoline: "بنزین", Electric: "برقی", "Plug-in hybrid": "هیبرید پلاگین‌این" },
  origin: { Germany: "آلمان", Italy: "ایتالیا", Japan: "ژاپن", "United States": "آمریکا", France: "فرانسه" }
};
function loc(kind, value) { return currentLang === "fa" ? (VALUE_FA[kind]?.[value] ?? value) : value; }
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Small stroke icons (24px grid) used on the detail page */
const ICONS = {
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
  speed: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 18 4-6"/>',
  engine: '<path d="M4 9h3l2-2h6l2 2h3v7h-3l-2 2H9l-2-2H4z"/><path d="M12 11v4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  fuel: '<path d="M6 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16M4 21h13M15 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
  calendar: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  body: '<path d="m3 15 2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v3H3z"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="16.5" cy="18" r="1.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  factory: '<path d="M3 21V9l6 4V9l6 4V5h6v16z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3M12 13v4M8 21h8M10 17h4"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>',
  expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  compare: '<path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
};
const svgIcon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

function scrollToCatalog() { $("#catalog")?.scrollIntoView({ behavior:"smooth", block:"start" }); }

/* ---------- Language ---------- */
function setLanguage(lang) {
  currentLang = lang;
  storageSet("arm-language", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach(el => { const v = translations[lang][el.dataset.i18n]; if (v !== undefined) el.innerHTML = v; });
  $$("[data-i18n-placeholder]").forEach(el => { const v = translations[lang][el.dataset.i18nPlaceholder]; if (v !== undefined) el.placeholder = v; });
  $$("[data-i18n-aria]").forEach(el => { const v = translations[lang][el.dataset.i18nAria]; if (v !== undefined) el.setAttribute("aria-label", v); });

  const toggle = $("#languageToggle");
  if (toggle) toggle.textContent = lang === "fa" ? "EN" : "فا";
  syncThemeButton();
  renderAuthMode();

  if (detailId) renderDetailPage();
  else if ($("#carGrid")) { fillBrandFilter(); renderCars(); }
}

/* ---------- Theme ---------- */
function isDark() { return document.documentElement.classList.contains("dark-mode"); }
function syncThemeButton() {
  const button = $("#themeToggle");
  if (button) { (button.querySelector(".theme-glyph") || button).textContent = isDark() ? "☀" : "☾"; button.setAttribute("aria-label", t("themeToggle")); button.title = t("themeToggle"); }
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark() ? "#080b10" : "#f4f6f8");
}
/* Restart a one-shot CSS animation class on an element */
function playAnimation(el, className, ms) {
  if (!el) return;
  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
  setTimeout(() => el.classList.remove(className), ms);
}
function toggleTheme() {
  document.documentElement.classList.toggle("dark-mode");
  storageSet("arm-theme", isDark() ? "dark" : "light");
  playAnimation($("#themeToggle"), "spin", 650);
  setTimeout(syncThemeButton, 200); // swap the sun/moon glyph while the icon is mid-spin
}

/* ---------- Catalogue ---------- */
function fillBrandFilter() {
  const select = $("#brandFilter");
  if (!select) return;
  const brands = [...new Set(cars.map(car => car.brand))].sort();
  select.innerHTML = `<option value="all">${escapeHTML(t("allBrands"))}</option>` + brands.map(b => `<option value="${escapeHTML(b)}">${escapeHTML(b)}</option>`).join("");
  select.value = brands.includes(selectedBrand) ? selectedBrand : "all";
  selectedBrand = select.value;
}
function matchesCategory(car) {
  switch (selectedCategory) {
    case "all": return true;
    case "Electric": return car.fuel === "Electric";
    case "Coupe": case "Sedan": case "Roadster": return car.body === selectedCategory;
    default: return car.tags.includes(selectedCategory);
  }
}
function filteredCars() {
  const query = searchTerm.trim().toLocaleLowerCase();
  const list = cars.filter(car => {
    const matchesSearch = !query || [car.brand, car.model, car.year, car.engine, car.body, car.fuel, car.origin].join(" ").toLocaleLowerCase().includes(query);
    return matchesSearch && matchesCategory(car) && (selectedBrand === "all" || car.brand === selectedBrand);
  });
  if (sortMode === "name") list.sort((a, b) => carName(a).localeCompare(carName(b)));
  if (sortMode === "year") list.sort((a, b) => b.year - a.year);
  if (sortMode === "power") list.sort((a, b) => b.power - a.power);
  return list;
}
function syncCategoryChips() {
  $$(".category-chips button").forEach(btn => btn.classList.toggle("selected", btn.dataset.category === selectedCategory));
}
function carCardHTML(car) {
  return `
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
        <div class="spec-pills">
          <span class="spec-pill">${car.power} ${escapeHTML(t("hp"))}</span>
          <span class="spec-pill">0–100: ${escapeHTML(car.acceleration)}</span>
          <span class="spec-pill">${escapeHTML(loc("body", car.body))}</span>
          <span class="spec-pill">${escapeHTML(car.topSpeed)}</span>
        </div>
        <div class="card-bottom">
          <span class="card-category">${escapeHTML(loc("origin", car.origin))}</span>
          <a class="details-link" href="index.html?car=${encodeURIComponent(car.id)}">${escapeHTML(t("details"))} ↗</a>
        </div>
      </div>
    </article>`;
}
function renderCars() {
  const grid = $("#carGrid");
  if (!grid) return;
  const list = filteredCars();
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  currentPage = Math.min(Math.max(1, currentPage), totalPages);
  const pageCars = list.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const count = $("#resultCount");
  if (count) count.textContent = `${list.length} ${t("vehicles")}`;
  $("#emptyState")?.classList.toggle("hidden", list.length !== 0);
  grid.classList.toggle("hidden", list.length === 0);
  $("#pagination")?.classList.toggle("hidden", list.length === 0 || totalPages === 1);
  syncCategoryChips();

  grid.innerHTML = pageCars.map(carCardHTML).join("");
  renderPagination(totalPages);
}
function renderPagination(totalPages) {
  const pagination = $("#pagination");
  if (!pagination) return;
  pagination.setAttribute("aria-label", t("pagination"));
  let html = `<button class="page-button" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>‹ ${escapeHTML(t("previous"))}</button>`;
  for (let page = 1; page <= totalPages; page++) {
    html += `<button class="page-button ${page === currentPage ? "current" : ""}" data-page="${page}" ${page === currentPage ? 'aria-current="page"' : ""}>${page}</button>`;
  }
  html += `<button class="page-button" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}>${escapeHTML(t("next"))} ›</button>`;
  pagination.innerHTML = html;
}

/* Filters that can be triggered from anywhere (menus, chips, brand tiles) */
function goToBrand(brand) {
  if (detailId || !$("#carGrid")) { window.location.href = `index.html?brand=${encodeURIComponent(brand)}#catalog`; return; }
  selectedBrand = cars.some(c => c.brand === brand) ? brand : "all";
  selectedCategory = "all"; searchTerm = ""; currentPage = 1;
  if ($("#headerSearchInput")) $("#headerSearchInput").value = "";
  fillBrandFilter(); renderCars(); scrollToCatalog();
}
function goToCategory(category) {
  if (!CATEGORIES.includes(category)) category = "all";
  if (detailId || !$("#carGrid")) { window.location.href = `index.html?category=${encodeURIComponent(category)}#catalog`; return; }
  selectedCategory = category; selectedBrand = "all"; searchTerm = ""; currentPage = 1;
  if ($("#headerSearchInput")) $("#headerSearchInput").value = "";
  fillBrandFilter(); renderCars(); scrollToCatalog();
}

/* ---------- Detail page ---------- */
let detailCleanups = [];
let detailAnimatedFor = null;
let toastTimer = null;

const COUNTRIES = [
  { fa: "آمریکا", en: "United States" }, { fa: "آلمان", en: "Germany" }, { fa: "انگلیس", en: "United Kingdom" }, { fa: "ژاپن", en: "Japan" },
  { fa: "امارات", en: "United Arab Emirates" }, { fa: "ایران", en: "Iran" }, { fa: "کانادا", en: "Canada" }, { fa: "فرانسه", en: "France" }
];
const TAG_KEY = { track: "catTrack", supercar: "catSupercar" };
const fmtNum = (n, d = 0) => Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

function carStats(car) {
  const accel = parseFloat(car.acceleration), top = parseFloat(car.topSpeed);
  const maxP = Math.max(...cars.map(c => c.power));
  const minA = Math.min(...cars.map(c => parseFloat(c.acceleration)));
  const maxT = Math.max(...cars.map(c => parseFloat(c.topSpeed)));
  return { power: car.power, accel, top, star: car.topSpeed.includes("*"), pPct: car.power / maxP * 100, aPct: minA / accel * 100, tPct: top / maxT * 100 };
}
function similarCars(car) {
  return cars.filter(c => c.id !== car.id).map(c => {
    const closeness = 1 - Math.min(1, Math.abs(c.power - car.power) / Math.max(c.power, car.power));
    const score = (c.brand === car.brand ? 3 : 0) + c.tags.filter(x => car.tags.includes(x)).length * 2 + (c.body === car.body ? 1 : 0) + (c.fuel === car.fuel ? 1 : 0) + closeness;
    return { c, score };
  }).sort((a, b) => b.score - a.score).slice(0, 3).map(x => x.c);
}

function countUp(el, to, decimals, ms = 1200) {
  if (prefersReducedMotion()) { el.textContent = fmtNum(to, decimals); return; }
  const start = performance.now();
  const step = now => {
    const k = Math.min(1, (now - start) / ms);
    el.textContent = fmtNum(to * (1 - Math.pow(1 - k, 3)), decimals);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function showToast(message) {
  let toast = $("#dtToast");
  if (!toast) { toast = document.createElement("div"); toast.id = "dtToast"; toast.className = "dt-toast"; toast.setAttribute("role", "status"); document.body.appendChild(toast); }
  toast.textContent = message;
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderDetailPage() {
  detailCleanups.forEach(fn => { try { fn(); } catch (err) { /* ignore */ } });
  detailCleanups = [];
  clearInterval(galleryTimer); galleryTimer = null;
  const app = $("#app");
  if (!app) return;
  const e = escapeHTML;
  const car = cars.find(item => item.id === detailId);
  if (!car) {
    document.title = `${t("notFound")} — A.R.M`;
    app.innerHTML = `<section class="detail-page static"><div class="dt-crumbs"><a class="back-link" href="index.html#catalog">${backArrow()} ${e(t("back"))}</a></div><div class="info-panel dt-notfound"><h1>${e(t("notFound"))}</h1><p>${e(t("notFoundText"))}</p></div></section>`;
    return;
  }

  /* ----- data prepared once ----- */
  document.title = `${carName(car)} — A.R.M`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", currentLang === "fa" ? car.faSummary : car.enSummary);
  const summary = currentLang === "fa" ? car.faSummary : car.enSummary;
  const period = `${car.year - 2}–${car.year}`;
  const st = carStats(car);
  const secUnit = currentLang === "fa" ? t("seconds") : "s";
  const accelText = `${st.accel} ${secUnit}`;
  const gallery = galleryImages(car);
  const staticPage = detailAnimatedFor === detailId || prefersReducedMotion();
  const idx = cars.indexOf(car);
  const prevCar = cars[(idx - 1 + cars.length) % cars.length], nextCar = cars[(idx + 1) % cars.length];
  const prevArrow = currentLang === "fa" ? "→" : "←", nextArrow = currentLang === "fa" ? "←" : "→";
  const link = c => `index.html?car=${encodeURIComponent(c.id)}`;
  const fallbackImg = "https://placehold.co/1200x800/141b26/9fcaff?text=Car+Image";

  const row = (icon, label, value) => `<div class="dt-row"><span class="dt-row-k"><i class="dt-ico">${svgIcon(icon)}</i>${e(label)}</span><span class="dt-row-v"><bdi>${e(value)}</bdi></span></div>`;
  const stat = (i, icon, label, count, dec, unit, pct, star) => `
    <article class="dt-stat dt-reveal" data-reveal style="--d:${(i * 0.08).toFixed(2)}s;--pct:${pct.toFixed(1)}%">
      <div class="dt-stat-top"><span class="dt-stat-label">${e(label)}</span><span class="dt-stat-ico">${svgIcon(icon)}</span></div>
      <div class="dt-stat-value"><b data-count="${count}" data-dec="${dec}">${fmtNum(count, dec)}</b>${star ? "<sup>*</sup>" : ""}<small>${e(unit)}</small></div>
      <div class="dt-bar" aria-hidden="true"><i></i></div>
    </article>`;

  const groups = [
    { title: t("groupPerf"), rows: [["bolt", t("power"), `${car.power} ${t("hp")}`], ["timer", t("acceleration"), accelText], ["speed", t("topSpeed"), car.topSpeed]] },
    { title: t("groupEngine"), rows: [["engine", t("engine"), car.engine], ["gear", t("transmission"), car.transmission], ["fuel", t("fuel"), loc("fuel", car.fuel)]] },
    { title: t("groupGeneral"), rows: [["calendar", t("year"), car.year], ["body", t("body"), loc("body", car.body)], ["globe", t("origin"), loc("origin", car.origin)]] }
  ];
  const features = [loc("body", car.body), loc("fuel", car.fuel), ...car.tags.map(tag => TAG_KEY[tag] ? t(TAG_KEY[tag]) : tag)];
  const tabs = [["sec-specs", "tabSpecs"], ["sec-about", "tabAbout"], ["sec-price", "tabPrice"], ["sec-compare", "tabCompare"], ["sec-similar", "tabSimilar"]];
  const options = cars.filter(item => item.id !== car.id).map(item => `<option value="${e(item.id)}">${e(carName(item))}</option>`).join("");
  const dots = gallery.length > 1 ? `<div class="gallery-dots">${gallery.map((_, i) => `<button class="gallery-dot ${i === 0 ? "active" : ""}" data-slide="${i}" aria-label="Photo ${i + 1}"></button>`).join("")}</div>` : "";

  app.innerHTML = `
  <section class="detail-page ${staticPage ? "static" : ""}">
    <div class="dt-crumbs">
      <nav aria-label="Breadcrumb"><ol>
        <li><a href="index.html">${e(t("home"))}</a></li>
        <li><a href="index.html#catalog">${e(t("navCars"))}</a></li>
        <li><a href="index.html?brand=${encodeURIComponent(car.brand)}#catalog"><bdi>${e(car.brand)}</bdi></a></li>
        <li aria-current="page"><bdi>${e(car.model)}</bdi></li>
      </ol></nav>
      <a class="back-link" href="index.html#catalog">${backArrow()} ${e(t("back"))}</a>
    </div>

    <header class="dt-hero">
      <div class="dt-hero-media" id="heroMedia">
        <div class="dt-hero-parallax"><img id="galleryImage" class="dt-hero-img" src="${e(gallery[0])}" alt="${e(carName(car))}" onerror="this.onerror=null;this.src='${fallbackImg}';"></div>
        <div class="dt-hero-shade"></div>
        <span class="dt-hero-year">${car.year}</span>
        <button class="dt-zoom" id="zoomBtn" type="button" aria-label="${e(t("zoom"))}" title="${e(t("zoom"))}">${svgIcon("expand")}</button>
        ${dots}
        <div class="dt-hero-copy">
          <div class="car-brand"><bdi>${e(car.brand)}</bdi></div>
          <h1 class="dt-title"><bdi>${e(car.model)}</bdi></h1>
          <p class="dt-summary">${e(summary)}</p>
          <div class="detail-badges"><span class="detail-badge">${car.year}</span><span class="detail-badge">${car.power} ${e(t("hp"))}</span><span class="detail-badge">${e(loc("body", car.body))}</span></div>
          <div class="dt-actions">
            <a class="dt-btn dt-btn-primary" href="#sec-compare">${svgIcon("compare")}${e(t("compare"))}</a>
            <button class="dt-btn" id="copyLink" type="button">${svgIcon("link")}${e(t("copyLink"))}</button>
          </div>
        </div>
      </div>
    </header>

    <section class="dt-stats" aria-label="${e(t("technical"))}">
      ${stat(0, "bolt", t("power"), st.power, 0, t("hp"), st.pPct, false)}
      ${stat(1, "timer", t("acceleration"), st.accel, 1, secUnit, st.aPct, false)}
      ${stat(2, "speed", t("topSpeed"), st.top, 0, "km/h", st.tPct, st.star)}
      <article class="dt-stat dt-price dt-reveal" data-reveal style="--d:.24s">
        <div class="dt-stat-top"><span class="dt-stat-label">${e(t("priceLabel"))}</span><span class="dt-stat-ico">${svgIcon("tag")}</span></div>
        <div class="dt-stat-value car-price"><b>${money(car.priceUSD)}</b><small>USD</small></div>
        <p class="dt-price-note">${e(t("priceDisclaimer"))}</p>
      </article>
    </section>
    <p class="dt-footnote">${e(t("barsNote"))}${st.star ? " " + e(t("unverifiedNote")) : ""}</p>

    <nav class="dt-tabs" aria-label="Sections">${tabs.map(([id, key], i) => `<a href="#${id}" class="${i === 0 ? "active" : ""}">${e(t(key))}</a>`).join("")}</nav>

    <section class="dt-section" id="sec-specs">
      <div class="dt-sec-head dt-reveal" data-reveal><div><p class="section-kicker">SPECIFICATIONS</p><h2>${e(t("technical"))}</h2></div></div>
      <div class="dt-spec-groups">
        ${groups.map((g, i) => `
        <article class="info-panel dt-group dt-reveal" data-reveal style="--d:${(i * 0.09).toFixed(2)}s">
          <h3><span class="dt-gnum">0${i + 1}</span>${e(g.title)}</h3>
          ${g.rows.map(r => row(...r)).join("")}
        </article>`).join("")}
      </div>
    </section>

    <section class="dt-section dt-two" id="sec-about">
      <article class="info-panel dt-about dt-reveal" data-reveal>
        <p class="section-kicker">ABOUT</p>
        <h2>${e(t("descriptionTitle"))}</h2>
        <p class="dt-lead">${e(summary)}</p>
        <p class="dt-muted">${e(t("placeholderText"))}</p>
        <div class="dt-feat"><span class="dt-feat-title">${e(t("features"))}</span><div class="dt-chips">${features.map(f => `<span class="dt-chip">${e(f)}</span>`).join("")}</div></div>
      </article>
      <article class="info-panel dt-maker dt-reveal" data-reveal style="--d:.1s">
        <div class="dt-maker-head"><span class="dt-avatar" aria-hidden="true">${e(car.brand.charAt(0))}</span><div><h2>${e(t("makerTitle"))}</h2><small><bdi>${e(car.brand)}</bdi></small></div></div>
        ${row("factory", t("maker"), car.brand)}
        ${row("layers", t("modelFamily"), car.model)}
        ${row("calendar", t("production"), period)}
        ${row("trophy", t("awards"), "—")}
        <p class="detail-note">${e(t("sampleNote"))}</p>
      </article>
    </section>

    <section class="dt-section" id="sec-price">
      <article class="info-panel dt-price-panel dt-reveal" data-reveal>
        <div class="dt-price-left">
          <p class="section-kicker">PRICING</p>
          <h2>${e(t("countryPrice"))}</h2>
          <p class="detail-note">${e(t("priceDisclaimer"))}</p>
          <div class="price-tools"><input id="countryInput" list="countryOptions" placeholder="${e(t("countryPlaceholder"))}" aria-label="Country" autocomplete="off"><datalist id="countryOptions">${COUNTRIES.map(c => `<option value="${e(c[currentLang])}">`).join("")}</datalist><button id="countryPriceButton" type="button">${e(t("findPrice"))}</button></div>
          <div class="dt-chips dt-country-chips">${COUNTRIES.map(c => `<button type="button" class="dt-chip" data-country="${e(c[currentLang])}">${e(c[currentLang])}</button>`).join("")}</div>
        </div>
        <div id="countryPriceResult" class="country-price" aria-live="polite"><span class="cp-hint">${e(t("countryPlaceholder"))}</span></div>
      </article>
    </section>

    <section class="dt-section" id="sec-compare">
      <article class="info-panel dt-compare dt-reveal" data-reveal>
        <p class="section-kicker">HEAD TO HEAD</p>
        <h2>${e(t("compare"))}</h2>
        <div class="compare-controls"><select id="compareCarSelect" aria-label="${e(t("chooseCar"))}"><option value="">${e(t("chooseCar"))}</option>${options}</select><button id="compareButton" type="button">${e(t("compareButton"))}</button></div>
        <div id="compareResult" class="dt-compare-result"><p class="detail-note">${e(t("compareHint"))}</p></div>
      </article>
    </section>

    <section class="dt-section" id="sec-similar">
      <div class="dt-sec-head dt-reveal" data-reveal><div><p class="section-kicker">YOU MAY ALSO LIKE</p><h2>${e(t("similarTitle"))}</h2><p class="section-subtitle">${e(t("similarText"))}</p></div></div>
      <div class="car-grid dt-similar">${similarCars(car).map(carCardHTML).join("")}</div>
    </section>

    <nav class="dt-pager" aria-label="${e(t("pagination"))}">
      <a class="dt-pager-link prev" href="${link(prevCar)}"><span class="arr" aria-hidden="true">${prevArrow}</span><img src="${e(prevCar.image)}" alt="" loading="lazy"><span class="txt"><small>${e(t("prevCar"))}</small><b><bdi>${e(carName(prevCar))}</bdi></b></span></a>
      <a class="dt-pager-link next" href="${link(nextCar)}"><span class="arr" aria-hidden="true">${nextArrow}</span><img src="${e(nextCar.image)}" alt="" loading="lazy"><span class="txt"><small>${e(t("nextCar"))}</small><b><bdi>${e(carName(nextCar))}</bdi></b></span></a>
    </nav>
  </section>`;

  /* ----- header height → sticky offsets ----- */
  const setHdr = () => document.documentElement.style.setProperty("--hdr-h", `${$(".arm-header")?.offsetHeight || 78}px`);
  setHdr();
  window.addEventListener("resize", setHdr);
  detailCleanups.push(() => window.removeEventListener("resize", setHdr));

  /* ----- gallery: dots + autoplay when there is more than one photo ----- */
  let slide = 0;
  const heroImg = $("#galleryImage");
  if (gallery.length > 1) {
    const dotEls = $$(".gallery-dot");
    const showSlide = n => { slide = n; heroImg.src = gallery[slide]; dotEls.forEach((d, i) => d.classList.toggle("active", i === slide)); };
    dotEls.forEach(dot => dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide))));
    galleryTimer = setInterval(() => { if (!document.hidden) showSlide((slide + 1) % gallery.length); }, 4000);
  }

  /* ----- lightbox ----- */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", t("zoom"));
  lb.innerHTML = `<button class="lb-close" type="button" aria-label="${e(t("close"))}">×</button><img alt="${e(carName(car))}">`;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector("img");
  const openLb = () => { lbImg.src = gallery[slide]; lb.classList.add("open"); document.body.classList.add("lb-open"); lb.querySelector(".lb-close").focus(); };
  const closeLb = () => { lb.classList.remove("open"); document.body.classList.remove("lb-open"); };
  lb.addEventListener("click", ev => { if (ev.target !== lbImg) closeLb(); });
  const onLbKey = ev => { if (ev.key === "Escape" && lb.classList.contains("open")) closeLb(); };
  document.addEventListener("keydown", onLbKey);
  detailCleanups.push(() => { document.removeEventListener("keydown", onLbKey); lb.remove(); document.body.classList.remove("lb-open"); });
  const media = $("#heroMedia");
  $("#zoomBtn").addEventListener("click", openLb);
  media.addEventListener("click", ev => { if (!ev.target.closest("button, a, .dt-hero-copy")) openLb(); });

  /* ----- hero parallax (mouse only) ----- */
  if (window.matchMedia("(hover: hover)").matches && !prefersReducedMotion()) {
    const par = $(".dt-hero-parallax");
    let raf = 0;
    media.addEventListener("pointermove", ev => {
      const r = media.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5, y = (ev.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { par.style.setProperty("--px", `${(-x * 18).toFixed(1)}px`); par.style.setProperty("--py", `${(-y * 12).toFixed(1)}px`); });
    });
    media.addEventListener("pointerleave", () => { par.style.setProperty("--px", "0px"); par.style.setProperty("--py", "0px"); });
  }

  /* ----- copy link ----- */
  $("#copyLink").addEventListener("click", async () => {
    const url = window.location.href.split("#")[0];
    try { await navigator.clipboard.writeText(url); }
    catch (err) {
      const ta = document.createElement("textarea");
      ta.value = url; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (err2) { /* nothing else to try */ }
      ta.remove();
    }
    showToast(t("linkCopied"));
  });

  /* ----- price by country ----- */
  const priceOut = $("#countryPriceResult");
  const showPrice = country => {
    if (!country) { priceOut.innerHTML = `<span class="cp-hint">${e(t("countryPlaceholder"))}</span>`; return; }
    priceOut.innerHTML = `<span class="cp-country">${e(country)}</span><span class="cp-price">${money(car.priceUSD)} <small>USD*</small></span><span class="cp-note">${e(t("priceDisclaimer"))}</span>`;
    priceOut.classList.remove("pop"); void priceOut.offsetWidth; priceOut.classList.add("pop");
  };
  $("#countryPriceButton").addEventListener("click", () => showPrice($("#countryInput").value.trim()));
  $("#countryInput").addEventListener("keydown", ev => { if (ev.key === "Enter") showPrice(ev.target.value.trim()); });
  $$(".dt-country-chips button").forEach(btn => btn.addEventListener("click", () => {
    $("#countryInput").value = btn.dataset.country;
    $$(".dt-country-chips button").forEach(b => b.classList.toggle("selected", b === btn));
    showPrice(btn.dataset.country);
  }));

  /* ----- compare ----- */
  const better = (x, y, higherWins) => (x === y ? -1 : ((x > y) === higherWins ? 0 : 1));
  const runCompare = () => {
    const other = cars.find(item => item.id === $("#compareCarSelect").value);
    const target = $("#compareResult");
    if (!other) { target.innerHTML = `<p class="detail-note">${e(t("compareHint"))}</p>`; return; }
    const oStats = carStats(other);
    const rows = [
      [t("year"), car.year, other.year, -1],
      [t("engine"), car.engine, other.engine, -1],
      [t("hp"), car.power, other.power, better(car.power, other.power, true)],
      [t("priceLabel"), money(car.priceUSD), money(other.priceUSD), -1],
      [t("acceleration"), `${st.accel} ${secUnit}`, `${oStats.accel} ${secUnit}`, better(st.accel, oStats.accel, false)],
      [t("topSpeed"), car.topSpeed, other.topSpeed, better(st.top, oStats.top, true)]
    ];
    const vsCard = c => `<a class="dt-vs-card" href="${link(c)}"><img src="${e(c.image)}" alt="" loading="lazy"><span><small><bdi>${e(c.brand)}</bdi></small><b><bdi>${e(c.model)}</bdi></b></span></a>`;
    target.innerHTML = `
      <div class="dt-vs">${vsCard(car)}<span class="dt-vs-badge">VS</span>${vsCard(other)}</div>
      <div class="table-scroll"><table class="compare-table"><thead><tr><th></th><th><bdi>${e(carName(car))}</bdi></th><th><bdi>${e(carName(other))}</bdi></th></tr></thead>
      <tbody>${rows.map(r => `<tr><td>${e(r[0])}</td><td class="${r[3] === 0 ? "win" : ""}"><bdi>${e(r[1])}</bdi></td><td class="${r[3] === 1 ? "win" : ""}"><bdi>${e(r[2])}</bdi></td></tr>`).join("")}</tbody></table></div>
      <p class="detail-note dt-win-note"><span class="dt-win-dot"></span>${e(t("better"))}</p>`;
    target.classList.remove("pop"); void target.offsetWidth; target.classList.add("pop");
  };
  $("#compareButton").addEventListener("click", runCompare);
  $("#compareCarSelect").addEventListener("change", runCompare);

  /* ----- scroll reveal + count-up + bars ----- */
  const reveals = $$("[data-reveal]");
  const startCount = tile => tile.querySelectorAll("[data-count]").forEach(el => countUp(el, parseFloat(el.dataset.count), parseInt(el.dataset.dec, 10)));
  if (staticPage || !("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
      if (en.target.matches(".dt-stat")) startCount(en.target);
    }), { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(el => io.observe(el));
    detailCleanups.push(() => io.disconnect());
  }
  detailAnimatedFor = detailId;

  /* ----- sticky tabs: highlight the section in view ----- */
  const tabLinks = $$(".dt-tabs a");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) tabLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${en.target.id}`));
    }), { rootMargin: "-30% 0px -60% 0px" });
    tabLinks.forEach(l => { const target = $(l.getAttribute("href")); if (target) spy.observe(target); });
    detailCleanups.push(() => spy.disconnect());
  }
  tabLinks.forEach(l => l.addEventListener("click", () => tabLinks.forEach(x => x.classList.toggle("active", x === l))));
}

/* ---------- Feature slider (home) ---------- */
function setupFeatureSlider() {
  const slides = $$(".feature-slide");
  if (!slides.length) return;
  const dots = $$("[data-feature-slide]");
  const show = n => {
    activeFeature = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === activeFeature));
    dots.forEach((d, i) => d.classList.toggle("active", i === activeFeature));
  };
  const restart = () => { clearInterval(featureTimer); featureTimer = setInterval(() => { if (!document.hidden) show(activeFeature + 1); }, 6500); };
  dots.forEach(dot => dot.addEventListener("click", () => { show(Number(dot.dataset.featureSlide)); restart(); }));
  $("[data-feature-prev]")?.addEventListener("click", () => { show(activeFeature - 1); restart(); });
  $("[data-feature-next]")?.addEventListener("click", () => { show(activeFeature + 1); restart(); });
  const slider = $(".feature-slider");
  slider?.addEventListener("mouseenter", () => clearInterval(featureTimer));
  slider?.addEventListener("mouseleave", restart);
  show(0); restart();
}

/* ---------- Mega menu (hover on desktop, tap on touch) ---------- */
function closeMenus(except) {
  $$(".has-mega.open").forEach(item => {
    if (item === except) return;
    item.classList.remove("open");
    item.querySelector(".arm-nav-link")?.setAttribute("aria-expanded", "false");
  });
}
function setupMegaMenu() {
  const isTouch = () => window.matchMedia("(hover: none)").matches || window.innerWidth <= 760;
  $$(".has-mega").forEach(item => {
    const link = item.querySelector(".arm-nav-link");
    const panel = item.querySelector(".arm-mega-panel");
    if (!link || !panel) return;
    link.setAttribute("aria-haspopup", "true");
    link.setAttribute("aria-expanded", "false");
    link.addEventListener("click", event => {
      if (!isTouch()) return; // on desktop the link navigates and hover opens the panel
      event.preventDefault();
      const willOpen = !item.classList.contains("open");
      closeMenus();
      if (willOpen) {
        item.classList.add("open");
        link.setAttribute("aria-expanded", "true");
        if (window.innerWidth <= 760) panel.style.top = `${$(".arm-mega-nav").getBoundingClientRect().bottom + 6}px`;
      }
    });
  });
  document.addEventListener("click", event => { if (!event.target.closest(".has-mega")) closeMenus(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenus(); });
}

/* ---------- Auth demo (auth.html) ---------- */
function renderAuthMode() {
  const form = $("#authForm");
  if (!form) return;
  const signup = authMode === "signup";
  $("#nameField").classList.toggle("hidden", !signup);
  $("#authTitle").textContent = t(signup ? "authTitleSignup" : "authTitleLogin");
  $("#authSubmit").textContent = t(signup ? "submitSignup" : "submitLogin");
  $("#loginTab").classList.toggle("active", !signup);
  $("#signupTab").classList.toggle("active", signup);
  form.querySelector('input[type="password"]').autocomplete = signup ? "new-password" : "current-password";
  $("#authMessage").textContent = "";
}
function setupAuth() {
  const form = $("#authForm");
  if (!form) return;
  $("#loginTab").addEventListener("click", () => { authMode = "login"; renderAuthMode(); });
  $("#signupTab").addEventListener("click", () => { authMode = "signup"; renderAuthMode(); });
  // Demo only: no account is created and nothing is stored or sent.
  form.addEventListener("submit", event => { event.preventDefault(); $("#authMessage").textContent = t("authDemoMsg"); });
}

/* ---------- Init ---------- */
function init() {
  const year = $("#yearNow");
  if (year) year.textContent = new Date().getFullYear();

  // On the detail page the in-page anchors (#catalog, …) must point back to the home page.
  if (detailId) $$('a[href^="#"]').forEach(a => a.setAttribute("href", `index.html${a.getAttribute("href")}`));

  // Filters coming from the URL (e.g. from the detail page's header)
  if (!detailId) {
    const q = params.get("q"), brand = params.get("brand"), category = params.get("category");
    if (q) { searchTerm = q; if ($("#headerSearchInput")) $("#headerSearchInput").value = q; }
    if (brand && cars.some(c => c.brand === brand)) selectedBrand = brand;
    if (category && CATEGORIES.includes(category)) selectedCategory = category;
  }

  $("#languageToggle")?.addEventListener("click", () => { playAnimation($("#languageToggle"), "pop", 550); setLanguage(currentLang === "fa" ? "en" : "fa"); });
  $("#themeToggle")?.addEventListener("click", toggleTheme);

  const searchForm = $("#headerSearchForm");
  searchForm?.addEventListener("submit", event => {
    event.preventDefault();
    const value = $("#headerSearchInput").value;
    if (detailId || !$("#carGrid")) { window.location.href = `index.html?q=${encodeURIComponent(value)}#catalog`; return; }
    searchTerm = value; selectedCategory = "all"; selectedBrand = "all"; currentPage = 1;
    fillBrandFilter(); renderCars(); scrollToCatalog();
  });
  $("#headerSearchInput")?.addEventListener("input", event => {
    if (detailId || !$("#carGrid")) return;
    searchTerm = event.target.value; currentPage = 1; renderCars();
  });

  $("#brandFilter")?.addEventListener("change", event => { selectedBrand = event.target.value; currentPage = 1; renderCars(); });
  $("#sortSelect")?.addEventListener("change", event => { sortMode = event.target.value; currentPage = 1; renderCars(); });
  $("#pagination")?.addEventListener("click", event => {
    const button = event.target.closest("button[data-page]");
    if (!button || button.disabled) return;
    currentPage = Number(button.dataset.page);
    renderCars(); scrollToCatalog();
  });
  $("#resetFilters")?.addEventListener("click", () => {
    searchTerm = ""; selectedBrand = "all"; selectedCategory = "all"; sortMode = "featured"; currentPage = 1;
    if ($("#headerSearchInput")) $("#headerSearchInput").value = "";
    if ($("#sortSelect")) $("#sortSelect").value = "featured";
    fillBrandFilter(); renderCars();
  });

  // One delegated handler for every brand tile, category chip and mega-menu shortcut.
  document.addEventListener("click", event => {
    const brandEl = event.target.closest("[data-brand]");
    const catEl = event.target.closest("[data-category]");
    const insidePanel = event.target.closest(".arm-mega-panel a, .arm-mega-panel button");
    if (brandEl) { event.preventDefault(); goToBrand(brandEl.dataset.brand); }
    else if (catEl) { event.preventDefault(); goToCategory(catEl.dataset.category); }
    if (insidePanel) { closeMenus(); document.activeElement?.blur?.(); }
  });

  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#headerSearchInput")?.focus(); }
  });

  setupMegaMenu();
  setupAuth();
  if (!detailId) setupFeatureSlider();

  setLanguage(currentLang);
  if (!detailId && (params.get("q") || params.get("brand") || params.get("category"))) setTimeout(scrollToCatalog, 60);
}

document.addEventListener("DOMContentLoaded", init);
