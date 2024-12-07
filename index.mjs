const AWS = require('aws-sdk');

// Configura el cliente de SQS (opcional si ya está configurado en la Lambda)
const sqs = new AWS.SQS();

exports.handler = async (event) => {
    try {
        // Iterar sobre los mensajes recibidos de SQS
        for (const record of event.Records) {
            // El cuerpo del mensaje está en JSON
            const messageBody = JSON.parse(record.body);

            console.log("Mensaje recibido de SQS:", messageBody);

            // Procesa el mensaje (ejemplo: imprime o ejecuta lógica adicional)
            await processMessage(messageBody);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Mensajes procesados exitosamente" })
        };
    } catch (error) {
        console.error("Error procesando los mensajes:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error procesando los mensajes", error })
        };
    }
};

// Función para manejar el procesamiento del mensaje
async function processMessage(message) {
    // Agrega aquí la lógica de negocio personalizada
    // Ejemplo: Enviar una notificación por correo, guardar en una base de datos, etc.
    console.log("Procesando el mensaje:", message);
    // Simulación de procesamiento
    await new Promise((resolve) => setTimeout(resolve, 100));
}
