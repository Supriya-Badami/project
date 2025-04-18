// 1.
/*
    Weather Dashboard
    ======================================

    UI Components
    -------------
        1. Search Bar
            - Input field: Accepts city name
            - Button: Triggers API call using fetch

        2. Weather Display Card
            - City & Country
            - Date
            - Weather Details: temperature, condition, wind, humidity

        3. Feedback
            - Loading State: Shown while API call is pending
            - Error State: Shown when city is not found or request fails

    ==> NOTES
        - Use fetch() with async/await to call the weather API.

        - Handle possible errors using try...catch.

        - Use template literals to update the DOM dynamically.

        ->Keep all logic modular:
            - getWeatherData(city)
            - renderWeather(data)
            - showError(message)
            - toggleLoading(state)
*/





// 2.
/*
    Kanban Board
    ======================================

    UI Components
    ----------------
        1. Task Creation
            "Add New Task" Button → Triggers a modal or inline form
            Fields: Title, optional description

        2. Columns
            - To Do
            - In Progress
            - Done

        3. Task Cards
            - Display task title
            - Click or double-click to edit
            - Each card is draggable

        4. Drag & Drop Logic
            - Custom logic using:
            - dragstart, dragover, drop, dragleave events
            - Visual feedback (e.g. border highlight on hover)

        5. Modular JS Functions
            - addTask(column)
            - renderBoard()
            - enableDragAndDrop()
            - editTask(taskId)
            - saveToLocalStorage()

    ==> Optional Enhancements
        - Save board state to localStorage
        - Add priority tags (Low/Medium/High)
        - Add due dates

*/



