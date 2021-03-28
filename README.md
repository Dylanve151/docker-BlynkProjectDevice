# docker-BlynkProjectDevice
deploy:
```
docker build --name="BlynkProjectDevice" --restart="always" --volume="/etc/localtime:/etc/localtime:ro"  dylanve115/blynkprojectdevice
```
## Environment variables:
### Required:
BLYNKSERVER_IP = Blynk Server IP

BLYNKSERVER_PORT = Blynk Server Port

BLYNKSERVER_TOKEN = Blynk project auth token

