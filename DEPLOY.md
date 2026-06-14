# 🚀 Deploy على Vercel + Neon (مجاناً)

## الخطوة 1 — إنشاء Database على Neon

1. روح على **https://neon.tech** → Sign up مجاناً (بـ GitHub أو email)
2. اضغط **"Create a project"**
   - Name: `oumy-glow`
   - Region: **AWS / eu-central-1** (الأقرب للجزائر)
3. بعد الإنشاء، روح على **"Connection Details"**
4. غير **"Connection type"** من `Pooled` إلى `Direct` وانسخ الـ URL → هذا هو **DIRECT_URL**
5. ارجع لـ `Pooled` وانسخ الـ URL → هذا هو **DATABASE_URL**

---

## الخطوة 2 — رفع الكود على GitHub

```bash
# في terminal، داخل مجلد oumy-glow
git init
git add .
git commit -m "first commit"

# أنشئ repo على github.com ثم:
git remote add origin https://github.com/USERNAME/oumy-glow.git
git push -u origin main
```

---

## الخطوة 3 — Deploy على Vercel

1. روح على **https://vercel.com** → Sign up بـ GitHub
2. اضغط **"Add New Project"**
3. اختر الـ repo `oumy-glow`
4. قبل ما تاضغط Deploy، روح على **"Environment Variables"** وأضف:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | الـ Pooled URL من Neon |
| `DIRECT_URL` | الـ Direct URL من Neon |
| `NEXTAUTH_URL` | `https://oumy-glow.vercel.app` (URL تاعك) |
| `NEXTAUTH_SECRET` | شغّل: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+213XXXXXXXXX` |
| `NEXT_PUBLIC_APP_URL` | `https://oumy-glow.vercel.app` |
| `NEXT_PUBLIC_APP_NAME` | `Oumy's Glow` |

5. اضغط **"Deploy"** 🎉

---

## الخطوة 4 — Seed البيانات (مرة واحدة فقط)

بعد أول deploy ناجح، شغّل هذا محلياً:

```bash
# في مجلد المشروع، أنشئ .env محلي أولاً
cp .env.example .env
# عدّل .env بالـ URLs الحقيقية من Neon

# ثم:
npm install
npx prisma db push
npm run db:seed
```

بعد الـ seed، تقدر تدخل للـ admin بـ:
- **Email:** `admin@oumysglow.com`
- **Password:** `admin123456`

⚠️ **غير الباسورد بعد أول دخول!**

---

## ✅ تأكيد أن كل شيء يخدم

- الموقع: `https://oumy-glow.vercel.app`
- Admin: `https://oumy-glow.vercel.app/admin`
- API Health: `https://oumy-glow.vercel.app/api/products`

---

## ❓ مشاكل شائعة

### `PrismaClientInitializationError`
← `DATABASE_URL` مش مضبوط في Vercel. تحقق من Environment Variables.

### `Invalid DATABASE_URL`
← تأكد أن الـ URL فيه `?sslmode=require` في النهاية.

### Build يفشل على Prisma
← تأكد أن `DIRECT_URL` مضاف في Vercel variables.

### الصفحات تعطي 500 بعد deploy
← روح على Vercel → Functions → شوف الـ logs للخطأ الحقيقي.
