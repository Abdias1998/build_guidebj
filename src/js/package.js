const packages = [
    {
      imageUrl: "assets/images/packages/pack1.jpg",
      title: "Ouidah - La route de l'esclavage",
      duration: "4 jours 3 Nuits",
      price: "$1450",
      details :`
      La Route de l'Esclave au Bénin, également connue sous le nom de Route des Esclaves, est un rappel poignant du sombre chapitre de l'histoire du pays et du continent africain dans son ensemble. Cette route fait référence au réseau d'itinéraires empruntés par les esclaves africains capturés et marchandisés pendant la période de la traite transatlantique, du XVIe au XIXe siècle.
      
      Le Bénin, alors connu sous le nom de Royaume du Dahomey, était l'un des principaux points de départ de cette traite négrière. Les esclaves étaient capturés dans les terres intérieures du pays, puis conduits vers les côtes pour être vendus aux négriers européens. La ville de Ouidah, située sur la côte atlantique du Bénin, était l'un des ports les plus importants de départ des esclaves.
      
      La Route de l'Esclave comprend plusieurs sites historiques, notamment des forts, des marchés d'esclaves, des points de rassemblement et des lieux de mémoire. Ces sites, tels que le Fort Portugais de Ouidah, la Porte du Non-Retour et le Mémorial de Zomayi, témoignent du commerce inhumain qui a dévasté des millions de vies africaines.
      
      Aujourd'hui, ces sites historiques sont des lieux de mémoire et de réflexion, rappelant les horreurs de l'esclavage et honorent la mémoire des millions d'Africains qui ont été victimes de ce commerce inhumain. Ils sont également des destinations importantes pour les voyageurs en quête de compréhension et de sensibilisation à l'histoire et à la culture africaines`
    },
    {
      imageUrl: "assets/images/packages/pack2.jpg",
      title: "Cotonou - La culturelle ",
      duration: "2 jours 1 Nuit",
      price: "$1000",
      details :`
      Cotonou est la plus grande ville et la capitale économique du Bénin, un pays d'Afrique de l'Ouest. Située sur la côte atlantique, Cotonou est un important centre commercial, industriel et administratif du Bénin, ainsi qu'une plaque tournante régionale pour le commerce et les affaires.
      
      Voici quelques points saillants sur Cotonou :
      
      Port de Cotonou : C'est l'un des ports les plus importants d'Afrique de l'Ouest et le principal point d'entrée et de sortie des marchandises pour le Bénin. Le port de Cotonou facilite le commerce international et régional, jouant un rôle crucial dans l'économie du pays.
      
      Marchés animés : Cotonou est réputée pour ses marchés animés où l'on peut trouver une grande variété de produits locaux, artisanat, vêtements, produits alimentaires et bien plus encore. Les marchés comme le marché Dantokpa sont des endroits dynamiques où les habitants et les visiteurs se mêlent pour faire des achats et découvrir la culture locale.
      
      Vie nocturne et divertissement : La ville offre une vie nocturne animée avec de nombreux bars, clubs et restaurants proposant une cuisine locale et internationale. Les habitants et les visiteurs peuvent profiter de la musique live, de la danse et de diverses activités sociales après le coucher du soleil.
      
      Sites historiques et culturels : Cotonou abrite plusieurs sites historiques et culturels, tels que le Musée Honmé qui présente l'histoire et la culture du Bénin, ainsi que la basilique de l'Immaculée Conception, une magnifique église catholique qui est l'une des principales attractions de la ville.
      
      Centre administratif et financier : En tant que capitale économique, Cotonou est le centre financier et administratif du Bénin, abritant de nombreuses entreprises, banques, institutions gouvernementales et ambassades étrangères.
      
      En résumé, Cotonou est une ville dynamique et diversifiée, offrant une combinaison unique de commerce, de culture, d'histoire et de divertissement, ce qui en fait une destination fascinante pour les voyageurs intéressés par l'Afrique de l'Ouest.`
    },
    {
      imageUrl: "assets/images/packages/pack3.jpg",
      title: "Abomey - Histoires",
      duration: "3 jours 2 Nuits",
      price: "$450",
      details :`
      Abomey est une ville historique située dans le royaume du Dahomey, qui fait maintenant partie du Bénin moderne. Voici quelques-unes des histoires fascinantes associées à Abomey :
      
      Capitale du royaume du Dahomey : Abomey était la capitale traditionnelle du royaume du Dahomey, un puissant État africain qui a prospéré du XVIIe au XIXe siècle. Le royaume du Dahomey était réputé pour sa puissante armée et son commerce d'esclaves.
      
      Palais royaux d'Abomey : L'une des principales attractions d'Abomey est le complexe de palais royaux, qui comprend plusieurs palais construits par les rois du Dahomey. Ces palais sont inscrits sur la liste du patrimoine mondial de l'UNESCO et offrent un aperçu fascinant de l'histoire et de la culture du Dahomey.
      
      Histoires de guerre et de résistance : Abomey était le centre de nombreuses batailles et conflits pendant l'histoire du Dahomey. Le royaume était réputé pour sa stratégie militaire innovante et pour sa résistance farouche contre les forces coloniales européennes.
      
      Traditions culturelles : Abomey est également célèbre pour ses traditions culturelles riches, y compris ses festivals, sa musique, sa danse et ses rites religieux. Ces traditions sont souvent étroitement liées à l'histoire et aux croyances du peuple fon, l'ethnie dominante dans la région d'Abomey.
      
      Héritage artistique : Le royaume du Dahomey était connu pour son artisanat et son art, notamment ses sculptures en bois, ses tissus tissés et ses objets rituels. De nombreux exemples de cet art traditionnel peuvent être trouvés dans les musées et les collections à Abomey.
      
      En résumé, Abomey est une ville qui regorge d'histoires captivantes, allant de son passé en tant que capitale d'un royaume puissant à son riche patrimoine culturel et artistique. Ces histoires font d'Abomey un lieu incontournable pour les voyageurs intéressés par l'histoire et la culture africaines.`
    },
    {
      imageUrl: "assets/images/packages/pack4.jpg",
      title: "Hydrokeke",
      duration: "1 jours ",
      price: "$50",
    },
    {
      imageUrl: "assets/images/packages/pack5.jpg",
      title: "Ganvie",
      duration: "4 Days 3 Nights",
      price: "$150",
    },
    {
      imageUrl: "assets/images/packages/pack6.jpg",
      title: "Chute d'eau",
      duration: "4 Days 3 Nights",
      price: "$145",
    },
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


 