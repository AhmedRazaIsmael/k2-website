export async function getBrands() {
  const res = await fetch(
    "https://floralwhite-echidna-890292.hostingersite.com/api/filters?brands",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.brands || [];
}

export async function getVehicles() {
  const res = await fetch(
    "https://floralwhite-echidna-890292.hostingersite.com/api/vehicles",
    { cache: "no-store" }
  );

  const data = await res.json();

  const carsRaw = data.data || data || [];

  const formattedCars = carsRaw.map((car: any) => ({
    id: car.id,
    title: car.title,
    slug: car.slug,
    image: car.images?.[0]?.image_url || "/placeholder.jpg",
    location: car.attribute_cache?.location || "Japan",
    cc: car.attribute_cache?.engine
      ? `${car.attribute_cache.engine} CC`
      : "N/A",
    km: `${car.mileage} KM`,
    stock: car.ref_no,
    drive: car.attribute_cache?.drive || "N/A",
    status: car.status,
  }));

  return formattedCars;
}