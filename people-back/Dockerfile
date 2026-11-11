#etapa 1: compilacion /build
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline -B

COPY /src ./src

RUN mvn clean package -DskipTests

#etapa 2: empaquetado /run
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

COPY --from=build /app/target/*.jar /app.jar

EXPOSE 8080

#comando que se divide en partes para que al compilar la imagen vuelva a juntar las partes y no se ejecute el comando en el momento de la compilacion, sino al momento de ejecutar la imagen
ENTRYPOINT ["java","-jar","/app.jar"]