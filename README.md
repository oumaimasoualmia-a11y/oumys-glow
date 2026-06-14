# 🌸 Oumy's Glow — E-Commerce Skincare Premium

**Site e-commerce complet pour la vente de produits skincare en Algérie**

> Glow With Care ✨

---

## 🗂️ Arborescence du projet

```
oumy-glow/
├── prisma/
│   ├── schema.prisma          # Schéma base de données
│   └── seed.ts                # Données de démonstration
├── public/
│   └── images/
│       ├── logo.png           ← METTRE LE LOGO ICI
│       ├── products/          ← Images des produits
│       ├── categories/        ← Images des catégories
│       └── brands/            ← Logos des marques
├── src/
│   ├── app/
│   │   ├── (shop)/            # Routes publiques (avec Header+Footer)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx       # Page d'accueil
│   │   │   ├── shop/          # Catalogue
│   │   │   └── product/[slug] # Fiche produit
│   │   ├── admin/             # Tableau de bord admin
│   │   │   ├── page.tsx       # Dashboard
│   │   │   ├── products/      # Gestion produits
│   │   │   └── orders/        # Gestion commandes
│   │   ├── account/           # Espace client
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── orders/
│   │   │   └── wishlist/
│   │   ├── api/               # API Routes
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   ├── categories/
│   │   │   ├── newsletter/
│   │   │   └── admin/stats/
│   │   ├── cart/              # Panier
│   │   ├── checkout/          # Commande
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/            # Header, Footer, WhatsApp
│   │   ├── shop/              # Composants boutique
│   │   └── admin/             # Composants administration
│   ├── hooks/
│   │   ├── useCart.ts         # Panier (Zustand + localStorage)
│   │   └── useWishlist.ts     # Wishlist (Zustand + localStorage)
│   ├── lib/
│   │   ├── prisma.ts          # Client Prisma
│   │   ├── auth.ts            # NextAuth config
│   │   └── utils.ts           # Utilitaires
│   └── types/
│       └── next-auth.d.ts     # Types NextAuth
├── .env.example               # Variables d'environnement (modèle)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚡ Installation rapide

### 1. Prérequis

- **Node.js** 18+ : https://nodejs.org
- **PostgreSQL** 14+ : https://postgresql.org (ou Neon.tech pour le cloud)
- **Git**

### 2. Cloner et installer

```bash
# Cloner le projet
git clone https://github.com/votre-repo/oumy-glow.git
cd oumy-glow

# Installer les dépendances
npm install
```

### 3. Configurer l'environnement

```bash
# Copier le fichier d'exemple
cp .env.example .env

# Éditer .env avec vos vraies valeurs :
nano .env
```

**Contenu du fichier `.env` :**

```env
# Base de données PostgreSQL
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/oumy_glow_db"

# NextAuth — générer une clé secrète :
# node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-cle-secrete-minimum-32-caracteres"

# WhatsApp (votre numéro au format international)
NEXT_PUBLIC_WHATSAPP_NUMBER="+213XXXXXXXXX"

# URL de votre site
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Oumy's Glow"
```

### 4. Configurer la base de données

```bash
# Générer le client Prisma
npm run db:generate

# Créer les tables
npm run db:push

# Remplir avec les données de démonstration
npm run db:seed
```

### 5. Ajouter le logo

Copier votre logo (fourni) dans :
```
public/images/logo.png
```

### 6. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir **http://localhost:3000** 🌸

---

## 🔐 Accès administrateur

Après le seed, connectez-vous avec :

| Champ | Valeur |
|-------|--------|
| Email | `admin@oumysglow.com` |
| Mot de passe | `admin123456` |

**⚠️ IMPORTANT : Changez ce mot de passe après le premier login !**

Dashboard admin : **http://localhost:3000/admin**

---

## 🚀 Déploiement en production

### Option A : Vercel (Recommandé — le plus simple)

1. **Créer un compte** sur https://vercel.com

2. **Base de données** — Utiliser [Neon.tech](https://neon.tech) (PostgreSQL gratuit) :
   - Créer un compte sur neon.tech
   - Créer une base "oumy-glow"
   - Copier la `DATABASE_URL`

3. **Déployer** :
   ```bash
   # Installer Vercel CLI
   npm install -g vercel
   
   # Déployer
   vercel deploy --prod
   ```

4. **Configurer les variables d'environnement** dans le tableau de bord Vercel :
   - Settings → Environment Variables
   - Ajouter toutes les variables du `.env`

5. **Exécuter le seed** (une seule fois) :
   ```bash
   DATABASE_URL="votre-url-neon" npm run db:seed
   ```

### Option B : Hostinger VPS

1. **Acheter un VPS** sur Hostinger (Ubuntu 22.04)

2. **Installer Node.js et PM2** :
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. **Installer PostgreSQL** :
   ```bash
   sudo apt install postgresql postgresql-contrib
   sudo -u postgres createdb oumy_glow_db
   sudo -u postgres createuser oumy_user
   sudo -u postgres psql -c "ALTER USER oumy_user PASSWORD 'motdepasse';"
   sudo -u postgres psql -c "GRANT ALL ON DATABASE oumy_glow_db TO oumy_user;"
   ```

4. **Cloner et configurer** :
   ```bash
   git clone https://github.com/votre-repo/oumy-glow.git
   cd oumy-glow
   npm install
   cp .env.example .env
   nano .env  # configurer les vraies valeurs
   npm run db:generate
   npm run db:push
   npm run db:seed
   npm run build
   ```

5. **Démarrer avec PM2** :
   ```bash
   pm2 start npm --name "oumy-glow" -- start
   pm2 save
   pm2 startup
   ```

6. **Configurer Nginx** :
   ```nginx
   server {
     server_name oumysglow.com www.oumysglow.com;
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **SSL avec Certbot** :
   ```bash
   sudo certbot --nginx -d oumysglow.com -d www.oumysglow.com
   ```

### Option C : Netlify

```bash
# Build statique Next.js pour Netlify
npm run build

# Déployer via Netlify CLI
npx netlify deploy --prod --dir=.next
```

---

## 📱 Fonctionnalités

### 🛒 Boutique
- ✅ Page d'accueil avec slider automatique
- ✅ Catalogue avec filtres et tri avancés
- ✅ Fiches produits complètes avec galerie photos
- ✅ Panier persistant (localStorage)
- ✅ Wishlist / Favoris
- ✅ Avis clients avec étoiles
- ✅ Produits similaires

### 📦 Commandes
- ✅ Formulaire de commande complet (nom, téléphone, adresse, wilaya, commune)
- ✅ Mode de livraison (standard / express)
- ✅ Paiement à la livraison (COD)
- ✅ Génération automatique d'un message WhatsApp
- ✅ Numéro de commande unique

### 👤 Espace client
- ✅ Inscription / Connexion sécurisée
- ✅ Historique des commandes avec statuts
- ✅ Wishlist personnelle

### ⚙️ Administration
- ✅ Tableau de bord avec statistiques
- ✅ Gestion complète des produits (CRUD)
- ✅ Gestion des commandes avec changement de statut
- ✅ Notification client via WhatsApp
- ✅ Gestion des catégories

### 🔧 Technique
- ✅ SEO optimisé (sitemap, meta tags, Open Graph)
- ✅ Responsive mobile/tablette/desktop
- ✅ Bouton WhatsApp flottant sur toutes les pages
- ✅ Newsletter
- ✅ Next.js 14 App Router
- ✅ TypeScript strict
- ✅ Tailwind CSS avec palette personnalisée
- ✅ Prisma ORM + PostgreSQL

---

## 🖼️ Ajouter des images produits

Placez vos images dans `public/images/products/` et utilisez les URLs :

```
/images/products/nom-du-produit.jpg
```

Dans l'admin, lors de l'ajout d'un produit, entrez ces URLs dans le champ "Images".

**Formats recommandés :** JPEG ou WebP, 800×800px minimum, fond blanc ou crème.

---

## 💬 Configuration WhatsApp

1. Dans `.env`, définir votre numéro :
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER="+213XXXXXXXXX"
   ```

2. Format : indicatif pays + numéro (ex: `+213551234567`)

3. Après chaque commande, un message pré-rempli sera envoyé sur ce numéro avec tous les détails.

---

## 🛠️ Commandes utiles

```bash
npm run dev          # Démarrer en développement
npm run build        # Build de production
npm run start        # Démarrer la version de production
npm run db:studio    # Ouvrir Prisma Studio (interface BDD)
npm run db:seed      # Remettre les données de démo
npm run db:push      # Synchroniser le schéma Prisma avec la BDD
```

---

## 🎨 Personnalisation

### Couleurs
Modifier dans `tailwind.config.ts` :
```ts
colors: {
  cream: '#F8F2EC',
  gold: { DEFAULT: '#C9A96E' },
  rose: { blush: '#E8C4B8' },
  mocha: { DEFAULT: '#4A2C2A' },
}
```

### WhatsApp
Modifier le message dans `src/lib/utils.ts` → fonction `generateWhatsAppMessage()`

### Wilayas
La liste complète est dans `src/lib/utils.ts` → constante `WILAYAS`

---

## 📊 Base de données

Le schéma contient :

| Table | Description |
|-------|-------------|
| `User` | Clients et admins |
| `Category` | Catégories produits |
| `Brand` | Marques |
| `Product` | Produits avec images et stocks |
| `Order` | Commandes |
| `OrderItem` | Lignes de commandes |
| `Review` | Avis clients |
| `Wishlist` | Listes de favoris |
| `NewsletterSubscriber` | Abonnés newsletter |
| `SiteSettings` | Paramètres du site |

---

## 🔒 Sécurité

- Mots de passe hashés avec **bcrypt** (salt=12)
- Sessions JWT via **NextAuth.js**
- Routes admin protégées côté serveur
- Validation des données avec **Zod**
- Variables d'environnement pour toutes les clés sensibles

---

**Oumy's Glow** — Glow With Care ✨  
Fait avec 🌸 pour la beauté algérienne
