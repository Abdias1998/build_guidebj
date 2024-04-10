const packages = [
    {
      imageUrl: "assets/images/packages/pack1.jpg",
      title: "TOUR DE COTONOU",
      duration: "4 jours 3 Nuits",
      price: "$1450",
      details :`
      A travers ce tour de ville, découvrez les hauts sites à l'image du Bénin, la cité lacustre vous offre une vue différente de la vie, une nouvelle culture et une expérience pratique au vélo nautique vous attend...`
    },
    {
      imageUrl: "assets/images/packages/pack2.jpg",
      title: "GRAND-POPO ",
      duration: "2 jours 1 Nuit",
      price: "$1000",
      details :`Grand-Popo est une commune et une ville côtière du sud-ouest du Bénin, au sein du département du Mono. Une visite de trois heures en barque motorisée, traversez des îles pour atteindre l'embouchure de la Bouche du Roy.....`
    },
    {
      imageUrl: "assets/images/packages/pack3.jpg",
      title: "GOGOTINKPON",
      duration: "3 jours 2 Nuits",
      price: "$450",
      details :`Lors de votre visite à Gogotinkpon, vous aurez un atelier thérapeutique avec l'argile traditionnelle et écologique Tôbô de la région. Un bon moment pour se couvrir d'argile, le met des pêcheurs et un temps d'animation et de jeux vous sont réservés..`
    },
    // {
    //   imageUrl: "assets/images/packages/pack4.jpg",
    //   title: "Hydrokeke",
    //   duration: "1 jours ",
    //   price: "$50",
    // },
    // {
    //   imageUrl: "assets/images/packages/pack5.jpg",
    //   title: "Ganvie",
    //   duration: "4 Days 3 Nights",
    //   price: "$150",
    // },
    // {
    //   imageUrl: "assets/images/packages/pack6.jpg",
    //   title: "Chute d'eau",
    //   duration: "4 Days 3 Nights",
    //   price: "$145",
    // },
  ];
  const urlParams = new URLSearchParams(window.location.search);
  const packageIndex = parseInt(urlParams.get('index'));

  const package = packages[packageIndex];
  if (package) {
    document.getElementById('package-title').textContent = package.title;
    document.getElementById('package-img').src = package.imageUrl;
    document.getElementById('package-duration').textContent = package.duration;
    document.getElementById('package-price').textContent = package.price;
    document.getElementById('package-details').textContent = package.details;
  }
  function createPackageElement(pack, index) {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    const pacCol = document.createElement('div');
    pacCol.className = 'pac-col';
    pacCol.setAttribute('data-index', index); // Add data attribute to store package index

    const img = document.createElement('img');
    img.src = pack.imageUrl;
    img.alt = '';

    const packDetail = document.createElement('div');
    packDetail.className = 'packdetail';

    const h4 = document.createElement('h4');
    h4.textContent = pack.title;

    const daydet = document.createElement('div');
    daydet.className = 'daydet';

    const span = document.createElement('span');
    span.innerHTML = `<i class="far fa-clock"></i> ${pack.duration}`;

    const b = document.createElement('b');
    b.textContent = pack.price;

    daydet.appendChild(span);
    daydet.appendChild(b);

    packDetail.appendChild(h4);
    packDetail.appendChild(daydet);

    pacCol.appendChild(img);
    pacCol.appendChild(packDetail);

    col.appendChild(pacCol);

    // Attach click event listener to the package element
    col.addEventListener('click', () => {
      window.location.href = `package-details.html?index=${index}`; // Navigate to package details page with query parameter
    });

    return col;
  }

  function renderPackages() {
    const packageContainer = document.getElementById('package-container');
    packages.forEach((pack, index) => {
      const packageElement = createPackageElement(pack, index);
      packageContainer.appendChild(packageElement);
    });
  }

  renderPackages();


 