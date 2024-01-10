import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const FIRST_TODO_TITLE = "delectus aut autem";

  await page.goto("/");
  await page.getByRole("link", { name: FIRST_TODO_TITLE }).click();
});

test.describe("Testing TodoDetail Component", () => {
  test("Screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test("戻るリンクをクリックしたとき、 URL が切り替わっていること", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Go Back" }).click();
    await expect.soft(page).not.toHaveURL("/todo/1");
    await expect(page).toHaveURL("/");
  });
});
