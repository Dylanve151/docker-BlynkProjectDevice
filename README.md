# docker-BlynkProjectDevice
deploy for raspiberry:
```
docker run --name="BlynkProjectDevice" --restart="always" --device /dev/gpiomem  dylanve115/blynkprojectdevice:raspi
```
## Environment variables:
### Required:
BLYNKSERVER_IP = Blynk Server IP

BLYNKSERVER_PORT = Blynk Server Port

BLYNKSERVER_TOKEN = Blynk project auth token

