# Pull base image.
FROM ubuntu:20.04
# Install.
RUN \
  apt-get update && \
  apt-get install -y curl netbase && \
  curl -sL https://deb.nodesource.com/setup_14.x | bash && \
  apt-get install --yes nodejs




# Add files.
WORKDIR /home

RUN curl -sL https://github.com/aviaviavi/curl-runnings/releases/download/0.14.0/curl-runnings-0.14.0.tar.gz | tar xvz

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8001
# Define default command.
ENTRYPOINT ["node", "index.js"]