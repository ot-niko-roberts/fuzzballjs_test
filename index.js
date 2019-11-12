const fuzz = require('fuzzball');

let testAddresses = [
  ['3541 Scott Futrell Dr#3', '3541 Scot Futrel Dr#3', '3541 Scot FutrellD r#3', '3541 Sctt Futrel D r#3', '3541 Sct FutrlD r#3'],
  ['1501 Catherne Simmons Ave..', '1501 Cathrin SimonAve..', '1501 Cathein SmmnsA ve..', '1501 Catheie Simos ve..', '1501 Cthrne Smns Ave..'],
  ['1916 Prospect Drive', '1916 Prspct Drv', '1916 Propet Drve', '1916 PrspectD rie', '1916 ProspecD rive'],
  ['5409 Stowe Derby Drive', '5409 Stw Drby Drv', '5409 Stoe Deby Drve', '5409 Stow DrbyD rive', '5409 Stow Derb Div'],
  ['2013 Syracuse Dr', '2013 Syrcs Dr', '2013 SyracseD r', '2013 Syrause Dr', '2013 SyacseD r'],
  ['1204 skyview rd', '1204 skyvw rd', '1204 skyiewr d', '1204 syiew rd', '1204 skyvwr d'],
  ['7410 FELIX CT', '7410 FLX CT', '7410 FELXC T', '7410 FELI CT', '7410 FLXCT'],
  ['110 Fairfield Dr lot 55', '110 Farfeld Drlot 55', '110 Frfld Dr lot 55', '110 FarfeldD r lot 55', '110 FirfildDr lot 55'],
  ['1012 Belmorrow  Drive', '1012 Belmorow  Drv', '1012 Blmrrw  Drv', '1012 BelmoowD  rive', '1012 Blmorow  D rive'],
  ['102 Alexander dr', '102 Alxndr dr', '102 Alexadrd r', '102 Alxndrd r', '102 Aleader d r'],
  ['439 M Street', '439 MS treet', '439 M St reet', '439 MSt reet', '439 MStret'],
  ['4240 The Plaza| apt 13', '4240 Th Plza| apt 13', '4240 Th Plz| apt 13', '4240 Te Paza| ap|t 13', '4240 Te Pza| apt 13'],
  ['1822 Jennings Street', '1822 Jnnngs Strt', '1822 Jenigs Stret', '1822 JeninsS treet', '1822 JeninsSt reet'],
  ['8143 Kings Creek Dr', '8143 Kins Crek Dr', '8143 Kngs Crk Dr', '8143 Kigs CeekD r', '8143 Kng CrkD r'],
  ['3004 Depaul CT', '3004 Dpl CT', '3004 DepulC T', '3004 DepalCT', '3004 DpalC T'],
  ['1932 Redwood Dr', '1932 Rdwd Dr', '1932 RedwodD r', '1932 Rddwod Dr', '1932 RewoodD r'],
  ['1412 Townsend Street', '1412 Twnsnd Strt', '1412 TonsedSt reet', '1412 TosendS tret', '1412 Townnd Sreet'],
  ['2129 hwy 710 S', '2129 hw 710 S', '2129 hy 710 S', '2129 h wy 710 S', '2129 hw y 710 S'],
  ['149 connecticut way', '149 cnnctct wy', '149 cnnectcutw ay', '149 concticutwa y', '149 cinneticutw a y'],
  ['123 main st', '123 mains t', '123 mainst', '123 mians t', '123 meen st']
];

for (let i = 0; i < 20; i++) {
  for (let j = 1; j < 5; j++) {
    console.log(`${testAddresses[i][0]} - ${testAddresses[i][j]} ratio: ${fuzz.ratio(testAddresses[i][0], testAddresses[i][j])}`);
    console.log(`${testAddresses[i][0]} - ${testAddresses[i][j]} partial_ratio: ${fuzz.partial_ratio(testAddresses[i][0], testAddresses[i][j])}`);

    console.log(`${testAddresses[i][0]} - ${testAddresses[i][j]} token_set_ratio: ${fuzz.token_set_ratio(testAddresses[i][0], testAddresses[i][j])}`);
    console.log(`${testAddresses[i][0]} - ${testAddresses[i][j]} partial_token_set_ratio: ${fuzz.partial_token_set_ratio(testAddresses[i][0], testAddresses[i][j])}`);

    console.log(`${testAddresses[i][0]} - ${testAddresses[i][j]} token_sort_ratio: ${fuzz.token_sort_ratio(testAddresses[i][0], testAddresses[i][j])}`);
    console.log(`${testAddresses[i][0]} - ${testAddresses[i][j]} partial_token_sort_ratio: ${fuzz.partial_token_sort_ratio(testAddresses[i][0], testAddresses[i][j])}`);

    let ratio = fuzz.ratio(testAddresses[i][0], testAddresses[i][j]);
    let partial = fuzz.partial_ratio(testAddresses[i][0], testAddresses[i][j]);
    let tsetRatio = fuzz.token_set_ratio(testAddresses[i][0], testAddresses[i][j]);
    let tsetPartial = fuzz.partial_token_set_ratio(testAddresses[i][0], testAddresses[i][j]);
    let tsortRatio = fuzz.token_sort_ratio(testAddresses[i][0], testAddresses[i][j]);
    let tsortPartial = fuzz.partial_token_sort_ratio(testAddresses[i][0], testAddresses[i][j]);

    console.log((ratio + partial + tsetRatio + tsetPartial + tsortRatio + tsortPartial) / 6);
  }
}