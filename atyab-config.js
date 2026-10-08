/* أطياب الجاسم — إعداد رابط الـ API للاستضافة المؤقتة (GitHub Pages + ngrok).
   عدّل السطر الوحيد أدناه عند تغيّر رابط ngrok (الخطة المجانية تغيّره كل تشغيل)،
   ثم أعد بناء الفرونت (npm run build) وأعد الرفع. يُقرأ قبل حزمة React
   في public/index.html فيملأ window.ATYAB_API_BASE الذي تقرأه طبقة api.js. */
window.ATYAB_API_BASE = "https://ankle-underwire-radish.ngrok-free.dev";
