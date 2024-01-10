import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Testing Home Component", () => {
  test("Screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test("一つ目のリンクをクリックしたとき、 URL が切り替わっていること", async ({
    page,
  }) => {
    const FIRST_TODO_TITLE = "delectus aut autem";
    const URL = "/todo/1";

    await page.getByRole("link", { name: FIRST_TODO_TITLE }).click();
    await expect(page).toHaveURL(URL);
  });

  test("Todo作成リンクをクリックしたとき、 URL が切り替わっていること", async ({
    page,
  }) => {
    const URL = "/todo/create";

    await page.getByRole("link", { name: "Create Todo" }).click();
    await expect(page).toHaveURL(URL);
  });
});
