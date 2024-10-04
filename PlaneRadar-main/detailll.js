async function fetchFlightData() {
    const flightNumber = document.getElementById('flightNumber').value;
    const response = await fetch('/api/flight-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ flightNumber })
    });
    
    // Check if the response is OK (status code 200)
    if (!response.ok) {
        const errorData = await response.json();
        document.getElementById('flightInfo').innerText = errorData.error || 'An error occurred while fetching flight data.';
        return;
    }

    const data = await response.json();

    // Displaying flight data in a user-friendly format
    if (data.error) {
        document.getElementById('flightInfo').innerText = data.error;
    } else {
        // Check if there is any flight data returned
        if (data.data && data.data.length > 0) {
            document.getElementById('flightInfo').innerHTML = `
                <strong>Flight Number:</strong> ${data.data[0].flight.iata}<br>
                <strong>Status:</strong> ${data.data[0].flight.status}<br>
                <strong>Departure:</strong> ${data.data[0].departure.airport}<br>
                <strong>Arrival:</strong> ${data.data[0].arrival.airport}<br>
                <strong>Departure Time:</strong> ${new Date(data.data[0].departure.estimated).toLocaleString()}<br>
                <strong>Arrival Time:</strong> ${new Date(data.data[0].arrival.estimated).toLocaleString()}
            `;
        } else {
            document.getElementById('flightInfo').innerText = 'No flight data available for this flight number.';
        }
    }
}