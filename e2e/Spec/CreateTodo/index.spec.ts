import { test, expect, Page } from "@playwright/test";

const INPUT_LABEL = "title";
const SELECT_LABEL = /completed/;
const OPTION = "true";
const SUBMIT_BUTTON_NAME = "Submit";
const HOME_LINK_NAME = "Home";

const submitNewTodo = async (page: Page) => {
  await page.getByLabel(INPUT_LABEL).click();
  await page.getByLabel(INPUT_LABEL).fill("test");
  await page.getByLabel(SELECT_LABEL).selectOption(OPTION);
  await page.getByRole("button", { name: SUBMIT_BUTTON_NAME }).click();
  await page.getByRole("link", { name: HOME_LINK_NAME }).click();
};

test.beforeEach(async ({ page }) => {
  const CREATE_TODO_BUTTON_NAME = "Create Todo";

  await page.goto("/");
  await page.getByRole("link", { name: CREATE_TODO_BUTTON_NAME }).click();
});

test.describe("Testing CreateTodo Component", () => {
  test("Screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test.describe("フォーム入力", () => {
    test("入力した値が妥当な場合、 Submit ボタンをクリックすると、 URL が切り替わること", async ({
      page,
    }) => {
      await submitNewTodo(page);
      await expect(page).toHaveURL("/");
    });
  });
});
