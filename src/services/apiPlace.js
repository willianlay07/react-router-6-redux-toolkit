export async function createPlace(newPlace) {
  try {
    const res = await fetch(`http://localhost:3000/api/place/`, {
      method: "POST",
      body: JSON.stringify(newPlace),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Something wrong!");

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed creating new place!");
  }
}
