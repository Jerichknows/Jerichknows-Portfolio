# Jericho Radam Personal Website

A personal portfolio built with React JS, Tailwind CSS, Django, and AWS-ready deployment configuration.

## Local Frontend

```bash
cd frontend
npm install
npm run dev
```

The React app runs at `http://localhost:5173`.

## Local Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

The Django API exposes `http://localhost:8000/api/profile/`.

To connect React to Django locally, create `frontend/.env`:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

## AWS

The included `amplify.yml` can deploy the frontend to AWS Amplify. The Django API can be deployed separately to AWS Elastic Beanstalk, ECS, or App Runner, then connected by setting `VITE_API_BASE_URL` to the deployed API URL during the Amplify build.

## Personalize

Main profile details live in both `frontend/src/App.jsx` and `backend/api/views.py` so the site works with or without the Django API running locally.

Current contact details:

- Jericho Radam
- `jerichradam@gmail.com`
- `https://github.com/Jerichknows?tab=repositories`
