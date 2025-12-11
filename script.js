// 1. DATA (Official Steal a Brainrot characters - The Definitive 2025 List, 150+ Units)
const brainrots = [
    // --- Common Tier (Rarities: $25 to $1.7K | Income: 1/s to 14/s) ---
    { name: "Noobini Pizzanini", rarity: "Common", price: "25$", income_per_second: "1$", description: "The cheapest starting unit." },
    { name: "Lirili Larila", rarity: "Common", price: "250$", income_per_second: "3$", description: "Bipedal cactus-elephant hybrid." },
    { name: "Tim Cheese", rarity: "Common", price: "500$", income_per_second: "5$", description: "A simple, low-tier earner." },
    { name: "Fluriflura (Frulli Frulla)", rarity: "Common", price: "750$", income_per_second: "7$", description: "Known in-game as Frulli Frulla." },
    { name: "Talpa Di Fero", rarity: "Common", price: "1K$", income_per_second: "9$", description: "The iron mole. A slight upgrade." },
    { name: "Svinina Bombardino", rarity: "Common", price: "1.2K$", income_per_second: "10$", description: "A common bomber character." },
    { name: "Noobini Santanini (Xmas Fuse)", rarity: "Common", price: "1.1K$", income_per_second: "11$", description: "Christmas Fuse Machine drop." },
    { name: "Racooni Jandelini", rarity: "Common", price: "1.3K$", income_per_second: "12$", description: "The popular raccoon Brainrot model." },
    { name: "Pipi Kiwi", rarity: "Common", price: "1.5K$", income_per_second: "13$", description: "High-end common unit." },
    { name: "Pipi Corni", rarity: "Common", price: "1.7K$", income_per_second: "14$", description: "Highest income Common unit." },
    { name: "Banano Piccolo", rarity: "Common", price: "900$", income_per_second: "8$", description: "A small banana character." },
    { name: "Fungo Lento", rarity: "Common", price: "300$", income_per_second: "4$", description: "Slow mushroom unit." },
    { name: "Pecorella Grigia", rarity: "Common", price: "600$", income_per_second: "6$", description: "A small grey sheep." },
    { name: "Tigrotto Pigro", rarity: "Common", price: "1.4K$", income_per_second: "12$", description: "A lazy small tiger." },

    // --- Rare Tier (Rarities: $2K to $9.5K | Income: 15/s to 70/s) ---
    { name: "Trippi Troppi", rarity: "Rare", price: "2K$", income_per_second: "15$", description: "A popular mid-tier Brainrot." },
    { name: "Gangster Footera", rarity: "Rare", price: "4K$", income_per_second: "30$", description: "A foot-shaped gangster Brainrot." },
    { name: "Bandito Bobritto", rarity: "Rare", price: "4.5K$", income_per_second: "35$", description: "A bandit-themed Rare unit." },
    { name: "Boneca Ambalabu", rarity: "Rare", price: "5K$", income_per_second: "40$", description: "A doll-like rare character." },
    { name: "Cacto Hipopotamo", rarity: "Rare", price: "6.5K$", income_per_second: "50$", description: "A cactus-hippo hybrid." },
    { name: "Ta Ta Ta Ta Sahur", rarity: "Rare", price: "7.5K$", income_per_second: "55$", description: "Viral Sahur unit (lower-tier version)." },
    { name: "Tric Trac Baraboom", rarity: "Rare", price: "9K$", income_per_second: "65$", description: "High-end Rare tier." },
    { name: "Frogo Elfo", rarity: "Rare", price: "9.2K$", income_per_second: "67$", description: "A rare frog-elf hybrid." },
    { name: "Pipi Avocado", rarity: "Rare", price: "9.5K$", income_per_second: "70$", description: "Highest-end Rare tier." },
    { name: "Pomodoro Volante", rarity: "Rare", price: "8K$", income_per_second: "60$", description: "A flying tomato Brainrot." },
    { name: "Tartaruga Veloce", rarity: "Rare", price: "3K$", income_per_second: "25$", description: "A surprisingly quick turtle unit." },
    { name: "Lama Gentile", rarity: "Rare", price: "6K$", income_per_second: "45$", description: "A gentle llama unit." },
    { name: "Delfino Saltatore", rarity: "Rare", price: "8.5K$", income_per_second: "62$", description: "A jumping dolphin." },

    // --- Epic Tier (Rarities: $10K to $45K | Income: 75/s to 300/s) ---
    { name: "Cappuccino Assassino", rarity: "Epic", price: "10K$", income_per_second: "75$", description: "The ninja Brainrot." },
    { name: "Brr Brr Patapim", rarity: "Epic", price: "15K$", income_per_second: "100$", description: "A stable mid-tier earner." },
    { name: "Patata Ciclopica", rarity: "Epic", price: "12K$", income_per_second: "90$", description: "A cyclops potato." },
    { name: "Cactus Solare", rarity: "Epic", price: "14K$", income_per_second: "110$", description: "A sun-powered cactus." },
    { name: "Bambini Crostini", rarity: "Epic", price: "22.5K$", income_per_second: "130$", description: "A flaky, buttery creature." },
    { name: "Trulimero Trulicina", rarity: "Epic", price: "20K$", income_per_second: "125$", description: "A strong Epic unit." },
    { name: "Bananita Dolphinita", rarity: "Epic", price: "25K$", income_per_second: "150$", description: "A banana-dolphin hybrid." },
    { name: "Perochello Lemonchello", rarity: "Epic", price: "27.5K$", income_per_second: "160$", description: "A lemon-themed Epic." },
    { name: "Brri Brri Bicus Dicus Bombicus", rarity: "Epic", price: "30K$", income_per_second: "175$", description: "Longest name, decent income." },
    { name: "Avocadini Guffo", rarity: "Epic", price: "35K$", income_per_second: "225$", description: "Avocado-themed Epic." },
    { name: "Salamino Penguino", rarity: "Epic", price: "40K$", income_per_second: "250$", description: "One of the best Epic Brainrots." },
    { name: "Penguino Cocosino", rarity: "Epic", price: "45K$", income_per_second: "300$", description: "A coconut-penguin hybrid." },
    { name: "Avocadini Antilopini", rarity: "Epic", price: "17.5K$", income_per_second: "115$", description: "Avocado-Antelope hybrid." },
    { name: "Rana Boccacce", rarity: "Epic", price: "32K$", income_per_second: "200$", description: "A large-mouthed frog." },

    // --- Legendary Tier (Rarities: $35K to $400K | Income: 200/s to 1.7K/s) ---
    { name: "Burbaloni Loliloli", rarity: "Legendary", price: "35K$", income_per_second: "200$", description: "Lower-cost Legendary." },
    { name: "Chimpanzini Bananini", rarity: "Legendary", price: "50K$", income_per_second: "300$", description: "Chimpanzee with a banana body." },
    { name: "Pesce Spada Turbo", rarity: "Legendary", price: "60K$", income_per_second: "350$", description: "A turbo-charged swordfish." },
    { name: "Pollo Pollo Polli", rarity: "Legendary", price: "75K$", income_per_second: "450$", description: "Three chicken heads." },
    { name: "Ciliegia Volante", rarity: "Legendary", price: "80K$", income_per_second: "480$", description: "A flying cherry unit." },
    { name: "Ballerina Cappuccina", rarity: "Legendary", price: "100K$", income_per_second: "500$", description: "The famous ballerina." },
    { name: "Ananas Missile", rarity: "Legendary", price: "120K$", income_per_second: "550$", description: "A pineapple missile." },
    { name: "Lionel Cactuseli", rarity: "Legendary", price: "175K$", income_per_second: "650$", description: "High-performing Legendary." },
    { name: "Pinguini Vapore", rarity: "Legendary", price: "200K$", income_per_second: "800$", description: "A penguin machine Legendary." },
    { name: "Blueberrini Octopussini", rarity: "Legendary", price: "250K$", income_per_second: "1K$", description: "Top regular Legendary earner." },
    { name: "Sigma Boy", rarity: "Legendary", price: "325K$", income_per_second: "1.3K$", description: "The iconic Sigma unit." },
    { name: "Signore Carapace", rarity: "Legendary", price: "340K$", income_per_second: "1.5K$", description: "A powerful carapace-themed unit." },
    { name: "Tirilikalika Tirilikalako", rarity: "Legendary", price: "400K$", income_per_second: "1.7K$", description: "A unit known for its long, unique name." },

    // --- Mythic Tier (Rarities: $350K to $5M | Income: 1.4K/s to 16K/s) ---
    { name: "Frigo Camelo", rarity: "Mythic", price: "350K$", income_per_second: "1.4K$", description: "The refrigerator-camel hybrid." },
    { name: "Gatto Robotico", rarity: "Mythic", price: "600K$", income_per_second: "3K$", description: "A robotic cat unit." },
    { name: "Orangutini Ananasini", rarity: "Mythic", price: "400K$", income_per_second: "1.7K$", description: "Orangutan-Pineapple hybrid." },
    { name: "Rhino Toasterino", rarity: "Mythic", price: "450K$", income_per_second: "2.1K$", description: "Rhino combined with a toaster." },
    { name: "Bombardiro Crocodillo", rarity: "Mythic", price: "500K$", income_per_second: "2.5K$", description: "Crocodile head and bomber plane body." },
    { name: "Tigre Jet", rarity: "Mythic", price: "750K$", income_per_second: "4K$", description: "A tiger with jet boosters." },
    { name: "Bombombini Gusini", rarity: "Mythic", price: "1M$", income_per_second: "5K$", description: "A goose with fighter jet wings." },
    { name: "Panda Elettrico", rarity: "Mythic", price: "2M$", income_per_second: "6K$", description: "An electric panda." },
    { name: "Cavallo Virtuoso", rarity: "Mythic", price: "2.5M$", income_per_second: "7.5K$", description: "High-end Mythic earner." },
    { name: "Gorillo Watermellondrillo", rarity: "Mythic", price: "3M$", income_per_second: "8K$", description: "Gorilla-Watermelon-Crocodile combination." },
    { name: "Polpo Spaziale", rarity: "Mythic", price: "3.5M$", income_per_second: "8.5K$", description: "A space octopus." },
    { name: "Ganganzelli Trulala", rarity: "Mythic", price: "4M$", income_per_second: "9K$", description: "Best regular Mythic unit." },
    { name: "Los Noobinis", rarity: "Mythic", price: "4.3M$", income_per_second: "12.5K$", description: "A group of noobs." },
    { name: "Elefanto Frigo", rarity: "Mythic", price: "4.5M$", income_per_second: "14K$", description: "The refrigerator-elephant hybrid." },
    { name: "Cacto Bombardiro", rarity: "Mythic", price: "4.7M$", income_per_second: "15K$", description: "Cactus bomber unit." },
    { name: "Llama Volante", rarity: "Mythic", price: "5M$", income_per_second: "16K$", description: "A flying llama." },

    // --- Brainrot God Tier (Rarities: $12.5M to $65M | Income: 55K/s to 295K/s) ---
    { name: "Gattatino Neonino", rarity: "Brainrot God", price: "12.5M$", income_per_second: "55K$", description: "A highly recommended early God-tier unit." },
    { name: "Coccodrillo Laser", rarity: "Brainrot God", price: "15M$", income_per_second: "65K$", description: "A laser-equipped crocodile." },
    { name: "Alessio (Admin Lucky)", rarity: "Brainrot God", price: "17.5M$", income_per_second: "85K$", description: "Admin Lucky Block drop." },
    { name: "Tipi Topi Taco", rarity: "Brainrot God", price: "20M$", income_per_second: "75K$", description: "A reliable God-tier unit." },
    { name: "Extinct Ballerina", rarity: "Brainrot God", price: "23.5M$", income_per_second: "125K$", description: "A highly valued 'Extinct' unit." },
    { name: "Bulbito Bandito Traktorito (Lucky)", rarity: "Brainrot God", price: "25M$", income_per_second: "205K$", description: "A powerful Lucky Block God unit." },
    { name: "Trenostruzzo Turbo 3000", rarity: "Brainrot God", price: "25M$", income_per_second: "150K$", description: "An ostrich-train hybrid." },
    { name: "Fenicottero Tsunami", rarity: "Brainrot God", price: "28M$", income_per_second: "140K$", description: "A flamingo that causes tidal waves." },
    { name: "Trippi Troppi Troppa Trippa", rarity: "Brainrot God", price: "30M$", income_per_second: "175K$", description: "A massive combination unit." },
    { name: "Capi Taco", rarity: "Brainrot God", price: "31M$", income_per_second: "155K$", description: "A strong taco-themed God unit." },
    { name: "Gattito Tacoto", rarity: "Brainrot God", price: "32.5M$", income_per_second: "165K$", description: "A cat-taco hybrid." },
    { name: "Squalo Teleportatore", rarity: "Brainrot God", price: "35M$", income_per_second: "190K$", description: "A teleporting shark." },
    { name: "Ballerino Lololo", rarity: "Brainrot God", price: "35M$", income_per_second: "200K$", description: "A legendary dancer." },
    { name: "Los Tungtungtungcitos", rarity: "Brainrot God", price: "37.5M$", income_per_second: "210K$", description: "A smaller group of the famous unit." },
    { name: "Pakrahmatmamat", rarity: "Brainrot God", price: "37.5M$", income_per_second: "215K$", description: "One of the best regular God units." },
    { name: "Piccione Macchina", rarity: "Brainrot God", price: "40M$", income_per_second: "225K$", description: "A powerful Pigeon Machine." },
    { name: "Brr es Teh Patipum", rarity: "Brainrot God", price: "40M$", income_per_second: "225K$", description: "A variation of the Epic unit." },
    { name: "Tractoro Dinosauro", rarity: "Brainrot God", price: "42.5M$", income_per_second: "230K$", description: "Dinosaur-tractor hybrid." },
    { name: "Los Bombinitos", rarity: "Brainrot God", price: "42.5M$", income_per_second: "220K$", description: "A group of small bombers." },
    { name: "Corn Corn Corn Sahur", rarity: "Brainrot God", price: "45M$", income_per_second: "240K$", description: "Sahur-themed God unit." },
    { name: "Tartaruga Cisterna", rarity: "Brainrot God", price: "45M$", income_per_second: "250K$", description: "A turtle tank God unit." },
    { name: "Los Tipi Tacos", rarity: "Brainrot God", price: "46M$", income_per_second: "260K$", description: "A popular food-themed God unit." },
    { name: "Mastodontico Telepiedone", rarity: "Brainrot God", price: "47.5M$", income_per_second: "275K$", description: "Top-end God unit from the Lucky Block." },
    { name: "Anpali Babel", rarity: "Brainrot God", price: "48M$", income_per_second: "280K$", description: "A strong God-tier unit." },
    { name: "Alieno Bombardiero", rarity: "Brainrot God", price: "55M$", income_per_second: "280K$", description: "An alien bomber unit." },
    { name: "Belula Beluga", rarity: "Brainrot God", price: "60M$", income_per_second: "290K$", description: "High-end Brainrot God." },
    { name: "Pop Pop Pop Sahur (Lucky)", rarity: "Brainrot God", price: "65M$", income_per_second: "295K$", description: "Highest income Brainrot God from Lucky Block." },

    // --- Secret Tier (Rarities: $50M to $200B | Income: 250K/s to 200M/s) ---
    { name: "La Vacca Saturno Saturnita", rarity: "Secret", price: "50M$", income_per_second: "250K$", description: "Cheapest Secret, good entry point." },
    { name: "Bisonte Giuppitere", rarity: "Secret", price: "75M$", income_per_second: "300K$", description: "A Jupiter bison Secret." },
    { name: "Blackhole Goat", rarity: "Secret", price: "75M$", income_per_second: "400K$", description: "A powerful Secret earner." },
    { name: "Agarrini La Palini", rarity: "Secret", price: "80M$", income_per_second: "425K$", description: "A strong Secret earner." },
    { name: "Sammyni Spyderini", rarity: "Secret", price: "100M$", income_per_second: "300K$", description: "Developer-themed Secret unit." },
    { name: "Trenostruzzo Turbo 4000", rarity: "Secret", price: "100M$", income_per_second: "310K$", description: "Upgrade of the God-tier train ostrich." },
    { name: "Los Matteos", rarity: "Secret", price: "100M$", income_per_second: "300K$", description: "A group of popular characters." },
    { name: "La Cucaracha", rarity: "Secret", price: "110M$", income_per_second: "475K$", description: "The cheapest Secret Brainrot." },
    { name: "Extinct Tralalero", rarity: "Secret", price: "125M$", income_per_second: "450K$", description: "A valuable extinct unit." },
    { name: "Fragola la la la", rarity: "Secret", price: "125M$", income_per_second: "450K$", description: "A strawberry-themed Secret." },
    { name: "Los Tralaleritos", rarity: "Secret", price: "150M$", income_per_second: "500K$", description: "Male group of Tralalas." },
    { name: "Las Tralaleritas", rarity: "Secret", price: "150M$", income_per_second: "650K$", description: "Female group of Tralalas." },
    { name: "Las Vaquitas Saturnitas", rarity: "Secret", price: "160M$", income_per_second: "750K$", description: "Highest-value regular Secret unit." },
    { name: "Job Job Job Sahur", rarity: "Secret", price: "175M$", income_per_second: "700K$", description: "The highly coveted Sahur unit." },
    { name: "Los Spyderinis", rarity: "Secret", price: "250M$", income_per_second: "450K$", description: "A group of Spyder-themed units." },
    { name: "Tung Tung Tung Sahur (REMOVED/RETURNED)", rarity: "Secret", price: "500M$", income_per_second: "1.5M$", description: "Now Secret, obtainable via Coffin or Stealing. **(Corrected Rarity)**" },
    { name: "Chicleteira Bicicleteira", rarity: "Secret", price: "750M$", income_per_second: "3.5M$", description: "Gum-themed Secret on a bike." },
    { name: "La Grande Combinassion", rarity: "Secret", price: "1B$", income_per_second: "10M$", description: "Best entry point into billion-cost Secret rarity." },
    { name: "Los Combinasionas", rarity: "Secret", price: "2B$", income_per_second: "15M$", description: "A powerful combination unit." },
    { name: "Nuclearo Dinossauro", rarity: "Secret", price: "2.5B$", income_per_second: "15M$", description: "A popular, stable Secret earner." },
    { name: "Tralaledon", rarity: "Secret", price: "3B$", income_per_second: "27.5M$", description: "One of the best mid-billion Secrets." },
    { name: "La Jolly Grande (Winter Hour Event)", rarity: "Secret", price: "3.5B$", income_per_second: "30M$", description: "Limited Winter Hour event unit." },
    { name: "Los Tacoritas", rarity: "Secret", price: "4B$", income_per_second: "32M$", description: "Outstanding efficiency for its price." },
    { name: "Ketupat Kepat", rarity: "Secret", price: "5B$", income_per_second: "35M$", description: "A rare food-themed Secret." },
    { name: "Garama and Madundung", rarity: "Secret", price: "10B$", income_per_second: "50M$", description: "A top-tier earning unit." },
    { name: "Spaghetti Tualetti (Lucky)", rarity: "Secret", price: "15B$", income_per_second: "60M$", description: "Obtainable from the Secret Lucky Block." },
    { name: "Cooki and Milki (Santa's Fuse)", rarity: "Secret", price: "100B$", income_per_second: "155M$", description: "Obtained from the Santa's Fuse Machine." },
    { name: "Dragon Cannelloni", rarity: "Secret", price: "200B$", income_per_second: "200M$", description: "One of the most efficient money printers in the game." },

    // --- OG Tier (Ultra-Exclusive) ---
    { name: "Meowl", rarity: "OG", price: "350B$", income_per_second: "325M$", description: "An original, extremely rare unit." },
    { name: "Strawberry Elephant", rarity: "OG", price: "500B$", income_per_second: "400M$", description: "The rarest and most powerful Brainrot in the game (highest static income)." },
];

// 2. RENDERING LOGIC
const renderBrainrots = (data) => {
    const brainrotListContainer = document.getElementById('brainrot-list'); 
    if (!brainrotListContainer) {
        console.error("The element with ID 'brainrot-list' was not found in index.html. Brainrots cannot be displayed.");
        return;
    }

    // Clear existing content
    brainrotListContainer.innerHTML = '';

    data.forEach(brainrot => {
        const card = document.createElement('div');
        // Adds classes for styling and filtering
        card.classList.add('brainrot-card', brainrot.rarity.toLowerCase().replace(/ /g, '')); 
        
        // Structure that displays all the details
        card.innerHTML = `
            <h3>${brainrot.name}</h3>
            <p class="rarity">Rarity: <strong>${brainrot.rarity}</strong></p>
            <p>Buy Price: ${brainrot.price}</p>
            <p>Income: <strong>${brainrot.income_per_second} per sec</strong></p>
            <p>Description: ${brainrot.description}</p>
        `;
        
        brainrotListContainer.appendChild(card);
    });
};

// 3. FILTERING LOGIC
window.filterBrainrots = (rarity) => {
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-buttons button[onclick="filterBrainrots('${rarity}')"]`).classList.add('active');

    if (rarity === 'all') {
        renderBrainrots(brainrots);
    } else {
        const filteredList = brainrots.filter(b => b.rarity.toLowerCase().replace(/ /g, '') === rarity);
        renderBrainrots(filteredList);
    }
}

// Initial render when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderBrainrots(brainrots);
});
