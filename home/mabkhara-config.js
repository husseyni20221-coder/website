/* ============================================================
   أطياب الجاسم — إعدادات مشهد المبخرة (mabkhara)
   مصدرها: الحزمة الجاهزة (standalone) كما هي.
   يُعرّف: window.mabkharaConfig — تقرأه src/home/mabkhara.bundle.js
   يُحمَّل عند الطلب فقط (lazy) من src/home.js قبل حزمة المبخرة.
   ============================================================ */

window.mabkharaConfig = {
  "exposure": 1.4,
  "environmentIntensity": 1.15,
  "ambientLight": 0.4,
  "keyLight": 1.7,
  "fillLight": 0.65,
  "rimLight": 1.8,
  "cameraFov": 32,
  "cameraAzimuth": 0.62,
  "cameraElevation": 0.36,
  "targetHeight": 1.78,
  "lookAtY": 0.04,
  "fitHalfWidth": 0.3,
  "autoRotate": true,
  "autoRotateSpeed": 0.085,
  "interactive": true,
  "maxPixelRatio": 2,
  "maxPixels": 3600000,
  "shadowStrength": 1.8,
  "groundGlow": 0.7,
  "groundGlowRadius": 0.72,
  "fireIntensity": 1,
  "showFire": true,
  "showFallingCoal": true,
  "firstFallDelay": 0.9,
  "cycleDelay": 2.4,
  "seed": 20230914
};
