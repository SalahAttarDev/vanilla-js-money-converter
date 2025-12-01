function initNotificationContainer()  {
    let notifElem = document.createElement("div");
    notifElem.id = "notification-container";
    document.body.appendChild(notifElem);
}

export function showNotification(type, message) {
    initNotificationContainer();
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
    }
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    container.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}
