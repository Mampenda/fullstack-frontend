FROM eclipse-temurin:21
RUN mkdir /opt/app
COPY path/tp/jarfile.jar /opt/app
CMD ["java", "-jar", "/opt/app/japp.jar"]