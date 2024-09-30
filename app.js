// Listas de pronombres, adjetivos y sustantivos
let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

// Lista de extensiones
let extensions = ['.com', '.net', '.us', '.io'];

// Lista de domain hacks
let domainHacks = ['.es', '.ly', '.to'];

// Generar combinaciones
for (let pronoun of pronouns) {
    for (let adj of adjectives) {
        for (let noun of nouns) {
            // Extensiones estándar
            for (let ext of extensions) {
                console.log(`${pronoun}${adj}${noun}${ext}`);
            }

            // Domain hacks
            for (let hack of domainHacks) {
                console.log(`${pronoun}${adj}${noun}${hack}`);
            }
        }
    }
}
