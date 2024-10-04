document.addEventListener('DOMContentLoaded', function() {
  // Get the current date
  const today = new Date();
  
  // Format the date to YYYY-MM-DD
  const formattedDate = today.toISOString().split('T')[0];

  // Set the min attribute of the flightDateRoute input
  document.getElementById('flightDateRoute').setAttribute('min', formattedDate);

  // Toggle buttons functionality
  document.getElementById('toggleRoute').addEventListener('click', function () {
      document.getElementById('routeForm').style.display = 'block';
      document.getElementById('flightForm').style.display = 'none';
      this.classList.add('active');
      document.getElementById('toggleFlight').classList.remove('active');
  });

  document.getElementById('toggleFlight').addEventListener('click', function () {
      document.getElementById('flightForm').style.display = 'block';
      document.getElementById('routeForm').style.display = 'none';
      this.classList.add('active');
      document.getElementById('toggleRoute').classList.remove('active');
  });

  // Add functionality for View Map button
  document.getElementById('viewMapButton').addEventListener('click', function() {
    window.location.href = 'map.html'; // Change to your map page URL
  });

  // Add functionality for Logout button
  document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'login.html'; // Change to your login page URL
  });
});











