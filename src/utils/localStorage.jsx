// localStorage.clear()

const employees = [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "employee1@example.com",
      "password": "123@dom",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Prepare Report",
          "description": "Compile the weekly sales report.",
          "date": "2024-11-15",
          "category": "Reports"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Client Meeting",
          "description": "Discuss project milestones with the client.",
          "date": "2024-11-16",
          "category": "Meetings"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Email Follow-up",
          "description": "Send follow-up emails to clients.",
          "date": "2024-11-10",
          "category": "Emails"
        }
      ],
      "tasksCount": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Ishaan",
      "email": "employee2@example.com",
      "password": "123@dom",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Update Inventory",
          "description": "Check and update the inventory list.",
          "date": "2024-11-15",
          "category": "Inventory"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Prepare Invoice",
          "description": "Create invoices for last month's sales.",
          "date": "2024-11-12",
          "category": "Billing"
        }
      ],
      "tasksCount": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstName": "Vihaan",
      "email": "employee3@example.com",
      "password": "123@dom",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Data Backup",
          "description": "Back up the project files.",
          "date": "2024-11-11",
          "category": "Maintenance"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Social Media Update",
          "description": "Post a project update on social media.",
          "date": "2024-11-15",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Client Follow-up",
          "description": "Call clients for project feedback.",
          "date": "2024-11-16",
          "category": "Client Relations"
        }
      ],
      "tasksCount": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 4,
      "firstName": "Vivaan",
      "email": "employee4@example.com",
      "password": "123@dom",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Research Market Trends",
          "description": "Analyze current market trends for our products.",
          "date": "2024-11-17",
          "category": "Research"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Complete Training",
          "description": "Finish the required training modules.",
          "date": "2024-11-13",
          "category": "Training"
        }
      ],
      "tasksCount": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstName": "Aditya",
      "email": "employee5@example.com",
      "password": "123@dom",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Client Presentation",
          "description": "Prepare presentation slides for the client.",
          "date": "2024-11-18",
          "category": "Presentations"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Submit Timesheet",
          "description": "Submit last month's timesheet.",
          "date": "2024-11-10",
          "category": "Administration"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Weekly Team Meeting",
          "description": "Discuss project progress with the team.",
          "date": "2024-11-19",
          "category": "Meetings"
        }
      ],
      "tasksCount": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 1
      }
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "firstName": "Rajesh",
      "email": "admin@example.com",
      "password": "123@dom"
    }
  ];
  
  



  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{

    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}

  }