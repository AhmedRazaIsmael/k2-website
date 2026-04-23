const BASE_URL = "https://floralwhite-echidna-890292.hostingersite.com/api";

export async function getBrands() {
  const res = await fetch(
    "https://floralwhite-echidna-890292.hostingersite.com/api/filters?brands",
    { cache: "no-store" ,
      next: { revalidate: 0 }},
  );

  const data = await res.json();
  return data.brands || [];
}

export async function getVehicles() {
  const res = await fetch(
    "https://floralwhite-echidna-890292.hostingersite.com/api/vehicles",
    { cache: "no-store",
      next: { revalidate: 0 } },
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

export async function getBodyTypes() {
  const res = await fetch(
    "https://floralwhite-echidna-890292.hostingersite.com/api/filters?attribute[body-type]",
    { cache: "no-store" ,
      next: { revalidate: 0 }}
  );

  const data = await res.json();

  const values = data.attributes?.[0]?.values || [];

  const formatted = values.map((item: any) => ({
    id: item.id,
    name: item.value,
    slug: item.slug,
    image: item.image_url,
  }));

  return formatted;
}

/**
 * Generic fetch helper
 */
async function fetchAPI(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}

/**
 * Get Models
 */
export async function getModels() {
  const data = await fetchAPI("/filters?models");
  return data.models || [];
}

/**
 * Get Attribute Values (Steering, Body Type, Drive, Transmission)
 */
export async function getAttributes(slug: string) {
  const data = await fetchAPI(`/filters?attribute[${slug}]`);
  return data.attributes?.[0]?.values || [];
}

/**
 * Get ALL filters at once (recommended)
 */
export async function getAllFilters() {
  const [
    brands,
    models,
    steering,
    bodyTypes,
    drives,
    transmissions,
  ] = await Promise.all([
    getBrands(),
    getModels(),
    getAttributes("steering"),
    getAttributes("body-type"),
    getAttributes("drive"),
    getAttributes("transmission"),
  ]);

  return {
    brands,
    models,
    steering,
    bodyTypes,
    drives,
    transmissions,
  };
}

export async function getYears() {
  const res = await fetch(
    "https://floralwhite-echidna-890292.hostingersite.com/api/filters?year",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.year || [];
}