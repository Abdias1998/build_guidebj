const packages = [
    {
      imageUrl: "assets/images/packages/pack1.jpg",
      title: "Tokyo - 4 Days in Korea, Entertica",
      duration: "4 Days 3 Nights",
      price: "$1450",
    },
    {
      imageUrl: "assets/images/packages/pack2.jpg",
      title: "Tokyo - 4 Days in Korea, Entertica",
      duration: "4 Days 3 Nights",
      price: "$1450",
    },
    {
      imageUrl: "assets/images/packages/pack3.jpg",
      title: "Tokyo - 4 Days in Korea, Entertica",
      duration: "4 Days 3 Nights",
      price: "$1450",
    },
    {
      imageUrl: "assets/images/packages/pack4.jpg",
      title: "Tokyo - 4 Days in Korea, Entertica",
      duration: "4 Days 3 Nights",
      price: "$1450",
    },
    {
      imageUrl: "assets/images/packages/pack5.jpg",
      title: "Tokyo - 4 Days in Korea, Entertica",
      duration: "4 Days 3 Nights",
      price: "$1450",
    },
    {
      imageUrl: "assets/images/packages/pack6.jpg",
      title: "Tokyo - 4 Days in Korea, Entertica",
      duration: "4 Days 3 Nights",
      price: "$1450",
    },
  ];
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