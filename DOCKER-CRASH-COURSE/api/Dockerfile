FROM node:17-alpine


# watch files for changes and when it detects changes
RUN npm install -g nodemon

# when we commmands on image in future, do it from this directory
WORKDIR /app

COPY package.json .

#  run at built-time
RUN npm install

# source files directory
# COPY . /app /app/
COPY . .


# port owned by container not our computer
# what port is exposed by the container
EXPOSE 4000

#  CMD - run at run-time
# CMD ["node", "app.js"]
CMD ["node", "run", "dev"]