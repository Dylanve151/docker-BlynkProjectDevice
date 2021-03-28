# docker-BlynkProjectDevice
deploy for Raspberry pi:
```
docker run --name="BlynkProjectDevice" --restart="always" --volume /sys/class/gpio:/sys/class/gpio --volume /sys/devices/platform/soc/:/sys/devices/platform/soc/ dylanve115/blynkprojectdevice:raspi
```
## Environment variables:
### Required:
BLYNKSERVER_IP = Blynk Server IP

BLYNKSERVER_PORT = Blynk Server Port

BLYNKSERVER_TOKEN = Blynk project auth token

