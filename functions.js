function updateDate() {
  const monthElement = document.getElementById('month');
  const dateElement = document.getElementById('date');
  const dayElement = document.getElementById('day');

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const dayString = today.toLocaleDateString('en-US', { weekday: 'long' });

  monthElement.textContent = month;
  dateElement.textContent = day;
  dayElement.textContent = dayString;
}

updateDate();
