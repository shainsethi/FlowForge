# Deployment Guide - FlowForge

This guide explains how to deploy the FlowForge application.

## Prerequisites
- A [Render](https://render.com/) account (for Backend)
- A [Vercel](https://vercel.com/) account (for Frontend)
- Your project pushed to a GitHub repository

## 1. Deploy Backend (Render)

1. **Create a new Web Service**: Log in to Render and click `New` -> `Web Service`.
2. **Connect Repository**: Select your FlowForge repository.
3. **Configure Service**:
   - **Name**: `flowforge-backend` (or your choice)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r backend/requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: `backend`
4. **Environment Variables**:
   - Add any necessary variables if required.
5. **Deploy**: Click `Create Web Service`.

> [!NOTE]
> Once deployed, copy your backend URL (e.g., `https://flowforge-backend.onrender.com`).

## 2. Deploy Frontend (Vercel)

1. **Create a new Project**: Log in to Vercel and click `Add New` -> `Project`.
2. **Connect Repository**: Select your FlowForge repository.
3. **Configure Project**:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. **Environment Variables**:
   - Add `REACT_APP_API_URL` and set it to your deployed backend URL.
5. **Deploy**: Click `Deploy`.

## 3. Verify
1. Open your Vercel URL.
2. Build a pipeline and click **Submit**.
3. You should see an alert with the pipeline validation results.
