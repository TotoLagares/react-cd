import firebase from "firebase/app";
import "firebase/firestore";

// Configura e inicializa Firebase
const firebaseConfig = {
  // Tu configuración de Firebase aquí
};

firebase.initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const firestore = firebase.firestore();

// Array de productos
const productos = [
    { id: 1, img: 'https://imgs.search.brave.com/4jxZolBdVCYE6M1CCBx0bmsTactOSE8ensO0tTUDDn8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/VFVUS0tpczRxSnc3/WC1VdGx4Q1dRSGFI/YSZwaWQ9QXBp', nombre: 'Tarjeta de video NVIDIA RTX 3080', categoria: 'ComponentesdePC', precio: 1099.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: '11 GB GDDR6X, HDMI 2.1, DisplayPort 1.4a' },
    { id: 2, img: 'https://imgs.search.brave.com/vECmvKRo22IsFCp4gThSucIaFTINV3DpQueqUl1FoX0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/eWg1UzhQM0dYRzkz/LVU0U1lmajRBSGFI/YSZwaWQ9QXBp', nombre: 'Procesador Intel Core i9-11900K', categoria: 'ComponentesdePC', precio: 599.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: '8 núcleos, 16 hilos, frecuencia base de 3.5 GHz' },
    { id: 3,  img: 'https://imgs.search.brave.com/4ULJZxdiqx7OC8Yk7TE77Yebv5Uml8okYdKTiLp4o9k/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/UVFPN2k5bzdZdUQ3/aE5FWTYzOXRnSGFG/aiZwaWQ9QXBp', nombre: 'Memoria RAM Corsair Vengeance RGB Pro', categoria: 'ComponentesdePC', precio: 129.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: '16 GB DDR4 3200 MHz, iluminación RGB' },
    { id:4, img: 'https://imgs.search.brave.com/x7EPwARKQnkCBnU2lVbHkdGwCjBD-eGYwF0jdv15hQc/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/aUozdWM4SHZzMGZ4/cVVncURsS1dBSGFI/YSZwaWQ9QXBp', nombre: 'Disco duro sólido Samsung 970 EVO Plus', categoria: 'AlmacenamientodePC', precio: 149.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: '500 GB NVMe M.2, velocidad de lectura de 3500 MB/s' },
    { id: 5, img: 'https://imgs.search.brave.com/Wh-pYrfW5QnwlKkIaqo4JOvVXNBW4NxAXoPNTLk9Fks/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/RkVtNEt3empuLXZs/M3liSXFnSnl3SGFI/YSZwaWQ9QXBp', nombre: 'Refrigerador líquido Corsair H100i RGB Platinum', categoria: 'ComponentesdePC', precio: 159.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: 'Radiador de 240 mm, dos ventiladores ML120 RGB' },
    { id: 6, img: 'https://imgs.search.brave.com/g-D7yQ8WLrDpBHvIwo9M_4P6eKChCFiFkHoJwTBSv0c/rs:fit:764:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/VU1CNUxlZi1wS2lJ/UFBVc0xtY0FnSGFF/bSZwaWQ9QXBp', nombre: 'Fuente de poder EVGA SuperNOVA 750 G5', categoria: 'ComponentesdePC', precio: 119.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: '750 W, certificación 80 PLUS Gold' },
    { id: 7, img: 'https://imgs.search.brave.com/RYVS-WwAwYGhYB11MRzW1rZouAnVySQ9uqgPVuEIshY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/d3ZqQmZrVF9ubnNF/TFFoWUtGLTFRSGFI/YSZwaWQ9QXBp', nombre: 'Gabinete NZXT H510', categoria: 'ComponentesdePC', precio: 69.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: 'ATX, vidrio templado, dos ventiladores incluidos' },
    { id: 8, img: 'https://imgs.search.brave.com/ANtHrg-IetBWVFJFkTsbZ1YjycazaC0m4Uf-wnerAqQ/rs:fit:541:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/dERncElhMmk3ZXRn/U1pSaE1nZ29BSGFH/ZiZwaWQ9QXBp', nombre: 'Tarjeta madre ASUS ROG Strix B550-F Gaming', categoria: 'ComponentesdePC', precio: 179.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: 'Soporta procesadores AMD Ryzen, PCIe 4.0' },
    { id: 9, img: 'https://imgs.search.brave.com/mMKUit2Ol9ELRO4iXOsihGkOMQSC8LHym3MQ-LaafzY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/NXk4RlBNYXRNaVY4/ZDVuMVhTdnVnSGFI/YSZwaWQ9QXBp', nombre: 'Teclado mecánico Logitech G915', categoria: 'PerifericosdePC', precio: 249.99, stock: Math.floor(Math.random() * 15) + 1, descripcion: 'Inalámbrico, con cable, RGB, teclas mecánicas' },

]

// Subir cada producto del array a Firebase
const uploadProductosToFirebase = async () => {
  try {
    // Itera sobre los productos del array
    for (const producto of productos) {
      // Guarda el producto en Firebase utilizando el método "set" o "add"
      await firestore.collection("productos").add(producto);
    }
    console.log("Productos guardados correctamente en Firebase");
  } catch (error) {
    console.error("Error al guardar los productos en Firebase:", error);
  }
};

// Llama a la función para subir los productos
uploadProductosToFirebase();
