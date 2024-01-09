import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "delectus aut autem" }).click();
});

test.describe("Testing TodoDetail Component", () => {
  test("Screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test("リンクをクリックしたとき、 URL が切り替わっていること", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Go Back" }).click();
    await expect(page).not.toHaveURL("/todo/1");
  });
});
