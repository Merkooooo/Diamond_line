const translations = {
  "Domov": "Home",
  "Specifikacije": "Specifications",
  "Certifikati": "Certificates",
  "Kontakt": "Contact",
  "Naroči zdaj": "Order Now",
  "Kontakt & Nakup": "Contact & Buy",
  "Industrijska moč. Doma.": "Industrial Power. At Home.",
  "Spoznajte najbolj napreden parni čistilec na trgu. Brez kemikalij. Čista moč pare, združena s sproščujočo aromaterapijo.": "Meet the most advanced steam cleaner on the market. No chemicals. Pure steam power combined with relaxing aromatherapy.",
  "Moč narave. Brez kemikalij.": "Power of Nature. No Chemicals.",
  "Ekološko in trajnostno": "Ecological and Sustainable",
  "S parnim čistilcem Diamond Line ne potrebujete nobenih škodljivih čistil ali kemikalij. Visoka temperatura pare učinkovito uniči 99.9% bakterij, virusov in pršic, hkrati pa varuje vaše zdravje in okolje.": "With the Diamond Line steam cleaner, you don't need any harmful cleaners or chemicals. The high steam temperature effectively destroys 99.9% of bacteria, viruses, and dust mites, while protecting your health and the environment.",
  "✓ Varno za otroke in hišne ljubljenčke": "✓ Safe for children and pets",
  "✓ Prihranek pri nakupu čistil": "✓ Savings on cleaning supplies",
  "✓ Odstranjuje najtrdovratnejšo umazanijo": "✓ Removes the most stubborn dirt",
  "Sproščujoča aroma.": "Relaxing Aroma.",
  "Vaš dom kot oaza miru": "Your home as an oasis of peace",
  "Poleg vrhunskega čiščenja vam Diamond Line ponuja tudi funkcijo aromaterapije. Dodajte nekaj kapljic vašega najljubšega eteričnega olja in parni čistilec bo med čiščenjem napolnil vaš dom z blagodejnimi, sproščujočimi vonjavami.": "In addition to superior cleaning, Diamond Line also offers an aromatherapy function. Add a few drops of your favorite essential oil, and the steam cleaner will fill your home with soothing, relaxing scents while cleaning.",
  "Popolna kombinacija higiene in mentalnega miru — tehnologija, ki poskrbi za čistočo in vaše počutje.": "The perfect combination of hygiene and mental peace — technology that takes care of cleanliness and your well-being.",
  "Povezave": "Links",
  "Premium ekološko čiščenje in industrijska moč za vaš dom.": "Premium ecological cleaning and industrial power for your home.",
  "Sedež podjetja": "Headquarters",
  "Poslovna enota": "Branch Office",
  "Telefon": "Phone",
  "Vodja prodaje: Elvis Grbić": "Sales Manager: Elvis Grbić",
  "Tehnična odličnost.": "Technical Excellence.",
  "Vsi podatki in številke, ki dokazujejo, zakaj je Diamond Line industrijski standard med parnimi čistilci.": "All the data and figures that prove why Diamond Line is the industry standard among steam cleaners.",
  "Maksimalna Temperatura": "Maximum Temperature",
  "Suha para zlahka topi maščobo in uničuje 99.9% vseh bakterij ob prvem stiku.": "Dry steam easily melts fat and destroys 99.9% of all bacteria on first contact.",
  "Delovni Pritisk": "Working Pressure",
  "Konstanten pritisk, ki brez težav odstrani zažrto umazanijo iz fug in por.": "Constant pressure that easily removes stubborn dirt from joints and pores.",
  "Jekleni Kotel": "Steel Boiler",
  "Prostoren rezervoar iz nerjavečega jekla za dolgotrajno neprekinjeno čiščenje.": "Spacious stainless steel tank for long-lasting continuous cleaning.",
  "Čas Segrevanja": "Heating Time",
  "Izjemno hitro segrevanje. Aparat je pripravljen na uporabo v nekaj minutah.": "Extremely fast heating. The device is ready for use in a few minutes.",
  "Dodatne podrobnosti": "Additional Details",
  "Moč grelca": "Heater Power",
  "Ohišje": "Housing",
  "Dolžina kabla": "Cable Length",
  "Teža": "Weight",
  "Stopite v stik z nami.": "Get in touch with us.",
  "Imate vprašanje glede parnega čistilca ali želite oddati naročilo? Izpolnite obrazec in odgovorili vam bomo v najkrajšem možnem času.": "Do you have a question about the steam cleaner or want to place an order? Fill out the form and we will respond as soon as possible.",
  "Pošljite povpraševanje": "Send an Inquiry",
  "Ime in priimek": "First and Last Name",
  "Vaš Email": "Your Email",
  "Sporočilo ali Naročilo": "Message or Order",
  "Pošlji Sporočilo": "Send Message",
  "Zaupanja vredno.": "Trustworthy.",
  "Diamond Line ustreza vsem najvišjim evropskim in svetovnim standardom kakovosti ter varnosti.": "Diamond Line meets all the highest European and global standards of quality and safety."
};

function walkDOM(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walkDOM(node, func);
    node = node.nextSibling;
  }
}

export function translatePage(toEnglish) {
  walkDOM(document.body, function (node) {
    if (node.nodeType === 3) { // Text node
      let text = node.nodeValue.trim();
      if (text.length > 0) {
        if (toEnglish) {
          // Find translation
          if (translations[text]) {
            node.nodeValue = node.nodeValue.replace(text, translations[text]);
            // Store original for reverting
            if (!node.parentElement.hasAttribute('data-sl')) {
              node.parentElement.setAttribute('data-sl', text);
            }
          }
        } else {
          // Revert to Slovenian
          let slText = node.parentElement.getAttribute('data-sl');
          if (slText) {
            // Find current english text
            let currentText = node.nodeValue.trim();
            if (translations[slText] === currentText || currentText === slText) {
               node.nodeValue = node.nodeValue.replace(currentText, slText);
            }
          }
        }
      }
    }
  });

  // Special cases for placeholders and nested HTML
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    let placeholder = el.getAttribute('placeholder');
    if (toEnglish) {
      if (placeholder === 'Janez Novak') el.setAttribute('placeholder', 'John Doe');
      if (placeholder === 'janez@primer.si') el.setAttribute('placeholder', 'john@example.com');
      if (placeholder === 'Želim naročiti parni čistilec...') el.setAttribute('placeholder', 'I want to order a steam cleaner...');
    } else {
      if (placeholder === 'John Doe') el.setAttribute('placeholder', 'Janez Novak');
      if (placeholder === 'john@example.com') el.setAttribute('placeholder', 'janez@primer.si');
      if (placeholder === 'I want to order a steam cleaner...') el.setAttribute('placeholder', 'Želim naročiti parni čistilec...');
    }
  });
  
  // Handing the complex H1s
  document.querySelectorAll('h1').forEach(h1 => {
     if (h1.innerHTML.includes('Industrijska moč.')) {
        if (toEnglish) h1.innerHTML = `Industrial Power. <br/><span class="text-vapor-500">At Home.</span>`;
     } else if (h1.innerHTML.includes('Industrial Power.')) {
        if (!toEnglish) h1.innerHTML = `Industrijska moč. <br/><span class="text-vapor-500">Doma.</span>`;
     }
     
     if (h1.innerHTML.includes('Tehnična')) {
        if (toEnglish) h1.innerHTML = `Technical <span class="text-vapor-500">Excellence.</span>`;
     } else if (h1.innerHTML.includes('Technical')) {
        if (!toEnglish) h1.innerHTML = `Tehnična <span class="text-vapor-500">odličnost.</span>`;
     }
     
     if (h1.innerHTML.includes('Zaupanja')) {
        if (toEnglish) h1.innerHTML = `Trust<span class="text-vapor-500">worthy.</span>`;
     } else if (h1.innerHTML.includes('Trust')) {
        if (!toEnglish) h1.innerHTML = `Zaupanja <span class="text-vapor-500">vredno.</span>`;
     }
  });
}
