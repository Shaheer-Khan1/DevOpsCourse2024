# React App with Docker & Kubernetes

This project demonstrates how to containerize a React app using Docker and deploy it using Kubernetes.

## Prerequisites
- **Docker Desktop** (with Docker Compose)
- **kubectl** (Kubernetes CLI)
- **Kubernetes** (Docker Desktop or Minikube)

## Docker Setup

1. **Create a `Dockerfile`** in the root of your project:

    ```Dockerfile
    # Step 1: Build the app
    FROM node:18 AS build
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . ./
    RUN npm run build

    # Step 2: Serve the app using Nginx
    FROM nginx:stable-alpine
    COPY --from=build /app/dist /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    ```

2. **Create a `.dockerignore` file**:
    ```
    node_modules
    dist
    .dockerignore
    Dockerfile
    ```

## Running with Docker Compose

1. **Create a `docker-compose.yml` file**:

    ```yaml
    version: '3.8'
    services:
      react-app:
        build: .
        ports:
          - "3000:80"
    ```

2. **Run the app**:
    ```bash
    docker compose up
    ```

3. **Access the app** in your browser at [http://localhost:3000](http://localhost:3000).

## Kubernetes Setup

1. **Create a Kubernetes deployment and service** for the app:

    **deployment.yaml**:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: react-app
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: react-app
      template:
        metadata:
          labels:
            app: react-app
        spec:
          containers:
          - name: react-app
            image: react-app:latest
            ports:
            - containerPort: 80
    ```

    **service.yaml**:
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: react-app-service
    spec:
      selector:
        app: react-app
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
      type: LoadBalancer
    ```

2. **Apply the Kubernetes configuration**:
    ```bash
    kubectl apply -f deployment.yaml
    kubectl apply -f service.yaml
    ```

3. **Access the app** via the Kubernetes LoadBalancer IP or local port.

## Conclusion

- This setup demonstrates how to containerize a React app with Docker and deploy it on Kubernetes.
- You can now easily scale your app and manage it in a Kubernetes environment.
