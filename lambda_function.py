import json

def lambda_handler(event, context):
    for record in event['Records']:
        # Procesar el mensaje recibido desde SQS
        message_body = json.loads(record['body'])
        print(f"Mensaje recibido: {message_body}")
        # Aquí puedes añadir lógica personalizada, como enviar emails o guardar en una base de datos
    return {"statusCode": 200, "body": "Mensajes procesados"}
