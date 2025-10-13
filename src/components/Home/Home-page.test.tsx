import HomePage from "./Home-page"
import { expect, test } from "vitest"
import { render } from "@testing-library/react"

test("does baner on the page", () => {
    const { getByRole } = render(
        <HomePage />
    )

    const item = getByRole('img')

    expect(item).toBeTruthy()
})