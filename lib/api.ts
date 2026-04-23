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

// export async function getVehicles() {
//   const res = await fetch(
//     "https://floralwhite-echidna-890292.hostingersite.com/api/vehicles",
//     { cache: "no-store",
//       next: { revalidate: 0 } },
//   );

//   const data = await res.json();

//   const carsRaw = data.data || data || [];

//   const formattedCars = carsRaw.map((car: any) => ({
//     id: car.id,
//     title: car.title,
//     slug: car.slug,
//     image: car.images?.[0]?.image_url || "/placeholder.jpg",
//     location: car.attribute_cache?.location || "Japan",
//     cc: car.attribute_cache?.engine
//       ? `${car.attribute_cache.engine} CC`
//       : "N/A",
//     km: `${car.mileage} KM`,
//     stock: car.ref_no,
//     drive: car.attribute_cache?.drive || "N/A",
//     status: car.status,
//   }));

//   return formattedCars;
// }

// export async function getVehicles(params: any = {}) {
//   const query = new URLSearchParams();

//   Object.entries(params || {}).forEach(([key, value]) => {
//     if (!value) return;

//     if (Array.isArray(value)) {
//       value.forEach((v) => query.append(key, v));
//     } else {
//       query.append(key, String(value)); // ✅ force string
//     }
//   });

//   const res = await fetch(
//     `https://floralwhite-echidna-890292.hostingersite.com/api/vehicles?${query.toString()}`,
//     {
//       cache: "no-store",
//       next: { revalidate: 0 },
//     }
//   );

//   const data = await res.json();

//   const carsRaw = data.data || [];

//   const formattedCars = carsRaw.map((car: any) => ({
//     id: car.id,
//     title: car.title,
//     slug: car.slug,
//     image: car.images?.[0]?.image_url || "/placeholder.jpg",
//     location: car.attribute_cache?.location || "N/A",
//     price:
//     Number(car.price) > 0
//         ? `$${Number(car.price).toLocaleString()}`
//         : "Ask For Price",
//     cc: car.attribute_cache?.engine
//       ? `${car.attribute_cache.engine} CC`
//       : "N/A",
//     km: `${car.mileage} KM`,
//     stock: car.ref_no,
//     drive: car.attribute_cache?.drive || "N/A",
//     year: car.year || "N/A",
//     fuel: car.attribute_cache?.fuel || "N/A",
//     seats: car.attribute_cache?.seats || "N/A",
//     doors: car.attribute_cache?.door || "N/A",
//     color: car.attribute_cache?.color || "N/A",
//     transmission: car.attribute_cache?.transmission || "N/A",
//     steering: car.attribute_cache?.steering || "N/A",
//     chassis: car.attribute_cache?.["chassis-number"] || "N/A",
//     body: car.attribute_cache?.["body-type"] || "N/A",
//     features: car.attribute_cache?.features || [],
//     status: car.status || "N/A",
//   }));

//   return {
//     cars: formattedCars,
//     meta: {
//       current_page: data.current_page,
//       last_page: data.last_page,
//       total: data.total,
//     },
//   };
// }

export async function getVehicles(params: any = {}) {
  const query = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (!value) return;

    const values = Array.isArray(value) ? value : [value];

    values.forEach((v) => {
      if (!v) return;

      // 🔍 SEARCH
      if (key === "search") {
        query.append("search", String(v));
      }

      // 🏷️ BRAND (slug)
      else if (key === "maker") {
        query.append("make", String(v)); // ✅ matches backend
      }

      // 🏷️ MODEL (slug)
      else if (key === "model") {
        query.append("model", String(v)); // ✅ matches backend
      }

      // 📅 YEAR
      else if (key === "year") {
        query.append("year", String(v));
      }

      // 💰 PRICE
      else if (key === "price_min") {
        query.append("min_price", String(v));
      } else if (key === "price_max") {
        query.append("max_price", String(v));
      }

      // ⚡ ATTRIBUTES (IMPORTANT)
      else if (
        [
          "steering",
          "body-type",
          "drive",
          "fuel",
          "transmission",
          "color",
        ].includes(key)
      ) {
        query.append(`attributes[${key}]`, String(v));
      }

      // 📄 PAGINATION
      else if (key === "page") {
        query.append("page", String(v));
      }

      // 📦 PAGE SIZE
      else if (key === "pageSize") {
        query.append("pageSize", String(v));
      }

      // 🔄 SORT (if you add later)
      else if (key === "sort") {
        query.append("sort", String(v));
      }

      // fallback
      else {
        query.append(key, String(v));
      }
    });
  });

//   console.log("👉 PARAMS FROM URL:", params);
//   console.log("👉 FINAL QUERY:", query.toString());

  const res = await fetch(
    `https://floralwhite-echidna-890292.hostingersite.com/api/vehicles?${query.toString()}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );

  const data = await res.json();

  console.log("✅ API RESPONSE:", data);

  const carsRaw = data.data || [];

  const formattedCars = carsRaw.map((car: any) => {
    const attr = car.attribute_cache || {};
    const priceValue = Number(car.price);

    return {
      id: car.id,
      title: car.title,
      slug: car.slug,
      image: car.images?.[0]?.image_url || "/placeholder.jpg",

      location: attr.location || "N/A",

      price:
        priceValue > 0
          ? `$${priceValue.toLocaleString()}`
          : "Ask For Price",

      cc: attr.engine ? `${attr.engine} CC` : "N/A",
      km: `${car.mileage} KM`,
      stock: car.ref_no,

      drive: attr.drive || "N/A",
      year: car.year || "N/A",
      fuel: attr.fuel || "N/A",
      seats: attr.seats || "N/A",
      doors: attr.door || "N/A",
      color: attr.color || "N/A",
      transmission: attr.transmission || "N/A",
      steering: attr.steering || "N/A",
      chassis: attr["chassis-number"] || "N/A",
      body: attr["body-type"] || "N/A",
      features: attr.features || [],
      status: car.status || "N/A",
    };
  });

  return {
    cars: formattedCars,
    meta: {
      current_page: data.current_page,
      last_page: data.last_page,
      total: data.total,
    },
  };
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