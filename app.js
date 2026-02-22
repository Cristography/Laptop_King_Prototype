const laptopsData = [
    { id: 1, name: "ASUS EXPERTBOOK B1 B1503CVA", brand: "ASUS", processor: "Intel Core i3-1315U 13th Gen", cpu: "Intel Core i3-1315U", generation: "13th Gen", gpu: "Intel UHD Graphics", ram: "8GB DDR5", storage: "256GB SSD", display: "15.6\" FHD LED", color: "Gentle Gray", os: "Win 11 Pro", warranty: "3 Years", price: 400, category: "business" },
    { id: 2, name: "ASUS VIVOBOOK 14 X1404VA", brand: "ASUS", processor: "Intel Core i5-1334U 13th Gen", cpu: "Intel Core i5-1334U", generation: "13th Gen", gpu: "Intel Iris Xe Graphics", ram: "12GB DDR4", storage: "256GB SSD", display: "14.0\" FHD LED", color: "Quiet Blue", os: "Win 11 Pro", warranty: "3 Years", price: 475, category: "student" },
    { id: 3, name: "ASUS VIVOBOOK 15 X1504VA", brand: "ASUS", processor: "Intel Core 5 120U 14th Gen", cpu: "Intel Core 5 120U", generation: "14th Gen", gpu: "Intel Graphics", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS", color: "Cool Silver", os: "Win 11 Pro", warranty: "3 Years", price: 600, category: "student" },
    { id: 4, name: "ASUS VIVOBOOK 15 X1504VA", brand: "ASUS", processor: "Intel Core i7-1355U 13th Gen", cpu: "Intel Core i7-1355U", generation: "13th Gen", gpu: "Intel Iris Xe Graphics", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6\" FHD LED", color: "Cool Silver", os: "Win 11 Pro", warranty: "3 Years", price: 600, category: "student" },
    { id: 5, name: "ASUS VIVOBOOK 15 X1502VA", brand: "ASUS", processor: "Intel Core i7-13620H 13th Gen", cpu: "Intel Core i7-13620H", generation: "13th Gen", gpu: "Intel UHD Graphics", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6\" FHD LED", color: "Cool Silver", os: "Win 11 Pro", warranty: "3 Years", price: 650, category: "student" },
    { id: 6, name: "ASUS VIVOBOOK S 14 FLIP TP3402VA", brand: "ASUS", processor: "Intel Core i5-13420H 13th Gen", cpu: "Intel Core i5-13420H", generation: "13th Gen", gpu: "Intel UHD Graphics", ram: "16GB DDR4", storage: "512GB SSD", display: "14.0\" WUXGA IPS Touch", color: "Cool Silver", os: "Win 11 Pro", warranty: "3 Years", price: 675, category: "business" },
    { id: 7, name: "ASUS VIVOBOOK 16X K3605VC", brand: "ASUS", processor: "Intel Core i5-13420H 13th Gen", cpu: "Intel Core i5-13420H", generation: "13th Gen", gpu: "NVIDIA RTX 3050 4GB", ram: "8GB DDR4", storage: "512GB SSD", display: "16.0\" WUXGA IPS 144Hz", color: "Indie Black", os: "Win 11 Pro", warranty: "3 Years", price: 700, category: "gaming" },
    { id: 8, name: "ASUS VIVOBOOK 16X K3605VU", brand: "ASUS", processor: "Intel Core i9-13900H 13th Gen", cpu: "Intel Core i9-13900H", generation: "13th Gen", gpu: "NVIDIA RTX 4050 6GB", ram: "16GB DDR4", storage: "512GB SSD", display: "16.0\" WQXGA IPS 144Hz", color: "Indie Black", os: "Win 11 Pro", warranty: "3 Years", price: 1050, category: "gaming" },
    { id: 9, name: "ASUS VIVOBOOK 16X K3605VV", brand: "ASUS", processor: "Intel Core i9-13900H 13th Gen", cpu: "Intel Core i9-13900H", generation: "13th Gen", gpu: "NVIDIA RTX 4060 8GB", ram: "16GB DDR4", storage: "512GB SSD", display: "16.0\" WUXGA IPS 120Hz", color: "Indie Black", os: "Win 11 Pro", warranty: "3 Years", price: 1100, category: "gaming" },
    { id: 10, name: "ASUS VIVOBOOK S 14 OLED S5406SA", brand: "ASUS", processor: "Intel Core Ultra 7 256V 15th Gen", cpu: "Intel Core Ultra 7 256V", generation: "15th Gen", gpu: "Intel Arc 140V Graphics", ram: "16GB LPDDR5X", storage: "1TB SSD", display: "14.0\" WUXGA OLED", color: "Mist Blue", os: "Win 11 Pro", warranty: "3 Years", price: 1000, category: "business" },
    { id: 11, name: "ASUS ZENBOOK 14 OLED UX3405C-U9", brand: "ASUS", processor: "Intel Core Ultra 9 285H 15th Gen", cpu: "Intel Core Ultra 9 285H", generation: "15th Gen", gpu: "Intel Arc 140T Graphics", ram: "32GB LPDDR5X", storage: "1TB SSD", display: "14.0\" WUXGA OLED Touch", color: "Jasper Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1300, category: "business" },
    { id: 12, name: "ASUS ROG ZEPHYRUS G14 GA403UM", brand: "ASUS", processor: "AMD Ryzen 9 270 15th Gen", cpu: "AMD Ryzen 9 270", generation: "15th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB LPDDR5X", storage: "1TB SSD", display: "14.0\" 3K OLED 120Hz", color: "Platinum White", os: "Win 11 Pro", warranty: "3 Years", price: 1800, category: "gaming" },
    { id: 13, name: "ASUS ROG STRIX G16 G615JMR", brand: "ASUS", processor: "Intel Core i7-14650HX 14th Gen", cpu: "Intel Core i7-14650HX", generation: "14th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1450, category: "gaming" },
    { id: 14, name: "ASUS ROG STRIX G16 G615JPR", brand: "ASUS", processor: "Intel Core i7-14650HX 14th Gen", cpu: "Intel Core i7-14650HX", generation: "14th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1650, category: "gaming" },
    { id: 15, name: "ASUS ROG STRIX G16 G615JMR", brand: "ASUS", processor: "Intel Core i9-14900HX 14th Gen", cpu: "Intel Core i9-14900HX", generation: "14th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1700, category: "gaming" },
    { id: 16, name: "ASUS ROG STRIX G18 G814JVR", brand: "ASUS", processor: "Intel Core i9-14900HX 14th Gen", cpu: "Intel Core i9-14900HX", generation: "14th Gen", gpu: "NVIDIA RTX 4060 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "18.0\" WQXGA IPS 240Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1900, category: "gaming" },
    { id: 17, name: "ASUS ROG STRIX G16 G615JPR", brand: "ASUS", processor: "Intel Core i9-14900HX 14th Gen", cpu: "Intel Core i9-14900HX", generation: "14th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WQXGA IPS 300Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 2200, category: "gaming" },
    { id: 18, name: "ASUS ROG STRIX G18 G815LM", brand: "ASUS", processor: "Intel Core Ultra 9 275HX 15th Gen", cpu: "Intel Core Ultra 9 275HX", generation: "15th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "18.0\" WQXGA IPS 240Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 2300, category: "gaming" },
    { id: 19, name: "ASUS ROG STRIX G16 G615LP", brand: "ASUS", processor: "Intel Core Ultra 9 275HX 15th Gen", cpu: "Intel Core Ultra 9 275HX", generation: "15th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WQXGA IPS 240Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 2200, category: "gaming" },
    { id: 20, name: "ASUS ROG STRIX G16 G615LR", brand: "ASUS", processor: "Intel Core Ultra 9 275HX 15th Gen", cpu: "Intel Core Ultra 9 275HX", generation: "15th Gen", gpu: "NVIDIA RTX 5070Ti 12GB", ram: "32GB DDR5", storage: "2TB SSD", display: "16.0\" WQXGA IPS 240Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 2500, category: "gaming" },
    { id: 21, name: "ASUS ROG STRIX SCAR 16 G635LW", brand: "ASUS", processor: "Intel Core Ultra 9 275HX 15th Gen", cpu: "Intel Core Ultra 9 275HX", generation: "15th Gen", gpu: "NVIDIA RTX 5080 16GB", ram: "32GB DDR5", storage: "2TB SSD", display: "16.0\" WQXGA IPS 240Hz", color: "Off Black", os: "Win 11 Pro", warranty: "3 Years", price: 3500, category: "gaming" },
    { id: 22, name: "ASUS ROG STRIX G16 G614FM", brand: "ASUS", processor: "AMD Ryzen 9 9955HX", cpu: "AMD Ryzen 9 9955HX", generation: "AMD", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1700, category: "gaming" },
    { id: 23, name: "ASUS ROG STRIX G16 G614PR", brand: "ASUS", processor: "AMD Ryzen 9 8940HX", cpu: "AMD Ryzen 9 8940HX", generation: "AMD", gpu: "NVIDIA RTX 5070Ti 12GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Eclipse Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1900, category: "gaming" },
    { id: 24, name: "ASUS TUF GAMING F16 FX608JMR", brand: "ASUS", processor: "Intel Core i7-14650HX 14th Gen", cpu: "Intel Core i7-14650HX", generation: "14th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Jaeger Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1350, category: "gaming" },
    { id: 25, name: "ASUS TUF GAMING F16 FX608JMR", brand: "ASUS", processor: "Intel Core i7-14650HX 14th Gen", cpu: "Intel Core i7-14650HX", generation: "14th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Jaeger Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1450, category: "gaming" },
    { id: 26, name: "ASUS TUF GAMING F16 FX608JPR", brand: "ASUS", processor: "Intel Core i7-14650HX 14th Gen", cpu: "Intel Core i7-14650HX", generation: "14th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Jaeger Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1450, category: "gaming" },
    { id: 27, name: "ASUS TUF GAMING A16 FA607NU", brand: "ASUS", processor: "AMD Ryzen 5 7535HS", cpu: "AMD Ryzen 5 7535HS", generation: "AMD", gpu: "NVIDIA RTX 4050 6GB", ram: "16GB DDR5", storage: "512GB SSD", display: "16.0\" WUXGA IPS 144Hz", color: "Mecha Gray", os: "Win 11 Pro", warranty: "3 Years", price: 800, category: "gaming" },
    { id: 28, name: "ASUS TUF GAMING A16 FA607NUG", brand: "ASUS", processor: "AMD Ryzen 7 7445HS", cpu: "AMD Ryzen 7 7445HS", generation: "AMD", gpu: "NVIDIA RTX 4050 6GB", ram: "16GB DDR5", storage: "512GB SSD", display: "16.0\" WUXGA IPS 144Hz", color: "Mecha Gray", os: "Win 11 Pro", warranty: "3 Years", price: 900, category: "gaming" },
    { id: 29, name: "ASUS TUF GAMING A16 FA608UP", brand: "ASUS", processor: "AMD Ryzen 7 260 15th Gen", cpu: "AMD Ryzen 7 260", generation: "15th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Jaeger Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1450, category: "gaming" },
    { id: 30, name: "ASUS TUF GAMING A16 FA608UP", brand: "ASUS", processor: "AMD Ryzen 9 270 15th Gen", cpu: "AMD Ryzen 9 270", generation: "15th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Jaeger Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1650, category: "gaming" },
    { id: 31, name: "DELL PRO 15 ESSENTIAL", brand: "Dell", processor: "Intel Core 3 100U 14th Gen", cpu: "Intel Core 3 100U", generation: "14th Gen", gpu: "Intel Graphics", ram: "8GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 120Hz", color: "Carbon Black", os: "Win 11 Pro", warranty: "3 Years", price: 425, category: "business" },
    { id: 32, name: "DELL VOSTRO 15 3530", brand: "Dell", processor: "Intel Core i3-1305U 13th Gen", cpu: "Intel Core i3-1305U", generation: "13th Gen", gpu: "Intel UHD Graphics", ram: "8GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS 120Hz", color: "Carbon Black", os: "Win 11 Pro", warranty: "3 Years", price: 400, category: "business" },
    { id: 33, name: "DELL VOSTRO 15 3530", brand: "Dell", processor: "Intel Core i5-1334U 13th Gen", cpu: "Intel Core i5-1334U", generation: "13th Gen", gpu: "Intel Iris Xe Graphics", ram: "8GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS 120Hz", color: "Carbon Black", os: "Win 11 Pro", warranty: "3 Years", price: 500, category: "business" },
    { id: 34, name: "DELL VOSTRO 15 3530", brand: "Dell", processor: "Intel Core i7-1355U 13th Gen", cpu: "Intel Core i7-1355U", generation: "13th Gen", gpu: "Intel Iris Xe Graphics", ram: "8GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS 120Hz", color: "Carbon Black", os: "Win 11 Pro", warranty: "3 Years", price: 600, category: "business" },
    { id: 35, name: "DELL ALIENWARE 16 AURORA NAC16250", brand: "Dell", processor: "Intel Core 7 240H 15th Gen", cpu: "Intel Core 7 240H", generation: "15th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WQXGA IPS 120Hz", color: "Interstellar Indigo", os: "Win 11 Pro", warranty: "3 Years", price: 1400, category: "gaming" },
    { id: 36, name: "DELL ALIENWARE 16X AURORA NAC16251", brand: "Dell", processor: "Intel Core Ultra 9 275HX 15th Gen", cpu: "Intel Core Ultra 9 275HX", generation: "15th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WQXGA IPS 240Hz", color: "Interstellar Indigo", os: "Win 11 Pro", warranty: "3 Years", price: 1700, category: "gaming" },
    { id: 37, name: "HP LAPTOP 14S-DQ5187NIA", brand: "HP", processor: "Intel Core i3-1215U 12th Gen", cpu: "Intel Core i3-1215U", generation: "12th Gen", gpu: "Intel UHD Graphics", ram: "8GB DDR4", storage: "512GB SSD", display: "14.0\" FHD", color: "Natural Silver", os: "Win 11 Pro", warranty: "3 Years", price: 375, category: "student" },
    { id: 38, name: "HP OMNIBOOK 5 FLIP 2-IN-1 14-FP0013DX", brand: "HP", processor: "Intel Core 5 120U 14th Gen", cpu: "Intel Core 5 120U", generation: "14th Gen", gpu: "Intel Graphics", ram: "8GB LPDDR5", storage: "512GB SSD", display: "14.0\" WUXGA IPS Touch", color: "Glacier Silver", os: "Win 11 Pro", warranty: "3 Years", price: 575, category: "business" },
    { id: 39, name: "HP OMNIBOOK 5 FLIP 2-IN-1 14-FP0023DX", brand: "HP", processor: "Intel Core 7 150U 14th Gen", cpu: "Intel Core 7 150U", generation: "14th Gen", gpu: "Intel Graphics", ram: "16GB LPDDR5", storage: "512GB SSD", display: "14.0\" WUXGA IPS Touch", color: "Glacier Silver", os: "Win 11 Pro", warranty: "3 Years", price: 700, category: "business" },
    { id: 40, name: "HP OMEN 16 SLIM GAMING 16-AN0119NR", brand: "HP", processor: "Intel Core Ultra 9 285H 15th Gen", cpu: "Intel Core Ultra 9 285H", generation: "15th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "16.0\" WQXGA IPS 240Hz", color: "Shadow Black", os: "Win 11 Pro", warranty: "3 Years", price: 1800, category: "gaming" },
    { id: 41, name: "HP OMEN GAMING 16-AP0053DX", brand: "HP", processor: "AMD Ryzen 9 8940HX", cpu: "AMD Ryzen 9 8940HX", generation: "AMD", gpu: "NVIDIA RTX 5060 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WUXGA IPS 144Hz", color: "Shadow Black", os: "Win 11 Pro", warranty: "3 Years", price: 1500, category: "gaming" },
    { id: 42, name: "LENOVO IDEAPAD 1 15IJL7", brand: "Lenovo", processor: "Intel Celeron N4500", cpu: "Intel Celeron N4500", generation: "Intel", gpu: "Intel UHD Graphics", ram: "8GB DDR4", storage: "256GB SSD", display: "15.6\" FHD", color: "Cloud Gray", os: "Win 11 Pro", warranty: "3 Years", price: 300, category: "student" },
    { id: 43, name: "LENOVO IDEAPAD 1 15IRU7", brand: "Lenovo", processor: "Intel Core i5-1335U 13th Gen", cpu: "Intel Core i5-1335U", generation: "13th Gen", gpu: "Intel Iris Xe Graphics", ram: "16GB DDR4", storage: "256GB SSD", display: "15.6\" FHD", color: "Cloud Gray", os: "Win 11 Pro", warranty: "3 Years", price: 475, category: "student" },
    { id: 44, name: "LENOVO THINKBOOK 16 G6 IRL", brand: "Lenovo", processor: "Intel Core i5-13420H 13th Gen", cpu: "Intel Core i5-13420H", generation: "13th Gen", gpu: "Intel UHD Graphics", ram: "8GB DDR5", storage: "512GB SSD", display: "16.0\" WUXGA IPS", color: "Arctic Gray", os: "Win 11 Pro", warranty: "3 Years", price: 600, category: "business" },
    { id: 45, name: "LENOVO THINKBOOK 16 G8 IAL", brand: "Lenovo", processor: "Intel Core Ultra 7 255H 15th Gen", cpu: "Intel Core Ultra 7 255H", generation: "15th Gen", gpu: "Intel Arc 140T Graphics", ram: "16GB DDR5", storage: "512GB SSD", display: "16.0\" WUXGA IPS", color: "Arctic Gray", os: "Win 11 Pro", warranty: "3 Years", price: 900, category: "business" },
    { id: 46, name: "LENOVO LOQ 15IRX10", brand: "Lenovo", processor: "Intel Core i5-13450HX 13th Gen", cpu: "Intel Core i5-13450HX", generation: "13th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 144Hz", color: "Luna Gray", os: "Win 11 Pro", warranty: "3 Years", price: 900, category: "gaming" },
    { id: 47, name: "LENOVO LOQ 15IRX10", brand: "Lenovo", processor: "Intel Core i7-13700HX 13th Gen", cpu: "Intel Core i7-13700HX", generation: "13th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "24GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 144Hz", color: "Luna Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1100, category: "gaming" },
    { id: 48, name: "LENOVO LOQ 15IRX10", brand: "Lenovo", processor: "Intel Core i7-14700HX 14th Gen", cpu: "Intel Core i7-14700HX", generation: "14th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "24GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 144Hz", color: "Luna Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1200, category: "gaming" },
    { id: 49, name: "LENOVO LOQ 15IRX10", brand: "Lenovo", processor: "Intel Core i7-14700HX 14th Gen", cpu: "Intel Core i7-14700HX", generation: "14th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "24GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 144Hz", color: "Luna Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1300, category: "gaming" },
    { id: 50, name: "LENOVO LOQ 15ARP9", brand: "Lenovo", processor: "AMD Ryzen 5 7235HS", cpu: "AMD Ryzen 5 7235HS", generation: "AMD", gpu: "NVIDIA RTX 4050 6GB", ram: "12GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 144Hz", color: "Luna Gray", os: "Win 11 Pro", warranty: "3 Years", price: 725, category: "gaming" },
    { id: 51, name: "LENOVO LOQ 15AHP10", brand: "Lenovo", processor: "AMD Ryzen 7 250 15th Gen", cpu: "AMD Ryzen 7 250", generation: "15th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 144Hz", color: "Luna Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1000, category: "gaming" },
    { id: 52, name: "LENOVO LOQ 15AHP10", brand: "Lenovo", processor: "AMD Ryzen 7 250 15th Gen", cpu: "AMD Ryzen 7 250", generation: "15th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "16GB DDR5", storage: "1TB SSD", display: "15.6\" FHD IPS 144Hz", color: "Luna Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1050, category: "gaming" },
    { id: 53, name: "LENOVO LEGION 5 15IRX10", brand: "Lenovo", processor: "Intel Core i7-14700HX 14th Gen", cpu: "Intel Core i7-14700HX", generation: "14th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "15.1\" WQXGA OLED 165Hz", color: "Eclipse Black", os: "Win 11 Pro", warranty: "3 Years", price: 1300, category: "gaming" },
    { id: 54, name: "LENOVO LEGION 5 15IRX10", brand: "Lenovo", processor: "Intel Core i7-14700HX 14th Gen", cpu: "Intel Core i7-14700HX", generation: "14th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "15.1\" WQXGA OLED 165Hz", color: "Eclipse Black", os: "Win 11 Pro", warranty: "3 Years", price: 1400, category: "gaming" },
    { id: 55, name: "LENOVO LEGION 5 15IRX10", brand: "Lenovo", processor: "Intel Core i9-14900HX 14th Gen", cpu: "Intel Core i9-14900HX", generation: "14th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "15.1\" WQXGA OLED 165Hz", color: "Eclipse Black", os: "Win 11 Pro", warranty: "3 Years", price: 1600, category: "gaming" },
    { id: 56, name: "LENOVO LEGION 5 15AHP10", brand: "Lenovo", processor: "AMD Ryzen 7 260 15th Gen", cpu: "AMD Ryzen 7 260", generation: "15th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "15.1\" WQXGA OLED 165Hz", color: "Eclipse Black", os: "Win 11 Pro", warranty: "3 Years", price: 1300, category: "gaming" },
    { id: 57, name: "LENOVO LEGION 5 16IAX10", brand: "Lenovo", processor: "Intel Core Ultra 9 275HX 15th Gen", cpu: "Intel Core Ultra 9 275HX", generation: "15th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WQXGA IPS 240Hz", color: "Storm Gray", os: "Win 11 Pro", warranty: "3 Years", price: 1600, category: "gaming" },
    { id: 58, name: "LENOVO LEGION PRO 5 16IRX10", brand: "Lenovo", processor: "Intel Core i9-14900HX 14th Gen", cpu: "Intel Core i9-14900HX", generation: "14th Gen", gpu: "NVIDIA RTX 5070 8GB", ram: "32GB DDR5", storage: "1TB SSD", display: "16.0\" WQXGA IPS 240Hz", color: "Eclipse Black", os: "Win 11 Pro", warranty: "3 Years", price: 2100, category: "gaming" },
    { id: 59, name: "LENOVO LEGION PRO 7 16IAX10H", brand: "Lenovo", processor: "Intel Core Ultra 9 275HX 15th Gen", cpu: "Intel Core Ultra 9 275HX", generation: "15th Gen", gpu: "NVIDIA RTX 5080 16GB", ram: "32GB DDR5", storage: "2TB SSD", display: "16.0\" WQXGA OLED 240Hz", color: "Eclipse Black", os: "Win 11 Pro", warranty: "3 Years", price: 3400, category: "gaming" },
    { id: 60, name: "ACER NITRO V 15 ANV15-52-57BB", brand: "Acer", processor: "Intel Core i5-13420H 13th Gen", cpu: "Intel Core i5-13420H", generation: "13th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS 165Hz", color: "Obsidian Black", os: "Win 11 Pro", warranty: "3 Years", price: 850, category: "gaming" },
    { id: 61, name: "ACER NITRO V 15 ANV15-52-99CV", brand: "Acer", processor: "Intel Core i9-13900H 13th Gen", cpu: "Intel Core i9-13900H", generation: "13th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS 165Hz", color: "Obsidian Black", os: "Win 11 Pro", warranty: "3 Years", price: 1150, category: "gaming" },
    { id: 62, name: "ACER NITRO V 15 ANV15-52-92DD", brand: "Acer", processor: "Intel Core i9-13900H 13th Gen", cpu: "Intel Core i9-13900H", generation: "13th Gen", gpu: "NVIDIA RTX 5060 8GB", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS 165Hz", color: "Obsidian Black", os: "Win 11 Pro", warranty: "3 Years", price: 1250, category: "gaming" },
    { id: 63, name: "GIGABYTE GAMING A16 CMHI", brand: "Gigabyte", processor: "Intel Core i7-13620H 13th Gen", cpu: "Intel Core i7-13620H", generation: "13th Gen", gpu: "NVIDIA RTX 4050 6GB", ram: "16GB DDR5", storage: "512GB SSD", display: "16.0\" WUXGA IPS 165Hz", color: "Black Steel", os: "Win 11 Pro", warranty: "3 Years", price: 900, category: "gaming" },
    { id: 64, name: "MSI CYBORG 15 B2RWEKG", brand: "MSI", processor: "Intel Core 7 240H 15th Gen", cpu: "Intel Core 7 240H", generation: "15th Gen", gpu: "NVIDIA RTX 5050 8GB", ram: "16GB DDR5", storage: "512GB SSD", display: "15.6\" FHD IPS 144Hz", color: "Translucent Black", os: "Win 11 Pro", warranty: "3 Years", price: 1100, category: "gaming" }
];

class LaptopStore {
    constructor() {
        this.laptops = laptopsData;
        this.filteredLaptops = [...this.laptops];
        this.favorites = new Set();
        this.currentView = 'cards';
        this.currentLang = 'ar';
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        this.initTheme();
        this.initCursorFollower();
        this.initScrollEffects();
        this.initSearch();
        this.initFilters();
        this.initViewToggle();
        this.initModal();
        this.initMatrixRain();
        this.renderProducts();
        this.updateStats();
    }

    initMatrixRain() {
        const container = document.querySelector('.matrix-rain');
        if (!container) return;
        
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const numColumns = Math.floor(window.innerWidth / 30);
        
        for (let i = 0; i < numColumns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${(i / numColumns) * 100}%`;
            column.style.animationDuration = `${8 + Math.random() * 10}s`;
            column.style.animationDelay = `${Math.random() * 5}s`;
            
            let text = '';
            const length = 15 + Math.floor(Math.random() * 20);
            for (let j = 0; j < length; j++) {
                text += chars[Math.floor(Math.random() * chars.length)] + ' ';
            }
            column.textContent = text;
            container.appendChild(column);
        }
    }

    initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const langToggle = document.getElementById('lang-toggle');
        
        themeToggle.addEventListener('click', () => {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', this.currentTheme);
            const icon = themeToggle.querySelector('i');
            if (this.currentTheme === 'dark') {
                icon.className = 'fas fa-moon';
            } else {
                icon.className = 'fas fa-sun';
            }
        });

        langToggle.addEventListener('click', () => {
            this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
            langToggle.querySelector('span').textContent = this.currentLang === 'ar' ? 'EN' : 'AR';
            this.updateLanguage();
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('href');
                document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
            });
        });

        this.initScrollSpy();
    }

    initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-item');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    }

    updateLanguage() {
        document.querySelectorAll('[data-ar]').forEach(el => {
            const text = el.getAttribute(`data-${this.currentLang}`);
            if (text) el.textContent = text;
        });
        
        document.querySelectorAll('[data-placeholder-ar]').forEach(el => {
            const text = el.getAttribute(`data-placeholder-${this.currentLang}`);
            if (text) el.placeholder = text;
        });
        
        document.querySelectorAll('select option[data-ar]').forEach(el => {
            const text = el.getAttribute(`data-${this.currentLang}`);
            if (text) el.textContent = text;
        });

        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLang;
    }

    initCursorFollower() {
        const follower = document.querySelector('.cursor-follower');
        document.addEventListener('mousemove', (e) => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
            follower.classList.add('active');
        });
        document.addEventListener('mouseleave', () => follower.classList.remove('active'));
    }

    initScrollEffects() {
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    initSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            this.applyFilters();
        });
    }

    initFilters() {
        const brandFilter = document.getElementById('brand-filter');
        const priceSlider = document.getElementById('price-slider');
        const priceValue = document.getElementById('price-value');
        
        brandFilter.addEventListener('change', () => this.applyFilters());
        
        priceSlider.addEventListener('input', () => {
            priceValue.textContent = `$${priceSlider.value}`;
            this.applyFilters();
        });

        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.applyFilters();
            });
        });
    }

    applyFilters() {
        const searchQuery = document.getElementById('search-input').value.toLowerCase();
        const brand = document.getElementById('brand-filter').value;
        const maxPrice = parseInt(document.getElementById('price-slider').value);
        const category = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';

        this.filteredLaptops = this.laptops.filter(laptop => {
            const matchesSearch = laptop.name.toLowerCase().includes(searchQuery) ||
                laptop.processor.toLowerCase().includes(searchQuery) ||
                laptop.brand.toLowerCase().includes(searchQuery);
            const matchesBrand = !brand || laptop.brand === brand;
            const matchesPrice = laptop.price <= maxPrice;
            const matchesCategory = category === 'all' || laptop.category === category;
            
            return matchesSearch && matchesBrand && matchesPrice && matchesCategory;
        });

        this.renderProducts();
        this.updateStats();
    }

    initViewToggle() {
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentView = btn.dataset.view;
                document.getElementById('cards-view').classList.toggle('active', this.currentView === 'cards');
                document.getElementById('table-view').classList.toggle('active', this.currentView === 'table');
            });
        });
    }

    renderProducts() {
        const cardsView = document.getElementById('cards-view');
        const tableView = document.getElementById('table-view');
        const emptyState = document.getElementById('empty-state');

        if (this.filteredLaptops.length === 0) {
            cardsView.innerHTML = '';
            tableView.innerHTML = '';
            emptyState.classList.add('active');
            return;
        }

        emptyState.classList.remove('active');

        cardsView.innerHTML = `
            <div class="laptops-grid">
                ${this.filteredLaptops.map(laptop => `
                    <div class="laptop-card" data-id="${laptop.id}">
                        <div class="laptop-card-header">
                            <div>
                                <div class="laptop-name">${laptop.name}</div>
                                <div class="laptop-brand">${laptop.brand}</div>
                            </div>
                            <div class="laptop-price">$${laptop.price}</div>
                        </div>
                        <div class="laptop-specs">
                            <div class="spec-item">
                                <i class="fas fa-microchip spec-icon"></i>
                                <div>
                                    <div class="spec-value">${laptop.cpu}</div>
                                    <div class="spec-label">المعالج</div>
                                </div>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-gamepad spec-icon"></i>
                                <div>
                                    <div class="spec-value">${laptop.gpu}</div>
                                    <div class="spec-label">كرت الشاشة</div>
                                </div>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-memory spec-icon"></i>
                                <div>
                                    <div class="spec-value">${laptop.ram}</div>
                                    <div class="spec-label">الذاكرة</div>
                                </div>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-hdd spec-icon"></i>
                                <div>
                                    <div class="spec-value">${laptop.storage}</div>
                                    <div class="spec-label">التخزين</div>
                                </div>
                            </div>
                        </div>
                        <div class="laptop-card-actions">
                            <button class="btn-action favorite ${this.favorites.has(laptop.id) ? 'active' : ''}" data-id="${laptop.id}">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button class="btn-action details" data-id="${laptop.id}">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        tableView.innerHTML = `
            <table class="laptops-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>الموديل</th>
                        <th>المعالج</th>
                        <th>كرت الشاشة</th>
                        <th>الذاكرة</th>
                        <th>التخزين</th>
                        <th>الشاشة</th>
                        <th>السعر</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${this.filteredLaptops.map((laptop, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>
                                <div class="model-name">${laptop.name}</div>
                                <div class="model-brand">${laptop.brand}</div>
                            </td>
                            <td>${laptop.cpu}</td>
                            <td>${laptop.gpu}</td>
                            <td>${laptop.ram}</td>
                            <td>${laptop.storage}</td>
                            <td>${laptop.display}</td>
                            <td class="price">$${laptop.price}</td>
                            <td class="actions">
                                <button class="btn-action favorite ${this.favorites.has(laptop.id) ? 'active' : ''}" data-id="${laptop.id}"><i class="fas fa-heart"></i></button>
                                <button class="btn-action details" data-id="${laptop.id}"><i class="fas fa-info-circle"></i></button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;

        this.initProductInteractions();
    }

    initProductInteractions() {
        document.querySelectorAll('.laptop-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.btn-action')) {
                    const id = parseInt(card.dataset.id);
                    const laptop = this.laptops.find(l => l.id === id);
                    if (laptop) this.openModal(laptop);
                }
            });
        });

        document.querySelectorAll('.btn-action.details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                const laptop = this.laptops.find(l => l.id === id);
                if (laptop) this.openModal(laptop);
            });
        });

        document.querySelectorAll('.btn-action.favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                this.toggleFavorite(id, btn);
            });
        });
    }

    toggleFavorite(id, btn) {
        if (this.favorites.has(id)) {
            this.favorites.delete(id);
            btn.classList.remove('active');
            this.showToast('تمت الإزالة من المفضلة', 'info');
        } else {
            this.favorites.add(id);
            btn.classList.add('active');
            this.showToast('تمت الإضافة للمفضلة', 'success');
        }
    }

    initModal() {
        const modal = document.getElementById('product-modal');
        document.getElementById('modal-close').addEventListener('click', () => modal.classList.remove('active'));
        modal.querySelector('.modal-backdrop').addEventListener('click', () => modal.classList.remove('active'));
    }

    openModal(laptop) {
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <div class="modal-header">
                <div>
                    <h2 class="modal-title">${laptop.name}</h2>
                    <p class="modal-brand">${laptop.brand}</p>
                </div>
                <div class="modal-price">$${laptop.price}</div>
            </div>
            <div class="modal-specs-grid">
                <div class="modal-spec-item">
                    <i class="fas fa-microchip modal-spec-icon"></i>
                    <span class="modal-spec-label">المعالج</span>
                    <span class="modal-spec-value">${laptop.processor}</span>
                </div>
                <div class="modal-spec-item">
                    <i class="fas fa-gamepad modal-spec-icon"></i>
                    <span class="modal-spec-label">كرت الشاشة</span>
                    <span class="modal-spec-value">${laptop.gpu}</span>
                </div>
                <div class="modal-spec-item">
                    <i class="fas fa-memory modal-spec-icon"></i>
                    <span class="modal-spec-label">الذاكرة RAM</span>
                    <span class="modal-spec-value">${laptop.ram}</span>
                </div>
                <div class="modal-spec-item">
                    <i class="fas fa-hdd modal-spec-icon"></i>
                    <span class="modal-spec-label">التخزين</span>
                    <span class="modal-spec-value">${laptop.storage}</span>
                </div>
                <div class="modal-spec-item">
                    <i class="fas fa-desktop modal-spec-icon"></i>
                    <span class="modal-spec-label">الشاشة</span>
                    <span class="modal-spec-value">${laptop.display}</span>
                </div>
                <div class="modal-spec-item">
                    <i class="fas fa-palette modal-spec-icon"></i>
                    <span class="modal-spec-label">اللون</span>
                    <span class="modal-spec-value">${laptop.color}</span>
                </div>
                <div class="modal-spec-item">
                    <i class="fas fa-laptop modal-spec-icon"></i>
                    <span class="modal-spec-label">نظام التشغيل</span>
                    <span class="modal-spec-value">${laptop.os}</span>
                </div>
                <div class="modal-spec-item">
                    <i class="fas fa-shield-alt modal-spec-icon"></i>
                    <span class="modal-spec-label">الكفالة</span>
                    <span class="modal-spec-value">${laptop.warranty}</span>
                </div>
            </div>
        `;
        document.getElementById('product-modal').classList.add('active');
    }

    updateStats() {
        const total = this.laptops.length;
        const filtered = this.filteredLaptops.length;
        const avgPrice = Math.round(this.laptops.reduce((sum, l) => sum + l.price, 0) / total);
        
        document.getElementById('total-count').textContent = total;
        document.getElementById('filtered-count').textContent = filtered;
        document.getElementById('avg-price').textContent = `$${avgPrice}`;
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
            <span class="toast-message">${message}</span>
        `;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => new LaptopStore());
