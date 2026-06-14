// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Admin user
  const adminPassword = await bcrypt.hash('admin123456', 12)
  await prisma.user.upsert({
    where: { email: 'admin@oumysglow.com' },
    update: {},
    create: {
      name: 'Admin Oumy\'s Glow',
      email: 'admin@oumysglow.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Categories
  const categories = [
    { name: 'The Ordinary', slug: 'the-ordinary', description: 'Produits scientifiques abordables', image: '/images/categories/the-ordinary.jpg' },
    { name: 'Skincare Coréenne', slug: 'skincare-coreenne', description: 'La routine K-beauty', image: '/images/categories/korean.jpg' },
    { name: 'Sérums', slug: 'serums', description: 'Concentrés de beauté', image: '/images/categories/serums.jpg' },
    { name: 'Nettoyants', slug: 'nettoyants', description: 'Peaux nettes et fraîches', image: '/images/categories/nettoyants.jpg' },
    { name: 'Hydratants', slug: 'hydratants', description: 'Hydratation intense', image: '/images/categories/hydratants.jpg' },
    { name: 'Protection Solaire', slug: 'protection-solaire', description: 'SPF & protection UV', image: '/images/categories/solaire.jpg' },
    { name: 'Anti-Acné', slug: 'anti-acne', description: 'Solutions pour peau acnéique', image: '/images/categories/anti-acne.jpg' },
    { name: 'Anti-Taches', slug: 'anti-taches', description: 'Éclat et uniformité', image: '/images/categories/anti-taches.jpg' },
  ]

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }

  // Brands
  const brands = [
    { name: 'The Ordinary', slug: 'the-ordinary', logo: '/images/brands/the-ordinary.png' },
    { name: 'COSRX', slug: 'cosrx', logo: '/images/brands/cosrx.png' },
    { name: 'Innisfree', slug: 'innisfree', logo: '/images/brands/innisfree.png' },
    { name: 'Some By Mi', slug: 'some-by-mi', logo: '/images/brands/some-by-mi.png' },
    { name: 'Skin1004', slug: 'skin1004', logo: '/images/brands/skin1004.png' },
    { name: 'Beauty of Joseon', slug: 'beauty-of-joseon', logo: '/images/brands/beauty-of-joseon.png' },
    { name: 'Purito', slug: 'purito', logo: '/images/brands/purito.png' },
    { name: 'Torriden', slug: 'torriden', logo: '/images/brands/torriden.png' },
  ]

  for (const brand of brands) {
    await prisma.brand.upsert({
      where: { slug: brand.slug },
      update: {},
      create: brand,
    })
  }

  const theOrdinaryCategory = await prisma.category.findUnique({ where: { slug: 'the-ordinary' } })
  const koreanCategory = await prisma.category.findUnique({ where: { slug: 'skincare-coreenne' } })
  const serumsCategory = await prisma.category.findUnique({ where: { slug: 'serums' } })
  const nettoyantCategory = await prisma.category.findUnique({ where: { slug: 'nettoyants' } })
  const hydratantCategory = await prisma.category.findUnique({ where: { slug: 'hydratants' } })
  const solaireCategory = await prisma.category.findUnique({ where: { slug: 'protection-solaire' } })
  const acneCategory = await prisma.category.findUnique({ where: { slug: 'anti-acne' } })
  const tachesCategory = await prisma.category.findUnique({ where: { slug: 'anti-taches' } })

  const theOrdinaryBrand = await prisma.brand.findUnique({ where: { slug: 'the-ordinary' } })
  const cosrxBrand = await prisma.brand.findUnique({ where: { slug: 'cosrx' } })
  const someByMiBrand = await prisma.brand.findUnique({ where: { slug: 'some-by-mi' } })
  const beautyOfJoseonBrand = await prisma.brand.findUnique({ where: { slug: 'beauty-of-joseon' } })
  const puritoBrand = await prisma.brand.findUnique({ where: { slug: 'purito' } })
  const torridenBrand = await prisma.brand.findUnique({ where: { slug: 'torriden' } })
  const skin1004Brand = await prisma.brand.findUnique({ where: { slug: 'skin1004' } })
  const innisfreeBrand = await prisma.brand.findUnique({ where: { slug: 'innisfree' } })

  // Products
  const products = [
    {
      name: 'Niacinamide 10% + Zinc 1%',
      slug: 'the-ordinary-niacinamide-10-zinc-1',
      description: 'Sérum haute concentration en niacinamide pour réduire l\'apparence des imperfections et le déséquilibre de la brillance cutanée. Formule scientifiquement éprouvée pour une peau plus nette et plus uniforme.',
      price: 1850,
      comparePrice: 2200,
      stock: 50,
      images: ['/images/products/to-niacinamide.jpg'],
      featured: true,
      categoryId: theOrdinaryCategory!.id,
      brandId: theOrdinaryBrand!.id,
    },
    {
      name: 'Hyaluronic Acid 2% + B5',
      slug: 'the-ordinary-hyaluronic-acid-2-b5',
      description: 'Formule d\'hydratation multi-profondeur avec de l\'acide hyaluronique de différents poids moléculaires et de la pro-vitamine B5 pour une hydratation intense et durable.',
      price: 1950,
      comparePrice: 2400,
      stock: 45,
      images: ['/images/products/to-ha.jpg'],
      featured: true,
      categoryId: serumsCategory!.id,
      brandId: theOrdinaryBrand!.id,
    },
    {
      name: 'AHA 30% + BHA 2% Peeling Solution',
      slug: 'the-ordinary-aha-bha-peeling',
      description: 'Peeling exfoliant avec 30% d\'AHA et 2% de BHA pour améliorer la texture cutanée, l\'éclat et minimiser l\'apparence des imperfections.',
      price: 2100,
      comparePrice: 2600,
      stock: 30,
      images: ['/images/products/to-peeling.jpg'],
      featured: false,
      categoryId: theOrdinaryCategory!.id,
      brandId: theOrdinaryBrand!.id,
    },
    {
      name: 'Retinol 0.5% in Squalane',
      slug: 'the-ordinary-retinol-05-squalane',
      description: 'Formule anti-âge avec 0.5% de rétinol pure dans du squalane pour réduire les signes visibles du vieillissement, rides et taches.',
      price: 2300,
      comparePrice: 2800,
      stock: 25,
      images: ['/images/products/to-retinol.jpg'],
      featured: true,
      categoryId: theOrdinaryCategory!.id,
      brandId: theOrdinaryBrand!.id,
    },
    {
      name: 'Vitamin C Suspension 23%',
      slug: 'the-ordinary-vitamin-c-23',
      description: 'Suspension anhydre de L-acide ascorbique pur à 23% pour l\'éclat et l\'uniformisation du teint. Formule concentrée à haute efficacité.',
      price: 1800,
      stock: 35,
      images: ['/images/products/to-vitc.jpg'],
      featured: false,
      categoryId: tachesCategory!.id,
      brandId: theOrdinaryBrand!.id,
    },
    {
      name: 'COSRX Snail Mucin 96% Power Essence',
      slug: 'cosrx-snail-mucin-96',
      description: 'Essence légère avec 96.3% de sécrétion de bave d\'escargot filtrée pour hydrater, réparer et régénérer la peau. La référence K-beauty.',
      price: 3200,
      comparePrice: 3800,
      stock: 40,
      images: ['/images/products/cosrx-snail.jpg'],
      featured: true,
      categoryId: koreanCategory!.id,
      brandId: cosrxBrand!.id,
    },
    {
      name: 'COSRX Advanced Snail 92 All in one Cream',
      slug: 'cosrx-snail-92-cream',
      description: 'Crème tout-en-un avec 92% de sécrétion de bave d\'escargot filtrée pour hydrater, nourrir et réparer la barrière cutanée en profondeur.',
      price: 3500,
      comparePrice: 4200,
      stock: 35,
      images: ['/images/products/cosrx-snail-cream.jpg'],
      featured: true,
      categoryId: hydratantCategory!.id,
      brandId: cosrxBrand!.id,
    },
    {
      name: 'COSRX Acne Pimple Master Patch',
      slug: 'cosrx-acne-patch',
      description: 'Patchs hydrocolloïdes pour traiter les boutons rapidement. Absorbe le pus et protège les imperfections tout en favorisant la guérison.',
      price: 1200,
      comparePrice: 1500,
      stock: 80,
      images: ['/images/products/cosrx-patch.jpg'],
      featured: false,
      categoryId: acneCategory!.id,
      brandId: cosrxBrand!.id,
    },
    {
      name: 'Some By Mi AHA BHA PHA 30 Days Miracle Toner',
      slug: 'some-by-mi-aha-bha-pha-toner',
      description: 'Tonique miracle avec un triple complexe d\'acides pour nettoyer en profondeur, exfolier et améliorer la texture cutanée en 30 jours.',
      price: 2800,
      comparePrice: 3400,
      stock: 30,
      images: ['/images/products/sbm-toner.jpg'],
      featured: true,
      categoryId: acneCategory!.id,
      brandId: someByMiBrand!.id,
    },
    {
      name: 'Beauty of Joseon Relief Sun SPF50+',
      slug: 'beauty-of-joseon-relief-sun-spf50',
      description: 'Écran solaire minéral SPF50+ PA++++ inspiré des remèdes ancestraux coréens. Texture légère, fini naturel, protection maximale.',
      price: 3100,
      comparePrice: 3700,
      stock: 45,
      images: ['/images/products/boj-sunscreen.jpg'],
      featured: true,
      categoryId: solaireCategory!.id,
      brandId: beautyOfJoseonBrand!.id,
    },
    {
      name: 'Beauty of Joseon Glow Serum: Propolis + Niacinamide',
      slug: 'beauty-of-joseon-glow-serum',
      description: 'Sérum éclat formulé avec de la propolis et de la niacinamide pour unifier le teint, réduire les taches et apporter de l\'éclat à la peau.',
      price: 3400,
      comparePrice: 4100,
      stock: 28,
      images: ['/images/products/boj-serum.jpg'],
      featured: true,
      categoryId: serumsCategory!.id,
      brandId: beautyOfJoseonBrand!.id,
    },
    {
      name: 'Purito From Green Cleansing Oil',
      slug: 'purito-from-green-cleansing-oil',
      description: 'Huile nettoyante douce qui élimine efficacement le maquillage, les impuretés et l\'excès de sébum sans agresser la barrière cutanée.',
      price: 2600,
      stock: 38,
      images: ['/images/products/purito-oil.jpg'],
      featured: false,
      categoryId: nettoyantCategory!.id,
      brandId: puritoBrand!.id,
    },
    {
      name: 'Purito Centella Green Level Safe Sun SPF50+',
      slug: 'purito-centella-sun-spf50',
      description: 'Protection solaire légère enrichie en centella asiatica pour protéger et apaiser les peaux sensibles. SPF50+ PA++++.',
      price: 2900,
      comparePrice: 3500,
      stock: 42,
      images: ['/images/products/purito-sun.jpg'],
      featured: false,
      categoryId: solaireCategory!.id,
      brandId: puritoBrand!.id,
    },
    {
      name: 'Torriden Dive-In Low Molecular Hyaluronic Acid Serum',
      slug: 'torriden-dive-in-ha-serum',
      description: 'Sérum à l\'acide hyaluronique de faible poids moléculaire qui pénètre en profondeur pour une hydratation intense et durable. 5 types d\'HA.',
      price: 3600,
      comparePrice: 4300,
      stock: 25,
      images: ['/images/products/torriden-ha.jpg'],
      featured: true,
      categoryId: serumsCategory!.id,
      brandId: torridenBrand!.id,
    },
    {
      name: 'Skin1004 Madagascar Centella Ampoule',
      slug: 'skin1004-centella-ampoule',
      description: 'Ampoule apaisante avec 100% de centella asiatica de Madagascar pour calmer les rougeurs et réparer les peaux irritées et sensibles.',
      price: 2700,
      comparePrice: 3200,
      stock: 33,
      images: ['/images/products/skin1004-centella.jpg'],
      featured: false,
      categoryId: koreanCategory!.id,
      brandId: skin1004Brand!.id,
    },
    {
      name: 'Innisfree Green Tea Seed Serum',
      slug: 'innisfree-green-tea-serum',
      description: 'Sérum légendaire enrichi en graines de thé vert de l\'île de Jeju pour une hydratation profonde et un éclat naturel. La référence K-beauty.',
      price: 3800,
      comparePrice: 4600,
      stock: 20,
      images: ['/images/products/innisfree-serum.jpg'],
      featured: true,
      categoryId: serumsCategory!.id,
      brandId: innisfreeBrand!.id,
    },
    {
      name: 'COSRX Low pH Good Morning Gel Cleanser',
      slug: 'cosrx-low-ph-cleanser',
      description: 'Nettoyant gel à pH équilibré pour une peau propre sans déséquilibre. Formule douce avec BHA 0.5% pour affiner les pores.',
      price: 1900,
      comparePrice: 2300,
      stock: 55,
      images: ['/images/products/cosrx-cleanser.jpg'],
      featured: false,
      categoryId: nettoyantCategory!.id,
      brandId: cosrxBrand!.id,
    },
    {
      name: 'The Ordinary Salicylic Acid 2% Solution',
      slug: 'the-ordinary-salicylic-acid-2',
      description: 'Solution clarifiante à l\'acide salicylique 2% pour nettoyer en profondeur les pores, contrôler le sébum et réduire les imperfections.',
      price: 1700,
      comparePrice: 2100,
      stock: 48,
      images: ['/images/products/to-salicylic.jpg'],
      featured: false,
      categoryId: acneCategory!.id,
      brandId: theOrdinaryBrand!.id,
    },
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
  }

  // Site settings
  const settings = [
    { key: 'whatsapp_number', value: '+213XXXXXXXXX' },
    { key: 'delivery_fee_standard', value: '500' },
    { key: 'delivery_fee_express', value: '800' },
    { key: 'free_delivery_threshold', value: '5000' },
    { key: 'site_announcement', value: 'Livraison gratuite à partir de 5000 DZD 🌸' },
  ]

  for (const setting of settings) {
    await prisma.siteSettings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    })
  }

  console.log('✅ Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
