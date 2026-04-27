import CarCard from "@/components/CarCard"; // your existing card

export default function RelatedVehicles({ cars }: any) {
  return (
    <section className="py-8 md:py-10 px-6 md:px-12">

      {/* TITLE */}
      <h2 className="text-center text-[18px] md:text-[24px] font-semibold text-[#333] mb-8">
        SIMILAR AND RELATED VEHICLES
      </h2>

      {/* GRID */}
      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-6 
        gap-5"
      >
        {cars?.map((car: any) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

    </section>
  );
}