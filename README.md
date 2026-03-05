# Prescripto

Prescripto is a modern full-stack doctor appointment and healthcare management platform built for speed, convenience, and real-world admin workflows. Patients can browse doctors, book appointments, and manage profiles; admins can manage doctors, appointments, and users via a dedicated admin panel.

---

## Project Summary

- Purpose: Patient-facing booking app + admin dashboard for managing doctors, appointments, and users.
- Highlights: Secure authentication, image uploads, admin CRUD for doctors, appointment management, and payment-ready hooks.

This repository contains three apps in a single full-stack project:

- `backend/` — Express API and business logic
- `admin/` — React admin panel (manage doctors, appointments, dashboard)
- `frontend/` — React customer-facing app (browse doctors, book appointments)

---

## Quick Start

1. Clone the repo

```bash
git clone <repo-url>
cd prescripto-full-stack
```

2. Backend

```bash
cd backend
npm install
# create .env (see Environment Variables below)
npm run dev   # or `node server.js`
# Default: http://localhost:4000
```

3. Admin panel

```bash
cd admin
npm install
npm run dev
# Default: http://localhost:5174
```

4. Frontend (user)

```bash
cd frontend
npm install
npm run dev
# Default: http://localhost:5173
```

---

## Important Environment Variables

Create a `.env` file inside `backend/` (example keys shown — do NOT commit secrets to git):

- `CURRENCY` (e.g. "INR")
- `JWT_SECRET` (token signing secret)
- `ADMIN_EMAIL` (admin login email)
- `ADMIN_PASSWORD` (admin login password)
- `MONGODB_URI` (connection string)
- `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_SECRET_KEY`
- `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` (optional)
- `STRIPE_SECRET_KEY` (optional)

Example (DO NOT copy real secret keys into public repos):

```
CURRENCY="INR"
JWT_SECRET="your_jwt_secret"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="strongAdminPassword"
MONGODB_URI="mongodb+srv://user:pass@cluster..."
...
```

---

## Admin & Doctor Credentials

- Admin (default — check `backend/.env` in this repo):
  - Email: `malik@example.com`
  - Password: `malikjalihal123`

- Doctor accounts are created by Admin via the Admin Panel `Add Doctor` form. When creating a doctor, provide a valid email and password. Example doctor credential (sample):
  - Email: `dr.smith@example.com`
  - Password: `doctorPassword123`

Notes:

- There is no global default doctor account. Use the Admin panel to add doctors or register a doctor through a dedicated route if implemented.
- For production, change admin credentials and secure the `.env` file.

---

## File Structure (detailed)

prescripto-full-stack/

- backend/
  - config/
    - mongodb.js # MongoDB connection
    - cloudinary.js # Cloudinary setup
  - controllers/
    - adminController.js # Admin APIs (login, add doctor, all doctors, dashboard, delete, appointments)
    - doctorController.js # Doctor API (change availability, doctor actions)
    - userController.js # User APIs (register, login, profile, appointments)
  - middleware/
    - authAdmin.js # Admin auth middleware
    - authDoctor.js # Doctor auth middleware (if used)
    - authUser.js # User auth middleware
    - multer.js # File upload handling
  - models/
    - doctorModel.js # Doctor schema
    - userModel.js # User schema
    - appointmentModel.js # Appointment schema
  - routes/
    - adminRoute.js
    - doctorRoute.js
    - userRoute.js
  - server.js # Express entry point
  - package.json

- admin/
  - src/
    - pages/
      - Admin/
        - DoctorsList.jsx # Admin doctors list + Remove Doctor button
        - AddDoctor.jsx # Form to add doctor
      - Login.jsx
    - context/
      - AdminContext.jsx # Admin API helpers (getAllDoctors, changeAvailability, removeDoctor)
    - components/ # Reusable admin UI components
  - package.json

- frontend/
  - src/
    - pages/ # User-facing pages: Home, Doctors, Appointment, Login, Profile
    - components/ # Shared UI components
    - context/ # AppContext for user flows
  - package.json

---

## Key Features

User

- Signup / Login with JWT
- Browse doctor listings and profiles
- Book appointments (select date/time/slot)
- View & manage personal appointments

Admin

- Admin login with token-protected endpoints
- Add doctor (image upload handled by multer + Cloudinary)
- Toggle doctor availability
- Remove doctor (implemented via `POST /api/admin/delete-doctor`)
- View all appointments and cancel them (`POST /api/admin/cancel-appointment`)
- Dashboard metrics for doctors, patients, appointments

Security

- Passwords hashed with `bcrypt`
- JWT token-based authentication for protected routes
- Input validation using `validator`

---

## API Endpoints (select)

Base backend route: `http://localhost:4000/api`

Admin routes (`/api/admin`)

- `POST /login` — Admin login (body: { email, password })
- `POST /add-doctor` — Add doctor (multipart form; protected)
- `GET /all-doctors` — Get list of all doctors (protected)
- `POST /change-availability` — Toggle doctor availability (body: { docId })
- `POST /delete-doctor` — Delete a doctor (body: { doctorId })
- `GET /appointments` — Get all appointments (protected)
- `POST /cancel-appointment` — Cancel appointment (body: { appointmentId })

User routes (examples — check `backend/routes/userRoute.js` for exact paths):

- `POST /user/register` — Register user
- `POST /user/login` — Login user
- `GET /user/profile` — Get authenticated user profile
- `POST /appointment/book` — Book appointment (body depends on UI form)

---

## Appointments & Cancellation

- Booking: The frontend will send appointment details (doctorId, userId, date/time/slot) to the backend endpoint responsible for creating appointments.
- Cancellation: Admins can cancel appointments via `POST /api/admin/cancel-appointment` with `{ appointmentId }` in the body. The endpoint marks an appointment as cancelled.
- User cancellation: If implemented, users can cancel their own appointments via a protected route (check `userController` for available endpoints).

---

## Payments

Payment integrations are prepared but must be configured via `.env`:

- Stripe: Add `STRIPE_SECRET_KEY` (test keys recommended during development)
- Razorpay: Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` if using Razorpay

Notes:

- For Stripe, server-side code should create payment intents and pass client secret to frontend for secure checkout. Do not store secret keys in frontend code.
- For testing, use Stripe test keys and verify payments using the Stripe dashboard.

---

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Axios, React Router, React Toastify
- Admin Panel: React, Vite, Tailwind CSS, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, Multer, Cloudinary for image hosting
- Auth & Security: JWT, Bcrypt, Validator
- Payments: Stripe (recommended), Razorpay (optional)

Development tools: ESLint, Prettier (optional), PostCSS, Vite HMR

---

## Development Notes & Recommendations

- Keep secrets out of version control. Use `.env` and a secrets manager for production.
- Restart backend after changing routes or controllers.
- Ensure Cloudinary credentials are valid for image uploads to work.
- Admin routes expect an `aToken` header from admin login response to access protected endpoints.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m "Add: feature description"`
4. Push and open a pull request

Follow code style, add tests where appropriate, and document new endpoints.

---

## Contact

- Email: malikjalihal123@gmail.com
- GitHub: @Malik-Jalihal
