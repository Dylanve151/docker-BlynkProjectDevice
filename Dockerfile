FROM node
WORKDIR /root
RUN apt-get update && apt-get install -y \
  build-essential
RUN npm install -g npm onoff blynk-library
RUN npm link blynk-library
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
ENV BLYNKSERVER_IP 192.168.1.250
ENV BLYNKSERVER_PORT 8083
ENV BLYNKSERVER_TOKEN 
COPY connectproject.js .
RUN chmod 755 *.js
CMD [ "node /root/connectproject.js" ]
