const { Calculator } = require('slash-calculator');

module.exports = {

    name: 'calculadora',
    description: '🔢 Utiliza una calculadora para ejecutar operaciones matemáticas básicas.',
    options: [],

    run: async (client, interaction) => {

        await Calculator({
            interaction: interaction,
            embed: {
                title: 'Calculadora',
                color: 'RANDOM',
                footer: ';)',
                timestamp: true
            },
            disabledQuery: 'La calculadora está desactivada!',
            invalidQuery: 'La ecuación proporcionada no es válida!',
            othersMessage: 'Solo <@{{author}}> puede usar los botones!'
        });

    }

}