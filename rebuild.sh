#!/bin/bash

# Shutdown the server
docker-compose down

# Remove the old image
docker rm image frontend
docker rm image backend

# Build frontend image
docker build -t frontend ./frontend
# Build backend image
docker build -t backend ./backend

# Start the server
docker-compose up -d
