# Voorbeeldexamen

In deze repository vind je een eenvoudige implementatie van een chatbox. 

Stappen:
1. Connecteer naar je virtuele machine
2. Check deze repository uit
3. Zorg dat Traefik werkt en SSL/TLS certificaten via Letsencrypt kan genereren. Gebruik traefik:v2.10 als image
4. Maak een docker compose file en host de oplossing onder een van je dns adressen
  * Expose de frontend map als nginx container op de root. Gebruik nginx als image. Heb je hier een aparte Dockerfile voor nodig?
  * Expose de api onder de subfolder /api. Gebruik node:20-bullseye als image.
  * Maak een MongoDb container. Gebruik mongo:5.0.6 als image.
  * Zorg dat het bestand mongo-init.js bij het aanmaken van de MongoDb container wordt uitgevoerd. Tip: zie hiervoor naar de mongo pagina op GitHub.
  * Schrijf de mongo data naar een named volume mongo-data. 
  * Voeg traefik labels toe en zorg voor TLS encryption

Environment variabelen voor de API:
  - MONGO_USER=admin
  - MONGO_PWD=S3cret
  - MONGO_URL=mongodb

Maak een commit voor elke stap. Pushen naar de origin hoef je niet te doen.
 