import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Testing Home Component", () => {
  test("Screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test("リンクをクリックしたとき、 URL が切り替わっていること", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "delectus aut autem" }).click();
    await expect(page).toHaveURL("/todo/1");
  });
});
