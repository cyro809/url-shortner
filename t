[1mdiff --git a/Dockerfile b/Dockerfile[m
[1mindex 5044601..c88662b 100644[m
[1m--- a/Dockerfile[m
[1m+++ b/Dockerfile[m
[36m@@ -3,9 +3,10 @@[m [mWORKDIR /app[m
 [m
 RUN npm install nodemon -g[m
 [m
[31m-COPY package.json package.json[m
[31m-RUN npm install -g[m
[31m-COPY . .[m
[32m+[m[32mCOPY package.json /app[m
[32m+[m[32mRUN npm install[m
[32m+[m
[32m+[m[32mCOPY . /app[m
 EXPOSE 3000[m
 [m
 CMD ["npm", "start"][m
\ No newline at end of file[m
[1mdiff --git a/docker-compose.yaml b/docker-compose.yaml[m
[1mindex ebcbaa0..8fd6e01 100644[m
[1m--- a/docker-compose.yaml[m
[1m+++ b/docker-compose.yaml[m
[36m@@ -16,7 +16,7 @@[m [mservices:[m
       - '3000:3000'[m
 [m
   db:[m
[31m-    image: 'mongo'[m
[32m+[m[32m    image: 'mongo:4.4.6'[m
     ports:[m
       - '27017:27017'[m
     volumes:[m
