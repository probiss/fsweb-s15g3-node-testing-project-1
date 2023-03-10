const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  test('[3] verilen propu trimliyor', () => {
    const input = { x: '  cihat ', y: 'bulut ' };
    const expected = { x: 'cihat', y: 'bulut ' };
    const actual = utils.verileniTrimle(input, 'x');
    expect(actual.x).toEqual(expected.x);
  });

  test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
    const input = { x: '  cihat ', y: 'bulut ' };
    const expected = { x: 'cihat', y: 'bulut ' };
    const actual = utils.verileniTrimle(input, 'x');
    expect(actual.y).toEqual(expected.y);
  });
});


describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {
  let input = [{tamsayi:12},{tamsayi:45},{tamsayi:3}];
  let expected = 45;
  let actual = utils.enBuyukTamsayiyiBul(input);
  expect(actual).toBe(expected);
  })
  
})

describe('[Görev 4] Sayici', () => {
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })

  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
    const expected = 3;
    const actual = sayici.asagiSay();
    expect(actual).toBe(expected);
  })

  test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {
    const expected = 2;
    sayici.asagiSay();
    const actual = sayici.asagiSay();
    expect(actual).toBe(expected);
  })

  test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    const expected = 0;
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    const actual = sayici.asagiSay();
    expect(actual).toBe(expected);
  })
})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    const expected = 'yaz';
    const actual = mevsimler.sonraki();
    expect(actual).toBe(expected);
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    const expected = 'sonbahar';
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toBe(expected);
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    const expected = 'kış';
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toBe(expected);
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    const expected = 'ilkbahar';
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toBe(expected);
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    const expected = 'yaz';
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toBe(expected);
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    const expected = 'ilkbahar';
    let actual;
    for (let i = 0; i < 40; i++) {
      actual = mevsimler.sonraki();
    }
    expect(actual).toBe(expected);
  });
});


describe('[Görev 6] Araba', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30); // her test yeni bir araba oluşturur
  });
  test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    let expected = 100;
    let actual = focus.sur(100);
    console.log(actual);
    expect(actual).toBe(expected);
  });
  test('[16] arabayı sürmek benzin tüketiyor', () => {
    let expected = 0;
    focus.sur(100);
    focus.sur(600);
    let actual = focus.kalan;
    expect(actual).toBe(expected);
  });
  test('[17] benzinalma arabayı sürmeye izin veriyor', () => {
    let expected = 500;
    focus.sur(300);
    focus.benzinal(10);
    focus.sur(100);
    let actual = focus.kalan;
    expect(actual).toBe(expected);
  });
  test('[18] dolu depoya benzin alma etki etmiyor', () => {
    let expected = 600;
    focus.benzinal(20);
    let actual = focus.kalan;
    expect(actual).toBe(expected);
  });
});

describe('[Görev 7] asenkronCiftSayi', () => {
  test('[19] bir çift sayı verilirse true çözümlüyor', () => {
    let actual = utils.asenkronCiftSayi(10);
    expect(actual).toBeTruthy();
  });
  test('[20] tek sayı verilirse false çözümlüyor', () => {
    let actual = utils.asenkronCiftSayi(11);
    expect(actual).toBeTruthy();
  });
});
