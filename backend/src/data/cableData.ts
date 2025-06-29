import type { Cable } from '../types/cable.ts'

export const cablesData: Cable[] = [
  // H07V-U/R/K - Câbles rigides pour installation fixe
  {
    reference: 'H07V-U - 1x1,5',
    section: '1x1,5',
    diameter: 2.8,
    weight: 20,
    type: 'Standard',
    insulation: 'PVC',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Installation fixe', 'Pose sous conduit']
  },
  {
    reference: 'H07V-U - 1x2,5',
    section: '1x2,5',
    diameter: 3.5,
    weight: 30,
    type: 'Standard',
    insulation: 'PVC',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Installation fixe', 'Pose sous conduit']
  },
  {
    reference: 'H07V-R - 1x4',
    section: '1x4',
    diameter: 4.2,
    weight: 45,
    type: 'Standard',
    insulation: 'PVC',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Installation fixe', 'Pose sous conduit']
  },
  {
    reference: 'H07V-R - 1x6',
    section: '1x6',
    diameter: 4.9,
    weight: 65,
    type: 'Standard',
    insulation: 'PVC',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Installation fixe', 'Pose sous conduit']
  },
  
  // H07Z1-U/R/K - Câbles sans halogène
  {
    reference: 'H07Z1-U - 1x1,5',
    section: '1x1,5',
    diameter: 2.8,
    weight: 20,
    type: 'Sans halogène',
    insulation: 'Polyoléfine',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Installation fixe', 'Lieux publics', 'ERP']
  },
  {
    reference: 'H07Z1-U - 1x2,5',
    section: '1x2,5',
    diameter: 3.5,
    weight: 30,
    type: 'Sans halogène',
    insulation: 'Polyoléfine',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Installation fixe', 'Lieux publics', 'ERP']
  },
  {
    reference: 'H07Z1-R - 1x4',
    section: '1x4',
    diameter: 4.2,
    weight: 45,
    type: 'Sans halogène',
    insulation: 'Polyoléfine',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Installation fixe', 'Lieux publics', 'ERP']
  },
  
  // H05VV-F - Câbles souples domestiques
  {
    reference: 'H05VV-F - 2x0,75',
    section: '2x0,75',
    diameter: 6.8,
    weight: 60,
    type: 'Standard',
    insulation: 'PVC',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '300/500V',
    applications: ['Appareils domestiques', 'Usage intérieur']
  },
  {
    reference: 'H05VV-F - 3x0,75',
    section: '3x0,75',
    diameter: 7.2,
    weight: 75,
    type: 'Standard',
    insulation: 'PVC',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '300/500V',
    applications: ['Appareils domestiques', 'Usage intérieur']
  },
  {
    reference: 'H05VV-F - 3x1,5',
    section: '3x1,5',
    diameter: 8.7,
    weight: 120,
    type: 'Standard',
    insulation: 'PVC',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '300/500V',
    applications: ['Appareils domestiques', 'Usage intérieur']
  },
  
  // H07RN-F - Câbles souples extérieurs
  {
    reference: 'H07RN-F - 3x1,5',
    section: '3x1,5',
    diameter: 10.2,
    weight: 150,
    type: 'Standard',
    insulation: 'Caoutchouc',
    sheath: 'Polychloroprène',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Usage extérieur', 'Chantiers', 'Environnements humides']
  },
  {
    reference: 'H07RN-F - 3x2,5',
    section: '3x2,5',
    diameter: 11.8,
    weight: 220,
    type: 'Standard',
    insulation: 'Caoutchouc',
    sheath: 'Polychloroprène',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Usage extérieur', 'Chantiers', 'Environnements humides']
  },
  {
    reference: 'H07RN-F - 5x2,5',
    section: '5x2,5',
    diameter: 14.5,
    weight: 350,
    type: 'Standard',
    insulation: 'Caoutchouc',
    sheath: 'Polychloroprène',
    conductor: 'Cuivre',
    voltage: '450/750V',
    applications: ['Usage extérieur', 'Chantiers', 'Environnements humides']
  },
  
  // U1000 R2V - Câbles d'installation
  {
    reference: 'U1000R2V - 1x1,5',
    section: '1x1,5',
    diameter: 6.6,
    weight: 44,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Installation fixe', 'Bâtiments', 'Industrie']
  },
  {
    reference: 'U1000R2V - 1x2,5',
    section: '1x2,5',
    diameter: 7.2,
    weight: 60,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Installation fixe', 'Bâtiments', 'Industrie']
  },
  {
    reference: 'U1000R2V - 3G1,5',
    section: '3G1,5',
    diameter: 9.8,
    weight: 140,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Installation fixe', 'Bâtiments', 'Industrie']
  },
  {
    reference: 'U1000R2V - 3G2,5',
    section: '3G2,5',
    diameter: 11.2,
    weight: 200,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Installation fixe', 'Bâtiments', 'Industrie']
  },
  {
    reference: 'U1000R2V - 5G2,5',
    section: '5G2,5',
    diameter: 13.5,
    weight: 300,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Installation fixe', 'Bâtiments', 'Industrie']
  },
  {
    reference: 'U1000R2V - 5G6',
    section: '5G6',
    diameter: 17.5,
    weight: 600,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Installation fixe', 'Bâtiments', 'Industrie']
  },
  
  // U1000 RVFV - Câbles armés
  {
    reference: 'U1000RVFV - 4G2,5',
    section: '4G2,5',
    diameter: 15.5,
    weight: 450,
    type: 'Armé',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Enterré', 'Extérieur', 'Protection mécanique']
  },
  {
    reference: 'U1000RVFV - 4G6',
    section: '4G6',
    diameter: 18.5,
    weight: 750,
    type: 'Armé',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Enterré', 'Extérieur', 'Protection mécanique']
  },
  
  // Câbles aluminium
  {
    reference: 'U1000AR2V - 4x25',
    section: '4x25',
    diameter: 24.0,
    weight: 700,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Aluminium',
    voltage: '0.6/1kV',
    applications: ['Alimentation', 'Réseaux', 'Distribution']
  },
  {
    reference: 'U1000AR2V - 4x35',
    section: '4x35',
    diameter: 27.0,
    weight: 900,
    type: 'Standard',
    insulation: 'XLPE',
    sheath: 'PVC',
    conductor: 'Aluminium',
    voltage: '0.6/1kV',
    applications: ['Alimentation', 'Réseaux', 'Distribution']
  },
  
  // Câbles sans halogène
  {
    reference: 'U1000 Z1-R - 3G1,5',
    section: '3G1,5',
    diameter: 9.8,
    weight: 140,
    type: 'Sans halogène',
    insulation: 'XLPE',
    sheath: 'Polyoléfine',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['ERP', 'IGH', 'Lieux publics']
  },
  {
    reference: 'U1000 Z1-R - 3G2,5',
    section: '3G2,5',
    diameter: 11.2,
    weight: 200,
    type: 'Sans halogène',
    insulation: 'XLPE',
    sheath: 'Polyoléfine',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['ERP', 'IGH', 'Lieux publics']
  },
  
  // Câbles résistants au feu
  {
    reference: 'CR1-C1 - 3G1,5',
    section: '3G1,5',
    diameter: 11.0,
    weight: 180,
    type: 'CR1-C1',
    insulation: 'Silicone',
    sheath: 'Polyoléfine',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Sécurité incendie', 'Alarmes', 'Désenfumage']
  },
  {
    reference: 'CR1-C1 - 3G2,5',
    section: '3G2,5',
    diameter: 12.5,
    weight: 250,
    type: 'CR1-C1',
    insulation: 'Silicone',
    sheath: 'Polyoléfine',
    conductor: 'Cuivre',
    voltage: '0.6/1kV',
    applications: ['Sécurité incendie', 'Alarmes', 'Désenfumage']
  },
  
  // Câbles blindés
  {
    reference: 'YSLY-CY - 4x1,5',
    section: '4x1,5',
    diameter: 11.0,
    weight: 190,
    type: 'Blindé',
    insulation: 'PVC',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '300/500V',
    applications: ['Contrôle', 'Commande', 'Environnements perturbés']
  },
  {
    reference: 'YSLY-CY - 7x1,5',
    section: '7x1,5',
    diameter: 13.5,
    weight: 280,
    type: 'Blindé',
    insulation: 'PVC',
    sheath: 'PVC',
    conductor: 'Cuivre',
    voltage: '300/500V',
    applications: ['Contrôle', 'Commande', 'Environnements perturbés']
  },
  
  // Câbles moyenne tension
  {
    reference: 'NF C 33-226 - 1x95',
    section: '1x95',
    diameter: 30.0,
    weight: 1200,
    type: 'Standard',
    insulation: 'XLPE',
    conductor: 'Aluminium',
    voltage: '12/20kV',
    applications: ['Réseaux MT', 'Distribution', 'Postes de transformation']
  },
  {
    reference: 'NF C 33-226 - 1x150',
    section: '1x150',
    diameter: 34.0,
    weight: 1600,
    type: 'Standard',
    insulation: 'XLPE',
    conductor: 'Aluminium',
    voltage: '12/20kV',
    applications: ['Réseaux MT', 'Distribution', 'Postes de transformation']
  },
  
  // Câbles haute température
  {
    reference: 'Silicone - 3G1,5',
    section: '3G1,5',
    diameter: 10.0,
    weight: 160,
    type: 'Haute température',
    insulation: 'Silicone',
    sheath: 'Silicone',
    conductor: 'Cuivre',
    voltage: '300/500V',
    applications: ['Environnements chauds', 'Fours', 'Éclairage haute température']
  },
 
 
  // Câbles U1000R2V supplémentaires avec sections plus importantes
{
  reference: 'U1000R2V - 5G4',
  section: '5G4',
  diameter: 15.8,
  weight: 450,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G10',
  section: '5G10',
  diameter: 21.0,
  weight: 950,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G16',
  section: '5G16',
  diameter: 25.5,
  weight: 1400,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G25',
  section: '5G25',
  diameter: 31.0,
  weight: 2100,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G35',
  section: '5G35',
  diameter: 35.5,
  weight: 2900,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G50',
  section: '5G50',
  diameter: 42.0,
  weight: 4100,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G70',
  section: '5G70',
  diameter: 49.0,
  weight: 5700,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G95',
  section: '5G95',
  diameter: 56.0,
  weight: 7500,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G120',
  section: '5G120',
  diameter: 62.0,
  weight: 9400,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G150',
  section: '5G150',
  diameter: 68.0,
  weight: 11800,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G185',
  section: '5G185',
  diameter: 76.0,
  weight: 14500,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 5G240',
  section: '5G240',
  diameter: 87.0,
  weight: 18700,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 4G300',
  section: '4G300',
  diameter: 98.0,
  weight: 23500,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},
{
  reference: 'U1000R2V - 4G400',
  section: '4G400',
  diameter: 112.0,
  weight: 31000,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Installation fixe', 'Bâtiments', 'Industrie']
},

// Câbles aluminium avec sections importantes
{
  reference: 'U1000AR2V - 4x50',
  section: '4x50',
  diameter: 32.0,
  weight: 1100,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x70',
  section: '4x70',
  diameter: 36.0,
  weight: 1400,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x95',
  section: '4x95',
  diameter: 41.0,
  weight: 1800,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x120',
  section: '4x120',
  diameter: 46.0,
  weight: 2200,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x150',
  section: '4x150',
  diameter: 51.0,
  weight: 2700,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x185',
  section: '4x185',
  diameter: 57.0,
  weight: 3300,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x240',
  section: '4x240',
  diameter: 65.0,
  weight: 4200,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x300',
  section: '4x300',
  diameter: 73.0,
  weight: 5200,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},
{
  reference: 'U1000AR2V - 4x400',
  section: '4x400',
  diameter: 84.0,
  weight: 6800,
  type: 'Standard',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Aluminium',
  voltage: '0.6/1kV',
  applications: ['Alimentation', 'Réseaux', 'Distribution']
},

// Câbles armés avec sections importantes
{
  reference: 'U1000RVFV - 5G10',
  section: '5G10',
  diameter: 24.0,
  weight: 1200,
  type: 'Armé',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Enterré', 'Extérieur', 'Protection mécanique']
},
{
  reference: 'U1000RVFV - 5G16',
  section: '5G16',
  diameter: 29.0,
  weight: 1700,
  type: 'Armé',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Enterré', 'Extérieur', 'Protection mécanique']
},
{
  reference: 'U1000RVFV - 5G25',
  section: '5G25',
  diameter: 35.0,
  weight: 2500,
  type: 'Armé',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Enterré', 'Extérieur', 'Protection mécanique']
},
{
  reference: 'U1000RVFV - 5G35',
  section: '5G35',
  diameter: 40.0,
  weight: 3400,
  type: 'Armé',
  insulation: 'XLPE',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Enterré', 'Extérieur', 'Protection mécanique']
},

// Câbles sans halogène avec sections importantes
{
  reference: 'U1000 Z1-R - 5G6',
  section: '5G6',
  diameter: 17.5,
  weight: 600,
  type: 'Sans halogène',
  insulation: 'XLPE',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['ERP', 'IGH', 'Lieux publics']
},
{
  reference: 'U1000 Z1-R - 5G10',
  section: '5G10',
  diameter: 21.0,
  weight: 950,
  type: 'Sans halogène',
  insulation: 'XLPE',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['ERP', 'IGH', 'Lieux publics']
},
{
  reference: 'U1000 Z1-R - 5G16',
  section: '5G16',
  diameter: 25.5,
  weight: 1400,
  type: 'Sans halogène',
  insulation: 'XLPE',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['ERP', 'IGH', 'Lieux publics']
},
{
  reference: 'U1000 Z1-R - 5G25',
  section: '5G25',
  diameter: 31.0,
  weight: 2100,
  type: 'Sans halogène',
  insulation: 'XLPE',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['ERP', 'IGH', 'Lieux publics']
},

// Câbles résistants au feu avec sections importantes
{
  reference: 'CR1-C1 - 5G4',
  section: '5G4',
  diameter: 16.0,
  weight: 350,
  type: 'CR1-C1',
  insulation: 'Silicone',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Sécurité incendie', 'Alarmes', 'Désenfumage']
},
{
  reference: 'CR1-C1 - 5G6',
  section: '5G6',
  diameter: 18.0,
  weight: 450,
  type: 'CR1-C1',
  insulation: 'Silicone',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Sécurité incendie', 'Alarmes', 'Désenfumage']
},
{
  reference: 'CR1-C1 - 5G10',
  section: '5G10',
  diameter: 22.0,
  weight: 700,
  type: 'CR1-C1',
  insulation: 'Silicone',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Sécurité incendie', 'Alarmes', 'Désenfumage']
},
{
  reference: 'CR1-C1 - 5G16',
  section: '5G16',
  diameter: 27.0,
  weight: 1050,
  type: 'CR1-C1',
  insulation: 'Silicone',
  sheath: 'Polyoléfine',
  conductor: 'Cuivre',
  voltage: '0.6/1kV',
  applications: ['Sécurité incendie', 'Alarmes', 'Désenfumage']
},

// Câbles blindés avec sections importantes
{
  reference: 'YSLY-CY - 5x1,5',
  section: '5x1,5',
  diameter: 12.5,
  weight: 220,
  type: 'Blindé',
  insulation: 'PVC',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '300/500V',
  applications: ['Contrôle', 'Commande', 'Environnements perturbés']
},
{
  reference: 'YSLY-CY - 5x2,5',
  section: '5x2,5',
  diameter: 14.5,
  weight: 320,
  type: 'Blindé',
  insulation: 'PVC',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '300/500V',
  applications: ['Contrôle', 'Commande', 'Environnements perturbés']
},
{
  reference: 'YSLY-CY - 5x4',
  section: '5x4',
  diameter: 17.0,
  weight: 450,
  type: 'Blindé',
  insulation: 'PVC',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '300/500V',
  applications: ['Contrôle', 'Commande', 'Environnements perturbés']
},
{
  reference: 'YSLY-CY - 5x6',
  section: '5x6',
  diameter: 20.0,
  weight: 650,
  type: 'Blindé',
  insulation: 'PVC',
  sheath: 'PVC',
  conductor: 'Cuivre',
  voltage: '300/500V',
  applications: ['Contrôle', 'Commande', 'Environnements perturbés']
}
]