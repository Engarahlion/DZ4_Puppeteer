let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    jest.setTimeout(30000); 
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub');
  });

  test("The first link attribute", async () => {
    jest.setTimeout(30000);
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(30000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});

describe("GitHub page copilot", () => {
  beforeEach(async () => {    
    jest.setTimeout(30000); 
    await page.goto("https://github.com/features/copilot");  
  });
  
  test("The title h1 content", async () => {
    const expected = ("AI that builds with you");
    const actual = await page.$eval("#hero-section-brand-heading", (link) => link.textContent);
    console.log(actual);
    await expect(actual).toEqual(expected);
  });
  
  test("The title h2 content", async () => {
    const expected = ("Delegate like a boss");
    const title = await page.$eval(".Primer_Brand__Heading-module__Heading___IVpmp.Primer_Brand__Heading-module__Heading-font--mona-sans___SCnTx.Primer_Brand__Heading-module__Heading--2___TFg09.Primer_Brand__Heading-module__Heading--weight-semibold___NMvbh.Primer_Brand__SectionIntro-module__SectionIntro-heading___u6_Wl", (link) => link.textContent);
    console.log (title);
    await expect(title).toContain(expected);
  });

  test("button Get started", async () => {
    const expected = ("Get started for free");
    const actual = await page.$eval("a[class='Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw'] span[class='Primer_Brand__Button-module__Button__text___Z3ocU']", (link) => link.textContent);
    console.log(actual);
    await expect(actual).toEqual(expected);
  });  
});