const Gallery = () => {
  // Images with Spanish titles and descriptions
  const apartmentImages = [
    { 
      id: 1, 
      title: "Sala de Estar", 
      description: "Amplia sala de estar con luz natural", 
      url: "https://egd1wrmxnyhcnpwv.public.blob.vercel-storage.com/Sala-MvZ7nBVLW12biybSzvjtGpoa8P4quV.jpg" 
    },
    {
      id:2,
      title: 'zona social',
      description: 'la descripcion de la zona social',
      url: 'https://egd1wrmxnyhcnpwv.public.blob.vercel-storage.com/zona-social-68SM4z9XW5H6M9cE0wAfsxT66kUqxH.jpg'
    },
    { 
      id: 3, 
      title: "Cocina", 
      description: "Cocina moderna con electrodomésticos de acero inoxidable", 
      url: "https://egd1wrmxnyhcnpwv.public.blob.vercel-storage.com/cocina-J9DMUfy9WRN4LtCqqxgMaMw6nlhTr8.jpgyarn de" 
    },
    { 
      id: 4, 
      title: "Dormitorio Principal", 
      description: "Cómodo dormitorio principal con cama king-size", 
      url: "https://egd1wrmxnyhcnpwv.public.blob.vercel-storage.com/habitacion-principal-gzdANQYaXsLcBWqphlnQJPpuSui5f5.jpg" 
    },
    { 
      id: 5, 
      title: "Baño Principal", 
      description: "Elegante baño con ducha y bañera", 
      url: "https://egd1wrmxnyhcnpwv.public.blob.vercel-storage.com/bano-principal-78u4j2qz6rg4v5zPhi5AJgz6TftKCr.jpg" 
    },
    { 
      id: 6, 
      title: "Segunda Habitación", 
      description: "Acogedora segunda habitación", 
      url: "https://egd1wrmxnyhcnpwv.public.blob.vercel-storage.com/habitacion-secundaria-P44e7a42Y0SPg2aopwu5kPCLVM7shc.jpg" 
    },
    { 
      id: 7, 
      title: "Baño Secundario", 
      description: "Elegante baño con ducha y bañera", 
      url: "https://egd1wrmxnyhcnpwv.public.blob.vercel-storage.com/bano-secundario-Gqs36pWIkUJv8arcU5hJJDM8p7ngvJ.jpg" 
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-accent">Galería del Apartamento</h1>
      
      <div className="w-full">
        {/* Carousel */}
        <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-secondary-content rounded-box">
          {apartmentImages.map((image) => (
            <div key={image.id} className="carousel-item w-full md:w-1/2 lg:w-1/3">
              <div className="card bg-accent text-accent-content shadow-xl w-full h-full">
                <figure className="px-4 pt-4">
                  <img src={image.url} alt={image.title} className="rounded-xl h-64 object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{image.title}</h2>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center w-full py-4 gap-2">
          {apartmentImages.map((image, index) => (
            <a key={image.id} href={`#slide${index}`} className="btn btn-xs btn-accent text-accent-content">{index + 1}</a>
          ))}
        </div>
      </div>
      
      {/* Thumbnails - Optional */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {apartmentImages.map((image) => (
          <div key={`thumb-${image.id}`} className="avatar">
            <div className="w-24 rounded cursor-pointer hover:opacity-80 ring ring-accent ring-offset-2">
              <img src={image.url} alt={`Vista previa: ${image.title}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 