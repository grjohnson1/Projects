export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const responseData = await response.json();

    if (!response.ok) { // 200 or 300 response is ok
        throw new Error('Failed to fetch places');
    }

    return responseData.places;
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const responseData = await response.json();

    if (!response.ok) { // 200 or 300 response is ok
        throw new Error('Failed to fetch user places');
    }

    return responseData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({places})
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user places');
    }

    return responseData.message;
}