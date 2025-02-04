# RecycleHub - Waste Collection Management App

## **Project Overview**
RecycleHub is a waste collection management application that connects individuals with authorized collectors. The system streamlines the recycling process and allows for requests, collection management, and reward points for individuals based on the type of recyclable materials.

---

## **Features**
- **User Authentication:** Simple registration and login for individuals; pre-registered collectors.
- **Collection Requests:** Create, modify, and delete requests for recyclable materials.
- **Collector Dashboard:** View and accept collection requests based on location.
- **Request Status Tracking:** Track request status (Pending, Occupied, In Progress, Completed, Rejected).
- **Points System:** Points awarded for validated recycling based on waste type.
- **Responsive Design:** Works on both desktop and mobile devices.

---

## **Technologies Used**
- **Frontend Framework:** Angular 17+ (Standalone Components)
- **State Management:** NgRx
- **UI Styling:** Tailwind CSS
- **Routing & Guards:** Angular Router, Route Guards
- **Data Persistence:** Local Storage
- **Reactive Forms:** For form handling and validation
- **Dependency Injection:** Service-based architecture

---

## **Project Structure**
```
src/
├── app/
│   ├── core/            # Core services and guards
│   ├── features/        # Feature modules like auth, dashboard, and collectors
│   ├── shared/          # Shared UI components
│   └── app-routing.ts   # Routing configuration
└── environments/        # Environment configurations
```