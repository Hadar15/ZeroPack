# 🔧 Solusi Login Error "Sesi Mencurigakan"

## Untuk Client yang Mengalami Masalah Login

Jika Anda terus mendapat pesan **"Sesi Mencurigakan Terdeteksi"**, ikuti langkah berikut:

### ✅ Cara 1: Clear Browser Cache (Paling Mudah)

1. **Tekan keyboard**: `Ctrl + Shift + Delete` (Windows) atau `Cmd + Shift + Delete` (Mac)
2. **Pilih**:
   - ✅ Cookies and other site data
   - ✅ Cached images and files
   - ✅ Browsing history (optional)
3. **Time range**: `All time`
4. **Klik**: Clear data
5. **Tutup browser** sepenuhnya
6. **Buka lagi** dan login

---

### ✅ Cara 2: Manual Clear LocalStorage

1. **Buka website ZeroPack**
2. **Tekan F12** untuk buka Developer Tools
3. **Klik tab "Console"** (di bagian atas DevTools)
4. **Copy-paste** kode ini:

```javascript
// Clear all localStorage
localStorage.clear();

// Clear all cookies untuk domain ini
document.cookie.split(";").forEach(function(c) { 
  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
});

// Reload halaman
location.reload();
```

5. **Tekan Enter**
6. Halaman akan refresh otomatis
7. **Login lagi**

---

### ✅ Cara 3: Incognito/Private Mode (Sementara)

1. **Buka browser** dalam mode Incognito/Private
   - Chrome: `Ctrl + Shift + N`
   - Firefox: `Ctrl + Shift + P`
   - Edge: `Ctrl + Shift + N`
2. **Buka website** ZeroPack
3. **Login** seperti biasa
4. Seharusnya bisa login normal

---

### ✅ Cara 4: Ganti Browser (Jika Masih Error)

Jika masih error, coba:
- Pakai browser berbeda (Chrome → Firefox, atau sebaliknya)
- Update browser ke versi terbaru
- Disable browser extensions (AdBlock, VPN, dll)

---

## 🔍 Penyebab Masalah

Sistem keamanan aplikasi **terlalu ketat** dalam mendeteksi perubahan:
- ❌ Browser update otomatis
- ❌ User Agent berubah
- ❌ Device fingerprint tidak match
- ❌ LocalStorage corrupt/conflict

**Solusi permanent sudah diterapkan** di kode, tapi client yang sudah pernah login perlu clear localStorage lama.

---

## 📞 Bantuan

Jika masih bermasalah setelah semua cara di atas, hubungi support:
- WhatsApp: +62 897-6009-859
- Sertakan screenshot error yang muncul
