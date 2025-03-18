let preparativos = [
    ["documentos al dia", true],
    ["reservas de hotel", false],
    ["transporte confirmado", true],
    ["seguro de viaje", true],
    ["dinero", false],
];

preparativos = preparativos.reduce((acc, [requisitos, value]) => {
    acc.push({ requisitos, value });
    return acc;
}, []);

class Trip {
    constructor() {
        this.preparativos = preparativos;
    }

    static async emualteApiResponse() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sucessRate = Math.random() > 0.2;
                if (!sucessRate) {
                    reject({ success: 404, data: [] });
                } else {
                    resolve({ success: 200, data: preparativos });
                }
            }, 2000);
        });
    }

    static readyToTravel({ success, data }) {
        if (success != 200) {
            throw new Error("No response valid");
        }

        // data.forEach(({ requisitos, value }) => {
        //     let msg = `${requisitos} ✔️`
        //     if (value) {
        //         console.log(msg);
        //     }
        // });

        data.filter(({ value }) => value).forEach(({ requisitos }) =>
            console.log(`${requisitos} ✔️`)
        );
    }

    static async addTravelTask({ requisitos, value = true }) {
        try {
            const response = await Trip.emualteApiResponse();
            response.data.push({ requisitos, value });

            response.data
                .filter(({ value }) => value)
                .forEach(({ requisitos }) => console.log(`${requisitos} ✔️`));
        } catch (e) {
            console.log({ error: e });
        }
    }
}

// Trip
//     .emualteApiResponse()
//     // .then(data => console.log(data))
//     // .then(response => Trip.readyToTravel(response))
//     .catch(error => console.error({ error }))

// Trip
//     .addTravelTask({ requisitos: "vacunas necesarias" })

/**
 * Segundo ejercicio
 */

class FoodOrder {
    prepararItem(nombre, tiempo) {
        return new Promise((resolve, reject) => {
            const initTime = performance.now();
            console.log(`Se arranca con el pedido ${nombre}: -> `);
            setTimeout(() => {
                let sucess = Math.random() < 0.1;
                const endTime = (performance.now() - initTime) / 1000;

                if (sucess) {
                    console.log(
                        `${nombre} listo. Tiempo de preparación: ${endTime.toFixed(
                            2
                        )} segundos`
                    );
                    resolve(`${nombre} listo.`);
                } else {
                    reject(`Error: No se pudo preparar ${nombre}.`);
                }
            }, tiempo * 1000);
        });
    }

    async prepararPedido() {
        const initTime = performance.now();
        try {
            console.log("Preparando pedido...");

            await Promise.all([
                this.prepararItem("Ensalada", 4),
                this.prepararItem("Hamburguesa", 8),
                this.prepararItem("Bebida", 2),
            ]);

            console.log("¡Pedido listo!");
        } catch (error) {
            console.error("Error en el pedido:", error);
        } finally {
            const totalTime = (performance.now() - initTime) / 1000;
            console.log(
                `Tiempo total de preparación del pedido: ${totalTime.toFixed(
                    2
                )} ms`
            );
        }
    }
}

new FoodOrder().prepararPedido();
