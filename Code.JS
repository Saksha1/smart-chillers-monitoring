document.querySelector('.menu-icon').addEventListener('click', () => {
  alert('Menu clicked!');
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Dashboard loaded.");
  // Add interactivity here if required
});
// Assuming data is fetched from an API or loaded from a JSON file
const alarmData = [
    {
        OccurrenceTime: "0000-00-00 00:00:00",
        ID: 1,
        CurrentValue: "On",
        AlarmText: "SPP Trip",
        ResetTime: ""
    },
    // ... other alarm data
];

const tableBody = document.querySelector('.alarm-log tbody');

alarmData.forEach(alarm => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${alarm.OccurrenceTime}</td>
        <td>${alarm.ID}</td>
        <td>${alarm.CurrentValue}</td>
        <td>${alarm.AlarmText}</td>
        <td>${alarm.ResetTime}</td>
    `;
    tableBody.appendChild(row);
});
// Assuming data is fetched from an API or loaded from a JSON file
const dataLogData = [
    {
        Time: "00:00:00",
        TankTemperature: "25.0",
        COMP1: "On",
        COMP2: "Off",
        FAN: "On"
    },
    // ... other data log data
];

const tableBody = document.querySelector('.data-log tbody');

dataLogData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${data.Time}</td>
        <td>${data.TankTemperature}</td>
        <td>${data.COMP1}</td>
        <td>${data.COMP2}</td>
        <td>${data.FAN}</td>
    `;
    tableBody.appendChild(row);
});
// Assuming data is fetched from an API or loaded from a JSON file
const alarmData = [
    {
        OccurrenceTime: "18/11/24 23:10:25",
        ID: 1,
        CurrentValue: "On",
        AlarmText: "High Temperature Alarm",
        ResetTime: ""
    },
    // ... other alarm data
];

const tableBody = document.querySelector('.alarm-table tbody');

alarmData.forEach(alarm => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${alarm.OccurrenceTime}</td>
        <td>${alarm.ID}</td>
        <td>${alarm.CurrentValue}</td>
        <td>${alarm.AlarmText}</td>
        <td>${alarm.ResetTime}</td>
    `;
    tableBody.appendChild(row);
});
