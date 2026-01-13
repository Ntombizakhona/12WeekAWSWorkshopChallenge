// Configuration
const CONFIG = {
    API_BASE_URL: 'https://ifq8ef5l8e.execute-api.us-east-1.amazonaws.com/prod', // Replace with your API Gateway URL
    USER_ID: 'default-user'
};

// DOM Elements
const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasksContainer');
const refreshButton = document.getElementById('refreshTasks');
const statusFilter = document.getElementById('statusFilter');
const priorityFilter = document.getElementById('priorityFilter');
const notification = document.getElementById('notification');

// State Management
let tasks = [];
let filteredTasks = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if API URL is configured
    if (CONFIG.API_BASE_URL === 'YOUR_API_GATEWAY_URL_HERE') {
        showNotification('Please configure your API Gateway URL in script.js', 'error');
        return;
    }
    
    // Set up event listeners
    taskForm.addEventListener('submit', handleTaskSubmit);
    refreshButton.addEventListener('click', loadTasks);
    statusFilter.addEventListener('change', applyFilters);
    priorityFilter.addEventListener('change', applyFilters);
    
    // Load initial tasks
    loadTasks();
}

// API Functions
async function apiRequest(endpoint, options = {}) {
    const url = `${CONFIG.API_BASE_URL}${endpoint}`;
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    const requestOptions = { ...defaultOptions, ...options };
    
    try {
        const response = await fetch(url, requestOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

async function loadTasks() {
    try {
        showLoading();
        const response = await apiRequest(`/tasks/${CONFIG.USER_ID}`);
        tasks = response.tasks || [];
        applyFilters();
        showNotification('Tasks loaded successfully', 'success');
    } catch (error) {
        console.error('Failed to load tasks:', error);
        showNotification('Failed to load tasks. Please check your API configuration.', 'error');
        showEmptyState('Failed to load tasks');
    }
}

async function createTask(taskData) {
    try {
        const response = await apiRequest(`/tasks/${CONFIG.USER_ID}`, {
            method: 'POST',
            body: JSON.stringify(taskData)
        });
        
        tasks.unshift(response.task);
        applyFilters();
        showNotification('Task created successfully', 'success');
        return response.task;
    } catch (error) {
        console.error('Failed to create task:', error);
        showNotification('Failed to create task', 'error');
        throw error;
    }
}

async function updateTaskStatus(taskId, status) {
    try {
        const response = await apiRequest(`/tasks/${CONFIG.USER_ID}/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify({ status })
        });
        
        const taskIndex = tasks.findIndex(task => task.taskId === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex] = response.task;
            applyFilters();
        }
        
        showNotification('Task updated successfully', 'success');
        return response.task;
    } catch (error) {
        console.error('Failed to update task:', error);
        showNotification('Failed to update task', 'error');
        throw error;
    }
}

async function deleteTask(taskId) {
    try {
        await apiRequest(`/tasks/${CONFIG.USER_ID}/${taskId}`, {
            method: 'DELETE'
        });
        
        tasks = tasks.filter(task => task.taskId !== taskId);
        applyFilters();
        showNotification('Task deleted successfully', 'success');
    } catch (error) {
        console.error('Failed to delete task:', error);
        showNotification('Failed to delete task', 'error');
        throw error;
    }
}

// Event Handlers
async function handleTaskSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(taskForm);
    const taskData = {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
        priority: formData.get('priority'),
        dueDate: formData.get('dueDate') || null,
        tags: formData.get('tags') ? formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag) : []
    };
    
    if (!taskData.title) {
        showNotification('Task title is required', 'error');
        return;
    }
    
    try {
        await createTask(taskData);
        taskForm.reset();
    } catch (error) {
        // Error already handled in createTask
    }
}

function applyFilters() {
    const statusFilterValue = statusFilter.value;
    const priorityFilterValue = priorityFilter.value;
    
    filteredTasks = tasks.filter(task => {
        const statusMatch = !statusFilterValue || task.status === statusFilterValue;
        const priorityMatch = !priorityFilterValue || task.priority === priorityFilterValue;
        return statusMatch && priorityMatch;
    });
    
    renderTasks();
}

// UI Rendering Functions
function renderTasks() {
    if (filteredTasks.length === 0) {
        if (tasks.length === 0) {
            showEmptyState('No tasks yet. Create your first task above!');
        } else {
            showEmptyState('No tasks match your current filters.');
        }
        return;
    }
    
    const tasksHTML = filteredTasks.map(task => createTaskCard(task)).join('');
    tasksContainer.innerHTML = tasksHTML;
}

function createTaskCard(task) {
    const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date';
    const createdDate = new Date(task.createdAt).toLocaleDateString();
    const tags = task.tags && task.tags.length > 0 
        ? task.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')
        : '';
    
    const statusClass = `status-${task.status.toLowerCase().replace('_', '-')}`;
    const priorityClass = `priority-${task.priority.toLowerCase()}`;
    
    return `
        <div class="task-card ${statusClass}">
            <div class="task-header">
                <h3 class="task-title">${escapeHtml(task.title)}</h3>
                <span class="task-priority ${priorityClass}">${task.priority}</span>
            </div>
            
            ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ''}
            
            <div class="task-meta">
                <span>Due: ${dueDate}</span>
                <span>Created: ${createdDate}</span>
            </div>
            
            ${tags ? `<div class="task-tags">${tags}</div>` : ''}
            
            <div class="task-actions">
                ${task.status !== 'COMPLETED' ? `
                    <button class="btn btn-success" onclick="updateStatus('${task.taskId}', 'COMPLETED')">
                        Complete
                    </button>
                ` : ''}
                
                ${task.status === 'PENDING' ? `
                    <button class="btn btn-secondary" onclick="updateStatus('${task.taskId}', 'IN_PROGRESS')">
                        Start
                    </button>
                ` : ''}
                
                ${task.status === 'IN_PROGRESS' ? `
                    <button class="btn btn-secondary" onclick="updateStatus('${task.taskId}', 'PENDING')">
                        Pause
                    </button>
                ` : ''}
                
                <button class="btn btn-danger" onclick="confirmDeleteTask('${task.taskId}')">
                    Delete
                </button>
            </div>
        </div>
    `;
}

function showLoading() {
    tasksContainer.innerHTML = '<div class="loading">Loading tasks...</div>';
}

function showEmptyState(message) {
    tasksContainer.innerHTML = `
        <div class="empty-state">
            <h3>No Tasks Found</h3>
            <p>${message}</p>
        </div>
    `;
}

// Global Functions (called from HTML)
window.updateStatus = async function(taskId, status) {
    try {
        await updateTaskStatus(taskId, status);
    } catch (error) {
        // Error already handled in updateTaskStatus
    }
};

window.confirmDeleteTask = function(taskId) {
    if (confirm('Are you sure you want to delete this task? This action cannot be undone.')) {
        deleteTask(taskId);
    }
};

// Utility Functions
function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.remove('hidden');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 300);
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Error Handling
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    showNotification('An unexpected error occurred', 'error');
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    showNotification('An unexpected error occurred', 'error');
});
