# Google Sheets Setup Guide

## 📊 Struktur Sheet yang Dibutuhkan

### Sheet 1: Orders (Pesanan)
URL API: https://sheetdb.io/api/v1/3fqp48rqkr319

**Kolom yang harus ada (urutan bebas):**
| Column Name | Type | Description |
|------------|------|-------------|
| timestamp | Text | Format: DD/MM/YYYY HH:mm |
| user_id | Text | ID user dari Supabase Auth |
| email | Text | Email user |
| name | Text | Nama lengkap pemesan |
| address | Text | Alamat lengkap kos |
| phone | Text | Nomor WhatsApp |
| residents | Text | Jumlah penghuni |
| products | Text | Produk yang dipesan |
| package | Text | Paket langganan (weekly/monthly) |
| status | Text | Status pesanan (pending/completed) |

### Sheet 2: Users (Pengguna)
URL API: https://sheetdb.io/api/v1/crzjk0vyhz1mg

**Kolom yang harus ada (urutan bebas):**
| Column Name | Type | Description |
|------------|------|-------------|
| timestamp | Text | Format: DD/MM/YYYY HH:mm |
| user_id | Text | ID user dari Supabase Auth (UNIQUE) |
| email | Text | Email user |
| name | Text | Nama user (optional) |
| provider | Text | email/google/github |

## 🔧 Cara Kerja Sistem

### 1. User Registration/Login (via Supabase Auth)
```
User Baru Register → Supabase Auth ✅
                   → Google Sheets Users ✅ (1x saja)

User Lama Login  → Supabase Auth ✅
                  → Google Sheets Users ⏭️ (skip, sudah ada)
```

### 2. Order Submission (via Google Sheets Only)
```
User Submit Form → Google Sheets Orders ✅ (langsung)
                 → Toast Success ✅
                 → Form Reset ✅
```

**TIDAK ada koneksi ke Supabase untuk order data!**

## ✅ Testing Checklist

- [ ] Buka Google Sheets, pastikan kedua sheet sudah dibuat
- [ ] Pastikan semua kolom sudah sesuai dengan nama di atas
- [ ] Test SheetDB API dengan Postman/Browser:
  - GET: https://sheetdb.io/api/v1/3fqp48rqkr319
  - GET: https://sheetdb.io/api/v1/crzjk0vyhz1mg
- [ ] Login ke aplikasi, cek console browser untuk log
- [ ] Submit form order, cek apakah data masuk ke Google Sheets

## 🐛 Debugging

Jika form tidak bisa submit, buka Console Browser (F12) dan cek:
- ✅ "📤 Mengirim order ke Google Sheets..."
- ✅ "✅ Order berhasil dikirim ke Google Sheets"
- ❌ Error message (screenshot dan kirim ke developer)

Jika user data tidak masuk:
- ✅ "ℹ️ User sudah terdaftar, skip" (normal untuk user lama)
- ✅ "✅ User baru berhasil terdaftar" (untuk user baru)
